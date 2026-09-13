"use client";
import { useMemo, useState } from "react";

const phone="918625998868";
const rates={min:13,max:14};
const destinations=[
  ["Lonavala","Weekend getaway","45–70 km"],["Mahabaleshwar","Mountain escape","120–140 km"],["Mumbai","City & coast","150 km+"],
  ["Nashik","Temples & vineyards","170 km+"],["Shirdi","Pilgrimage","185 km+"],["Goa","Beach journey","450 km+"],
  ["Konkan","Coastal escape","Route based"],["Kolhapur","Culture & food","230 km+"]
];
const services=[
  ["01","Outstation","One-way and round trips across Maharashtra and India.","↗"],
  ["02","Local Pune","Comfortable local travel for city and nearby areas.","⌂"],
  ["03","Airport Transfers","Pune airport pickup and drop with direct coordination.","✈"],
  ["04","Family Trips","A practical 7-seater for families and small groups.","♡"]
];

function wa(text:string){window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`,"_blank","noopener,noreferrer")}
function tripMessage(t:any,marathi=false){
 if(marathi) return `नमस्कार Swami Chaya Tour & Travels,\n\nमला प्रवासासाठी चौकशी करायची आहे.\n\nपिकअप: ${t.from}\nठिकाण: ${t.to}\nतारीख: ${t.date}\nप्रवासी: ${t.passengers}\nप्रवास: ${t.type}\nवाहन: Ertiga\n\nकृपया उपलब्धता आणि अंदाजे भाडे कळवा. धन्यवाद.`;
 return `Hello Swami Chaya Tour & Travels,\n\nI would like to enquire about a trip.\n\nPickup: ${t.from}\nDestination: ${t.to}\nDate: ${t.date}\nPassengers: ${t.passengers}\nTrip: ${t.type}\nVehicle: Ertiga\n\nPlease share availability and the estimated fare. Thank you.`;
}

export default function Home(){
 const [lang,setLang]=useState<"en"|"mr">("en");
 const [trip,setTrip]=useState({from:"Pune",to:"",date:"",passengers:"2",type:"Outstation"});
 const [distance,setDistance]=useState(250);
 const [menu,setMenu]=useState(false);
 const [ai,setAi]=useState("");
 const [saved,setSaved]=useState(false);
 const estimate=useMemo(()=>({min:distance*rates.min,max:distance*rates.max}),[distance]);
 const t=(en:string,mr:string)=>lang==="en"?en:mr;
 const submitTrip=()=>wa(tripMessage(trip,lang==="mr"));
 const aiPlan=()=>{
   const q=ai.toLowerCase();
   if(q.includes("goa")) return "Goa · 4–5 days · Best for a longer family or friends road trip.";
   if(q.includes("mahabaleshwar")||q.includes("hill")) return "Mahabaleshwar · 2–3 days · Great for a relaxed mountain escape.";
   if(q.includes("konkan")||q.includes("beach")) return "Konkan · 3–4 days · Scenic coastal drive with flexible stops.";
   return "Mahabaleshwar · Konkan · Lonavala · Goa — tell us your days and we can discuss the best route on WhatsApp.";
 };
 return <main>
  <header className="nav"><div className="navin"><a href="#top" className="brand"><span className="brandmark">SC</span><span><b>SWAMI CHAYA</b><small>TOUR & TRAVELS</small></span></a><button className="hamb" onClick={()=>setMenu(!menu)}>☰</button><nav className={menu?"open":""}>{["Vehicles","Services","Destinations","Routes","Travel Guide","Contact"].map(x=><a key={x} href={`#${x.toLowerCase().replaceAll(" ","-")}`} onClick={()=>setMenu(false)}>{x}</a>)}<button className="lang" onClick={()=>setLang(lang==="en"?"mr":"en")}>{lang==="en"?"मराठी":"EN"}</button><button className="navcta" onClick={()=>document.getElementById("planner")?.scrollIntoView({behavior:"smooth"})}>Plan Your Journey <span>→</span></button></nav></div></header>

  <section id="top" className="hero"><div className="heroimage"></div><div className="heroin"><div className="eyebrow">COMFORT · SAFETY · TRUST</div><h1>{t("Your Journey", "तुमचा प्रवास")}<br/><em>{t("Starts Here", "इथून सुरू होतो")}</em></h1><p>{t("Premium car rental & travel services from Pune to Maharashtra and beyond.","पुण्याहून महाराष्ट्र आणि भारतभर आरामदायी प्रवास सेवा.")}</p><div className="location">● Pune <i/> Maharashtra <i/> All India</div><div className="actions"><button className="primary" onClick={()=>document.getElementById("planner")?.scrollIntoView({behavior:"smooth"})}>◉ {t("Plan Your Journey","तुमचा प्रवास ठरवा")} <span>→</span></button><a className="secondary" href={`tel:+${phone}`}>☎ {t("Call Now","आता कॉल करा")}</a></div><div className="herochips"><span>7 Seater</span><span>AC Comfort</span><span>Family Friendly</span><span>Outstation</span><span>Airport</span></div></div></section>

  <section id="planner" className="planner wrap"><div className="sectionhead"><div><label>01 / PLAN</label><h2>{t("Plan Your Journey","तुमचा प्रवास ठरवा")}</h2><p>{t("Tell us where you’re going. We’ll help you get the best quote.","तुमचा प्रवास सांगा. आम्ही योग्य कोट देण्यासाठी मदत करू.")}</p></div><span className="secure">● Direct WhatsApp booking</span></div><div className="formgrid"><label>From<input value={trip.from} onChange={e=>setTrip({...trip,from:e.target.value})}/></label><label>To<input placeholder="Select destination" value={trip.to} onChange={e=>setTrip({...trip,to:e.target.value})}/></label><label>Travel date<input type="date" value={trip.date} onChange={e=>setTrip({...trip,date:e.target.value})}/></label><label>Passengers<select value={trip.passengers} onChange={e=>setTrip({...trip,passengers:e.target.value})}>{[1,2,3,4,5,6,7].map(n=><option key={n}>{n}</option>)}</select></label></div><div className="typebar">{["Outstation","Local Pune","Airport","Family Trip"].map(x=><button key={x} className={trip.type===x?"active":""} onClick={()=>setTrip({...trip,type:x})}>{x}</button>)}<button className="whatsapp" onClick={submitTrip}>WhatsApp enquiry →</button></div></section>

  <section id="vehicles" className="vehicle wrap"><div className="vehiclecopy"><label>02 / OUR VEHICLE</label><h2>Maruti Suzuki <strong>Ertiga</strong></h2><p>The practical blend of comfort, space and flexibility for family and group travel.</p><ul><li>7-seater cabin</li><li>Air conditioning</li><li>Comfortable for long drives</li><li>Family & luggage friendly</li></ul><div className="price">₹13–₹14 <small>/ km</small></div><p className="muted">Estimated rate · final quote may vary by route and trip details.</p><button className="primary dark" onClick={submitTrip}>Plan a trip with this vehicle →</button></div><div className="gallery"><div className="mainphoto"><img src="/cars/ertiga-ambhe-clean.jpg" alt="Swami Chaya Ertiga at a scenic Maharashtra destination"/><span>REAL VEHICLE PHOTO</span></div><div className="sidephotos"><img src="/cars/ertiga-gangapur-clean.jpg" alt="Swami Chaya Ertiga front view"/><img src="/cars/ertiga-detail-clean.jpg" alt="Swami Chaya Ertiga scenic travel photo"/></div></div></section>

  <section id="services" className="services wrap"><div className="sectionhead"><div><label>03 / WHAT WE DO</label><h2>Travel without the friction.</h2></div><p>Simple booking. Direct communication. Comfortable journeys.</p></div><div className="servicegrid">{services.map(s=><article key={s[0]}><span className="num">{s[0]}</span><span className="icon">{s[3]}</span><h3>{s[1]}</h3><p>{s[2]}</p><button onClick={()=>{setTrip({...trip,type:s[1]});document.getElementById("planner")?.scrollIntoView({behavior:"smooth"})}}>Plan this →</button></article>)}</div></section>

  <section className="trust"><div className="wrap trustin"><div><label>04 / WHY SWAMI CHAYA</label><h2>Local roots.<br/><em>Long roads.</em></h2><p>Based in Kalwadi, Pune, we keep the booking process personal: tell us the route, discuss the details, confirm, and travel.</p></div><div className="trustlist">{[["7","Seats"],["₹13–₹14","Estimated / km"],["2","Languages"],["India","Coverage"]].map(x=><div key={x[1]}><b>{x[0]}</b><span>{x[1]}</span></div>)}</div></div></section>

  <section id="destinations" className="dest wrap"><div className="sectionhead"><div><label>05 / DESTINATIONS</label><h2>From Pune to somewhere memorable.</h2><p>Popular journeys across Maharashtra and beyond.</p></div><a href="#planner">Plan a custom route →</a></div><div className="destgrid">{destinations.map((d,i)=><button className={`destcard d${i}`} key={d[0]} onClick={()=>{setTrip({...trip,to:d[0]});document.getElementById("planner")?.scrollIntoView({behavior:"smooth"})}}><span>{d[2]}</span><div><b>{d[0]}</b><small>{d[1]}</small></div><i>↗</i></button>)}</div></section>

  <section id="routes" className="route wrap"><div className="routebg"></div><div className="routein"><label>06 / THE JOURNEY</label><h2>From Pune<br/>to anywhere in India.</h2><p>Mountains · Beaches · Pilgrimage · Cities · More</p><button onClick={()=>document.getElementById("planner")?.scrollIntoView({behavior:"smooth"})}>Explore a route →</button><div className="routepoints"><span>● PUNE</span><div></div><span>● GOA</span></div></div></section>

  <section className="estimator wrap"><div><label>07 / QUICK ESTIMATE</label><h2>Know the range before you ask.</h2><p>Use the distance as a planning reference. The final quote is confirmed for your specific trip.</p><input type="range" min="20" max="1000" step="10" value={distance} onChange={e=>setDistance(+e.target.value)}/><div className="range"><span>20 km</span><b>{distance} km</b><span>1000 km</span></div></div><div className="estimatebox"><span>Estimated vehicle charge</span><strong>₹{estimate.min.toLocaleString("en-IN")} – ₹{estimate.max.toLocaleString("en-IN")}</strong><small>Based on ₹13–₹14/km</small><button onClick={submitTrip}>Get exact quote →</button></div></section>

  <section className="ai wrap"><div><label>08 / JOURNEY INTELLIGENCE</label><h2>Not sure where to go?</h2><p>Tell us what you have in mind. This lightweight planner gives you a starting point — then you can discuss the trip directly on WhatsApp.</p></div><div className="aibox"><input value={ai} onChange={e=>setAi(e.target.value)} placeholder="e.g. 3 days, family trip from Pune"/><button onClick={()=>setSaved(true)}>Suggest a trip</button>{saved&&<div className="suggest"><b>{aiPlan()}</b><button onClick={()=>{setTrip({...trip,to:aiPlan().split(" · ")[0]});document.getElementById("planner")?.scrollIntoView({behavior:"smooth"})}}>Plan this →</button></div>}</div></section>

  <section id="travel-guide" className="guide wrap"><div className="sectionhead"><div><label>09 / TRAVEL GUIDE</label><h2>Useful ideas for better journeys.</h2></div><span>Built to grow with the brand.</span></div><div className="guidegrid"><article><span>01</span><h3>Best places near Pune</h3><p>Weekend ideas for every season.</p></article><article><span>02</span><h3>Pune to Mahabaleshwar</h3><p>Route, timing and trip planning basics.</p></article><article><span>03</span><h3>Monsoon Maharashtra</h3><p>Hills, coast and scenic road journeys.</p></article></div></section>

  <section className="how wrap"><div><label>10 / HOW IT WORKS</label><h2>Five simple steps.<br/>No complicated booking.</h2></div><div className="steps">{[["01","Tell us your trip"],["02","Get your quote"],["03","Confirm booking"],["04","Meet at pickup"],["05","Start your journey"]].map(x=><div key={x[0]}><b>{x[0]}</b><span>{x[1]}</span></div>)}</div></section>

  <section id="contact" className="contact wrap"><div><label>11 / READY WHEN YOU ARE</label><h2>Same trust.<br/><em>Bigger journeys.</em></h2><p>Kalwadi, Pune, Maharashtra · Maharashtra & All India</p></div><div className="contactactions"><a href={`tel:+${phone}`}>☎ Call +91 86259 98868</a><button onClick={submitTrip}>◉ WhatsApp us →</button><button className="outline" onClick={()=>{navigator.clipboard?.writeText("Swami Chaya Tour & Travels\n+91 86259 98868");alert("Contact details copied")}}>Save contact</button></div></section>

  <footer><div className="foot wrap"><div className="brand footbrand"><span className="brandmark">SC</span><span><b>SWAMI CHAYA</b><small>TOUR & TRAVELS</small></span></div><p>Travel · Comfort · Journey</p><div className="footlinks"><a href="#vehicles">Vehicles</a><a href="#services">Services</a><a href="#destinations">Destinations</a><a href="#routes">Routes</a><a href="#travel-guide">Travel Guide</a></div><div className="qr"><div className="qrbox">QR</div><span>Scan to open<br/>our website</span></div></div><div className="bottom wrap"><span>© 2026 Swami Chaya Tour & Travels. All rights reserved.</span><span><a href="/admin">Admin</a> · Privacy · Terms</span></div></footer>
  <div className="mobilebar"><a href={`tel:+${phone}`}>☎<small>Call</small></a><button onClick={submitTrip}>◉<small>WhatsApp</small></button><button onClick={()=>document.getElementById("planner")?.scrollIntoView({behavior:"smooth"})}>▣<small>Plan</small></button></div>
 </main>
}
