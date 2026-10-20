import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, BedDouble, CalendarCheck, Clock, Dog, Gift, Mail, MapPin, Menu, Phone, Ticket, X } from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";
import logo from "./assets/twin-peaks-logo.png";

// ------------------------------------------------------------ Content (from twinpeakslodging.com)
const COMPANY = "Twin Peaks Lodge & Hot Springs";
const ABBR = "tpl";
const END_DATE = "2026-11-24T23:59:59-07:00";
const ORIGINAL = "https://twinpeakslodging.com/";

const PHONE = "(800) 207-2700";
const PHONE_TEL = "+18002072700";
const PHONE_LOCAL = "(970) 325-4427";
const PHONE_LOCAL_TEL = "+19703254427";
const EMAIL = "info@twinpeakslodging.com";
const ADDRESS = ["125 3rd Avenue", "Ouray, Colorado 81427"];
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Twin+Peaks+Lodge+%26+Hot+Springs+125+3rd+Ave+Ouray+CO+81427";
const GOOGLE_REVIEWS = "https://www.google.com/search?q=Twin+Peaks+Lodge+%26+Hot+Springs+Ouray+reviews";

const BOOK_URL = "https://www.reseze.net/servlet/WebresResDesk?hotelid=1582";
const GIFT_URL = "https://web.twinpeakslodging.com:46901/ogc/index";
const SPA_URL = "https://sagespaouray.com/";
const MINESHAFT_URL = "https://mineshaftouray.com/";
const OMA_URL = "https://ouraymountainadventures.com/";
const ALPENGLOW_URL = "https://alpenglowouray.com/";
const GROUPS_URL = "https://twinpeakslodgeandhotsprings.tripleseat.com/booking_request/33257";
const SPECIALS_URL = "https://twinpeakslodging.com/specials/";
const POLICIES_URL = "https://twinpeakslodging.com/policies/";
const MAP_PAGE_URL = "https://twinpeakslodging.com/property-map/";
const JOBS_URL = "https://twinpeakslodging.isolvedhire.com/jobs/";

const SOCIAL_LINKS = [
  ["Facebook", "https://www.facebook.com/twinpeaksouray"],
  ["Instagram", "https://www.instagram.com/twinpeakslodgeouray/"],
  ["TikTok", "https://www.tiktok.com/@twinpeakslodgeouray"],
  ["X", "https://twitter.com/twinpeaksouray"],
  ["LinkedIn", "https://www.linkedin.com/company/twinpeakslodgeandhotsprings/"],
];

const IMG = (path) => `https://twinpeakslodging.com/wp-content/uploads/${path}`;
const PHOTOS = {
  hero: IMG("2025/09/Twin-Peaks-Lodge-vacation-in-Ouray-2023-1.webp"),
  pool: IMG("2023/07/Twin-Peaks-Lodge-Hot-Springs-Pool-16.jpg"),
  tubs: IMG("2023/07/Twin-Peaks-Lodge-53.jpg"),
  grotto: IMG("2023/10/Twin-Peaks-Lodge-Hot-Tub-Name-Plaques-2023-6.jpg"),
  covered: IMG("2023/07/Twin-Peaks-Lodge-Covered-Hot-Spring-Pools-29.jpg"),
  cave: IMG("2023/12/tpl-ouray-vapor-caves-2a-2023.jpg"),
  aerial: IMG("2023/08/Twin-Peaks-Lodging-aireal-view-22-by-PINPOINT-IMAGERY-137a.jpg"),
  aframe: IMG("2023/07/Twin-Peaks-Lodge-57.jpg"),
  king: IMG("2023/08/Twin-Peaks-Lodging-king-room-by-PINPOINT-IMAGERY-2019-ROOMS-77a.jpg"),
  suite: IMG("2023/10/TPL_Two_Bedroom_Suite-River_Walk-2023-01.jpg"),
  pet: IMG("2023/09/TPL-pet-friendly-hotel-in-Ouray-Colorado-a-2023.jpg"),
  spa: IMG("2023/08/Twin-Peaks-Sage-Spa-cover-2023.jpg"),
  mineshaft: IMG("2023/07/Twin-Peak-Restaurant-Mineshaft-cover-2023.jpg"),
  jeep: IMG("2023/07/Twin-Peak-Ouray-Mountain-Adventure-jeep-rentals-cover-2023.jpg"),
  winter: IMG("2020/03/ouray20.jpg"),
};

