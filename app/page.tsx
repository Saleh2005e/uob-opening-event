"use client";

import { useState } from "react";

const content = {
  ar: {
    dir: "rtl", brand: "جامعة بنغازي", unit: "الافتتاح الرسمي للمرافق الجديدة", language: "English",
    overview: "نبذة", gallery: "المرافق", program: "برنامج المناسبة", action: "استكشف المرافق",
    eyebrow: "جامعة بنغازي · 2026", hero: "الافتتاح الرسمي للمرافق الجديدة", heroText: "نحتفي بمرافق جامعية متجددة تجمع بين جودة البيئة التعليمية، ووضوح الرؤية، وطموح المستقبل.",
    heroNote: "بيئة جامعية عصرية · مساحات معرفة · مستقبل واعد",
    aboutTag: "نبذة عن المناسبة", aboutTitle: "خطوة جديدة في مسيرة الجامعة", aboutText: "تجسّد هذه المناسبة رؤية جامعة بنغازي لحرم جامعي حديث؛ أكثر جاهزية للتعليم والبحث، وأكثر قربًا من احتياجات طلابه وأعضاء هيئة تدريسه.",
    values: [["مرافق متطورة", "قاعات ومختبرات ومساحات تعليمية تدعم تجربة أكاديمية متكاملة."], ["تصميم يركز على الإنسان", "تفاصيل عملية تهيئ بيئة مريحة للتعلم والعمل واللقاء."], ["رؤية للمستقبل", "حرم متجدد يواكب طموح الجامعة ومجتمعها العلمي."]],
    galleryTag: "المرافق الجامعية", galleryTitle: "مباني حديثة، وتجربة جامعية متكاملة", galleryText: "من الواجهات المعمارية إلى المساحات الداخلية؛ تتكامل التفاصيل لتمنح الحرم هوية واضحة وبيئة ملهمة.",
    captions: ["الردهة المركزية", "الحرم الجامعي مساءً", "ممرات حديثة", "الساحات الخارجية", "واجهات المرافق"],
    programTag: "برنامج المناسبة", programTitle: "محطات الافتتاح", programText: "برنامج منظم يعرّف الحضور بالمرافق الجديدة وبالمرحلة القادمة من مسيرة الجامعة.",
    moments: [["الاستقبال", "ترحيب بالضيوف والحضور في بهو المرافق الجديدة."], ["الجولة التعريفية", "استكشاف القاعات والخدمات والمساحات الجامعية."], ["كلمات المناسبة", "رؤية الجامعة للمرحلة الجديدة من المعرفة والتميز."], ["اللقاء المفتوح", "مساحة تواصل تجمع الجامعة بضيوفها ومجتمعها."]],
    closing: "جامعة بنغازي", closingTitle: "نصنع بيئة تليق بطموح المعرفة.", footer: "جامعة بنغازي · الافتتاح الرسمي للمرافق الجديدة", logoCredit: "الشعار: Wikimedia Commons / Soaplover2 — CC BY-SA 4.0",
  },
  en: {
    dir: "ltr", brand: "University of Benghazi", unit: "Official Opening of New Facilities", language: "العربية",
    overview: "Overview", gallery: "Facilities", program: "Programme", action: "Explore facilities",
    eyebrow: "University of Benghazi · 2026", hero: "Official Opening of the New Facilities", heroText: "Celebrating renewed university spaces that bring together a high-quality learning environment, a clear vision and an ambitious future.",
    heroNote: "Modern campus · Knowledge spaces · A promising future",
    aboutTag: "About the occasion", aboutTitle: "A new step in the university’s journey", aboutText: "This occasion reflects the University of Benghazi’s vision for a modern campus: better prepared for education and research, and closer to the needs of its students and faculty.",
    values: [["Advanced facilities", "Learning, laboratory and shared spaces that support a complete academic experience."], ["Human-centred design", "Practical details that create a comfortable setting for study, work and connection."], ["A future-facing vision", "A renewed campus that matches the university’s academic ambition."]],
    galleryTag: "Campus facilities", galleryTitle: "Modern buildings. A complete university experience.", galleryText: "From architectural facades to interior spaces, every detail contributes to a clear campus identity and an inspiring environment.",
    captions: ["Central lounge", "Campus at night", "Modern corridors", "Outdoor plazas", "Facility facades"],
    programTag: "Event programme", programTitle: "Opening highlights", programText: "A clear programme introducing the new facilities and the next chapter of the university’s journey.",
    moments: [["Welcome reception", "Welcoming guests at the new facilities."], ["Guided tour", "Discovering the university’s learning, service and shared spaces."], ["Opening remarks", "The university’s vision for a new stage of knowledge and excellence."], ["Open gathering", "A moment of connection between the university, its guests and its community."]],
    closing: "University of Benghazi", closingTitle: "Creating an environment worthy of ambitious learning.", footer: "University of Benghazi · Official Opening of New Facilities", logoCredit: "Logo: Wikimedia Commons / Soaplover2 — CC BY-SA 4.0",
  },
} as const;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (name: string) => `${basePath}/images/${name}`;

