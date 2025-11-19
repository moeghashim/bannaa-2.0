import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Globe, Cpu, Terminal, Brain, ArrowRight } from "lucide-react";

type Language = "en" | "ar";

const content = {
  en: {
    brand: "BENNA",
    nav: {
      features: "CURRICULUM",
      pricing: "TUITION",
      about: "MISSION",
      login: "STUDENT PORTAL",
      getAccess: "APPLY NOW",
    },
    hero: {
      beta: "COHORT 01: OPEN",
      line1: "BUILD",
      line2: "INTELLIGENCE",
      line3: "FROM SCRATCH.",
      description: "The no-nonsense toolkit for developers who value raw speed over pretty pixels. Build ugly, ship fast, make money.",
      ctaPrimary: "VIEW SYLLABUS",
      ctaSecondary: "ADMISSIONS",
    },
    stats: [
      { label: "Hours of Coding", value: "400+" },
      { label: "Real Projects", value: "12" },
      { label: "Job Ready", value: "100%" },
    ]
  },
  ar: {
    brand: "بنّاء",
    nav: {
      features: "المنهج الدراسي",
      pricing: "الرسوم",
      about: "رسالتنا",
      login: "بوابة الطلاب",
      getAccess: "قدّم الآن",
    },
    hero: {
      beta: "الدفعة ٠١: التسجيل متاح",
      line1: "ابنِ",
      line2: "الذكاء",
      line3: "من الصفر.",
      description: "مجموعة الأدوات الجادة للمطورين الذين يقدرون السرعة الخام على الجماليات. ابنِ بقبح، أطلق بسرعة، واكسب المال.",
      ctaPrimary: "تصفح المنهج",
      ctaSecondary: "القبول والتسجيل",
    },
    stats: [
      { label: "ساعة برمجة", value: "٤٠٠+" },
      { label: "مشروع حقيقي", value: "١٢" },
      { label: "جاهزية للعمل", value: "١٠٠٪" },
    ]
  }
};

export default function Home() {
  const [lang, setLang] = useState<Language>("ar"); // Default to Arabic for Benna
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
            <div className="bg-black text-white p-1">
              <Brain className="w-6 h-6" />
            </div>
            <h1 className="font-display text-xl md:text-2xl uppercase tracking-tighter rtl:tracking-normal">
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
            <button className="bg-secondary border-2 border-black px-6 py-2 font-bold text-sm shadow-brutal-sm hover:shadow-brutal transition-all hover:-translate-y-0.5 uppercase flex items-center gap-2">
              {t.nav.getAccess}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 container mx-auto px-4 flex flex-col justify-center py-20 md:py-24">
        <div className="max-w-5xl relative">
          {/* Decorative element above headline */}
          <div className="absolute -top-16 start-0 bg-black text-white px-3 py-1 font-mono text-sm transform rtl:rotate-1 ltr:-rotate-1 border-2 border-transparent flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            {t.hero.beta}
          </div>
          
          <h1 className="font-display text-6xl md:text-9xl leading-[0.9] tracking-tighter rtl:tracking-normal mb-8">
            {t.hero.line1} <br />
            <span className="text-stroke text-white relative">
              {t.hero.line2}
              {/* Circuit decoration */}
              <svg className="absolute -z-10 top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-full opacity-20 pointer-events-none" viewBox="0 0 100 20">
                <path d="M0 10 H100" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
                <circle cx="10" cy="10" r="2" fill="currentColor" />
                <circle cx="90" cy="10" r="2" fill="currentColor" />
              </svg>
            </span> <br />
            {t.hero.line3}
          </h1>

          <div className="grid md:grid-cols-5 gap-8 mb-12 items-start">
            <div className="md:col-span-3 bg-white border-s-4 border-secondary ps-6 py-2">
              <p className="font-mono text-lg md:text-xl leading-relaxed font-bold text-gray-800 rtl:font-sans rtl:font-bold">
                {t.hero.description}
              </p>
            </div>
            
            {/* Code snippet decoration */}
            <div className="hidden md:block md:col-span-2 bg-black p-4 border-2 border-black shadow-brutal-sm transform rotate-1">
              <div className="flex gap-1.5 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="font-mono text-xs text-green-400 overflow-hidden">
                <code>
                  {`class BennaStudent:\n  def build(self):\n    knowledge = load()\n    future = deploy()\n    return future`}
                </code>
              </pre>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-20">
            <button className="bg-black text-white border-2 border-black px-8 py-4 font-display text-xl tracking-wide rtl:tracking-normal hover:bg-gray-900 shadow-brutal hover:shadow-brutal-lg transition-all hover:-translate-y-1 uppercase flex items-center justify-center gap-3 group">
              <Terminal className="w-6 h-6" />
              {t.hero.ctaPrimary}
            </button>
            <button className="bg-white text-black border-2 border-black px-8 py-4 font-display text-xl tracking-wide rtl:tracking-normal hover:bg-gray-50 shadow-brutal hover:shadow-brutal-lg transition-all hover:-translate-y-1 uppercase">
              {t.hero.ctaSecondary}
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t-2 border-black pt-12">
            {t.stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="font-display text-5xl md:text-6xl">{stat.value}</span>
                <span className="font-mono text-sm font-bold uppercase text-gray-600 rtl:font-sans">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Corner Badge */}
      <div className="fixed bottom-8 end-8 z-40 hidden md:block">
        <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg px-4 py-2 flex items-center gap-2 font-sans text-sm font-medium text-gray-600">
          Powered by <span className="flex items-center font-bold text-black"><Cpu className="w-4 h-4 me-1" /> BENNA ENGINE</span>
        </div>
      </div>
    </div>
  );
}
