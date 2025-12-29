
import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Languages, 
  Baby, 
  Activity,
  Heart,
  UserCheck,
  Users
} from 'lucide-react';

interface FlyerCanvasProps {
  theme: 'elegant' | 'modern';
}

const FlyerCanvas: React.FC<FlyerCanvasProps> = ({ theme }) => {
  // Brand Data & Colors
  const data = {
    address: "54 Emek Refaim, Jerusalem",
    phone: "058-627-7665",
    email: "chirojerusalem@gmail.com",
    logoUrl: "https://israelchiropracticcenter.com/wp-content/uploads/2023/11/Asset-1-1.png",
    colors: {
      brandGreen: "#1f463a",
      brandPink: "#e9c6c1",
      brandSage: "#9eb1a8",
    }
  };

  if (theme === 'elegant') {
    return (
      <div className="h-full flex flex-col relative bg-white font-serif text-slate-800">
        {/* Decorative Header */}
        <div className="h-12 bg-[#1f463a] flex items-center justify-center">
           <h3 className="text-white tracking-[0.2em] text-[10px] uppercase font-light">Jerusalem • Emek Refaim</h3>
        </div>

        {/* Hero Logo Section */}
        <div className="p-8 pb-4 flex flex-col items-center bg-white border-b border-slate-50">
          <div className="w-full max-w-[280px] py-4">
            <img 
              src={data.logoUrl} 
              alt="Israel Chiropractic Center Logo" 
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-xl italic text-slate-600 font-serif">Dr. Raimi Tuchinsky</h2>
          </div>
        </div>

        {/* Credentials & Key Points */}
        <div className="flex-1 px-8 py-6 space-y-5">
          <div className="flex flex-col items-center gap-1 border-b border-slate-100 pb-3">
            <div className="flex gap-1 text-amber-500">
              {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
            </div>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold">Top Reviewed on Google</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-start gap-4">
              <div className="bg-[#1f463a]/10 p-2 rounded-full text-[#1f463a]">
                <ShieldCheck size={18} />
              </div>
              <div className="font-sans">
                <p className="font-bold text-[13px]">Board Certified Specialist</p>
                <p className="text-[11px] text-slate-500">Israel & NYS Licensed Chiropractor</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#e9c6c1]/20 p-2 rounded-full text-[#b37e75]">
                <Users size={18} />
              </div>
              <div className="font-sans">
                <p className="font-bold text-[13px]">Female Chiropractor</p>
                <p className="text-[11px] text-slate-500">Gentle, expert care for the whole family</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-50 p-2 rounded-full text-emerald-700">
                <Languages size={18} />
              </div>
              <div className="font-sans">
                <p className="font-bold text-[13px]">English Speaking Practice</p>
                <p className="text-[11px] text-slate-500">Native care in your language</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1f463a] text-white p-4 rounded-xl font-sans mt-2 shadow-md">
            <p className="text-[10px] uppercase tracking-widest text-emerald-200 mb-1 font-bold">Relief From</p>
            <p className="text-[13px] font-medium leading-relaxed">
              Back & Neck Pain • Carpal Tunnel • Sciatica • Pregnancy & Postpartum Care
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-slate-50 p-6 border-t border-slate-100 text-center font-sans">
          <div className="flex flex-col gap-3 items-center">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
              <MapPin size={16} className="text-[#1f463a]" />
              <span>{data.address}</span>
            </div>
            <div className="flex flex-col gap-1">
               <a href={`tel:${data.phone.replace(/-/g, '')}`} className="text-xl font-black text-[#1f463a] flex items-center justify-center gap-2">
                 <Phone size={18} fill="#1f463a" className="text-white" />
                 {data.phone}
               </a>
               <p className="text-xs text-slate-500 font-medium">{data.email}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // MODERN THEME
  return (
    <div className="h-full flex flex-col relative bg-slate-900 text-white font-sans overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#1f463a]/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-40 left-0 w-40 h-40 bg-[#e9c6c1]/10 blur-3xl rounded-full"></div>

      {/* Header */}
      <div className="p-8 pb-4 z-10 flex flex-col items-center">
        <div className="w-full bg-white rounded-2xl p-6 mb-6 shadow-xl">
           <img src={data.logoUrl} alt="Logo" className="w-full h-auto object-contain" />
        </div>
        
        <div className="w-full flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1f463a] rounded-lg flex items-center justify-center">
              <Activity className="text-white" size={18} />
            </div>
            <span className="text-[10px] tracking-[0.3em] font-bold text-emerald-400 uppercase">Board Certified</span>
          </div>
          <div className="bg-amber-500 text-slate-900 text-[10px] font-bold px-2 py-1 rounded">
            TOP RATED
          </div>
        </div>
        <div className="w-full">
           <p className="text-slate-400 font-medium text-sm">Dr. Raimi Tuchinsky, D.C.</p>
        </div>
      </div>

      {/* Modern Badge Strip */}
      <div className="bg-white/5 backdrop-blur-md py-3 px-8 border-y border-white/10 flex justify-between items-center z-10">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Focus</span>
          <span className="text-xs font-semibold">Female Chiro</span>
        </div>
        <div className="w-px h-6 bg-white/10"></div>
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Language</span>
          <span className="text-xs font-semibold">English</span>
        </div>
        <div className="w-px h-6 bg-white/10"></div>
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Location</span>
          <span className="text-xs font-semibold">Jerusalem</span>
        </div>
      </div>

      {/* Body Content */}
      <div className="flex-1 p-8 pt-6 space-y-6 z-10">
        <section className="space-y-4">
          <div className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/5">
             <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
               <Users className="text-emerald-400" size={20} />
             </div>
             <div>
               <h3 className="font-bold text-md">Family Care</h3>
               <p className="text-[11px] text-slate-400 leading-tight">Gentle, specialist chiropractic for the whole family.</p>
             </div>
          </div>
          <div className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/5">
             <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
               <Activity className="text-purple-400" size={20} />
             </div>
             <div>
               <h3 className="font-bold text-md">Pain Relief</h3>
               <p className="text-[11px] text-slate-400 leading-tight">Back, Neck, Carpal Tunnel, & Pregnancy pain.</p>
             </div>
          </div>
        </section>

        <div className="bg-[#1f463a] rounded-3xl p-6 relative overflow-hidden shadow-lg">
           <div className="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
           <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-200 mb-1">Located in</p>
           <h4 className="text-lg font-bold mb-4">{data.address}</h4>
           <div className="space-y-3">
             <a href={`tel:${data.phone.replace(/-/g, '')}`} className="w-full bg-white text-[#1f463a] font-black py-3 rounded-2xl flex items-center justify-center gap-2 text-center text-lg shadow-sm active:scale-95 transition-transform">
               <Phone size={20} fill="currentColor" />
               {data.phone}
             </a>
             <p className="text-[10px] text-center text-emerald-100 font-medium tracking-tight uppercase">Call to Book • English Speaking</p>
           </div>
        </div>
      </div>

      {/* Footer Contact */}
      <div className="p-8 pt-0 z-10">
        <div className="flex justify-between items-center text-slate-500 text-[11px]">
          <div className="flex items-center gap-1">
             <Mail size={12} />
             <span>{data.email}</span>
          </div>
          <div className="flex items-center gap-1">
             <Star size={12} className="text-amber-500" fill="currentColor" />
             <span className="font-bold">5.0 Google Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlyerCanvas;
