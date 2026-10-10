import type { Locale } from "@/lib/i18n/routing";
import { passportRankingData as data } from "@/data/passportRankingData";

const copy = {
  en: {titles:["Top 20 global rank positions", "Africa’s top 10 passports", "Arab League members: top 10 passports", "The global mobility gap"], date:"Henley edition: October 9, 2026. Verified October 10.", global:"Global rank", regional:"Regional place", passport:"Passport", score:"Destinations", note:"All ties retained. 20 consecutive Henley ranks contain 51 passports. Access scores include qualifying visa on arrival and ETA travel.", regionNote:"PRESDA regional extraction. Regional place = passports with a higher score + 1, with skipped places after ties. Global Henley ranks are unchanged.", gapNote:"Destination-access scores, out of 227. Bars start at zero. Singapore 193 minus Afghanistan 22 = 171 destinations.", source:"Source: official Henley October 2026 global ranking, pages 2–3", scroll:"Scroll horizontally on small screens."},
  fr: {titles:["Les 20 premiers rangs mondiaux", "Les dix meilleurs passeports africains", "Membres de la Ligue arabe : dix premiers", "L’écart de mobilité mondiale"], date:"Édition Henley du 9 octobre 2026. Vérifiée le 10 octobre.", global:"Rang mondial", regional:"Place régionale", passport:"Passeport", score:"Destinations", note:"Tous les ex æquo sont conservés. 20 rangs Henley rassemblent 51 passeports. Les scores incluent visas à l’arrivée admissibles et ETA.", regionNote:"Extraction régionale PRESDA. Place = nombre de passeports mieux notés + 1, avec sauts après égalité. Les rangs mondiaux Henley restent inchangés.", gapNote:"Scores d’accès sur 227 destinations. Les barres partent de zéro. Singapour 193 moins Afghanistan 22 = 171 destinations.", source:"Source : classement mondial officiel Henley d’octobre 2026, pages 2–3", scroll:"Faites défiler horizontalement sur petit écran."},
  es: {titles:["Los 20 primeros puestos mundiales", "Los diez mejores pasaportes africanos", "Miembros de la Liga Árabe: diez primeros", "La brecha de movilidad mundial"], date:"Edición Henley: 9 de octubre de 2026. Verificada el día 10.", global:"Puesto mundial", regional:"Puesto regional", passport:"Pasaporte", score:"Destinos", note:"Se conservan todos los empates. 20 puestos Henley incluyen 51 pasaportes. Los puntos incluyen visados a la llegada válidos y ETA.", regionNote:"Extracción regional PRESDA. Puesto = pasaportes con más puntos + 1, saltando puestos después de empates. Los puestos mundiales Henley no cambian.", gapNote:"Puntuación de acceso sobre 227 destinos. Barras desde cero. Singapur 193 menos Afganistán 22 = 171 destinos.", source:"Fuente: clasificación mundial oficial Henley de octubre de 2026, páginas 2–3", scroll:"Desplace horizontalmente en pantallas pequeñas."},
  ar: {titles:["أول 20 مرتبة عالمية", "أقوى عشرة جوازات إفريقية", "أعضاء جامعة الدول العربية: أقوى عشرة جوازات", "فجوة التنقل العالمية"], date:"إصدار هينلي: 9 أكتوبر 2026. تم التحقق في 10 أكتوبر.", global:"المرتبة العالمية", regional:"المرتبة الإقليمية", passport:"الجواز", score:"الوجهات", note:"حفظ جميع حالات التعادل. تضم 20 مرتبة متتالية لهينلي 51 جوازاً. تشمل الدرجات تأشيرات الوصول المؤهلة وتصاريح السفر الإلكترونية.", regionNote:"استخراج إقليمي من PRESDA. المرتبة = عدد الجوازات الأعلى درجة + 1، مع قفز الترقيم بعد التعادل. مراتب هينلي العالمية دون تغيير.", gapNote:"درجات الوصول من أصل 227 وجهة. تبدأ الأشرطة من الصفر. سنغافورة 193 ناقص أفغانستان 22 = 171 وجهة.", source:"المصدر: ترتيب هينلي العالمي الرسمي لأكتوبر 2026، الصفحتان 2–3", scroll:"مرر أفقياً على الشاشات الصغيرة."}
};