const NAV = [
  ["Springs", "#springs"],
  ["Day passes", "#day-passes"],
  ["Rooms", "#rooms"],
  ["Story", "#story"],
  ["Plan", "#plan"],
];

const MINERALS = [
  ["Ba", "Barium"], ["HCO₃", "Bicarbonate"], ["B", "Boron"], ["Ca", "Calcium"],
  ["Cl", "Chloride"], ["F", "Fluoride"], ["Fe", "Iron"], ["Li", "Lithium"],
  ["Mg", "Magnesium"], ["Mn", "Manganese"], ["NO₃", "Nitrate"], ["PO₄", "Phosphate"],
  ["K", "Potassium"], ["Se", "Selenium"], ["SO₄", "Sulfate"], ["Zn", "Zinc"],
];

const DAY_PASS = [
  { title: "Day pass", rows: [["Adults", "$39.00"], ["Children 3–12", "$19.50"], ["Children 2 & under", "Free"], ["Seniors 65+", "$34.00"], ["10-pass book", "$300.00"]], note: "10-pass book: no age discount, buy 24 hours before use." },
  { title: "Locals day pass", rows: [["Adults", "$30.00"], ["Children 3–12", "$15.00"], ["Children 2 & under", "Free"], ["Seniors 65+, 8 am–noon", "Free"], ["Seniors 65+, noon–7 pm", "$25.00"]], note: "ID with a City of Ouray address required." },
  { title: "Annual pass", rows: [["First adult", "$400.00"], ["Each additional adult", "$300.00"], ["Child 3–12", "$100.00"], ["Seniors 65+", "$300.00"]], note: "Household discount needs the same address. Each holder gets an ID card." },
];

const BUILDINGS = [
  { name: "Hot Springs Building", rooms: ["King Room", "King Room (pet friendly)", "King Suite", "Family Suite", "Two Queen Room", "Two Queen Room (pet friendly)", "Single Queen", "Queen Suite", "Two Double Room", "Two Bedroom Suite"] },
  { name: "River Walk Building", rooms: ["King Room", "King Room (pet friendly)", "King Garden Room (pet friendly)", "Owner's Suite", "Two Queen Room", "Two Queen Room (pet friendly)", "Single Queen Garden Room (pet friendly)", "Two Double Room (pet friendly)", "Two Bedroom Suite", "Two Bedroom Suite (pet friendly)"] },
];

const AMENITIES = [
  "All-you-can-eat breakfast", "Hot springs access with every stay", "High-speed Wi-Fi", "Flat-screen TVs with Roku Live",
  "In-room air conditioning", "In-room refrigerators", "K-cup coffee & tea", "Pillow-top, triple-sheeted beds",
  "24-hour cardio gym", "24-hour coin-op laundry", "Complimentary lobby refreshments", "Free parking (no trailers in lots)",
];

const PARTNERS = [
  { name: "Sage Spa", kicker: "Attached to the lodge", text: "Licensed massage therapists offer 60- and 90-minute massages for individuals and couples. Book online or ask at check-in.", img: PHOTOS.spa, url: SPA_URL, cta: "Book a massage" },
  { name: "Mineshaft Bar, Restaurant & Pizzeria", kicker: "Connected to the hotel", text: "A family-friendly menu, dine in or order room service. Opens at 4 pm.", img: PHOTOS.mineshaft, url: MINESHAFT_URL, cta: "View the menu" },
  { name: "Ouray Mountain Adventures", kicker: "Our sister business", text: "Jeeps, UTVs and e-bikes to rent for the San Juan backcountry. The front desk can help with trail directions too.", img: PHOTOS.jeep, url: OMA_URL, cta: "Rent a Jeep" },
];

