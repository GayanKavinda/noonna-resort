import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";

const SUBJECT_OPTIONS = [
  "Entire Resort Reservation",
  "Group or Family Private Resort Stay",
  "Airport Transfer & Arrival",
  "Experiences & Surf Advice",
  "Other Inquiry",
] as const;

const CONTACT_METHOD_OPTIONS = [
  "Email Response",
  "WhatsApp Message",
  "Telephone Call",
] as const;

const inquirySchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  email: z.string().trim().email(),
  subject: z.enum(SUBJECT_OPTIONS),
  preferredContact: z.enum(CONTACT_METHOD_OPTIONS),
  message: z.string().trim().min(10).max(2000),
});

/** Edit this to match what your team can really promise guests. */
const RESPONSE_WINDOW = "within 24 hours";

/** Escape user input before placing it inside the HTML email. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* Noonna brand palette (deep sea to lagoon blue, with ice tints) */
const c = {
  deep: "#173F56",
  brand: "#0D628A",
  lagoon: "#8CC4DE",
  ice: "#F1F9FD",
  mist: "#D9EAF3",
  page: "#E9F2F7",
  text: "#1E3A4C",
  muted: "#5F7C8D",
  white: "#FFFFFF",
  font: "'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif",
  mono: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
};

const LOGO_URL =
  "https://raw.githubusercontent.com/GayanKavinda/noonna-resort/main/public/images/branding/logo.png";

