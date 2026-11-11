import Link from "next/link";
import { Info, Umbrella, Waves, ArrowRight, ArrowUpRight } from "lucide-react";

export function NearbyBeachesSection() {
  return (
    <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-16 scroll-mt-24" id="nearby-beaches">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
        <div className="space-y-2">
          <span
            className="font-script text-2xl md:text-3xl text-[#397FA8] font-normal tracking-wide block"
            style={{ fontFamily: '"Moon Dance", cursive', color: "rgb(57, 127, 168)", fontSize: "1.85rem", fontWeight: 400, lineHeight: 1.2 }}
          >
            where the ocean sets the rhythm...
          </span>
          <h2
            className="font-serif text-[38px] md:text-[44px] text-on-surface tracking-tight font-normal leading-tight"
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: 400,
              color: "rgb(23, 63, 86)",
              letterSpacing: "-0.01em",
              fontSize: "2.5rem",
              lineHeight: 1.15,
            }}
          >
            Find Your Favourite Shore
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl font-light leading-relaxed">
            Explore the distinct sands along Sri Lanka&apos;s famed southern coastal strip, from quiet secluded tide-pool bays to celebrated point breaks.
          </p>
        </div>
        <div className="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider bg-surface-container-low px-4 py-2 rounded-full self-start md:self-auto">
          Southern Province • Ahangama - Weligama Belt
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
        <div className="lg:col-span-7 bg-surface-container-lowest rounded-3xl p-8 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] hover:shadow-[0_16px_40px_-8px_rgba(23,63,86,0.1)] transition-all flex flex-col justify-between border-t-2 border-primary">
          <div className="space-y-6">
            <div className="relative h-72 rounded-2xl overflow-hidden bg-surface-container group">
              <img
                alt="Midigama Beach waves and turquoise surf break"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD21pthuzDtjw1SpdnKurfMKvU0N8IptkHHFTLgw26UdlLFxrjTGhosj5nya-18dARMMQF9o4JnMBTI_Q6mkAfRcO98IW_1kth9AkPhZBXueiU4mD0Iqz5dydDqlUHuMlcwXGMEE3hvGbFzvh8DJo7ulUtPUtAOYfmQZmBdGTRbcm0b1uB0QYkxP3piJ9jpfnQrCE6Gzn8J-LbZ0-MYHsuXQ4eRcKgzd7B0YIbW2N3djmkYDfAxJc-BbTcKitPhKqBQzswlsUs8k7q010g"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1.5">
                <Waves size={14} /> Point Break Waves • ~1.4 km
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                <Waves className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>World-Renowned Swell Sanctuary</span>
              </div>
              <h3 className="font-serif text-[32px] text-on-surface leading-tight" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                Midigama Beach
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
                Famed for its legendary peeling reef breaks including Lazy Left, Rams, and Plantations. Midigama retains an unhurried, laid-back coastal charm with authentic roadside coconut shacks, quiet stretches of sand, and golden afternoon light.
              </p>
            </div>
          </div>
          <div className="pt-6 border-t border-surface-container mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm font-light">
              <Umbrella className="text-primary" size={18} />
              <span>Surf &amp; Sunset Sanctuary</span>
            </div>
            <Link className="flex items-center gap-1.5 font-label-sm text-label-sm text-primary font-semibold hover:gap-2.5 transition-all" href="/experiences/midigama-beach">
              <span>Explore Tides</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
          {[
            {
              title: "Abimanagama Beach",
              tag: "Secluded Cove",
              dist: "~2.9 km",
              desc: "An unhurried stretch of amber sands tucked away from the main highway, ideal for restorative coastal strolls and calm water wading.",
              footer: "Quiet Coastal Solitude",
              img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
              href: "/experiences/abimanagama-beach",
              cta: "View Shoreline",
            },
            {
              title: "Weligama Beach",
              tag: "Sandy Bay Break",
              dist: "~3.5 km",
              desc: "Sri Lanka's quintessential surf haven—a wide, golden sand bay featuring forgiving sandbar waves, beginner surf schools, and coastal views toward Taprobane Island.",
              footer: "Beginner Surf Haven",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg",
              href: "/experiences/weligama-beach",
              cta: "View Bay Guide",
            },
            {
              title: "Ahangama Beach",
              tag: "Reef Point Breaks",
              dist: "~3.8 km",
              desc: "The vibrant surf epicenter of Sri Lanka's southern coast—renowned for iconic reef breaks, oceanfront cafes, stilt fishermen, and golden sunset views.",
              footer: "Boho Coastal Town",
              img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
              href: "/experiences/ahangama-beach",
              cta: "Explore Ahangama",
            },
          ].map((c) => (
            <div key={c.title} className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] hover:shadow-[0_12px_32px_-6px_rgba(23,63,86,0.1)] transition-all flex flex-col sm:flex-row gap-5 items-stretch border-t border-surface-container">
              <div className="w-full sm:w-40 h-36 rounded-2xl overflow-hidden bg-surface-container shrink-0">
                <img alt={c.title} className="w-full h-full object-cover" src={c.img} />
              </div>
              <div className="flex flex-col justify-between space-y-2">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">{c.tag}</span>
                    <span className="text-primary font-label-sm text-label-sm font-semibold bg-surface-container-low px-2 py-0.5 rounded-full">{c.dist}</span>
                  </div>
                  <h4 className="font-serif text-xl text-on-surface font-normal" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>{c.title}</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant font-light line-clamp-2">{c.desc}</p>
                </div>
                <div className="pt-2 flex items-center justify-between font-label-sm text-label-sm text-primary font-semibold">
                  <span>{c.footer}</span>
                  {c.href ? (
                    <Link href={c.href} className="flex items-center gap-1 hover:gap-1.5 transition-all">
                      <span>{c.cta ?? "Explore"}</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  ) : (
                    <ArrowUpRight size={16} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {[
          { name: "Lazy Left Surf Break", tag: "Classic Point Break", dist: "~1.5 km", desc: "Long, ultra-smooth, and gentle reef wave heavily popular for longboarders and intermediate surfers peeling across deep coral.", footer: "Longboard & Intermediate Haven", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrd4CoqgIt8I67ZCLK1YpyhYEMfyZU7KDTFHlE3Dhs9YWkjnvf-lzba1NKCjUuXGgnp59WK2mr9Z1k1vlKee_0qaJiTlPyshynmwDvpI4E-LLadCm906HOBtsyzs5uLAgQgo_eowPzgwQki7yw2HpXk07on9ZMWa7y3zNYgll_6VkqMFk4jMw2BektaasW9dSIpgHG5G9pxJRkVXZq2yefHSgennzdkZpHhxXRJF6y6w0vEF1Gsf5D7w" },
          { name: "Rams Right Surf Break", tag: "Hollow Reef Barrel", dist: "~1.6 km", desc: "Fast, powerful, and sharp A-frame reef break that creates heavy hollow barrels for advanced surfers seeking technical hollow waves.", footer: "Shortboard Reef Challenge", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZOCtqAwd2D3CcIBbNKrDzh1vUGuZ25L-sUdF8zwllT9VqUgUuZPkWR0EFfHdYXWS5cy-eoogrR2LXKuB5QLXvvnX9nPeiLChgo4KTceMzuPWnMV_jEKcmAukldNAzqRNNlV2dx5xkY1D6QlxRRzvN4P-tg-NiYJZ8iiwIGXbP2QjBF84-Qj9R5OjqaeyDllrHYc1OB2GSVv4y8QKuoLH5NRz4jfAFskgKuLLxG5_23Z7tH5MWpLjUKA" },
          { name: "Awee Coco Secret Pool", tag: "Secluded Tidal Pools", dist: "~2.8 km", desc: "A secluded coastal sanctuary featuring natural granite saltwater dipping baths, sheltered turquoise tide pools, and tranquil shaded palm groves.", footer: "Natural Saltwater Bath", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg", href: "/experiences/awee-coco-secret-pool", cta: "View Pool Guide" },
          { name: "Secret Jungle Beach", tag: "Hidden Cove", dist: "~3.4 km", desc: "A hidden coastal cove sheltered by overhanging tropical foliage, ancient granite boulders, and unhurried southern solitude.", footer: "Jungle Canopy Shore", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg", href: "/experiences/secret-jungle-beach", cta: "Access Guide" },
          { name: "Polhena Beach & Coral Reef", tag: "Coral Lagoon", dist: "~14 km", desc: "A reef-sheltered natural swimming lagoon in Matara featuring crystal-clear turquoise shallows, vibrant coral gardens, and resident green sea turtles.", footer: "Snorkeling & Sea Turtles", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7CF0553z64tfJtXojnp_CW90EddnVj_e-OPtLS0vxIRyzZvHXgwrQj6zFkSpd6WjjkifyIc-zLyEMukvDlYQnB7cnmYaJqtCMV7nWbUp4nCosCtQCTdKiHmuldoVM0ejbgzbv3aI8JMfPml2Hi8bmhLhH-kO5DxM_OwGb075k7nsCGTzZ0Xu4aUa4rQv3TkMjZtTs7nGk13YtHH0w6RFkeUkTfQMja7nGIb6rPXmReL5L3HsaD7uVeg", href: "/experiences/polhena-beach-coral-reef", cta: "Explore Map" },
          { name: "Secret Beach Mirissa", tag: "Hidden Cove Trio", dist: "~6.5 km", desc: "Tucked-away paradise comprising three secluded rocky bays (Blue Lagoon, Shelley Beach, and Main Beach) with crystalline waters and palm shade.", footer: "Crystal Blue Lagoon", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvcIJkds0JSs1vtxozfqTZydkvNuuQxYk6oiqFRhRYRtUVh89I1F3ZjVmfvwcLd0QBe64wNj1Jk4oXE-8MdghIpLatfX44wh2ai1nZbo2ViYw4E_mjsOsPl_Zo6-vKq3967j0fIrJQH3eeP3Id7QLXdOWbAdSxcTjW3uSfTi5XWnEtoAl6q83dMpAgV7lKRhTBw8b7b5prKtszNjVnaKdr8G11A4mguq4Cgt2Fu_1D1_oX5feSdRbE9c3bSElC1XZCGZkjRLyMptI5-Hw" },
          { name: "Coconut Tree Hill", tag: "Iconic Promontory", dist: "~6.2 km", desc: "An iconic palm-crested red earth dome extending out into the Indian Ocean. Unmatched panoramic vantage point for golden hour sunsets and ocean breezes.", footer: "Panoramic Sunset Vista", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZOCtqAwd2D3CcIBbNKrDzh1vUGuZ25L-sUdF8zwllT9VqUgUuZPkWR0EFfHdYXWS5cy-eoogrR2LXKuB5QLXvvnX9nPeiLChgo4KTceMzuPWnMV_jEKcmAukldNAzqRNNlV2dx5xkY1D6QlxRRzvN4P-tg-NiYJZ8iiwIGXbP2QjBF84-Qj9R5OjqaeyDllrHYc1OB2GSVv4y8QKuoLH5NRz4jfAFskgKuLLxG5_23Z7tH5MWpLjUKA" },
          { name: "Parrot Rock", tag: "Tidal Red Rock Islet", dist: "~5.8 km", desc: "A solitary red-rock formation accessible via a natural sandbar at low tide, rewarding climbers with 360-degree views of the entire Mirissa sweep.", footer: "360° Bay Lookout", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBM2BLLs2dIaRd4H9TJHkvSCu8zXzf1CGmCPsq-4-Nqdny2SR6StXj47GHheIAufXFR5cDxajv9vl7yg5inl87CY9PbUd1r27X7_xdnkr3Onk1Xe3R7DiyoqRnS56Dtl8hTvM33HrGZ4NcGXHwzdZcBpwPGe5jLcYVMQHQFNJXS1vl3IHv9vWlNq3XYnXbRCJfcaEWo9orrhfwcn3YxGIsfSxhyAot8GpVSNB85kDFVWn_3jN76dlg58uyWOI2MM4yWKBIrV7vwkeVBl3E" },
          { name: "Mirissa Coastal Promontory", tag: "Eastern Bay Headland", dist: "~6.0 km", desc: "Vibrant, scenic headland marking the eastern edge of Mirissa's main bay, providing breezy ocean panoramas and tranquil rocky vantage points.", footer: "Panoramic Ocean Vista", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrd4CoqgIt8I67ZCLK1YpyhYEMfyZU7KDTFHlE3Dhs9YWkjnvf-lzba1NKCjUuXGgnp59WK2mr9Z1k1vlKee_0qaJiTlPyshynmwDvpI4E-LLadCm906HOBtsyzs5uLAgQgo_eowPzgwQki7yw2HpXk07on9ZMWa7y3zNYgll_6VkqMFk4jMw2BektaasW9dSIpgHG5G9pxJRkVXZq2yefHSgennzdkZpHhxXRJF6y6w0vEF1Gsf5D7w" },
        ].map((c) => (
          <div key={c.name} className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_4px_24px_-4px_rgba(23,63,86,0.06)] hover:shadow-[0_16px_40px_-8px_rgba(23,63,86,0.1)] transition-all flex flex-col justify-between border-t border-surface-container group">
            <div className="space-y-4">
              <div className="relative h-44 rounded-2xl overflow-hidden bg-surface-container">
                <img alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={c.img} />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm font-semibold">{c.dist}</span>
              </div>
              <div className="space-y-2">
                <div className="text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">{c.tag}</div>
                <h3 className="font-serif text-2xl text-on-surface font-normal" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>{c.name}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">{c.desc}</p>
              </div>
            </div>
            <div className="pt-4 border-t border-surface-container mt-3 flex items-center justify-between font-label-sm text-label-sm text-primary font-semibold">
              <span>{c.footer}</span>
              <ArrowUpRight size={16} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm font-light">
        <Info className="text-outline" size={16} />
        <span>Distances based on regional road routes from Kumbalgama. Hotel concierge coordinates private tuk-tuks or transfers upon request.</span>
      </div>
    </section>
  );
}