const TIMELINE = [
  ["1893", "Alfred Armstrong, enriched by the mining boom, builds a two-story house on the north side of Third Avenue."],
  ["1913", "Bessie and Richard Cougar open the Cougar Sanitarium on the south side, drawing visitors to the curative hot springs."],
  ["1929", "Charles W. Kent buys 35 acres with underground streams and renames it the Sweetskin Sanitarium."],
  ["1946", "The Idarado Mining Company takes over. As the Crystal Court Bathhouses, the cabins are rented to miners."],
  ["1960", "Eugene and Velma Tankersley open the Twin Peaks Motel and add a glass-enclosed, spring-heated pool."],
  ["1969", "John Wayne stays here while filming True Grit in Ouray County."],
  ["1981", "The Maduras add an A-frame with an indoor hot springs jacuzzi, then start renting Jeeps in 1982."],
  ["2013", "After years as a Best Western, Twin Peaks goes independent, joining Ouray's other independent lodges."],
];

const REVIEWS = [
  ["The bed was very comfortable, our room was quiet and I slept like a baby.", "E. Bee"],
  ["It is such a beautiful and maintained resort.", "M. Futch"],
];

const KNOW = [
  ["Check-in", "4:00 pm. Kiosks open at 1:00 pm for early check-in if your room is ready."],
  ["Check-out", "11:00 am. Late check-out to noon is $25, limited; call the desk at 8 am."],
  ["Age", "You must be 21 or older to check in. Under-18s need an adult in the springs."],
  ["Pets", "Dogs welcome in pet-friendly rooms, $50 per day. Crate or pen if left alone."],
  ["Deposit", "A $100 hold over your stay total, released at check-out."],
  ["Cancellations", "Up to 24 hours before check-in for individual stays; 30 days for groups, events and holiday weekends. By phone only."],
  ["Little ones", "No roll-aways, but pack-and-plays are $10 per day."],
  ["Smoke-free", "Smoking and vaping only on the property perimeter."],
];

// ------------------------------------------------------------ Motifs
function Steam({ className = "" }) {
  // Three rising swirls, drawn from the steam in the Twin Peaks logo.
  return (
    <svg className={`steam ${className}`} viewBox="0 0 120 160" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
      <path d="M30 150c-14-18 14-30 0-50s14-32 2-52c-6-10 2-22 12-24" />
      <path d="M62 150c-16-22 16-34 0-58s16-36 2-60" opacity=".75" />
      <path d="M94 150c-12-16 12-26 0-44s12-28 2-44c-5-8 1-18 9-20" opacity=".5" />
    </svg>
  );
}

function Peaks({ className = "" }) {
  // Twin summits with snowcaps and a water line, as in the logo.
  return (
    <svg className={`peaks ${className}`} viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 120V92l210-40 140 22 250-70 120 46 70-24 180 60 160-28 310 30v32Z" fill="currentColor" />
      <path d="M0 108c120-10 240 10 360 0s240-12 360 0 240 10 360 0 240-10 360 0v12H0Z" fill="var(--spring)" opacity=".85" />
    </svg>
  );
}

