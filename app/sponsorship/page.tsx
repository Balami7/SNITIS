"use client";

import { useRouter } from "next/navigation";

export default function SponsorshipPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white relative overflow-hidden text-black selection:bg-emerald-200">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,71,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(26,71,42,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none" />

     
      <header className="relative z-10 border-b border-black bg-white backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="mb-6">
            <img src="/1.jpeg" alt="Event Logo" className="h-16 w-auto object-contain" />
          </div>
          <div className="text-center mb-6">
            <p className="text-sm font-bold text-emerald-800 tracking-widest uppercase">
              NIGERIA SUB-NATIONAL INVESTMENT AND TOURISM INFORMATION SUBMIT FEATURING THE LAUNCH OF A BOOK NIGERIA: DOCUMENTING THE ECONOMIC AND TOURISM POTENTIALS <br/> OF THE 36 STATES AND THE FCT
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
            <p className="text-red-800 text-xs text-right">DRIVEN BY A <br/> STRATEGIC <br/> PARTNESHIP OF:</p>
            <img src="/2.jpeg" alt="Partner 1 Logo" className="h-16 w-auto object-contain" />
            <img src="/3.jpeg" alt="Partner 2 Logo" className="h-16 w-auto object-contain" />
            <img src="/4.jpeg" alt="Partner 3 Logo" className="h-16 w-auto object-contain" />
            <img src="/5.jpeg" alt="Partner 4 Logo" className="h-16 w-auto object-contain" />
          </div>
          <div className="text-center mt-6 text-xs text-black">
            DATE: JUNE 17, 2026<br/>TIME: 1:30pm - 6pm<br/>VENUE: CONFERENCE HALL, PRESIDENTIAL VILLA, ABUJA
          </div>
        </div>
      </header>

      {/* MAIN SPONSORSHIP CONTENT */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        
        {/* ACTION BUTTON AREA */}
        <div className="mb-8 text-left">
          <button 
            type="button" 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 border border-black bg-white hover:bg-black hover:text-white text-black font-black uppercase tracking-wider text-xs px-5 py-2.5 transition-all rounded-sm shadow-sm cursor-pointer"
          >
            ← Back to Registration
          </button>
        </div>

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black text-black uppercase tracking-tight mb-3">
            Sponsorship Categories & Benefits
          </h1>
        </div>

        {/* Introduction Section */}
        <div className="bg-white p-8 mb-8 space-y-4 shadow-sm">
          <p className="text-sm leading-relaxed font-medium">
            Here comes an opportunity for your organisation to publicly demonstrate its support for the administration 
            of His Excellency, President Bola Ahmed Tinubu, GCFR, and the Renewed Hope Agenda through strategic 
            participation in a nationally endorsed initiative focused on investment promotion, tourism development, and 
            sub-national economic transformation.
          </p>
          <p className="text-sm leading-relaxed font-medium text-gray-700">
            This high-level national platform also provides participating organisations with the opportunity to showcase 
            their contributions to achieving the United Nations Sustainable Development Goals (SDGs), while 
            strengthening their corporate visibility and national development footprint.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-gray-100 text-center font-bold text-xs text-emerald-800">
            <div className="bg-emerald-50/50 p-2 rounded-sm border border-emerald-100">SDG 8<br/><span className="text-[9px] text-gray-500 font-normal">Economic Growth</span></div>
            <div className="bg-emerald-50/50 p-2 rounded-sm border border-emerald-100">SDG 9<br/><span className="text-[9px] text-gray-500 font-normal">Infrastructure</span></div>
            <div className="bg-emerald-50/50 p-2 rounded-sm border border-emerald-100">SDG 11<br/><span className="text-[9px] text-gray-500 font-normal">Cities & Communities</span></div>
            <div className="bg-emerald-50/50 p-2 rounded-sm border border-emerald-100">SDG 17<br/><span className="text-[9px] text-gray-500 font-normal">Partnerships</span></div>
          </div>
        </div>

        {/* Security Warning Panel */}
        <div className=" bg-red-50/80 p-6 text-black mb-8 rounded-sm">
          <h3 className="text-sm font-black text-red-900 uppercase tracking-wider mb-2">⚠️ VERY IMPORTANT PROTOCOL NOTICE</h3>
          <p className="text-xs leading-relaxed font-bold">
            In line with Presidential Villa security and protocol requirements, the names of all delegates and guests 
            attending the event must be submitted on or before Monday, 1st June 2026. Kindly contact the Event 
            Coordinator on 08033497750 to provide the list of your delegation for accreditation and access processing.
          </p>
        </div>

        {/* TIERED CATEGORIES CARDS */}
        <div className="space-y-8">
          
          {/* PLATINUM */}
          <div className="bg-white  p-8 shadow-sm">
            <div className="flex flex-wrap justify-between items-baseline border-b border-black pb-3 mb-4 gap-2">
              <h2 className="text-xl font-black uppercase tracking-tight text-emerald-900">1. Platinum Strategic Sponsor</h2>
              <span className="text-lg font-black bg-emerald-50 border border-emerald-300 px-3 py-1 text-emerald-800 rounded-sm">
                ₦150,000,000
              </span>
            </div>
            <ul className="text-xs space-y-2.5 text-gray-800 list-disc list-inside font-medium leading-relaxed">
              <li>Acknowledgement as &quot;Strategic Sponsor&quot; during the opening and closing sessions of the event.</li>
              <li>Special recognition by the Vice President during the keynote address.</li>
              <li>Reserved space for two corporate banners within the Conference Hall.</li>
              <li>Corporate profile and organisational highlights displayed on the main conference screen.</li>
              <li>Customized event souvenirs for representatives.</li>
              <li>Full-page colour advertisement in the Official Conference Brochure and Programme.</li>
              <li>Reserved VIP seating and protocol access with fifteen (15) guest passes.</li>
              <li>Participation in Sub-National Investment Roundtable engagements with State Governors.</li>
              <li>Presentation of a Special Presidential Recognition Plaque.</li>
              <li>Appearance with the Honourable Minister of Information and National Orientation during national television sensitization engagements.</li>
              <li>Facilitated high-level networking engagement with the Vice President.</li>
              <li>Conspicuous display of corporate logo during national television news broadcast coverage.</li>
            </ul>
          </div>

          {/* DIAMOND */}
          <div className="bg-white  p-8 shadow-sm">
            <div className="flex flex-wrap justify-between items-baseline border-b border-black pb-3 mb-4 gap-2">
              <h2 className="text-xl font-black uppercase tracking-tight text-gray-900">2. Diamond Partner</h2>
              <span className="text-lg font-black bg-gray-50 border border-gray-300 px-3 py-1 text-gray-800 rounded-sm">
                ₦50,000,000
              </span>
            </div>
            <ul className="text-xs space-y-2.5 text-gray-800 list-disc list-inside font-medium leading-relaxed">
              <li>Acknowledgement as &quot;Main Partner&quot; during the opening and closing sessions of the event.</li>
              <li>Special recognition by the Vice President during the keynote address.</li>
              <li>Corporate logo placement on the main event banner at the Presidential Villa Conference Hall.</li>
              <li>Corporate logo inclusion on major promotional and publicity materials.</li>
              <li>Reserved space for two corporate banners within the Conference Hall.</li>
              <li>Corporate profile and organisational highlights displayed on the main conference screen.</li>
              <li>Customized event souvenirs for representatives.</li>
              <li>Full-page colour advertisement in the Official Conference Brochure and Programme.</li>
              <li>VIP passes for ten (10) guests with reserved VIP seating and protocol access.</li>
              <li>Participation in Sub-National Investment Roundtable engagements with State Governors.</li>
              <li>Presentation of a Recognition Plaque.</li>
            </ul>
          </div>

          {/* GOLD */}
          <div className="bg-white  p-8 shadow-sm">
            <div className="flex flex-wrap justify-between items-baseline border-b border-black pb-3 mb-4 gap-2">
              <h2 className="text-xl font-black uppercase tracking-tight text-yellow-950">3. Gold Partner</h2>
              <span className="text-lg font-black bg-yellow-50/30 border border-yellow-300 px-3 py-1 text-yellow-900 rounded-sm">
                ₦35,000,000
              </span>
            </div>
            <ul className="text-xs space-y-2.5 text-gray-800 list-disc list-inside font-medium leading-relaxed">
              <li>Recognition as Official Gold Partner during the event.</li>
              <li>Corporate logo placement on selected event branding and promotional materials.</li>
              <li>Reserved space for one corporate banner within the Conference Hall.</li>
              <li>Full-page colour advertisement in the Official Conference Brochure and Programme.</li>
              <li>VIP passes for five (5) guests with priority seating for representatives.</li>
              <li>Participation in Sub-National Investment Roundtable engagements with State Governors.</li>
              <li>Presentation of a Recognition Award.</li>
            </ul>
          </div>

          {/* SILVER */}
          <div className="bg-white  p-8 shadow-sm">
            <div className="flex flex-wrap justify-between items-baseline border-b border-black pb-3 mb-4 gap-2">
              <h2 className="text-xl font-black uppercase tracking-tight text-slate-900">4. Silver Partner</h2>
              <span className="text-lg font-black bg-slate-50 border border-slate-300 px-3 py-1 text-slate-700 rounded-sm">
                ₦20,000,000
              </span>
            </div>
            <ul className="text-xs space-y-2.5 text-gray-800 list-disc list-inside font-medium leading-relaxed">
              <li>Recognition as Supporting Partner during the event.</li>
              <li>Corporate logo placement on selected publicity materials.</li>
              <li>Half-page advertisement in the Official Conference Brochure and Programme.</li>
              <li>VIP passes for two (2) guests.</li>
              <li>Invitation to attend the launch ceremony and roundtable sessions.</li>
              <li>Presentation of a Certificate of Appreciation.</li>
            </ul>
          </div>

        </div>

        {/* SETTLEMENT PIPELINE & BANKING INFORMATION */}
        <div className="mt-8 bg-emerald-50  p-8 rounded-sm grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-emerald-950 mb-3">Payment Remittance Pipelines</h3>
            <div className="space-y-1 text-xs font-bold">
              <p><span className="text-gray-500 font-normal uppercase text-[10px]">Account Name:</span> <br/>Nigerian Press Council</p>
              <p><span className="text-gray-500 font-normal uppercase text-[10px]">Account Number:</span> <br/>0020188861025</p>
              <p><span className="text-gray-500 font-normal uppercase text-[10px]">Bank Institution:</span> <br/>Central Bank of Nigeria</p>
            </div>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-emerald-800/20 pt-4 md:pt-0 md:pl-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-emerald-950 mb-3">Coordination Desks</h3>
            <div className="space-y-2 text-xs font-medium text-gray-800">
              <p>For further enquiries and sponsorship coordination, kindly reach:</p>
              <p>• <strong>Mrs. Chinyere Facah</strong> <br/> <span className="text-[11px] text-gray-500">Director of Public Relations, NPC</span> <br/> 08037041001</p>
              <p>• <strong>Tajudeen Toyin-Oke</strong> <br/> <span className="text-[11px] text-gray-500">Lead Coordinator Desk</span> <br/> 08033497750</p>
            </div>
          </div>
        </div>

      </main>

      {/* FOOTER (Unchanged) */}
      <footer className="relative z-10 border-t border-black bg-white py-6 mt-16">
        <p className="text-center text-sm text-black/70">
          Block C 8TH Floor C807-C816, Federal Secretariat Complex, Phase II, Shehu Shagari Way, Abuja, Nigeria Tel:+234 803 704 1001
        </p>
      </footer>
    </div>
  );
}