export function PassportGraphics({locale,kind}:{locale:Locale;kind:"global"|"africa"|"arab"|"gap"}) {
  const t=copy[locale], index=["global","africa","arab","gap"].indexOf(kind), id=`passport-${kind}`;
  const names=new Intl.DisplayNames([locale],{type:"region"});
  const name=(code:string)=>names.of(code) ?? code;
  const regional=kind==="africa"||kind==="arab";
  const rows = kind==="global" ? Array.from({length:20},(_,i)=> {
    const group=data.global.filter(r=>r.rank===i+1);
    return {rank:i+1,score:group[0].score,label:group.map(r=>name(r.code)).join(locale==="ar"?"، ":", "),regional:0};
  }) : kind==="gap" ? data.gap.map(r=>({...r,label:name(r.code),regional:0})) : data[kind].map(r=>({...r,label:name(r.code)}));
  return <figure id={id} dir={locale==="ar"?"rtl":"ltr"} aria-labelledby={`${id}-title`} style={{display:"flow-root"}} className="my-8 min-w-0 scroll-mt-28 rounded-xl border border-white/20 bg-[#101010] p-4 text-white sm:p-6">
    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#FF1A1A]">PRESDA Data Graphics</p>
    <figcaption id={`${id}-title`} className="text-xl font-bold text-[#e9bd65]">{t.titles[index]}</figcaption>
    <p className="mt-3 text-xs text-white/70">{t.date}</p>
    <p className="mt-3 text-sm leading-relaxed text-white/80">{kind==="global"?t.note:regional?t.regionNote:t.gapNote}</p>
    {kind!=="gap" ? <>
      <p className="mt-2 text-xs text-white/70">{t.scroll}</p>
      <div role="region" aria-label={t.titles[index]} tabIndex={0} className="mt-5 overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e9bd65]">
        <table className="w-full min-w-[480px] border-collapse text-sm">
          <caption className="sr-only">{t.titles[index]}. {t.date}</caption>
          <thead><tr>{[...(regional?[t.regional]:[]),t.global,t.passport,t.score].map(h=><th key={h} scope="col" className="border-b border-white/25 p-3 text-start">{h}</th>)}</tr></thead>
          <tbody>{rows.map((r,i)=><tr key={i}>{regional?<td className="border-b border-white/15 p-3"><bdi>{r.regional}</bdi></td>:null}<td className="border-b border-white/15 p-3"><bdi>{r.rank}</bdi></td><th scope="row" className="border-b border-white/15 p-3 text-start font-medium leading-relaxed">{r.label}</th><td className="border-b border-white/15 p-3 font-bold text-[#e9bd65]"><bdi>{r.score}</bdi></td></tr>)}</tbody>
        </table>
      </div>
    </> : <ol className="mt-5 space-y-4">{rows.map(r=><li key={r.label} className="text-sm"><div className="flex flex-wrap justify-between gap-2"><span>{r.label} ({t.global} <bdi>{r.rank}</bdi>)</span><strong className="text-[#e9bd65]"><bdi>{r.score}</bdi> {t.score}</strong></div><div aria-hidden="true" className="mt-2 h-3 rounded bg-white/10"><div className="h-3 rounded bg-[#e9bd65]" style={{width:`${r.score/227*100}%`}} /></div></li>)}</ol>}
    <a href={data.source} className="mt-5 inline-block text-xs underline decoration-white/40 underline-offset-4 hover:text-[#e9bd65] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e9bd65]">{t.source}</a>
  </figure>;
}