function Gauge() {
  // Geothermal thermometer: source temperature down to the tubs.
  return (
    <div className="gauge" aria-label="Spring water leaves the ground at 156°F and fills the tubs at 100 to 106°F">
      <div className="gauge-tube"><span className="gauge-fill" /></div>
      <div className="gauge-marks">
        <div><strong>156°</strong><span>At the source</span></div>
        <div><strong>100–106°</strong><span>In the nine tubs</span></div>
        <div><strong>0</strong><span>Chemicals added</span></div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------ Page
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = () => { if (window.innerWidth > 980) setMenuOpen(false); };
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-in">
          <a href={`tel:${PHONE_TEL}`}><Phone size={14} /> {PHONE}</a>
          <span className="topbar-hours"><Clock size={14} /> Front desk 8 am – 10 pm</span>
          <a href={`mailto:${EMAIL}`} className="topbar-mail"><Mail size={14} /> {EMAIL}</a>
          <a href={GIFT_URL} className="topbar-gift"><Gift size={14} /> Gift cards</a>
        </div>
      </div>

      <header className={`header${scrolled ? " is-scrolled" : ""}`}>
        <div className="wrap header-in">
          <a href="#top" className="brand" aria-label={`${COMPANY} home`}><img src={logo} alt={COMPANY} width="700" height="218" /></a>
          <nav className={`nav${menuOpen ? " is-open" : ""}`} aria-label="Main">
            {NAV.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a href={`tel:${PHONE_TEL}`} className="nav-phone"><Phone size={16} /> {PHONE}</a>
          </nav>
          <a className="btn btn-gold header-book" href={BOOK_URL}>Book a room</a>
          <button type="button" className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main id="top">
        {/* ---------------- Hero */}
        <section className="hero">
          <img className="hero-img" src={PHOTOS.hero} alt="The outdoor hot springs pool at Twin Peaks Lodge under the San Juan Mountains" />
          <div className="hero-shade" />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="eyebrow eyebrow-light">Ouray, Colorado · Hotel & Hot Springs</span>
              <h1>Soak where Ouray has soaked <em>since 1913.</em></h1>
              <p>Nine geothermal tubs, a vapor cave and 93 rooms under the San Juans. Every stay includes the springs, from check-in until 10 pm each night.</p>
              <div className="hero-ctas">
                <a className="btn btn-gold" href={BOOK_URL}>Check availability <ArrowRight size={18} /></a>
                <a className="btn btn-ghost" href="#day-passes">Day passes from $39</a>
              </div>
            </div>
            <aside className="hero-card">
              <Steam className="hero-steam" />
              <span className="mono">Spring report</span>
              <Gauge />
            </aside>
          </div>
          <Peaks className="hero-peaks" />
        </section>

        {/* ---------------- Quick strip */}
        <section className="quick" aria-label="Plan your visit">
          <div className="wrap quick-grid">
            <a href={BOOK_URL} className="quick-item"><CalendarCheck size={22} /><span><strong>Book a room</strong>Best rates when you book with us</span></a>
            <a href={`tel:${PHONE_TEL}`} className="quick-item"><Phone size={22} /><span><strong>{PHONE}</strong>Front desk, 8 am – 10 pm daily</span></a>
            <a href="#day-passes" className="quick-item"><Ticket size={22} /><span><strong>Day passes</strong>8 am – 7 pm, at the front desk</span></a>
            <a href={MAP_URL} className="quick-item"><MapPin size={22} /><span><strong>125 3rd Avenue</strong>A short walk to Main Street</span></a>
          </div>
        </section>

        {/* ---------------- Springs */}
        <section className="springs" id="springs">
          <div className="wrap springs-grid">
            <div className="springs-copy">
              <span className="eyebrow">The hot springs</span>
              <h2>The lodge was <em>built around the water.</em></h2>
              <p>The spring comes out of the ground at 156°F and feeds indoor and outdoor tubs across the grounds, each held between 100 and 106°F. A flow-through system replaces the water every few hours. Nothing is added, the pools are emptied regularly and scrubbed weekly, and the low sulfur keeps the smell clean.</p>
              <ul className="facts">
                <li><strong>8 am – 10 pm</strong><span>Open daily, 7 days a week</span></li>
                <li><strong>7 – 10 pm</strong><span>Hotel guests only</span></li>
                <li><strong>Adults-only</strong><span>Areas set aside; the rest is family friendly</span></li>
              </ul>
              <p className="small">Hotel guests soak from 4 pm check-in on arrival day. Want in earlier? Buy a day pass at the desk. Pool towels are in every room; robes are for rent.</p>
            </div>
            <div className="springs-photos">
              <figure className="ph ph-a"><img src={PHOTOS.grotto} alt="Rock grotto tub with named hot tub plaques" loading="lazy" /></figure>
              <figure className="ph ph-b"><img src={PHOTOS.tubs} alt="Round soaking tubs with the snowy San Juan Mountains behind" loading="lazy" /></figure>
              <figure className="ph ph-c"><img src={PHOTOS.cave} alt="Two guests resting in the stone vapor cave" loading="lazy" /><figcaption>The vapor cave</figcaption></figure>
            </div>
          </div>

          <div className="wrap minerals">
            <div className="minerals-head">
              <span className="eyebrow">What's in the water</span>
              <h3>Sixteen minerals, <em>no chemicals.</em></h3>
            </div>
            <ol className="mineral-grid">
              {MINERALS.map(([sym, name], i) => (
                <li key={name} className="mineral">
                  <span className="mineral-n">{String(i + 1).padStart(2, "0")}</span>
                  <strong>{sym}</strong>
                  <span>{name}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------------- Day passes */}
        <section className="passes" id="day-passes">
          <Steam className="passes-steam" />
          <div className="wrap">
            <div className="section-head section-head-light">
              <span className="eyebrow eyebrow-light">Not staying the night?</span>
              <h2>Hot springs <em>day passes.</em></h2>
              <p>Passes cover every hot spring on the property from 8 am to 7 pm on the day you buy. Last soaker is taken at 4 pm. Buy at the front desk on arrival; each soaker signs a waiver.</p>
            </div>
            <div className="pass-grid">
              {DAY_PASS.map((pass) => (
                <article key={pass.title} className="pass">
                  <h3>{pass.title}</h3>
                  <dl>
                    {pass.rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
                  </dl>
                  <p>{pass.note}</p>
                </article>
              ))}
            </div>
            <p className="pass-foot">The thermal cave is an extra cost on day passes. Food and non-alcoholic drinks are welcome; no glass. Questions? Call <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>.</p>
          </div>
        </section>

        {/* ---------------- Rooms */}
        <section className="rooms" id="rooms">
          <div className="wrap rooms-grid">
            <div className="rooms-photos">
              <img src={PHOTOS.king} alt="King room with a pillow-top bed" loading="lazy" />
              <img src={PHOTOS.suite} alt="Two-bedroom suite in the River Walk Building" loading="lazy" />
            </div>
            <div className="rooms-copy">
              <span className="eyebrow">Stay the night</span>
              <h2>93 rooms in <em>two buildings.</em></h2>
              <p>From a single king to a two-bedroom suite for the whole family, with breakfast and the springs included.</p>
              <div className="buildings">
                {BUILDINGS.map((b) => (
                  <details key={b.name} open>
                    <summary><BedDouble size={18} /> {b.name} <span>{b.rooms.length} room types</span></summary>
                    <ul>{b.rooms.map((r) => <li key={r}>{r}</li>)}</ul>
                  </details>
                ))}
              </div>
              <a className="btn btn-green" href={BOOK_URL}>See rates & book <ArrowRight size={18} /></a>
            </div>
          </div>

          <div className="wrap amen">
            <div className="pets">
              <img src={PHOTOS.pet} alt="A dog waiting at the door of a pet-friendly room" loading="lazy" />
              <div>
                <span className="eyebrow"><Dog size={14} /> Pet friendly</span>
                <h3>Bring the dog.</h3>
                <p>Kings, double queens, two-double rooms and two-bedroom suites come in pet-friendly versions, so the whole family fits. $50 per day.</p>
              </div>
            </div>
            <ul className="amen-list">
              {AMENITIES.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </section>

        {/* ---------------- Whole vacation */}
        <section className="partners" id="plan">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Under one roof</span>
              <h2>The whole vacation, <em>booked from the front desk.</em></h2>
            </div>
            <div className="partner-grid">
              {PARTNERS.map((p) => (
                <article key={p.name} className="partner">
                  <img src={p.img} alt={p.name} loading="lazy" />
                  <div>
                    <span className="mono">{p.kicker}</span>
                    <h3>{p.name}</h3>
                    <p>{p.text}</p>
                    <a href={p.url} target="_blank" rel="noopener noreferrer">{p.cta} <ArrowUpRight size={16} /></a>
                  </div>
                </article>
              ))}
            </div>
            <div className="groups">
              <div>
                <h3>Reunions, weddings & groups</h3>
                <p>Rooms for the whole crew and catering for any size event, from chicken fingers to prime rib.</p>
              </div>
              <a className="btn btn-green" href={GROUPS_URL} target="_blank" rel="noopener noreferrer">Request a group quote</a>
              <a className="btn btn-line" href={`tel:${PHONE_TEL}`}>Call {PHONE}</a>
            </div>
          </div>
        </section>

        {/* ---------------- Story */}
        <section className="story" id="story">
          <div className="wrap story-grid">
            <div className="story-intro">
              <span className="eyebrow">From sanitarium to lodge</span>
              <h2>More than a century <em>on Third Avenue.</em></h2>
              <p>Mining money, a sanitarium famous for its curative springs, bathhouses for Idarado miners, a motel John Wayne slept in. Today Twin Peaks is independent, owned by Alpenglow Properties since 2005.</p>
              <img src={PHOTOS.aframe} alt="The A-frame building at Twin Peaks Lodge beneath the mountains" loading="lazy" />
            </div>
            <ol className="timeline">
              {TIMELINE.map(([year, text]) => (
                <li key={year}><span className="year">{year}</span><p>{text}</p></li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------------- Reviews */}
        <section className="reviews" aria-labelledby="reviews-title">
          <div className="wrap reviews-in">
            <h2 id="reviews-title" className="sr-only">What guests say</h2>
            {REVIEWS.map(([quote, name]) => (
              <figure key={name} className="review">
                <blockquote>“{quote}”</blockquote>
                <figcaption>{name}<span>Guest review, as quoted on twinpeakslodging.com</span></figcaption>
              </figure>
            ))}
            <a className="review-link" href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer">Read more reviews on Google <ArrowUpRight size={16} /></a>
          </div>
        </section>

        {/* ---------------- Know before you go */}
        <section className="know">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Know before you go</span>
              <h2>The fine print, <em>short.</em></h2>
            </div>
            <dl className="know-grid">
              {KNOW.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
            <p className="know-foot">Full details on the <a href={POLICIES_URL}>hotel policies page</a>. Packages and specials: <a href={SPECIALS_URL}>see current offers</a>.</p>
          </div>
        </section>

        {/* ---------------- Contact */}
        <section className="contact" id="contact">
          <img className="contact-bg" src={PHOTOS.winter} alt="" loading="lazy" />
          <div className="wrap contact-grid">
            <div className="contact-card">
              <span className="eyebrow">Visit & contact</span>
              <h2>Your base camp <em>in the Switzerland of America.</em></h2>
              <ul>
                <li><MapPin size={18} /><span>{ADDRESS[0]}<br />{ADDRESS[1]}<a href={MAP_URL} target="_blank" rel="noopener noreferrer">Directions</a></span></li>
                <li><Phone size={18} /><span><a href={`tel:${PHONE_TEL}`}>{PHONE}</a><br /><a href={`tel:${PHONE_LOCAL_TEL}`}>{PHONE_LOCAL}</a></span></li>
                <li><Clock size={18} /><span>Front desk 8 am – 10 pm<br />Hot springs 8 am – 10 pm</span></li>
                <li><Mail size={18} /><span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span></li>
              </ul>
              <p className="contact-note">To cancel a reservation, please call while the front desk is open. Cancellations aren't accepted by email, and you'll get a cancellation number as proof.</p>
              <div className="contact-ctas">
                <a className="btn btn-gold" href={BOOK_URL}>Book a room</a>
                <a className="btn btn-line" href={GIFT_URL}>Buy a gift card</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <span className="logo-plate"><img src={logo} alt={COMPANY} loading="lazy" /></span>
            <p>{ADDRESS[0]}, {ADDRESS[1]}<br /><a href={`tel:${PHONE_TEL}`}>{PHONE}</a> · <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          </div>
          <div>
            <h4>Stay</h4>
            <a href={BOOK_URL}>Book my stay</a>
            <a href={SPECIALS_URL}>Packages & specials</a>
            <a href={GIFT_URL}>Gift cards</a>
            <a href={MAP_PAGE_URL}>Property map</a>
          </div>
          <div>
            <h4>On site</h4>
            <a href={SPA_URL}>Sage Spa</a>
            <a href={MINESHAFT_URL}>Mineshaft Restaurant</a>
            <a href={OMA_URL}>Ouray Mountain Adventures</a>
            <a href={ALPENGLOW_URL}>Alpenglow Vacation Rentals</a>
          </div>
          <div>
            <h4>Follow</h4>
            {SOCIAL_LINKS.filter(([, url]) => url).map(([label, url]) => <a key={label} href={url} target="_blank" rel="noopener noreferrer">{label}</a>)}
            <a href={JOBS_URL}>Employment</a>
          </div>
        </div>
        <div className="wrap footer-base">
          <span>© {new Date().getFullYear()} Twin Peaks Lodge & Hot Springs. Independent concept · not for official use. Current site: <a href={ORIGINAL}>twinpeakslodging.com</a></span>
          <StudioCredit />
        </div>
      </footer>

      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
