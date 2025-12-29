
import React, { useState, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Languages, 
  Baby, 
  Stethoscope, 
  Download,
  Share2,
  Copy,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import FlyerCanvas from './components/FlyerCanvas';

const App: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<'elegant' | 'modern'>('elegant');
  const [showCopied, setShowCopied] = useState(false);
  const flyerRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = () => {
    const text = `Dr. Raimi Tuchinsky - Israel Chiropractic Center\n54 Emek Refaim, Jerusalem\nBoard Certified, Female Chiropractor specializing in Pregnancy-related pain, Back & Neck pain.\nPhone: 058-627-7665\nEmail: chirojerusalem@gmail.com`;
    navigator.clipboard.writeText(text);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar Controls */}
      <div className="w-full md:w-96 bg-white border-r border-slate-200 p-6 flex flex-col gap-8 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Flyer Studio</h1>
          <p className="text-sm text-slate-500">Generate and preview your WhatsApp promotional flyer for the Israel Chiropractic Center.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Appearance</h2>
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => setActiveTheme('elegant')}
              className={`p-3 rounded-lg border text-sm font-medium transition-all ${activeTheme === 'elegant' ? 'bg-indigo-50 border-indigo-600 text-indigo-700 shadow-sm' : 'border-slate-200 hover:border-slate-300'}`}
            >
              Elegant
            </button>
            <button 
              onClick={() => setActiveTheme('modern')}
              className={`p-3 rounded-lg border text-sm font-medium transition-all ${activeTheme === 'modern' ? 'bg-indigo-50 border-indigo-600 text-indigo-700 shadow-sm' : 'border-slate-200 hover:border-slate-300'}`}
            >
              Modern
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Key Highlights</h2>
          <ul className="space-y-3">
            {[
              { icon: <UserCheck className="w-4 h-4" />, text: "Female Chiropractor" },
              { icon: <ShieldCheck className="w-4 h-4" />, text: "Board Certified & Licensed" },
              { icon: <Baby className="w-4 h-4" />, text: "Pregnancy Specialty" },
              { icon: <Languages className="w-4 h-4" />, text: "English Speaking" },
              { icon: <Star className="w-4 h-4" />, text: "Top Google Reviewed" },
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 bg-slate-50 p-2 rounded-md">
                <span className="text-indigo-600">{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto space-y-3">
          <button 
            onClick={copyToClipboard}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
          >
            <Copy className="w-5 h-5" />
            {showCopied ? "Copied Info!" : "Copy Text for Bio"}
          </button>
          <p className="text-[10px] text-center text-slate-400">
            Optimized for WhatsApp Status and Messaging
          </p>
        </div>
      </div>

      {/* Main Preview Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-12 overflow-y-auto">
        <div className="max-w-[400px] w-full bg-white shadow-2xl rounded-[2.5rem] overflow-hidden border-[8px] border-slate-900 relative">
          <div className="absolute top-0 w-full h-6 bg-slate-900 flex justify-center items-end pb-1">
             <div className="w-20 h-4 bg-slate-800 rounded-full"></div>
          </div>
          <div ref={flyerRef} className="h-[750px] bg-white overflow-hidden">
            <FlyerCanvas theme={activeTheme} />
          </div>
        </div>
        
        <div className="mt-8 flex gap-4">
           <div className="flex items-center gap-2 text-slate-500 text-sm italic">
             <ChevronRight className="w-4 h-4" />
             Preview Mode: {activeTheme.charAt(0).toUpperCase() + activeTheme.slice(1)}
           </div>
        </div>
      </div>
    </div>
  );
};

export default App;