/* ------------------------------------------------------------------ */
/* Shared email shell: hero + body + footer, used by both emails       */
/* ------------------------------------------------------------------ */
function emailShell(opts: {
  preheader: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  body: string;
  footerLine: string;
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>${opts.title}</title>
</head>
<body style="margin: 0; padding: 0; background-color: ${c.page}; font-family: ${c.font}; color: ${c.text}; -webkit-font-smoothing: antialiased;">
  <div style="display: none; max-height: 0; overflow: hidden; opacity: 0; color: transparent;">
    ${opts.preheader}
  </div>

  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: ${c.page};">
    <tr>
      <td align="center" style="padding: 40px 16px;">

        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 580px; background-color: ${c.white}; border-radius: 20px; overflow: hidden; box-shadow: 0 12px 40px -12px rgba(23, 63, 86, 0.28);">

          <!-- HERO -->
          <tr>
            <td bgcolor="${c.deep}" style="background-color: ${c.deep}; background-image: linear-gradient(135deg, ${c.deep} 0%, ${c.brand} 100%); padding: 32px 36px 38px 36px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="vertical-align: middle; width: 44px;">
                    <img src="${LOGO_URL}" alt="Noonna Beach Hotel" width="44" height="44" style="display: block; width: 44px; height: 44px; border-radius: 12px; background-color: ${c.white};" />
                  </td>
                  <td style="vertical-align: middle; padding-left: 14px;">
                    <div style="font-size: 16px; line-height: 20px; font-weight: 600; color: ${c.white}; letter-spacing: -0.01em;">Noonna Beach Hotel</div>
                    <div style="font-size: 12px; line-height: 16px; color: ${c.lagoon}; letter-spacing: 0.04em;">Kumbalgama &middot; Coastal Sanctuary</div>
                  </td>
                </tr>
              </table>

              <div style="height: 32px; line-height: 32px; font-size: 0;">&nbsp;</div>

              <div style="font-size: 11px; line-height: 16px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: ${c.lagoon};">
                ${opts.eyebrow}
              </div>
              <h1 style="margin: 8px 0 0 0; font-size: 28px; line-height: 34px; font-weight: 600; letter-spacing: -0.02em; color: ${c.white};">
                ${opts.title}
              </h1>
              <p style="margin: 12px 0 0 0; font-size: 14px; line-height: 22px; color: ${c.mist};">
                ${opts.subtitle}
              </p>
            </td>
          </tr>

          ${opts.body}

          <!-- FOOTER -->
          <tr>
            <td bgcolor="${c.deep}" style="background-color: ${c.deep}; padding: 22px 36px; text-align: center;">
              <p style="margin: 0; font-size: 12px; line-height: 18px; font-weight: 600; color: ${c.white}; letter-spacing: 0.02em;">Noonna Beach Hotel</p>
              <p style="margin: 2px 0 0 0; font-size: 12px; line-height: 18px; color: ${c.lagoon};">${opts.footerLine}</p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

const sectionLabel = (text: string) => `
  <div style="font-size: 11px; line-height: 16px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: ${c.muted}; margin-bottom: 10px;">${text}</div>`;

const messagePanel = (safeMessage: string) => `
  <div style="background-color: ${c.ice}; border-left: 4px solid ${c.brand}; border-radius: 4px 14px 14px 4px; padding: 20px 22px; font-size: 15px; line-height: 26px; color: ${c.text}; white-space: pre-wrap; word-break: break-word;">${safeMessage}</div>`;

/* ------------------------------------------------------------------ */
/* 1) Email to the hotel team                                          */
/* ------------------------------------------------------------------ */
function buildTeamEmail(d: {
  safeName: string;
  safeEmail: string;
  safeSubject: string;
  safeContact: string;
  safeMessage: string;
  initial: string;
  receivedAt: string;
  mailtoHref: string;
  gmailHref: string;
}) {
  const body = `
    <!-- GUEST & METADATA CARD (shadcn card style) -->
    <tr>
      <td style="padding: 28px 36px 12px 36px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: ${c.ice}; border: 1px solid ${c.mist}; border-radius: 14px; overflow: hidden;">
          <tr>
            <td style="padding: 16px 20px; border-bottom: 1px solid ${c.mist};">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="width: 44px; vertical-align: middle;">
                    <div style="width: 40px; height: 40px; line-height: 40px; text-align: center; border-radius: 20px; background-color: ${c.white}; border: 1px solid ${c.mist}; font-size: 16px; font-weight: 600; color: ${c.brand};">${d.initial}</div>
                  </td>
                  <td style="vertical-align: middle; padding-left: 12px;">
                    <div style="font-size: 16px; line-height: 20px; font-weight: 600; color: ${c.deep};">${d.safeName}</div>
                    <div style="font-size: 12px; line-height: 16px; color: ${c.muted};">${d.receivedAt} &middot; Sri Lanka time</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 20px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="font-size: 13px; line-height: 22px; color: ${c.muted}; width: 34%;">Email</td>
                  <td style="font-size: 13px; line-height: 22px; font-weight: 600; color: ${c.deep};">
                    <a href="mailto:${d.safeEmail}" style="color: ${c.brand}; text-decoration: none;">${d.safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="font-size: 13px; line-height: 22px; color: ${c.muted};">Preferred contact</td>
                  <td style="font-size: 13px; line-height: 22px;">
                    <span style="display: inline-block; padding: 2px 10px; font-size: 11px; font-weight: 600; color: ${c.brand}; background-color: ${c.white}; border: 1px solid ${c.mist}; border-radius: 9999px;">
                      ${d.safeContact}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- MESSAGE -->
    <tr>
      <td style="padding: 16px 36px 8px 36px;">
        ${sectionLabel("Guest message")}
        ${messagePanel(d.safeMessage)}
      </td>
    </tr>

    <!-- ACTIONS -->
    <tr>
      <td style="padding: 24px 36px 32px 36px;">
        <table role="presentation" cellspacing="0" cellpadding="0">
          <tr>
            <td bgcolor="${c.brand}" style="border-radius: 10px; background-color: ${c.brand};">
              <a href="${d.mailtoHref}" style="display: inline-block; padding: 12px 22px; font-size: 13px; line-height: 18px; font-weight: 600; color: ${c.white}; text-decoration: none; border-radius: 10px;">
                Reply by email &rarr;
              </a>
            </td>
            <td style="width: 10px;">&nbsp;</td>
            <td style="border-radius: 10px; border: 1px solid ${c.mist}; background-color: ${c.white};">
              <a href="${d.gmailHref}" style="display: inline-block; padding: 11px 20px; font-size: 13px; line-height: 18px; font-weight: 600; color: ${c.brand}; text-decoration: none; border-radius: 10px;">
                Open in Gmail
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>`;

  return emailShell({
    preheader: `${d.safeName} sent a new inquiry: ${d.safeSubject}`,
    eyebrow: "New website inquiry",
    title: d.safeSubject,
    subtitle: "A guest just reached out through your website. Reply to continue the conversation.",
    body,
    footerLine: "Kumbalgama, Southern Province, Sri Lanka",
  });
}

/* ------------------------------------------------------------------ */
/* 2) Confirmation / Reply email to the guest (Top tier tech design)   */
/* ------------------------------------------------------------------ */
function buildGuestEmail(d: {
  safeFirstName: string;
  safeSubject: string;
  safeContact: string;
  safeMessage: string;
  receivedAt: string;
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>We received your inquiry &mdash; Noonna Beach Hotel</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F8FAFC; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0F172A; -webkit-font-smoothing: antialiased;">
  <div style="display: none; max-height: 0; overflow: hidden; opacity: 0; color: transparent;">
    Thank you for reaching out to Noonna Beach Hotel. We have received your inquiry and will be in touch shortly.
  </div>

  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #F8FAFC; padding: 48px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card (Modern clean aesthetic like X / Stripe / Vercel) -->
        <table role="presentation" width="100%" style="max-width: 560px; background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 24px -2px rgba(15, 23, 42, 0.04);" cellspacing="0" cellpadding="0">
          
          <!-- Modern Top Bar -->
          <tr>
            <td style="padding: 32px 36px 24px 36px; border-bottom: 1px solid #F1F5F9;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="vertical-align: middle; width: 42px;">
                    <img src="${LOGO_URL}" alt="Noonna Beach Hotel" width="42" height="42" style="display: block; width: 42px; height: 42px; border-radius: 10px; object-fit: contain;" />
                  </td>
                  <td style="vertical-align: middle; padding-left: 12px;">
                    <div style="font-size: 16px; font-weight: 700; color: #173F56; letter-spacing: -0.01em; line-height: 1.2;">Noonna Beach Hotel</div>
                    <div style="font-size: 12px; color: #64748B; margin-top: 2px;">Kumbalgama &bull; Southern Sri Lanka</div>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <span style="display: inline-block; padding: 4px 10px; font-size: 11px; font-weight: 600; color: #0D628A; background-color: #F1F9FD; border: 1px solid #D9EAF3; border-radius: 9999px;">
                      Received
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero Greeting -->
          <tr>
            <td style="padding: 32px 36px 20px 36px;">
              <h1 style="margin: 0 0 10px 0; font-size: 22px; font-weight: 700; color: #0F172A; letter-spacing: -0.02em; line-height: 1.3;">
                Thank you, ${d.safeFirstName}.
              </h1>
              <p style="margin: 0; font-size: 14px; line-height: 22px; color: #475569;">
                We&rsquo;ve safely received your inquiry regarding <strong style="color: #0F172A;">${d.safeSubject}</strong>. Our guest reservations team will personally review and get back to you <span style="color: #0D628A; font-weight: 600;">${RESPONSE_WINDOW}</span> via your preferred contact method (<strong style="color: #0F172A;">${d.safeContact}</strong>).
              </p>
            </td>
          </tr>

          <!-- Your Message Quote Box (Twitter / X quoted post style) -->
          <tr>
            <td style="padding: 0 36px 28px 36px;">
              <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; padding: 20px;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
                  <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #64748B;">Your Inquiry Details</span>
                  <span style="font-size: 11px; color: #94A3B8; float: right;">${d.receivedAt}</span>
                </div>
                <div style="clear: both; font-size: 14px; line-height: 24px; color: #334155; white-space: pre-wrap; word-break: break-word;">${d.safeMessage}</div>
              </div>
            </td>
          </tr>

          <!-- Helpful Action / Link Box -->
          <tr>
            <td style="padding: 0 36px 36px 36px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #F1F9FD; border: 1px solid #D9EAF3; border-radius: 14px; padding: 18px 20px;">
                <tr>
                  <td>
                    <div style="font-size: 13px; font-weight: 600; color: #173F56; margin-bottom: 4px;">Need instant assistance?</div>
                    <div style="font-size: 13px; line-height: 20px; color: #475569; margin-bottom: 12px;">
                      If your travel dates are urgent or you have additional questions, our WhatsApp concierge is active daily.
                    </div>
                    <table role="presentation" cellspacing="0" cellpadding="0">
                      <tr>
                        <td bgcolor="#0D628A" style="border-radius: 8px; background-color: #0D628A;">
                          <a href="https://wa.me/94779206951?text=Hello%20Noonna%20Beach%20Hotel,%20following%20up%20on%20my%20inquiry%20regarding%20${encodeURIComponent(d.safeSubject)}" style="display: inline-block; padding: 9px 18px; font-size: 12px; font-weight: 600; color: #FFFFFF; text-decoration: none; border-radius: 8px;">
                            Chat on WhatsApp &rarr;
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 36px; background-color: #F8FAFC; border-top: 1px solid #F1F5F9; text-align: center;">
              <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 600; color: #173F56;">
                Noonna Beach Hotel
              </p>
              <p style="margin: 0 0 10px 0; font-size: 11px; color: #64748B;">
                Kumbalgama &bull; Matara District &bull; Southern Province &bull; Sri Lanka
              </p>
              <p style="margin: 0; font-size: 11px; color: #94A3B8;">
                &copy; ${new Date().getFullYear()} Noonna Beach Hotel. You received this because you reached out through our official website.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = inquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid inquiry details. Please check your form and try again." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL;
    const from = process.env.RESEND_FROM_EMAIL || "Noonna Beach Hotel <onboarding@resend.dev>";

    if (!apiKey || !to) {
      return NextResponse.json(
        {
          error:
            "Online message delivery is not configured yet. Please contact us directly via WhatsApp or phone.",
        },
        { status: 503 }
      );
    }

    const { fullName, email, subject, preferredContact, message } = parsed.data;
    const resend = new Resend(apiKey);

    const receivedAt = new Date().toLocaleString("en-GB", {
      timeZone: "Asia/Colombo",
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const safeName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeContact = escapeHtml(preferredContact);
    const safeMessage = escapeHtml(message);
    const initial = escapeHtml(fullName.trim().charAt(0).toUpperCase() || "G");
    const safeFirstName = escapeHtml(fullName.trim().split(/\s+/)[0]);

    const replySubject = `Re: ${subject}, Noonna Beach Hotel`;

    // The address goes into the mailto path as plain text. Encoding the "@"
    // (what encodeURIComponent does) leaves the To field empty in some mail apps.
    const mailtoHref = escapeHtml(`mailto:${email}?subject=${encodeURIComponent(replySubject)}`);

    // Opens a Gmail compose window with To and Subject already filled in.
    const gmailHref = escapeHtml(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(replySubject)}`
    );

    const plainText = [
      "New inquiry received from the Noonna Beach Hotel website",
      "────────────────────────────────────────────────────",
      `Guest Name: ${fullName}`,
      `Guest Email: ${email}`,
      `Inquiry Subject: ${subject}`,
      `Preferred Contact: ${preferredContact}`,
      `Received: ${receivedAt} (Sri Lanka time)`,
      "",
      "Message:",
      message,
      "────────────────────────────────────────────────────",
      "Hit 'Reply' in your email client to answer the guest directly.",
    ].join("\n");

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `[Website Inquiry] ${subject}, ${fullName}`,
      text: plainText,
      html: buildTeamEmail({
        safeName,
        safeEmail,
        safeSubject,
        safeContact,
        safeMessage,
        initial,
        receivedAt,
        mailtoHref,
        gmailHref,
      }),
    });

    if (error) {
      return NextResponse.json(
        { error: "We couldn't send your message right now. Please try again or contact us via WhatsApp." },
        { status: 502 }
      );
    }

    // Confirmation to the guest.
    // NOTE: On free/unverified Resend accounts (using onboarding@resend.dev), Resend strictly blocks
    // sending to any recipient other than the registered account owner's email address.
    try {
      const guestResult = await resend.emails.send({
        from,
        to: [email],
        replyTo: to,
        subject: "We received your inquiry, Noonna Beach Hotel",
        text: [
          `Thank you, ${fullName.trim().split(/\s+/)[0]}.`,
          "",
          `We received your inquiry about "${subject}" and our team will get back to you ${RESPONSE_WINDOW}, through your preferred method (${preferredContact}).`,
          "",
          "Your message:",
          message,
          "",
          "Forgot something? Just reply to this email.",
          "",
          "Noonna Beach Hotel, Kumbalgama, Sri Lanka",
        ].join("\n"),
        html: buildGuestEmail({ safeFirstName, safeSubject, safeContact, safeMessage, receivedAt }),
      });

      if (guestResult.error) {
        console.warn("[Resend Warning] Guest confirmation could not be delivered:", guestResult.error.message);
      }
    } catch (guestError) {
      console.error("[Resend Error] Guest confirmation email failed:", guestError);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again or contact us via WhatsApp." },
      { status: 500 }
    );
  }
}