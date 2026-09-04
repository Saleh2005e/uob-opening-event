"use client";

const highlights = [
  ["01", "مرافق تعليمية متطورة", "مساحات صُممت لتدعم التعلم والبحث وتجربة جامعية أكثر رحابة."],
  ["02", "بيئة تلتقي فيها الفكرة بالإنجاز", "من القاعات والمختبرات إلى المساحات المفتوحة، كل تفصيل يخدم مستقبلاً أكاديميًا أفضل."],
  ["03", "جامعة تنظر إلى الأمام", "حرم جامعي متجدد يليق بطموح طلابه وأعضاء هيئة تدريسه."],
];
const moments = [
  ["الاستقبال", "ترحيب بالضيوف في بهو كلية الهندسة."],
  ["جولة الافتتاح", "استكشاف المرافق التعليمية والخدمية الجديدة."],
  ["كلمات المناسبة", "رؤية الجامعة لمرحلة جديدة من المعرفة والتميز."],
  ["اللقاء المفتوح", "مساحة تجمع الحضور والجامعة في يوم استثنائي."],
];

export default function Home() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <main dir="rtl" className="min-h-screen overflow-x-hidden bg-[#f7f4ed] text-[#10253f]">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-10">
          <div className="flex items-center gap-3 text-white">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/55 text-sm font-bold">UB</span>
            <div className="leading-tight"><p className="text-sm font-bold">جامعة بنغازي</p><p className="text-[11px] text-white/70">افتتاح المرافق الجديدة</p></div>
          </div>
          <button onClick={() => scrollTo("program")} className="rounded-full border border-white/55 px-4 py-2 text-sm text-white transition hover:bg-white hover:text-[#10253f]">برنامج الافتتاح</button>
        </div>
      </header>

      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#071b33]">
        <img src="/images/engineering-faculty.jpeg" alt="مبنى كلية الهندسة في جامعة بنغازي" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,19,38,.95)_0%,rgba(4,19,38,.66)_46%,rgba(4,19,38,.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-[#071b33] to-transparent" />
        <div className="mx-auto flex min-h-[760px] max-w-7xl flex-col justify-end px-5 pb-16 pt-40 md:px-10 md:pb-24">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-sm font-medium text-[#e8c66c]"><span className="h-px w-12 bg-[#e8c66c]" />مرحلة جديدة من المعرفة والتميز</p>
            <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-white md:text-7xl lg:text-8xl">افتتاح جامعة بنغازي<span className="mt-2 block text-[#e8c66c]">بحلّة جديدة</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">نحتفي بمرافق جامعية متجددة، وبمساحات تفتح الطريق أمام جيل يصنع المستقبل بالعلم والطموح.</p>
            <div className="mt-10 flex flex-wrap gap-3"><button onClick={() => scrollTo("about")} className="rounded-full bg-[#e8c66c] px-7 py-4 text-sm font-bold text-[#10253f] transition hover:bg-white">اكتشف الافتتاح</button><button onClick={() => scrollTo("gallery")} className="rounded-full border border-white/60 px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#10253f]">شاهد المرافق</button></div>
          </div>
          <div className="mt-16 grid max-w-3xl grid-cols-3 border-t border-white/25 pt-6 text-white md:mt-24">{[["جامعة", "تتجدد"], ["معرفة", "تتقدم"], ["مستقبل", "يُبنى"]].map(([top, bottom]) => <p key={top} className="text-sm leading-6 text-white/75"><strong className="block text-xl text-white">{top}</strong>{bottom}</p>)}</div>
        </div>
      </section>

      <section id="about" className="bg-[#f7f4ed] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-end"><div><p className="eyebrow">عن الافتتاح</p><h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">مساحات جديدة<br />لطموحات أكبر.</h2></div><p className="max-w-2xl text-lg leading-9 text-[#40536a]">تمثل هذه المناسبة محطة للاحتفاء بحرم جامعي يتطور باستمرار؛ مرافق أكثر جاهزية، وبيئة تعلّم تضع الطالب والبحث العلمي في قلب التجربة.</p></div>
        <div className="mx-auto mt-16 grid max-w-7xl gap-px overflow-hidden rounded-[2rem] bg-[#d7d1c4] md:grid-cols-3">{highlights.map(([number, title, text]) => <article key={number} className="bg-[#f7f4ed] p-8 md:p-10"><span className="text-sm font-bold text-[#b48a2c]">{number}</span><h3 className="mt-12 text-2xl font-bold">{title}</h3><p className="mt-4 leading-8 text-[#526175]">{text}</p></article>)}</div>
      </section>

      <section id="gallery" className="bg-[#10253f] px-5 py-24 text-white md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow text-[#e8c66c]">من قلب الحرم</p><h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">تفاصيل صُنعت<br />لتُلهم.</h2></div><p className="max-w-md text-lg leading-8 text-white/65">لقطات من المرافق الجديدة التي تجمع بين الهوية الأكاديمية والبيئة العصرية.</p></div>
          <div className="mt-16 grid gap-5 md:grid-cols-12">
            <figure className="group overflow-hidden rounded-[1.75rem] md:col-span-7"><img src="/images/central-lounge.jpeg" alt="الردهة المركزية في الحرم الجامعي" className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-[1.03]" /><figcaption className="px-1 pt-4 text-sm text-white/60">مساحات لقاء وتواصل داخل الحرم الجامعي</figcaption></figure>
            <figure className="group overflow-hidden rounded-[1.75rem] md:col-span-5"><img src="/images/night-campus.jpeg" alt="مباني الحرم الجامعي ليلًا" className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-[1.03]" /><figcaption className="px-1 pt-4 text-sm text-white/60">حرم يضيء طريق المعرفة</figcaption></figure>
            <figure className="group overflow-hidden rounded-[1.75rem] md:col-span-4"><img src="/images/main-corridor.jpeg" alt="ممر داخلي حديث في الجامعة" className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-[1.03]" /></figure>
            <figure className="group overflow-hidden rounded-[1.75rem] md:col-span-4"><img src="/images/campus-plaza.jpeg" alt="ساحات جامعة بنغازي" className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-[1.03]" /></figure>
            <figure className="group overflow-hidden rounded-[1.75rem] md:col-span-4"><img src="/images/evening-facade.jpeg" alt="واجهة مبنى جامعي في المساء" className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-[1.03]" /></figure>
          </div>
        </div>
      </section>

      <section id="program" className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow">برنامج اليوم</p><h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">يوم يُحتفى<br />بالمستقبل.</h2><p className="mt-7 max-w-sm leading-8 text-[#526175]">رحلة افتتاحية تعرّف الحضور على ملامح المرحلة الجديدة داخل جامعة بنغازي.</p></div><ol className="divide-y divide-[#d7d1c4] border-t border-[#d7d1c4]">{moments.map(([title, text], index) => <li key={title} className="grid gap-5 py-7 sm:grid-cols-[80px_1fr]"><span className="text-xl font-bold text-[#b48a2c]">0{index + 1}</span><div><h3 className="text-2xl font-bold">{title}</h3><p className="mt-2 text-[#526175]">{text}</p></div></li>)}</ol></div>
      </section>
      <section className="px-5 pb-24 md:px-10 md:pb-32"><div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#e8c66c] md:grid-cols-2"><div className="p-9 md:p-16"><p className="text-sm font-bold text-[#705418]">جامعة بنغازي</p><h2 className="mt-6 text-4xl font-black leading-tight text-[#10253f] md:text-6xl">من هنا يبدأ<br />المشهد الجديد.</h2><button onClick={() => scrollTo("gallery")} className="mt-10 rounded-full bg-[#10253f] px-6 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#10253f]">استعرض المرافق</button></div><img src="/images/campus-corridor.jpeg" alt="ممر من مرافق الجامعة الحديثة" className="h-[360px] w-full object-cover md:h-full" /></div></section>
      <footer className="border-t border-[#d7d1c4] px-5 py-8 md:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#526175] sm:flex-row sm:items-center sm:justify-between"><p>جامعة بنغازي · افتتاح المرافق الجديدة</p><p>العلم يصنع الأثر</p></div></footer>
    </main>
  );
}