export default function Home() {
  const [locale, setLocale] = useState<"ar" | "en">("ar");
  const t = content[locale];
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const photos = [
    [asset("central-lounge.jpeg"), t.captions[0], "md:col-span-7"],
    [asset("night-campus.jpeg"), t.captions[1], "md:col-span-5"],
    [asset("main-corridor.jpeg"), t.captions[2], "md:col-span-4"],
    [asset("campus-plaza.jpeg"), t.captions[3], "md:col-span-4"],
    [asset("evening-facade.jpeg"), t.captions[4], "md:col-span-4"],
  ] as const;

  return (
    <main lang={locale} dir={t.dir} className="min-h-screen overflow-x-hidden bg-[#f4f7fa] text-[#1c3149]">
      <header className="sticky top-0 z-30 border-b border-[#dbe3ea] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-5 md:px-10">
          <div className="flex items-center gap-3">
            <img src={asset("uob-logo.png")} alt={t.brand} className="h-11 w-11 rounded-full object-contain" />
            <div className="leading-tight"><p className="text-[15px] font-bold text-[#183a62]">{t.brand}</p><p className="mt-1 text-[11px] font-medium text-[#6c7d8e]">{t.unit}</p></div>
          </div>
          <nav className="hidden items-center gap-7 text-[13px] font-semibold text-[#52677d] md:flex">
            <button onClick={() => scroll("overview")} className="transition hover:text-[#183a62]">{t.overview}</button>
            <button onClick={() => scroll("gallery")} className="transition hover:text-[#183a62]">{t.gallery}</button>
            <button onClick={() => scroll("program")} className="transition hover:text-[#183a62]">{t.program}</button>
          </nav>
          <button onClick={() => setLocale(locale === "ar" ? "en" : "ar")} className="rounded-md border border-[#cad6e2] px-3 py-2 text-[12px] font-bold text-[#183a62] transition hover:border-[#183a62]">{t.language}</button>
        </div>
      </header>

      <section className="relative isolate min-h-[570px] overflow-hidden bg-[#183a62]">
        <img src={asset("engineering-faculty.jpeg")} alt={t.brand} className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(13,42,70,.88)_0%,rgba(13,42,70,.71)_48%,rgba(13,42,70,.23)_100%)]" />
        <div className="mx-auto flex min-h-[570px] max-w-7xl items-end px-5 py-16 md:px-10 md:py-20">
          <div className="max-w-2xl text-white">
            <div className="mb-7 flex items-center gap-3 text-[12px] font-bold tracking-wide text-[#d8bd7a]"><img src={asset("uob-logo.png")} alt="" className="h-8 w-8 rounded-full bg-white object-contain p-0.5" />{t.eyebrow}</div>
            <h1 className="max-w-xl text-4xl font-bold leading-[1.25] md:text-5xl">{t.hero}</h1>
            <p className="mt-5 max-w-xl text-[16px] leading-8 text-white/85">{t.heroText}</p>
            <div className="mt-8 flex flex-wrap gap-3"><button onClick={() => scroll("gallery")} className="rounded-md bg-[#d8bd7a] px-5 py-3 text-[13px] font-bold text-[#173553] transition hover:bg-white">{t.action}</button><span className="rounded-md border border-white/30 px-4 py-3 text-[12px] text-white/80">{t.heroNote}</span></div>
          </div>
        </div>
      </section>

      <section id="overview" className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.83fr_1.17fr] lg:items-end"><div><p className="eyebrow">{t.aboutTag}</p><h2 className="mt-4 text-3xl font-bold leading-tight text-[#183a62] md:text-4xl">{t.aboutTitle}</h2></div><p className="max-w-2xl text-[16px] leading-8 text-[#53677c]">{t.aboutText}</p></div>
        <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-3">{t.values.map(([title, text], i) => <article key={title} className="rounded-xl border border-[#dde6ee] bg-white p-7"><span className="text-[12px] font-bold text-[#b89548]">0{i + 1}</span><h3 className="mt-8 text-xl font-bold text-[#183a62]">{title}</h3><p className="mt-3 text-[14px] leading-7 text-[#617387]">{text}</p></article>)}</div>
      </section>

      <section id="gallery" className="border-y border-[#dbe3ea] bg-white px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl"><div className="grid gap-8 lg:grid-cols-[.83fr_1.17fr] lg:items-end"><div><p className="eyebrow">{t.galleryTag}</p><h2 className="mt-4 text-3xl font-bold leading-tight text-[#183a62] md:text-4xl">{t.galleryTitle}</h2></div><p className="max-w-xl text-[16px] leading-8 text-[#53677c]">{t.galleryText}</p></div>
          <div className="mt-14 grid gap-5 md:grid-cols-12">{photos.map(([src, caption, span], index) => <figure key={src} className={`overflow-hidden rounded-xl border border-[#e1e8ee] bg-[#f8fafc] ${span}`}><img src={src} alt={caption} className={`w-full object-cover ${index < 2 ? "h-[320px]" : "h-[250px]"}`} /><figcaption className="px-4 py-3 text-[12px] font-medium text-[#617387]">{caption}</figcaption></figure>)}</div>
        </div>
      </section>

      <section id="program" className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">{t.programTag}</p><h2 className="mt-4 text-3xl font-bold leading-tight text-[#183a62] md:text-4xl">{t.programTitle}</h2><p className="mt-5 max-w-sm text-[15px] leading-8 text-[#53677c]">{t.programText}</p></div><ol className="overflow-hidden rounded-xl border border-[#dbe3ea] bg-white">{t.moments.map(([title, text], index) => <li key={title} className="grid grid-cols-[46px_1fr] gap-4 border-b border-[#e5ebf0] p-6 last:border-0"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#eff4f8] text-[12px] font-bold text-[#b89548]">0{index + 1}</span><div><h3 className="text-[16px] font-bold text-[#183a62]">{title}</h3><p className="mt-2 text-[14px] leading-7 text-[#617387]">{text}</p></div></li>)}</ol></div>
      </section>

      <section className="px-5 pb-20 md:px-10 md:pb-28"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-xl bg-[#183a62] px-7 py-10 text-white md:flex-row md:items-center md:px-12"><div className="flex items-center gap-4"><img src={asset("uob-logo.png")} alt="" className="h-14 w-14 rounded-full bg-white object-contain p-1" /><div><p className="text-[13px] font-bold text-[#d8bd7a]">{t.closing}</p><h2 className="mt-2 text-2xl font-bold">{t.closingTitle}</h2></div></div><button onClick={() => scroll("overview")} className="w-fit rounded-md border border-white/40 px-5 py-3 text-[13px] font-bold transition hover:bg-white hover:text-[#183a62]">{t.overview}</button></div></section>
      <footer className="border-t border-[#dbe3ea] bg-white px-5 py-7 text-center text-[12px] text-[#6c7d8e]"><p>{t.footer}</p><p className="mt-2 text-[10px] text-[#9aa8b6]">{t.logoCredit}</p></footer>
    </main>
  );
}
