import type { Locale } from "@/lib/i18n/routing";
import { worldCup2030Sources as s } from "@/data/worldCup2030FinalArticle";
const copy={
 en:{compare:"Two stadiums, different delivery tasks",note:"Documented comparison, not a ranking. Capacities use the same 2024 FIFA bid table: gross proposed seats, not confirmed final tickets. The Bernabéu's separately published operating capacity is 80,242.",a:"Hassan II · Morocco",b:"Bernabéu · Madrid",rows:[
 ["Bid capacity","115,000 planned seats","78,297 submitted seats"],
 ["Stadium status","Under construction","Operating, renovated stadium"],
 ["Readiness","Completion target: 2028","Operating; final configuration still to be agreed"],
 ["Ground transport","Planned Benslimane–Nouaceur rail connection","Existing city network; station redesign targeted for Q1 2027"],
 ["Airport access","Mohammed V; new terminal targeted for 2029","Madrid-Barajas; existing Metro and suburban rail links"],
 ["Accommodation","Casablanca hotel market; event inventory must be secured","Madrid hotel market; event inventory must be secured"],
 ["Venue experience","No completed events in the new stadium","1982 World Cup and 2010 Champions League finals"],
 ["Technology","Tented canopy and new installations planned","Retractable roof and underground pitch storage installed"],
 ["Hospitality","Premium areas designed into the new venue","Existing multipurpose and hospitality offer"],
 ["Symbolism","A return of the final to Africa","A return to a previous final venue"]],
 timeline:"Confirmed steps, public claims, future targets",timeNote:"Selected milestones, equally spaced rather than drawn to scale. A statement or construction target is not a FIFA venue award.",events:["Confirmed: FIFA appoints the host countries","Published target: Populous cites 2028 completion for Hassan II","Reported claim: Lekjaa says Benslimane will host; FIFA says it will decide in due course","Public position: Louzán argues for Spain while acknowledging no decision","Project target: Hassan II completion, not a final allocation","Tournament: final venue still unannounced as of October 3, 2026"],source:"Sources",dates:["11 Dec 2024","3 Jul 2026","10 Sep 2026","11 Sep 2026","2028","2030"]},
 fr:{compare:"Deux stades, des défis de réalisation différents",note:"Comparaison documentée, pas classement. Capacités issues du même tableau FIFA de 2024 : places brutes proposées, pas billets confirmés pour la finale. La capacité d’exploitation publiée séparément pour le Bernabéu est de 80 242 places.",a:"Hassan II · Maroc",b:"Bernabéu · Madrid",rows:[
 ["Capacité du dossier","115 000 places prévues","78 297 places soumises"],
 ["État du stade","En construction","Stade rénové en activité"],
 ["Préparation","Livraison visée : 2028","En service ; configuration finale à convenir"],
 ["Transports terrestres","Liaison ferroviaire Benslimane–Nouaceur prévue","Réseau urbain existant ; station réaménagée visée au T1 2027"],
 ["Accès aérien","Mohammed V ; nouveau terminal visé pour 2029","Madrid-Barajas ; métro et trains de banlieue existants"],
 ["Hébergement","Marché hôtelier de Casablanca ; chambres à garantir pour l’événement","Marché hôtelier madrilène ; chambres à garantir pour l’événement"],
 ["Expérience du site","Aucun événement accompli dans le nouveau stade","Finales du Mondial 1982 et de la Ligue des champions 2010"],
 ["Technologie","Couverture en tente et installations neuves prévues","Toit rétractable et stockage souterrain de la pelouse installés"],
 ["Hospitalité","Espaces premium intégrés au projet","Offre polyvalente et d’hospitalité existante"],
 ["Symbolique","Retour de la finale en Afrique","Retour dans une ancienne enceinte de finale"]],
 timeline:"Décisions, déclarations et objectifs futurs",timeNote:"Étapes choisies, espacées régulièrement sans échelle temporelle. Une déclaration ou un calendrier de chantier n’attribue pas la finale.",events:["Confirmé : la FIFA désigne les pays hôtes","Objectif publié : Populous annonce une livraison en 2028 pour Hassan II","Affirmation rapportée : Lekjaa désigne Benslimane ; la FIFA décidera en temps voulu","Position publique : Louzán défend l’Espagne et reconnaît l’absence de décision","Objectif du projet : livraison de Hassan II, pas attribution de la finale","Tournoi : stade de la finale non annoncé au 3 octobre 2026"],source:"Sources",dates:["11 déc. 2024","3 juil. 2026","10 sept. 2026","11 sept. 2026","2028","2030"]},
 es:{compare:"Dos estadios, tareas diferentes",note:"Comparación documentada, no clasificación. Aforos de la misma tabla FIFA de 2024: plazas brutas propuestas, no entradas confirmadas para la final. El aforo operativo publicado por separado para el Bernabéu es de 80.242.",a:"Hassan II · Marruecos",b:"Bernabéu · Madrid",rows:[
 ["Aforo de candidatura","115.000 plazas previstas","78.297 plazas presentadas"],
 ["Estado del estadio","En construcción","Estadio renovado y operativo"],
 ["Preparación","Objetivo de entrega: 2028","En funcionamiento; configuración final por acordar"],
 ["Transporte terrestre","Conexión ferroviaria Benslimane–Nouaceur prevista","Red urbana existente; rediseño de estación previsto para T1 2027"],
 ["Acceso aéreo","Mohammed V; nueva terminal prevista para 2029","Madrid-Barajas; conexiones actuales de Metro y Cercanías"],
 ["Alojamiento","Mercado hotelero de Casablanca; inventario del evento por asegurar","Mercado hotelero madrileño; inventario del evento por asegurar"],
 ["Experiencia del recinto","Sin eventos celebrados en el nuevo estadio","Finales del Mundial 1982 y de Champions 2010"],
 ["Tecnología","Cubierta de tienda e instalaciones nuevas previstas","Techo retráctil y almacenamiento subterráneo del césped instalados"],
 ["Hospitalidad","Áreas premium incluidas en el diseño","Oferta polivalente y de hospitalidad existente"],
 ["Simbolismo","Regreso de la final a África","Regreso a una anterior sede de la final"]],
 timeline:"Pasos confirmados, declaraciones y objetivos",timeNote:"Hitos seleccionados a distancias iguales, no a escala temporal. Una declaración o un plazo de obra no adjudica la final.",events:["Confirmado: la FIFA designa a los países anfitriones","Objetivo publicado: Populous sitúa la entrega del Hassan II en 2028","Afirmación publicada: Lekjaa señala Benslimane; FIFA decidirá a su debido tiempo","Posición pública: Louzán defiende España y reconoce que no hay decisión","Objetivo del proyecto: terminar Hassan II, no adjudicar la final","Torneo: sede de la final sin anunciar a 3 de octubre de 2026"],source:"Fuentes",dates:["11 dic. 2024","3 jul. 2026","10 sep. 2026","11 sep. 2026","2028","2030"]},
 ar:{compare:"ملعبان ومهام تنفيذ مختلفة",note:"مقارنة موثقة وليست تصنيفا. السعات من جدول فيفا نفسه لعام 2024: مقاعد إجمالية مقترحة، لا تذاكر مؤكدة للنهائي. السعة التشغيلية المنشورة بصورة منفصلة لبرنابيو هي 80,242.",a:"الحسن الثاني · المغرب",b:"برنابيو · مدريد",rows:[
 ["سعة ملف الترشح","115,000 مقعد مخطط","78,297 مقعدا في الملف"],
 ["حالة الملعب","قيد الإنشاء","ملعب مجدد يعمل بالفعل"],
 ["الجاهزية","هدف الإنجاز: 2028","يعمل حاليا؛ ترتيب النهائي لم يتفق عليه بعد"],
 ["النقل البري","رابط قطارات بنسليمان–النواصر مخطط","شبكة حضرية قائمة؛ هدف تجديد المحطة الربع الأول من 2027"],
 ["الوصول الجوي","محمد الخامس؛ مبنى جديد مستهدف في 2029","مدريد باراخاس؛ مترو وقطارات ضواح قائمة"],
 ["الإقامة","سوق فنادق الدار البيضاء؛ غرف الحدث تحتاج إلى ضمان","سوق فنادق مدريد؛ غرف الحدث تحتاج إلى ضمان"],
 ["خبرة المنشأة","لا أحداث مكتملة في الملعب الجديد","نهائي مونديال 1982 ودوري الأبطال 2010"],
 ["التكنولوجيا","سقف خيمي وتجهيزات جديدة مخططة","سقف قابل للسحب وتخزين أرضية تحت الأرض مركبان"],
 ["الضيافة","مناطق مميزة ضمن التصميم","عرض ضيافة واستخدامات متعددة قائم"],
 ["الرمزية","عودة النهائي إلى إفريقيا","عودة إلى ملعب سبق أن استضاف النهائي"]],
 timeline:"وقائع مؤكدة وتصريحات وأهداف مستقبلية",timeNote:"محطات مختارة بمسافات متساوية لا تمثل الزمن. التصريح أو موعد الإنجاز لا يعني إسناد فيفا النهائي.",events:["مؤكد: فيفا يختار الدول المضيفة","هدف منشور: Populous تحدد 2028 لإنجاز الحسن الثاني","تصريح منقول: لقجع يعلن بنسليمان؛ فيفا يقول إنه سيقرر في الوقت المناسب","موقف علني: لوزان يدافع عن إسبانيا ويقر بعدم صدور قرار","هدف المشروع: إنجاز الحسن الثاني، وليس إسناد النهائي","البطولة: موقع النهائي غير معلن حتى 3 أكتوبر 2026"],source:"المصادر",dates:["11 ديسمبر 2024","3 يوليو 2026","10 سبتمبر 2026","11 سبتمبر 2026","2028","2030"]}
};
const rowRefs=[ [s.bid],[s.reuters,s.madrid],[s.schedule,s.bid],[s.rail,s.metro],[s.terminal,s.access],[s.bid],[s.history],[s.design,s.technology],[s.design,s.technology],[s.schedule,s.history] ];
export function WorldCup2030Graphics({locale,kind}:{locale:Locale;kind:"compare"|"timeline"}){
 const c=copy[locale],id=`worldcup2030-${kind}`;
 return <figure id={id} dir={locale==="ar"?"rtl":"ltr"} aria-labelledby={`${id}-title`} className="flow-root my-10 rounded-xl border border-white/20 bg-[#101010] p-4 text-white sm:p-6">
 <figcaption id={`${id}-title`} className="font-display text-xl font-bold sm:text-2xl">{kind==="compare"?c.compare:c.timeline}</figcaption>
 <p className="mt-3 text-sm leading-relaxed text-white/75">{kind==="compare"?c.note:c.timeNote}</p>
 {kind==="compare"?<dl className="mt-6 space-y-5">{c.rows.map(([label,a,b],i)=><div key={i} className="border-t border-white/15 pt-4"><dt className="font-bold">{label}</dt><dd><div className="mt-2 grid gap-3 sm:grid-cols-2"><div className="border-s-2 border-[#e9bd65] ps-3"><p className="text-xs font-bold text-[#e9bd65]">{c.a}</p><p className="mt-1 text-sm leading-relaxed">{a}</p></div><div className="border-s-2 border-[#df5555] ps-3"><p className="text-xs font-bold text-[#ff9999]">{c.b}</p><p className="mt-1 text-sm leading-relaxed">{b}</p></div></div><p className="mt-2 flex flex-wrap gap-x-3 text-xs text-white/70">{c.source}: {rowRefs[i].map((r,j)=><a key={j} href={r.url} className="underline">{new URL(r.url).hostname.replace("www.","")}</a>)}</p></dd></div>)}</dl>:<ol className="mt-6 grid gap-5 sm:grid-cols-2">{c.events.map((event,i)=><li key={i} className="border-s-2 border-[#e9bd65] ps-4"><span className="font-bold text-[#e9bd65]">{c.dates[i]}</span><p className="mt-2 text-sm leading-relaxed">{event}</p><a href={[s.hosts,s.schedule,s.reuters,s.louzan,s.schedule,s.reuters][i].url} className="mt-2 inline-block text-xs text-white/70 underline">{c.source}: {["FIFA","Populous","Reuters","Cadena SER","Populous","Reuters / FIFA"][i]}</a></li>)}</ol>}
 <p className="mt-5 text-xs text-white/60">PRESDA Data Graphics</p>
 </figure>;
}
