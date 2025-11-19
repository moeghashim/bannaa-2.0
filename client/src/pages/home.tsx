import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Globe } from "lucide-react";

type Language = "en" | "ar";

const content = {
  en: {
    brand: "BRUTAL_SAAS",
    nav: {
      features: "FEATURES",
      pricing: "PRICING",
      about: "ABOUT",
      login: "LOGIN",
      getAccess: "GET ACCESS",
    },
    hero: {
      beta: "BETA v1.0",
      line1: "SHIP IT",
      line2: "OR DIE",
      line3: "TRYING.",
      description: "The no-nonsense toolkit for developers who value raw speed over pretty pixels. Build ugly, ship fast, make money.",
      ctaPrimary: "START BUILDING",
      ctaSecondary: "VIEW DOCUMENTATION",
    }
  },
  ar: {
    brand: "بروتال_ساس",
    nav: {
      features: "المميزات",
      pricing: "الأسعار",
      about: "عن الشركة",
      login: "دخول",
      getAccess: "احصل على الدخول",
    },
    hero: {
      beta: "نسخة تجريبية 1.0",
      line1: "أطلق منتجك",
      line2: "أو مت",
      line3: "وأنت تحاول.",
      description: "مجموعة الأدوات الجادة للمطورين الذين يقدرون السرعة الخام على الجماليات. ابنِ بقبح، أطلق بسرعة، واكسب المال.",
      ctaPrimary: "ابدأ البناء",
      ctaSecondary: "تصفح التوثيق",
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const t = content[lang];

  // Toggle language handler
  const toggleLang = () => {
    const newLang = lang === "en" ? "ar" : "en";
    setLang(newLang);
  };

  // Update document direction when language changes
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className={`min-h-screen w-full flex flex-col relative ${lang === 'ar' ? 'font-sans' : ''}`}>
      {/* Navbar */}
      <nav className="w-full border-b-2 border-black bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="font-display text-2xl md:text-3xl uppercase tracking-tighter rtl:tracking-normal">
              {t.brand}
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8 font-mono text-sm font-bold tracking-tight rtl:tracking-normal">
            <a href="#" className="hover:underline decoration-2 underline-offset-4">{t.nav.features}</a>
            <a href="#" className="hover:underline decoration-2 underline-offset-4">{t.nav.pricing}</a>
            <a href="#" className="hover:underline decoration-2 underline-offset-4">{t.nav.about}</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLang}
              className="p-2 hover:bg-gray-100 rounded-md border-2 border-transparent hover:border-black transition-all"
              title={lang === 'en' ? "Switch to Arabic" : "Switch to English"}
            >
              <Globe className="w-5 h-5" />
              <span className="sr-only">Toggle Language</span>
            </button>
            <button className="hidden md:block border-2 border-black px-6 py-2 font-bold text-sm hover:bg-black hover:text-white transition-colors uppercase">
              {t.nav.login}
            </button>
            <button className="bg-secondary border-2 border-black px-6 py-2 font-bold text-sm shadow-brutal-sm hover:shadow-brutal transition-all hover:-translate-y-0.5 uppercase">
              {t.nav.getAccess}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 container mx-auto px-4 flex flex-col justify-center py-20 md:py-32">
        <div className="max-w-4xl relative">
          {/* Decorative element above headline */}
          <div className="absolute -top-12 start-0 bg-black text-white px-2 py-1 font-mono text-xs transform rtl:rotate-2 ltr:-rotate-2 border-2 border-transparent">
            {t.hero.beta}
          </div>
          <div className="absolute -top-10 start-0 w-32 h-1 bg-secondary"></div>

          <h1 className="font-display text-7xl md:text-9xl leading-[0.85] tracking-tighter rtl:tracking-normal mb-8">
            {t.hero.line1} <br />
            <span className="text-stroke text-white">{t.hero.line2}</span> <br />
            {t.hero.line3}
          </h1>

          <div className="max-w-2xl bg-white border-s-4 border-secondary ps-6 py-2 mb-12">
            <p className="font-mono text-lg md:text-xl leading-relaxed font-bold text-gray-800 rtl:font-sans rtl:font-bold">
              {t.hero.description}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <button className="bg-black text-white border-2 border-black px-8 py-4 font-display text-xl tracking-wide rtl:tracking-normal hover:bg-gray-900 shadow-brutal hover:shadow-brutal-lg transition-all hover:-translate-y-1 uppercase">
              {t.hero.ctaPrimary}
            </button>
            <button className="bg-white text-black border-2 border-black px-8 py-4 font-display text-xl tracking-wide rtl:tracking-normal hover:bg-gray-50 shadow-brutal hover:shadow-brutal-lg transition-all hover:-translate-y-1 uppercase">
              {t.hero.ctaSecondary}
            </button>
          </div>
        </div>
      </main>

      {/* Corner Badge */}
      <div className="fixed bottom-8 end-8 z-40">
        <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg px-4 py-2 flex items-center gap-2 font-sans text-sm font-medium text-gray-600">
          Made with <span className="flex items-center font-bold text-black"><div className="w-3 h-3 bg-[#f26207] me-1"></div> replit</span>
        </div>
      </div>
    </div>
  );
}
