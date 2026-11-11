const fs=require('fs');
let s=fs.readFileSync('src/components/shared/PreFooterCta.tsx','utf8');
const old = `        {/* Booking.com Badge */}
        <a
          href={content.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-500 font-light font-sans hover:text-[#397FA8] hover:border-[#397FA8]/30 transition-colors"
        >
          Listed on Booking.com
        </a>`;
const neu = `        {/* Trust / Booking badge */}
        {context === "taste" ? (
          <div className="flex items-center justify-center gap-1.5 pt-0 text-xs text-[#64748B] font-sans">
            <svg className="w-4 h-4 text-[#397FA8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
            <span>Secured through Booking.com • Verified Private Coastal Listing</span>
          </div>
        ) : (
          <a
            href={content.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-xs text-slate-500 font-light font-sans hover:text-[#397FA8] hover:border-[#397FA8]/30 transition-colors"
          >
            Listed on Booking.com
          </a>
        )}`;
if(!s.includes(old)){ console.error('not found'); process.exit(1); }
s=s.replace(old,neu);
fs.writeFileSync('src/components/shared/PreFooterCta.tsx', s, 'utf8');
console.log('ok');
