import type { Article } from "@/data/articles";
export const deLaFuenteSources = {
 announcement:{name:"UCAM: honorary doctorate announcement, September 11, 2026",url:"https://www.ucam.edu/noticias/luis-fuente-sera-investido-doctor-honoris-causa-ucam"},
 doctorate:{name:"UCAM: doctoral studies and original research requirements",url:"https://investigacion.ucam.edu/portal-doctorando"},
 biography:{name:"RFEF: De la Fuente presents his autobiography",url:"https://rfef.es/es/noticias/luis-de-la-fuente-presenta-su-autobiografia-la-vida-se-entrena-cada-dia"},
 journey:{name:"RFEF: from youth teams to the world title, August 2026",url:"https://rfef.es/es/noticias/luis-de-la-fuente-de-la-base-la-cima-del-mundo"},
 appointment:{name:"RFEF: senior national coach appointment, December 2022",url:"https://rfef.es/es/noticias/luis-de-la-fuente--nuevo-seleccionador-nacional"},
 nations:{name:"UEFA: Spain win the 2023 Nations League final",url:"https://www.uefa.com/uefanationsleague/news/0282-1849d8b2412c-f43f87000e15-1000/"},
 euro:{name:"UEFA: Spain 2–1 England, EURO 2024 final",url:"https://www.uefa.com/uefaeuro/history/news/028f-1b5e5c2b7b67-d5faab9be20b-1000--spain-2-1-england-late-oyarzabal-winner-earns-la-roja-reco/"},
 world:{name:"FIFA: Spain v Argentina, 2026 World Cup final report",url:"https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/spain-argentina-final-report-highlights"},
 renewal:{name:"RFEF: De la Fuente renews until 2032, September 21, 2026",url:"https://rfef.es/es/noticias/la-historia-continua-luis-de-la-fuente-2032"},
 sport:{name:"UCAM and COE: 15 athletes join their partnership, September 2026",url:"https://www.ucam.edu/noticias/coe-ucam-presentan-15-nuevos-deportistas-que-se-unen-esta-potente-alianza"},
 honours:{name:"UCAM: honorary doctorate recipients",url:"https://www.ucam.edu/universidad/doctores-honoris-causa"}
};
const cite=(...keys:(keyof typeof deLaFuenteSources)[])=>" "+keys.map(k=>`[${deLaFuenteSources[k].name}](${deLaFuenteSources[k].url})`).join(" ");
export const deLaFuenteArticle:Article={
 id:"180",slug:"luis-de-la-fuente-ucam-honorary-doctorate",
 title:"Luis de la Fuente to Receive Honorary Doctorate From UCAM",
 seoTitle:"Luis de la Fuente to Receive UCAM Honorary Doctorate",
 metaDescription:"Spain coach Luis de la Fuente will receive UCAM's honorary doctorate on October 15, 2026. The ceremony, its meaning and his national-team journey explained.",
 excerpt:"UCAM will honour Spain's coach at Los Jerónimos on October 15. The distinction recognises a career in football and the leadership values the university says he represents.",
 headlineHighlights:{red:"Luis de la Fuente",gold:"Honorary Doctorate"},category:"Sport",schemaType:"NewsArticle",date:"2026-10-03",lastUpdated:"2026-10-03",author:"PRESDA Editorial",status:"published",readingTime:"6 min read",
 coverImage:"/articles/luis-de-la-fuente-ucam-honorary-doctorate.png",coverAlt:"Editorial illustration of Luis de la Fuente in academic robes beside a Spanish flag and trophy, not a photograph of the forthcoming UCAM ceremony",homepageImagePosition:"65% 35%",
 tags:["Luis de la Fuente","Luis de la Fuente honorary doctorate","Luis de la Fuente Doctor Honoris Causa","UCAM Luis de la Fuente","Spain coach Luis de la Fuente","Spain national team coach"],
 relatedSlugs:["world-cup-2026-countdown","xabi-alonso-chelsea-pressure","achraf-hakimi-king-of-africa"],
 content:[
 "Luis de la Fuente is scheduled to receive an honorary doctorate from UCAM on October 15, 2026, at the Monastery of Los Jerónimos in Murcia. The Spain coach's investiture will form part of the university's official opening ceremony for the academic year."+cite("announcement"),
 "The distinction will recognise a public sporting career, rather than completion of a research doctorate. It arrives during an ongoing coaching tenure: the Spanish football federation, RFEF, announced in September that De la Fuente's contract will run until 2032."+cite("doctorate","renewal"),
 "## WHAT UCAM HAS ANNOUNCED",
 "UCAM published the news on September 11. Its president, María Dolores García, made the announcement at Murcia Cathedral, but the investiture is planned for the monastery's church. Those are different venues. As of October 3, the ceremony remains forthcoming; the announcement does not establish that the honour has already been conferred."+cite("announcement"),
 "## WHAT DOES DOCTOR HONORIS CAUSA MEAN?",
 "Doctor Honoris Causa is an honorary academic distinction recognising a person's contribution or achievements. It is not an earned PhD and does not certify that its recipient has completed doctoral research. UCAM's own description of its regular doctoral programmes specifies original research culminating in the preparation and defence of a thesis. The honour announced for De la Fuente follows a different purpose."+cite("doctorate","announcement"),
 "That distinction matters when a university honours someone whose expertise was built outside an academic research programme. An honorary doctorate recognises a body of work or public contribution. It should not be described as a new medical qualification, a coaching licence or evidence that the recipient has completed a particular course of study.",
 "## WHY THE UNIVERSITY SELECTED HIM",
 "García highlighted sustained effort, managing talent, respect for others and teamwork. She also identified De la Fuente's public expression of his Christian faith as an affinity with the Catholic institution. These are UCAM's stated reasons and assessments of his example, rather than independent measures of character."+cite("announcement"),
 "## A COACH BUILT THROUGH SPAIN'S NATIONAL TEAMS",
 "De la Fuente's route to the senior team was a long apprenticeship within football. A former player for Athletic Club, Sevilla and Alavés, he accumulated experience in coaching and other football roles before joining the federation. RFEF's account accompanying his autobiography presents that journey as one built through daily work, setbacks and learning, rather than a sudden arrival at the top."+cite("biography"),
 "He joined Spain's national-team structure in 2013. His youth-team successes included the 2015 European Under-19 Championship, Mediterranean Games gold in 2018 and the European Under-21 title in 2019. He later led Spain to silver at the Tokyo Olympics, whose 2020 edition took place in 2021. These were different age-group and Olympic competitions, not senior international titles."+cite("journey"),
 "RFEF announced his appointment as the permanent senior national coach in December 2022. That promotion brought a coach with years of experience inside the federation into its most visible position. His youth record helps explain his progression, but the demands of senior international football would have to be met on their own terms."+cite("appointment"),
 "## THE SENIOR TITLES THAT CHANGED HIS STANDING",
 "The first major senior trophy came in June 2023. Spain and Croatia finished the Nations League final in Rotterdam goalless after extra time, before Spain won the shootout 5–4. It was Spain's first title in that competition and an early success for the new national coach."+cite("nations"),
 "EURO 2024 supplied a larger stage. Spain defeated England 2–1 in Berlin on July 14, with Mikel Oyarzabal scoring the winner. The result delivered the country's fourth European Championship. It added a senior continental title to De la Fuente's earlier European successes with Spain's younger teams."+cite("euro"),
 "The sequence continued at the 2026 World Cup. FIFA's final report records Spain's 1–0 extra-time victory over Argentina on July 19 in New York New Jersey. It was Spain's second men's World Cup title. For the tournament's wider setting, read PRESDA's [2026 World Cup feature](/articles/world-cup-2026-countdown/)."+cite("world","renewal"),
 "These achievements belong to different competitions and stages of his career. The youth titles and Olympic silver show development work; the Nations League, European Championship and World Cup are senior-team honours. Keeping those categories separate makes the trajectory clearer than simply adding every medal into one total.",
 "## RECOGNITION DURING AN ONGOING COACHING CAREER",
 "The honorary doctorate is not a retirement tribute. On September 21, RFEF confirmed a contract extension through 2032, following approval by its board. The federation's announcement emphasised continuity as well as results, describing De la Fuente's approach through group unity, humility and making people feel involved in a common objective."+cite("renewal"),
 "That is the employer's account of his leadership, not an independent evaluation of every decision. Still, it helps explain the connection between the coaching record and the university's choice: both institutions frame his influence in terms of how a group works together, as well as what it wins. National-team leadership involves selection, preparation and maintaining shared purpose between tournaments.",
 "## WHY SPORT MATTERS SO MUCH TO UCAM",
 "UCAM's association with elite sport also has an educational dimension. Its collaboration with the Spanish Olympic Committee, COE, dates to 2012 and aims to help athletes combine demanding sporting careers with study. A September 2026 university announcement presented 15 additional athletes joining that partnership. That is a specific intake, not a count of all athletes supported by the institution."+cite("sport"),
 "The dual-career model and the honorary doctorate serve different functions. Athletes enrolled on academic programmes work toward qualifications through those programmes. An honorary investiture recognises an external contribution. Both can express a university's interest in sport, but they should not be confused with one another."+cite("sport","doctorate"),
 "De la Fuente is due to join an honorary body that already includes former Spain coach Vicente del Bosque and former International Olympic Committee president Thomas Bach. UCAM's recipient list documents those earlier honours. Their inclusion offers context for its sporting tradition, not confirmation that either man will attend the October ceremony."+cite("honours"),
 "## BEYOND THE SCOREBOARD",
 "A trophy records a result. An honorary doctorate asks an institution to explain why it regards a career as an example worth recognising. In this case, the most useful context is the distance between youth development and the senior national team: years spent preparing players and organising collective work before the most visible victories arrived. The ceremony will place that sporting story inside a university setting.",
 "Information checked October 3, 2026. The investiture is scheduled, not completed. The approved hero image is an editorial illustration of De la Fuente in academic dress, not documentary coverage of the forthcoming ceremony."
 ],references:Object.values(deLaFuenteSources),
 faq:[
 {question:"When will Luis de la Fuente receive the UCAM honorary doctorate?",answer:"The investiture is scheduled for October 15, 2026, during UCAM's academic-year opening ceremony at the Monastery of Los Jerónimos in Murcia."},
 {question:"Is Doctor Honoris Causa an earned PhD?",answer:"No. It is an honorary distinction. It does not mean the recipient completed a doctoral research programme or defended an original thesis."},
 {question:"Which senior titles has De la Fuente won with Spain?",answer:"His senior Spain honours include the 2023 Nations League, EURO 2024 and the 2026 World Cup. His earlier youth-team titles and Olympic silver belong to separate competitions."},
 {question:"Is De la Fuente leaving the Spain coaching job?",answer:"The honorary doctorate is not a retirement announcement. RFEF announced on September 21, 2026, that his contract had been extended through 2032."}
 ]
};
