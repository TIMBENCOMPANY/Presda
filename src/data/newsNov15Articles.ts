import type { Article } from "@/data/articles";
export const newsNov15Articles: Article[] = [
  {
    "id": "478",
    "slug": "alibaba-qwen4-max-ai-model-launch",
    "title": "ALIBABA LAUNCHES QWEN4-MAX TO CHALLENGE THE WORLD'S TOP AI MODELS",
    "seoTitle": "Alibaba Qwen4-Max launch and benchmark results",
    "metaDescription": "Alibaba releases Qwen4-Max with vision and a million-token context window. What do the benchmarks, hosted access and cache price mean?",
    "excerpt": "Alibaba releases Qwen4-Max with vision and a million-token context window. What do the benchmarks, hosted access and cache price mean?",
    "category": "AI",
    "schemaType": "NewsArticle",
    "date": "2026-11-16",
    "lastUpdated": "2026-11-16",
    "author": "PRESDA Editorial",
    "status": "published",
    "heroPreserveAspect": true,
    "coverImage": "/articles/alibaba-qwen4-max-ai-model-illustration.jpg",
    "coverAlt": "Illustrated Qwen wave rising over a server room alongside rival logos",
    "headlineHighlights": {
      "red": "ALIBABA",
      "gold": "QWEN4-MAX"
    },
    "tags": [
      "ALIBABA",
      "AI"
    ],
    "content": [
      "Alibaba released Qwen4-Max on November 16, 2026, after a limited preview earlier in the month. Its new flagship combines image input with a context window of one million tokens. Alibaba is pitching it for work that extends beyond a quick prompt, from inspecting charts to maintaining a coding project. The launch gives developers another hosted model to compare with the leading systems. It does not settle which model performs best across all tasks. [Alibaba Cloud](https://www.alibabacloud.com/en/press-room/alibaba-unveils-qwen4-max?_p_lc=1) [TechNode](https://technode.com/2026/11/16/alibaba-launches-qwen4-max-with-lower-api-prices-and-a-million-token-context-window/)",
      "## What changed in Qwen4-Max?",
      "Alibaba reports 2.4 trillion total parameters and 71 billion active for each token. Parameters are learned numerical values that help determine the output. In a sparse mixture-of-experts architecture, a routing mechanism directs each token through selected parts of the network. The larger total describes the overall model, while the smaller number describes how much of that model is active for a token. Neither figure alone tells a customer how long a request will take. Waiting time also depends on input size, requested reasoning effort and service load. [Alibaba Cloud](https://www.alibabacloud.com/en/press-room/alibaba-unveils-qwen4-max?_p_lc=1)",
      "[[NOV16_NEWS_478]]",
      "### What a million tokens can and cannot tell you",
      "A token is a unit of model input. A word can be split into several tokens, and token counts vary across languages and formats. A long context window can reduce the need to split a document collection into separate requests. For an analyst comparing contracts, that may help keep relevant passages together. Reliability is a separate question. A model can still overlook a clause, misread a table or produce a confident answer without supporting evidence. A useful test puts a known answer in the middle of a long file and checks whether the model cites the right passage.",
      "## Where the benchmark claims come from",
      "Alibaba reported sixth place on Code Arena at launch and cited other tests covering visual reasoning and agent workflows. A coding position measures performance under a particular evaluation, at a particular time. It cannot establish how well the system will handle a different repository or a conversation in a different language. Alibaba also said the model used 35% fewer tokens in its high-effort setting and cost roughly 60% less per task than Qwen3.8-Max on Work360, its own benchmark. Those figures describe that comparison, with no guarantee that a customer’s invoice will fall by the same amount. [Alibaba Cloud](https://www.alibabacloud.com/en/press-room/alibaba-unveils-qwen4-max?_p_lc=1)",
      "### How to compare agent performance in practice",
      "A coding agent may call tools repeatedly before it offers an answer. That makes successful completion, permissions and the number of retries more useful measures than a single fluent reply. A team comparing providers can use the same issues, tool access and stopping rules, then run its ordinary test suite on every proposed change. A similar approach works for charts: include an image with known values and check that the answer preserves the unit and reads the correct series.",
      "## Access, pricing and open weights",
      "Alibaba lists the QwenCloud API and Token Plan, along with QwenWork and QwenStudio. Its highlighted US$0.075 per million tokens is specifically an implicit-cache-hit input rate. That term applies when the service can reuse eligible input it has already processed. A new request may include fresh input and generated output priced under other categories. Teams evaluating a move should check their region and the complete rate card and measure cost per successful task. [Alibaba Cloud](https://www.alibabacloud.com/en/press-room/alibaba-unveils-qwen4-max?_p_lc=1) [TechNode](https://technode.com/2026/11/16/alibaba-launches-qwen4-max-with-lower-api-prices-and-a-million-token-context-window/)",
      "The Max model is offered as a hosted service with closed weights. Alibaba separately says it plans smaller Qwen4 models with downloadable weights. That distinction matters for organisations that need to operate a model on their own infrastructure. For the physical side of the market, see [how Samsung is investing in AI data centers](/articles/samsung-ai-data-center-expansion/). [Alibaba Cloud](https://www.alibabacloud.com/en/press-room/alibaba-unveils-qwen4-max?_p_lc=1) [The Next Web](https://thenextweb.com/news/alibaba-launches-qwen4-max-flagship-ai-model-without-open-weights)",
      "### What to verify before switching a production workflow",
      "Treat the launch as the start of an evaluation. First record the exact model and reasoning setting used, so a retest can identify an actual change rather than a different configuration. Compare total response time, failure rate and output quality across several attempts, since one task can succeed by chance. Check how often your real prompts reuse the same prefix before estimating cache savings. Finally, decide what happens when an answer is incomplete: a model that generates a long report quickly may offer less value than one that consistently points to the passages a human reviewer needs."
    ],
    "references": [
      {
        "name": "Alibaba Cloud",
        "url": "https://www.alibabacloud.com/en/press-room/alibaba-unveils-qwen4-max?_p_lc=1"
      },
      {
        "name": "TechNode",
        "url": "https://technode.com/2026/11/16/alibaba-launches-qwen4-max-with-lower-api-prices-and-a-million-token-context-window/"
      },
      {
        "name": "The Next Web",
        "url": "https://thenextweb.com/news/alibaba-launches-qwen4-max-flagship-ai-model-without-open-weights"
      }
    ],
    "relatedSlugs": [
      "samsung-ai-data-center-expansion"
    ],
    "faq": [
      {
        "question": "Is Qwen4-Max open-weight?",
        "answer": "The flagship is hosted with closed weights. Alibaba has announced plans for smaller open-weight models."
      },
      {
        "question": "What does one million tokens mean?",
        "answer": "It is the advertised maximum context capacity. It is not a word count or a guarantee of accurate recall."
      }
    ],
    "readingTime": "4 min read"
  },
  {
    "id": "479",
    "slug": "china-ai-education-200-million-students-2030",
    "title": "CHINA WANTS 200 MILLION STUDENTS TO LEARN AI BY 2030",
    "seoTitle": "China’s 2030 AI education plan for schools",
    "metaDescription": "China aims to make AI literacy universal among schoolchildren by 2030. Here is what nearly 200 million students means for classrooms.",
    "excerpt": "China aims to make AI literacy universal among schoolchildren by 2030. Here is what nearly 200 million students means for classrooms.",
    "category": "World",
    "schemaType": "NewsArticle",
    "date": "2026-11-16",
    "lastUpdated": "2026-11-16",
    "author": "PRESDA Editorial",
    "status": "published",
    "heroPreserveAspect": true,
    "coverImage": "/articles/china-ai-education-classroom-robotics.jpg",
    "coverAlt": "Illustration of students working with a robotic arm in a classroom",
    "headlineHighlights": {
      "red": "CHINA",
      "gold": "200 MILLION STUDENTS"
    },
    "tags": [
      "CHINA",
      "World"
    ],
    "content": [
      "China wants AI literacy to reach its schoolchildren by 2030. The country counts nearly 200 million students in primary and secondary education, Reuters reported after visiting schools and reviewing provincial plans. The number gives the scale of the effort. It is an enrolment estimate, rather than a government tally of pupils who have completed a course. The April 2026 action plan seeks to integrate AI throughout education and establish a system for teaching it across age groups. [Chinese Ministry of Education action plan](https://www.moe.gov.cn/srcsite/A16/s3342/202604/t20260410_1433240.html) [Reuters classroom reporting](https://www.investing.com/news/world-news/inside-chinas-drive-to-build-an-ainative-generation-5028222)",
      "## What the national plan asks schools to do",
      "The plan covers primary and secondary schools, universities, vocational training and lifelong learning. The ministry describes a different priority at each level: basic literacy in schools, work across disciplines at universities, and practical skills in vocational education. This matters because recognising when a chatbot is unreliable is a different skill from training a model or using one to inspect manufactured goods. The policy also covers using AI in teaching and assessment, which is distinct from teaching students how AI works. [Chinese Ministry of Education action plan](https://www.moe.gov.cn/srcsite/A16/s3342/202604/t20260410_1433240.html) [Ministry of Education implementation briefing](https://www.moe.gov.cn/jyb_xwfb/s271/202604/t20260410_1433232.html)",
      "[[NOV16_NEWS_479]]",
      "### What AI literacy might look like in class",
      "A lesson can start with a familiar question and two conflicting chatbot answers. Students can identify the claim each answer makes, look for corroborating evidence and explain which source they trust. Another class could test an image classifier with new examples and record which images it mislabels. Both exercises make students explain the result. Handing in a polished answer would reveal much less about whether they understood the system. This distinction matters when schools use the same tools to help teachers assess the work.",
      "## What Shanghai and Beijing show about implementation",
      "Reuters found that nearly half of the provinces and municipalities it reviewed had rolled out binding plans. It reported that Shanghai requires at least 30 hours of AI instruction a year per grade. Beijing plans 100 pilot demonstration schools. One measure is a minimum amount of instructional time, while the other is a network of sites where approaches can be tried. Neither tells us what a student in a different locality receives, or whether an hour of instruction has the same content across schools. [Reuters classroom reporting](https://www.investing.com/news/world-news/inside-chinas-drive-to-build-an-ainative-generation-5028222)",
      "### Why teacher training matters as much as access",
      "Buying a platform can be counted quickly. Preparing a teacher to choose a good exercise, spot errors and give meaningful feedback takes longer. Schools also need decisions about which tools pupils can use by age and how classroom work should be evaluated when AI assistance is allowed. Shared teaching material can make lessons easier to access. It cannot by itself provide reliable connectivity or local support to every school. The ministry’s plans emphasise institutional capacity and teacher development as well as digital services. [Chinese Ministry of Education action plan](https://www.moe.gov.cn/srcsite/A16/s3342/202604/t20260410_1433240.html) [Ministry of Education implementation briefing](https://www.moe.gov.cn/jyb_xwfb/s271/202604/t20260410_1433232.html)",
      "## What will tell us whether the plan is working?",
      "The strongest evidence would show what students can do after the lessons: check an invented citation, explain why a prediction failed or complete a task without handing the judgment to a chatbot. Participation can be measured separately from proficiency. Reporting enrolment, course completion and demonstrated skills as distinct results would make comparisons clearer. Schools using AI to analyse student activity face another question about who may access the data and how long it is retained. The spread of tools such as [Alibaba’s Qwen4-Max](/articles/alibaba-qwen4-max-ai-model-launch/) helps explain why verifying an AI answer is now a classroom skill. [Chinese Ministry of Education action plan](https://www.moe.gov.cn/srcsite/A16/s3342/202604/t20260410_1433240.html) [Reuters classroom reporting](https://www.investing.com/news/world-news/inside-chinas-drive-to-build-an-ainative-generation-5028222)",
      "### How wide access could produce different outcomes",
      "The same tool could support very different lessons. In one classroom, a teacher might ask pupils to explain why an answer is wrong after comparing it with their textbook. In another, pupils might use the tool mainly to draft a response. Both schools could report that AI was used, although only the first exercise directly tests verification. That is why an evaluation needs to distinguish exposure, frequency of use and the skill gained. It should also account for differences in equipment and teacher support, so changes in scores are not automatically credited to the software."
    ],
    "references": [
      {
        "name": "Chinese Ministry of Education action plan",
        "url": "https://www.moe.gov.cn/srcsite/A16/s3342/202604/t20260410_1433240.html"
      },
      {
        "name": "Reuters classroom reporting",
        "url": "https://www.investing.com/news/world-news/inside-chinas-drive-to-build-an-ainative-generation-5028222"
      },
      {
        "name": "Ministry of Education implementation briefing",
        "url": "https://www.moe.gov.cn/jyb_xwfb/s271/202604/t20260410_1433232.html"
      }
    ],
    "relatedSlugs": [
      "alibaba-qwen4-max-ai-model-launch"
    ],
    "faq": [
      {
        "question": "Does China have an official target of exactly 200 million students?",
        "answer": "The number is Reuters’ approximate primary and secondary enrolment figure. The policy goal is broad AI literacy and integration by 2030."
      },
      {
        "question": "Does each pupil take the same course?",
        "answer": "Local plans vary. Shanghai’s reported hours should not be treated as a nationwide minimum."
      }
    ],
    "readingTime": "4 min read"
  },
  {
    "id": "480",
    "slug": "ultrasound-patch-rem-sleep-43-minutes-study",
    "title": "NEW ULTRASOUND PATCH HELPS PEOPLE REACH DREAM SLEEP 43 MINUTES FASTER",
    "seoTitle": "Ultrasound patch study: first REM sleep 43 minutes earlier",
    "metaDescription": "In a small two-night study, an experimental ultrasound patch shifted first REM sleep earlier. The result does not establish an insomnia treatment.",
    "excerpt": "In a small two-night study, an experimental ultrasound patch shifted first REM sleep earlier. The result does not establish an insomnia treatment.",
    "category": "Science",
    "schemaType": "Article",
    "date": "2026-11-16",
    "lastUpdated": "2026-11-16",
    "author": "PRESDA Editorial",
    "status": "published",
    "heroPreserveAspect": true,
    "coverImage": "/articles/ultrasound-patch-rem-sleep-editorial-illustration.jpg",
    "coverAlt": "Concept illustration of a sleeping person with a wearable patch and a monitoring screen",
    "headlineHighlights": {
      "red": "ULTRASOUND PATCH",
      "gold": "43 MINUTES FASTER"
    },
    "tags": [
      "ULTRASOUND PATCH",
      "Science"
    ],
    "content": [
      "An experimental wearable called NEUSLeeP was associated with an earlier first bout of rapid eye movement, or REM, sleep in a small study published in Nature Communications in June 2026. Across 26 usable recordings compared between nights, average time to first REM fell from 177 minutes to 134.7 minutes. The authors reported the change as about 43 minutes. It concerns the timing of a specific stage after sleep begins. It does not mean that people fell asleep 43 minutes sooner. [Nature Communications study](https://www.nature.com/articles/s41467-026-73787-6) [Study methods and figures](https://www.nature.com/articles/s41467-026-73787-6_reference.pdf)",
      "## What the researchers actually measured",
      "The team enrolled 28 people, including 16 in a healthy group and 12 in a group with insomnia symptoms. Two participants’ sleep records were too noisy to use. On the first night, participants underwent a sham condition. On the second, they received active focused ultrasound. A trained sleep specialist scored the recordings. The share of total sleep spent in REM rose from 16.3% to 20.9%, a rise of 4.6 percentage points. The study found no significant changes in overall sleep efficiency or awakenings. [Study methods and figures](https://www.nature.com/articles/s41467-026-73787-6_reference.pdf)",
      "[[NOV16_NEWS_480]]",
      "### REM sleep is one stage of a cycle",
      "REM is associated with vivid dreams, but the researchers measured sleep stages, rather than what participants dreamed about. Specialists recognise stages from physiological signals such as brain activity and eye movements. A first REM episode is different from the moment a person first falls asleep and from the amount of time they remain asleep. This is why results on the timing and duration of REM cannot substitute for measures of insomnia symptoms or daytime function. [PRESDA’s guide to sleep paralysis](/articles/sleep-paralysis-when-you-wake-up-but-cannot-move/) explains another way that REM physiology and awareness can overlap. [NIH guide to sleep stages](https://www.nhlbi.nih.gov/health/sleep/stages-of-sleep)",
      "## How the patch works in the laboratory",
      "The flexible device combines electrodes that record electrical activity with a component that delivers focused ultrasound through the skull. The researchers aimed the ultrasound at the subthalamic nucleus, a deep structure involved in networks they were investigating. The wearable format addresses a practical engineering question: can researchers keep the interface stable long enough to collect signals while someone sleeps? The study tests that approach under research conditions. Its results do not establish that a home wearable can locate the target or safely reproduce the effect without oversight. [Nature Communications study](https://www.nature.com/articles/s41467-026-73787-6) [Study methods and figures](https://www.nature.com/articles/s41467-026-73787-6_reference.pdf)",
      "### Why the two-night order matters",
      "Everyone had the sham session first. The researchers chose that order because they did not know whether effects from the active session might carry over into a later sham night. The trade-off is that the effect of the patch cannot be cleanly separated from an effect of sleeping in the lab for a second night. A larger study could account for that with a design suited to testing carryover, randomisation and additional nights. The reduction in REM latency was statistically significant in the healthy subgroup and in the combined analysis. The insomnia subgroup alone did not establish a clear timing benefit. [Study methods and figures](https://www.nature.com/articles/s41467-026-73787-6_reference.pdf)",
      "## What would make the finding clinically useful?",
      "A follow-up would need to test whether the effect repeats across independent groups and persists beyond a single active night. Practical outcomes would include daytime functioning, perceived sleep quality and whether people actually have less difficulty getting to sleep or staying asleep. Safety, tolerability and targeting would also need further study. This experiment provides evidence that researchers could measure and influence one part of sleep in a controlled setting. It does not establish an insomnia therapy. [Nature Communications study](https://www.nature.com/articles/s41467-026-73787-6) [Study methods and figures](https://www.nature.com/articles/s41467-026-73787-6_reference.pdf)",
      "### Why the same average can hide different nights",
      "An average compresses records from people who enter REM at different times. The paper reports a wide spread in first-REM timing under both conditions. A mean that shifts by 43 minutes is therefore compatible with much smaller changes for some participants and bigger changes for others. The 4.6-point rise in REM share is another separate measure. It tells us how the recorded sleep time was distributed across stages. It cannot establish by itself that participants felt more rested. Individual records and follow-up outcomes are necessary to judge the practical significance. [Study methods and figures](https://www.nature.com/articles/s41467-026-73787-6_reference.pdf)"
    ],
    "references": [
      {
        "name": "Nature Communications study",
        "url": "https://www.nature.com/articles/s41467-026-73787-6"
      },
      {
        "name": "Study methods and figures",
        "url": "https://www.nature.com/articles/s41467-026-73787-6_reference.pdf"
      },
      {
        "name": "NIH guide to sleep stages",
        "url": "https://www.nhlbi.nih.gov/health/sleep/stages-of-sleep"
      }
    ],
    "relatedSlugs": [
      "sleep-paralysis-when-you-wake-up-but-cannot-move"
    ],
    "faq": [
      {
        "question": "Did people fall asleep 43 minutes sooner?",
        "answer": "The reported change was in the time to first REM, not sleep onset."
      },
      {
        "question": "Did the trial show a treatment for insomnia?",
        "answer": "No. The small, fixed-order experiment did not establish clinical benefit for insomnia."
      }
    ],
    "readingTime": "4 min read"
  },
  {
    "id": "481",
    "slug": "christmas-island-red-crab-migration-roads",
    "title": "MILLIONS OF RED CRABS TURN AUSTRALIAN ISLAND ROADS INTO A SEA OF RED",
    "seoTitle": "Christmas Island red crab migration: rainfall, tides and roads",
    "metaDescription": "Millions of red crabs cross Australia’s Christmas Island to breed. How rain and tides set the timing and why roads close during the migration.",
    "excerpt": "Millions of red crabs cross Australia’s Christmas Island to breed. How rain and tides set the timing and why roads close during the migration.",
    "category": "World",
    "schemaType": "NewsArticle",
    "date": "2026-11-16",
    "lastUpdated": "2026-11-16",
    "author": "PRESDA Editorial",
    "status": "published",
    "heroPreserveAspect": true,
    "coverImage": "/articles/christmas-island-red-crab-migration-road.jpg",
    "coverAlt": "Illustration of red crabs covering a wet forest road beside a crab crossing sign",
    "headlineHighlights": {
      "red": "RED CRABS",
      "gold": "SEA OF RED"
    },
    "tags": [
      "RED CRABS",
      "World"
    ],
    "content": [
      "On Australia’s Christmas Island in the Indian Ocean, a journey that begins in forest burrows can bring traffic to a stop. Millions of Christmas Island red crabs, Gecarcoidea natalis, travel to the sea to breed. Some routes cross paved roads, where the animals can cover the carriageway. Parks Australia scheduled a November 16 livestream for its 2026 coverage. The park describes a population on the order of 100 million, a broad estimate of abundance rather than a headcount of animals on a road. [Parks Australia migration guide](https://christmasislandnationalpark.gov.au/red-crab-migration/) [Parks Australia 2026 livestreams](https://christmasislandnationalpark.gov.au/red-crab-migration/2026-red-crab-migration-livestreams/)",
      "## Why red crabs walk from forest to sea",
      "These are land crabs that depend on the ocean to reproduce. The first wet-season rains usually set the migration in motion in October or November, although it can start later. Wet conditions help a creature that spends much of the year in a humid forest make the exposed journey. The road is simply in the way. Crabs are moving toward coastal breeding sites, not seeking asphalt or human settlements. [Parks Australia migration guide](https://christmasislandnationalpark.gov.au/red-crab-migration/)",
      "[[NOV16_NEWS_481]]",
      "### Rain starts the journey and tides set another deadline",
      "Males commonly reach the coast first, take a dip and dig burrows near the shore. After mating, females remain in the burrows while their eggs develop. Parks Australia describes egg release in the hours before dawn on a receding high tide around the last-quarter moon. That is a different event from the first adult road crossings. An early rainy spell can help crabs move, but someone arriving then should not assume they will also see egg release. [Parks Australia migration guide](https://christmasislandnationalpark.gov.au/red-crab-migration/)",
      "## What happens after the eggs reach the water",
      "Larvae develop at sea before the surviving young come ashore as tiny crabs and begin heading inland. The return can create another wave across the landscape, this time on a much smaller scale per animal. Many larvae do not survive. A spectacular return in one year does not tell us that every breeding season produces the same result, and the timing of an adult march does not describe the abundance of young the following weeks. [Parks Australia migration guide](https://christmasislandnationalpark.gov.au/red-crab-migration/)",
      "### How roads are managed during the migration",
      "Temporary road closures and purpose-built bridges help the crabs get past traffic. Closures can change at short notice as animals move. Parks Australia tells visitors to check the Road Access Board or the visitor centre and follow directions from staff. Even if a road was open the day before, that does not mean it can be driven today. The park’s own livestreams offer a view for people following from elsewhere. [Parks Australia migration guide](https://christmasislandnationalpark.gov.au/red-crab-migration/) [Parks Australia 2026 livestreams](https://christmasislandnationalpark.gov.au/red-crab-migration/2026-red-crab-migration-livestreams/) [Parks Australia road guidance](https://christmasislandnationalpark.gov.au/plan/getting-here/getting-around/)",
      "## Why protecting the crabs protects the forest",
      "Red crabs turn over leaf litter and help return nutrients to the soil. Invasive yellow crazy ants can kill them in areas where the ants form dense colonies. The park has worked on biological control aimed at the scale insects whose honeydew feeds the ants. Parks Australia reports fewer scale insects but says the impact on the ant supercolonies was still uncertain in its description of the programme. A large migration is an important sight, but it cannot alone show how every part of the island is faring. For another example of how geography shapes conservation, see [the identification of two Amazon howler monkey species](/articles/two-new-amazon-howler-monkey-species/). [Parks Australia invasive ant programme](https://christmasislandnationalpark.gov.au/discover/nature/conservation/yellow-crazy-ant-biocontrol/)",
      "### Where to look and what you may see",
      "The national park lists Drumsite, Flying Fish Cove, Ethel Beach and Greta Beach among the easiest places to observe different stages. Choose a location based on what is happening that week. Moving adults can be visible well inland, where people are less likely to see the release of eggs. A spawning location may be quiet between suitable tides even when thousands of crabs are close by. This is one reason the park distinguishes the expected spawning window from road conditions and publishes updates alongside its migration guide. [Parks Australia migration guide](https://christmasislandnationalpark.gov.au/red-crab-migration/) [Parks Australia road guidance](https://christmasislandnationalpark.gov.au/plan/getting-here/getting-around/)"
    ],
    "references": [
      {
        "name": "Parks Australia migration guide",
        "url": "https://christmasislandnationalpark.gov.au/red-crab-migration/"
      },
      {
        "name": "Parks Australia 2026 livestreams",
        "url": "https://christmasislandnationalpark.gov.au/red-crab-migration/2026-red-crab-migration-livestreams/"
      },
      {
        "name": "Parks Australia invasive ant programme",
        "url": "https://christmasislandnationalpark.gov.au/discover/nature/conservation/yellow-crazy-ant-biocontrol/"
      },
      {
        "name": "Parks Australia road guidance",
        "url": "https://christmasislandnationalpark.gov.au/plan/getting-here/getting-around/"
      }
    ],
    "relatedSlugs": [
      "two-new-amazon-howler-monkey-species"
    ],
    "faq": [
      {
        "question": "When does the migration normally start?",
        "answer": "With the first wet-season rainfall, commonly in October or November, although it may be later."
      },
      {
        "question": "Why do roads close?",
        "answer": "The crabs cross them on the way to and from the coast. Closures and bridges reduce the risk of animals being run over."
      }
    ],
    "readingTime": "4 min read"
  },
  {
    "id": "475",
    "slug": "samsung-ai-data-center-expansion",
    "title": "SAMSUNG EXPANDS BEYOND CHIPS TO BUILD AN AI DATA CENTER EMPIRE",
    "seoTitle": "Samsung’s AI data center expansion in Gumi and beyond",
    "metaDescription": "Samsung SDS is building a GPU-ready data center in Gumi, while six Samsung affiliates are investing $1 billion in KKR-backed Helix.",
    "excerpt": "Samsung SDS is building a GPU-ready data center in Gumi, while six Samsung affiliates are investing $1 billion in KKR-backed Helix.",
    "category": "Business",
    "schemaType": "NewsArticle",
    "date": "2026-11-15",
    "lastUpdated": "2026-11-15",
    "author": "PRESDA Editorial",
    "status": "published",
    "heroPreserveAspect": true,
    "coverImage": "/articles/samsung-ai-data-center-server-racks.jpg",
    "coverAlt": "Illustration of illuminated Samsung server racks and overhead cooling pipes",
    "headlineHighlights": {
      "red": "SAMSUNG",
      "gold": "AI DATA CENTER"
    },
    "tags": [
      "SAMSUNG",
      "Business"
    ],
    "content": [
      "A Samsung chip can sit inside an AI server for years. Samsung also wants a role in the building that feeds that server power, carries away its heat and keeps it available to customers. The clearest example is in Gumi, South Korea, where Samsung SDS announced groundbreaking on November 2. A separate $1 billion commitment by six Samsung affiliates to Helix Digital Infrastructure extends the plan to projects outside Korea. [Samsung SDS](https://www.samsungsds.com/en/news/gm-261104.html) [Samsung Global Newsroom](https://news.samsung.com/global/samsung-to-invest-usd-1-billion-in-ai-infrastructure-company-helix)",
      "## What Samsung SDS is building in Gumi",
      "The project occupies a site of about 46,000 square metres in Gongdan-dong. Samsung SDS lists 60 megawatts of initial power capacity and a phased design that could reach 120 MW. Construction is scheduled for completion by the end of 2028. These are project specifications, so the capacity figure cannot tell us how many accelerators customers will install, how much power the site will draw in practice or when a tenant can begin training a model. [Samsung SDS](https://www.samsungsds.com/en/news/gm-261104.html)",
      "### Three investment figures, three different commitments",
      "Samsung SDS disclosed ₩427.3 billion for the Gumi project. Samsung’s roughly ₩60 trillion plan covers a broader set of investments in southeastern Korea, including robotics, batteries and components. The separate $1 billion Helix commitment comes from six affiliates combined. Treating those numbers as three estimates for the same site would badly misstate the scale of the construction project. [Samsung SDS](https://www.samsungsds.com/en/news/gm-261104.html) [Samsung Global Newsroom](https://news.samsung.com/global/samsung-to-invest-usd-1-billion-in-ai-infrastructure-company-helix)",
      "[[NOV15_NEWS_475]]",
      "## Why a GPU data center needs different cooling",
      "A rack packed with high-performance graphics processing units concentrates heat. Samsung SDS plans liquid cooling in dense GPU areas and air cooling in parts of the building housing network and storage equipment. The distinction matters because a data center holds many different kinds of hardware. Designing each room for a different power density leaves room to deploy new systems later. Backup power and redundant equipment are part of the design because an interruption can stop a costly computing run. [Samsung SDS](https://www.samsungsds.com/en/news/gm-261104.html)",
      "### Samsung SDS wants two kinds of customer",
      "Some customers will use computing capacity on GPUs that Samsung SDS owns and runs. Others will rent space and install their own accelerators through colocation. Renting computing capacity shifts more infrastructure work to the provider. Colocation gives clients more say over the machines they use, while the operator remains responsible for the facility. Samsung also expects affiliated manufacturers to use Gumi for workloads such as training robots for precision tasks. Its investor briefing describes related work supplying GPU capacity to the public sector. [Samsung SDS](https://www.samsungsds.com/en/news/gm-261104.html) [Samsung SDS investor briefing](https://image.samsungsds.com/en/investor/ir_events/ear_rele/__icsFiles/afieldfile/2026/10/29/Samsung_SDS_3Q26_Script_Eng_261029.pdf)",
      "## What the Helix deal adds",
      "### What customers will need to compare",
      "Facility power is a useful measure when comparing buildings, but a buyer budgeting an AI project needs a different set of numbers. The accelerator model, network between servers and available memory all affect which workloads fit. A model distributed across multiple machines can also spend time exchanging data rather than computing. The Gumi announcement leaves the GPU vendor open, so the 60 MW starting figure is best read as a design reference. Detailed service offers will tell buyers more about the capacity they can rent. [Samsung SDS](https://www.samsungsds.com/en/news/gm-261104.html)",
      "Helix is an infrastructure company created by KKR and led by former Amazon Web Services chief Adam Selipsky. Its remit includes construction and operation, power generation and transmission, and fibre networks. Samsung C&T brings engineering and construction expertise, Samsung SDI brings backup battery systems and Samsung Electronics has cooling specialist FläktGroup, which it acquired in 2025. The affiliates’ investment creates opportunities to supply projects. Actual contracts and operating capacity will show how much business follows. [Samsung Global Newsroom](https://news.samsung.com/global/samsung-to-invest-usd-1-billion-in-ai-infrastructure-company-helix)",
      "The two projects place Samsung on different sides of the same market. At Gumi it plans to run the facility and sell capacity. Through Helix it is investing alongside other companies in an infrastructure developer. Watch for completion of construction, tenant commitments and operating capacity as separate milestones. The ability to build on several sides of a market has a precedent in [Samsung’s evolution from food trading to global technology](/articles/samsung-from-food-to-tech-empire/)."
    ],
    "references": [
      {
        "name": "Samsung SDS",
        "url": "https://www.samsungsds.com/en/news/gm-261104.html"
      },
      {
        "name": "Samsung Global Newsroom",
        "url": "https://news.samsung.com/global/samsung-to-invest-usd-1-billion-in-ai-infrastructure-company-helix"
      },
      {
        "name": "Samsung SDS investor briefing",
        "url": "https://image.samsungsds.com/en/investor/ir_events/ear_rele/__icsFiles/afieldfile/2026/10/29/Samsung_SDS_3Q26_Script_Eng_261029.pdf"
      }
    ],
    "relatedSlugs": [
      "samsung-from-food-to-tech-empire"
    ],
    "faq": [
      {
        "question": "When is Gumi expected to open?",
        "answer": "Samsung SDS targets construction completion by the end of 2028. The company’s announcement did not give a date for customer service to begin."
      },
      {
        "question": "How large is the Gumi project?",
        "answer": "The design starts at 60 MW of power capacity and could expand in phases to 120 MW."
      },
      {
        "question": "Does the $1 billion fund Gumi?",
        "answer": "It is a separate commitment by six Samsung affiliates to Helix Digital Infrastructure."
      }
    ],
    "readingTime": "4 min read"
  },
  {
    "id": "476",
    "slug": "apple-smart-glasses-siri-ai-2027",
    "title": "APPLE'S FIRST SMART GLASSES COULD ARRIVE IN 2027 WITH SIRI AI",
    "seoTitle": "Apple smart glasses in 2027: Siri, release and features",
    "metaDescription": "Bloomberg reports that Apple is targeting a 2027 debut for Siri-powered smart glasses. Here is what the design and app strategy could mean.",
    "excerpt": "Bloomberg reports that Apple is targeting a 2027 debut for Siri-powered smart glasses. Here is what the design and app strategy could mean.",
    "category": "AI",
    "schemaType": "NewsArticle",
    "date": "2026-11-15",
    "lastUpdated": "2026-11-15",
    "author": "PRESDA Editorial",
    "status": "published",
    "heroPreserveAspect": true,
    "coverImage": "/articles/apple-smart-glasses-siri-ai-concept.jpg",
    "coverAlt": "Concept illustration of Apple-branded glasses with imagined Siri graphics on the lenses",
    "headlineHighlights": {
      "red": "APPLE'S",
      "gold": "SIRI AI"
    },
    "tags": [
      "APPLE'S",
      "AI"
    ],
    "content": [
      "Apple is targeting 2027 for its first smart glasses, according to Bloomberg’s Mark Gurman. The reported plan is to unveil them around the company’s Worldwide Developers Conference and start selling them toward the end of the year, subject to development progress. The distinctive idea is to use Siri to control actions from existing iPhone apps while the wearer keeps the phone in a pocket. Apple has yet to announce the glasses, a price or a shipping date. [Bloomberg Power On](https://www.bloomberg.com/news/newsletters/2026-11-15/apple-siri-ai-app-integrations-power-smart-glasses-iphone-duo-2-face-id-plan) [Digital Trends](https://www.digitaltrends.com/wearables/apples-first-smart-glasses-will-have-you-talking-with-apps-through-siri-in-2027/)",
      "## What the glasses are expected to do",
      "Reporting points to cameras, microphones and speakers in the frames. That combination suggests a voice-led experience: the wearer could ask a question, and Siri could use visual context to respond when needed. Earlier reporting points to calls, audio playback and notifications as possible everyday uses. A device that can do those jobs can be useful without projecting a map or a message into the wearer’s field of view. [Bloomberg’s earlier reporting via MacRumors](https://www.macrumors.com/2026/07/26/apple-smart-glasses-wwdc-2027-report/) [Digital Trends](https://www.digitaltrends.com/wearables/apples-first-smart-glasses-will-have-you-talking-with-apps-through-siri-in-2027/)",
      "### Will Apple’s first glasses have a screen?",
      "The first model is reported to omit a display. The illustration above imagines graphics on the lenses, but those are an editorial concept. Without a display, directions could be spoken and an app confirmation might arrive as audio or on the paired phone. That changes the sort of apps the device is suited for. Asking for the next turn takes seconds. Choosing between several nearly identical addresses is often easier to do on a screen. [Bloomberg’s earlier reporting via MacRumors](https://www.macrumors.com/2026/07/26/apple-smart-glasses-wwdc-2027-report/)",
      "[[NOV15_NEWS_476]]",
      "## How Siri could use iPhone apps",
      "Apple’s developer documentation describes App Intents as a way for developers to expose actions and data to Siri and other system features. A music app, for example, can declare an action to play an album. This gives Siri a defined operation to call and a way to pass the album that the user requested. Bloomberg reports that the glasses would build on existing iPhone software rather than rely on a dedicated app store for the first model. [Apple Developer: App Intents](https://developer.apple.com/documentation/appintents) [Bloomberg Power On](https://www.bloomberg.com/news/newsletters/2026-11-15/apple-siri-ai-app-integrations-power-smart-glasses-iphone-duo-2-face-id-plan) [Digital Trends](https://www.digitaltrends.com/wearables/apples-first-smart-glasses-will-have-you-talking-with-apps-through-siri-in-2027/)",
      "### What that would mean for users",
      "Imagine asking for a table at a restaurant. An available reservation action could let Siri pass along the party size and time. If the restaurant needs a deposit, there may still be details to confirm. That example illustrates the design problem, rather than an announced feature. Compatibility will depend on which developers expose which actions, what permissions those actions require and how the phone handles login or payment steps. An installed app alone does not guarantee that all its screens and controls will be available by voice. [Apple Developer: App Intents](https://developer.apple.com/documentation/appintents) [Digital Trends](https://www.digitaltrends.com/wearables/apples-first-smart-glasses-will-have-you-talking-with-apps-through-siri-in-2027/)",
      "## Privacy, battery life and the unanswered questions",
      "### What Apple has already opened to developers",
      "The Siri AI Developer Preview in Apple’s documentation covers actions and content that apps can make discoverable. That work can proceed on devices people already own. If the glasses use the same framework, developers could build and test app actions before the hardware goes on sale. Buyers would still need to know which languages and services work at launch and whether the experience depends on an internet connection. The preview does not resolve those questions for wearable hardware. [Apple Developer: App Intents](https://developer.apple.com/documentation/appintents)",
      "A camera worn at eye level changes the social setting of a photo. Practical questions include when it can activate, whether a bystander can see an indicator and what happens to the captured data. Camera use, wireless connections and audio also compete for a small battery. Until Apple publishes specifications and privacy documentation for the product, the price, battery performance, supported phones and handling of images remain open questions. [Bloomberg’s earlier reporting via MacRumors](https://www.macrumors.com/2026/07/26/apple-smart-glasses-wwdc-2027-report/)",
      "A developer event could explain how app actions work before Apple settles on retail dates or markets. For the wider roadmap, see [PRESDA’s coverage of Apple’s iPhone and product plans](/articles/apple-iphone-18-foldable-future-products/)."
    ],
    "references": [
      {
        "name": "Bloomberg Power On",
        "url": "https://www.bloomberg.com/news/newsletters/2026-11-15/apple-siri-ai-app-integrations-power-smart-glasses-iphone-duo-2-face-id-plan"
      },
      {
        "name": "Apple Developer: App Intents",
        "url": "https://developer.apple.com/documentation/appintents"
      },
      {
        "name": "Digital Trends",
        "url": "https://www.digitaltrends.com/wearables/apples-first-smart-glasses-will-have-you-talking-with-apps-through-siri-in-2027/"
      },
      {
        "name": "Bloomberg’s earlier reporting via MacRumors",
        "url": "https://www.macrumors.com/2026/07/26/apple-smart-glasses-wwdc-2027-report/"
      }
    ],
    "relatedSlugs": [
      "apple-iphone-18-foldable-future-products"
    ],
    "faq": [
      {
        "question": "Has Apple announced the glasses?",
        "answer": "No. The 2027 timing and design are reported development plans."
      },
      {
        "question": "Is a display expected?",
        "answer": "Reporting points to a first model without displays. The lens graphics in the supplied illustration are conceptual."
      },
      {
        "question": "What would Siri do?",
        "answer": "The reported approach would let Siri call supported actions from compatible iPhone apps. Support depends on the app and the final system."
      }
    ],
    "readingTime": "4 min read"
  },
  {
    "id": "477",
    "slug": "johnny-depp-ebenezer-number-one-box-office",
    "title": "JOHNNY DEPP RETURNS TO NO. 1 AT THE BOX OFFICE AFTER EIGHT YEARS",
    "seoTitle": "Johnny Depp’s Ebenezer opens at No. 1 with $42 million",
    "metaDescription": "Johnny Depp’s Ebenezer topped the North American and worldwide weekend charts. See the opening figures and what the eight-year gap means.",
    "excerpt": "Johnny Depp’s Ebenezer topped the North American and worldwide weekend charts. See the opening figures and what the eight-year gap means.",
    "category": "Paparazzi",
    "schemaType": "NewsArticle",
    "date": "2026-11-15",
    "lastUpdated": "2026-11-15",
    "author": "PRESDA Editorial",
    "status": "published",
    "heroPreserveAspect": true,
    "coverImage": "/articles/johnny-depp-red-carpet-ebenezer-box-office.jpg",
    "coverAlt": "Johnny Depp wearing rose-tinted glasses and a wide-brimmed hat on a red carpet",
    "headlineHighlights": {
      "red": "JOHNNY DEPP",
      "gold": "NO. 1"
    },
    "tags": [
      "JOHNNY DEPP",
      "Paparazzi"
    ],
    "content": [
      "Johnny Depp returned to the top of the North American weekend box office with Ebenezer, director Ti West’s reworking of A Christmas Carol. Paramount estimated that the film earned $19 million in North America and $42 million worldwide in its opening weekend. The result marks Depp’s first No. 1 domestic opening in eight years, dating back to Fantastic Beasts: The Crimes of Grindelwald in 2018. [Paramount opening-weekend figures](https://enduser-corp-prod.paramount.com/news/ebenezer-opens-to-no-1-worldwide-with-42-million) [Associated Press](https://apnews.com/article/5f610ec382c91fbcdc5e3d4baf4728d0) [The Numbers 2018 box-office chart](https://www.the-numbers.com/movie/fantastic-beasts-the-crimes-of-grindelwald-%282018%29)",
      "## How much did Ebenezer make?",
      "Paramount reported $19 million from 3,535 North American locations and $23 million from 63 international markets. About 55 percent of the worldwide estimate came from outside North America. The studio put the film first in the United Kingdom with $5.4 million and also first in Italy, Mexico and Spain. It placed second in France, where it made an estimated $2.5 million. A worldwide win therefore describes the combined result across markets. Individual countries can have different leaders. [Paramount opening-weekend figures](https://enduser-corp-prod.paramount.com/news/ebenezer-opens-to-no-1-worldwide-with-42-million)",
      "[[NOV15_NEWS_477]]",
      "### What does No. 1 mean?",
      "In domestic film reporting, the weekend chart ranks titles by ticket-sale revenue in the United States and Canada. The Associated Press reported that The Cat in the Hat placed second with $11.4 million, followed by Godzilla Minus Zero with $8.3 million. Those figures put Ebenezer ahead of its nearest rival by about $7.6 million on the initial estimates. The ranking tells us which film sold the most by value that weekend. It does not measure the size of the audience over the full run. [Associated Press](https://apnews.com/article/5f610ec382c91fbcdc5e3d4baf4728d0)",
      "## What changed since Grindelwald?",
      "The 2018 Fantastic Beasts sequel topped the domestic chart with $62.2 million on its opening weekend, according to The Numbers. Its wider release and much larger gross show why the two first-place finishes should be read in context. Depp continued to work during the interval. In 2023 he played Louis XV opposite Maïwenn in Jeanne du Barry, which opened the Cannes Film Festival. Opening a festival and topping a commercial weekend chart mark different achievements. The eight years refer to the latter milestone. [The Numbers 2018 box-office chart](https://www.the-numbers.com/movie/fantastic-beasts-the-crimes-of-grindelwald-%282018%29) [Festival de Cannes](https://www.festival-cannes.com/en/press/press-releases/jeanne-du-barry-by-maiwenn-will-open-the-76th-festival-de-cannes/)",
      "### Why the weekend total does not settle profitability",
      "The Associated Press reported a production cost of about $38 million. Worldwide ticket sales above that figure do not establish that the studio has recouped its spending. Theaters keep a share of ticket receipts, a production budget typically excludes promotion, and the film will generate additional income or costs as its release continues. Later weekend grosses and how many theaters keep showing it will reveal whether the opening carried momentum. [Associated Press](https://apnews.com/article/5f610ec382c91fbcdc5e3d4baf4728d0)",
      "## Why Ti West returned to the ghosts",
      "In West’s version, Depp plays the miser Ebenezer Scrooge in a Victorian London marked by inequality and supernatural encounters. Nathaniel Halpern wrote the adaptation. The ensemble includes Andrea Riseborough, Rupert Grint, Daisy Ridley and Ian McKellen. Paramount’s campaign put Depp in character at San Diego Comic-Con and took the film to a London world premiere. For another look at what changes when a familiar story is reworked, read [the origins of Shakespeare’s Romeo and Juliet](/articles/romeo-juliet-shakespeare-love-story-true-origins/). [Paramount opening-weekend figures](https://enduser-corp-prod.paramount.com/news/ebenezer-opens-to-no-1-worldwide-with-42-million)",
      "### How the audience reacted",
      "Paramount reported an A-minus CinemaScore and favorable audience polling from PostTrak. Both describe people who saw the film early. They can give distributors a clue about word of mouth, especially for a November release heading into the holidays. They do not sample everyone who considered buying a ticket, and each score answers a different question. An opening-weekend exit poll cannot substitute for next weekend’s ticket sales, which will reveal whether the film continues to attract audiences after its initial publicity. [Paramount opening-weekend figures](https://enduser-corp-prod.paramount.com/news/ebenezer-opens-to-no-1-worldwide-with-42-million)"
    ],
    "references": [
      {
        "name": "Paramount opening-weekend figures",
        "url": "https://enduser-corp-prod.paramount.com/news/ebenezer-opens-to-no-1-worldwide-with-42-million"
      },
      {
        "name": "Associated Press",
        "url": "https://apnews.com/article/5f610ec382c91fbcdc5e3d4baf4728d0"
      },
      {
        "name": "The Numbers 2018 box-office chart",
        "url": "https://www.the-numbers.com/movie/fantastic-beasts-the-crimes-of-grindelwald-%282018%29"
      },
      {
        "name": "Festival de Cannes",
        "url": "https://www.festival-cannes.com/en/press/press-releases/jeanne-du-barry-by-maiwenn-will-open-the-76th-festival-de-cannes/"
      }
    ],
    "relatedSlugs": [
      "romeo-juliet-shakespeare-love-story-true-origins"
    ],
    "faq": [
      {
        "question": "What movie returned Johnny Depp to No. 1?",
        "answer": "Ebenezer, the Ti West adaptation of A Christmas Carol starring Depp as Scrooge."
      },
      {
        "question": "How much did Ebenezer make in its opening weekend?",
        "answer": "Paramount’s Sunday estimate was $19 million in North America and $42 million worldwide."
      },
      {
        "question": "When was Depp’s previous No. 1 opening?",
        "answer": "Fantastic Beasts: The Crimes of Grindelwald opened at No. 1 domestically in November 2018."
      }
    ],
    "readingTime": "3 min read"
  },
  {
    "id": "462",
    "slug": "tesla-cybercab-price-autonomy-subscription",
    "title": "Tesla Cybercab costs $29,990 and needs a $299 monthly subscription",
    "seoTitle": "Tesla Cybercab pricing and required subscription",
    "metaDescription": "Tesla’s first private buyers are being invited to order a two-seat car whose operating area and ability to drive depend on an active service plan.",
    "excerpt": "Tesla’s first private buyers are being invited to order a two-seat car whose operating area and ability to drive depend on an active service plan.",
    "category": "AI",
    "schemaType": "NewsArticle",
    "date": "2026-11-15",
    "lastUpdated": "2026-11-15",
    "author": "PRESDA Editorial",
    "status": "published",
    "heroPreserveAspect": true,
    "coverImage": "/articles/tesla-cybercab-gold-butterfly-doors.jpg",
    "coverAlt": "Gold Tesla Cybercab with both butterfly doors open on a city street",
    "headlineHighlights": {
      "red": "Tesla Cybercab",
      "gold": "$299 monthly subscription"
    },
    "tags": [
      "Tesla Cybercab",
      "AI"
    ],
    "content": [
      "For the first buyers invited to order Tesla’s Cybercab, the purchase price buys the hardware. The ability to go anywhere in it comes with a separate bill. Tesla’s November 13 offer listed an estimated US$29,990 before tax and US$299 per month for its Autonomy Subscription. December 2026 deliveries were an estimate for the initial offer. [Reuters](https://www.investing.com/news/stock-market-news/tesla-invites-select-customers-to-buy-cybercab-for-personal-use-5027212)",
      "## The terms for the first buyers",
      "Reporting on the invitation listed a US$1,000 nonrefundable deposit and a first month included. Elon Musk subsequently suggested a fee closer to US$115 and tied wider availability to regulatory approval. That suggestion leaves the published US$299 figure as the price attached to the initial offer. [Not a Tesla App](https://www.notateslaapp.com/news/5014/musk-cybercab-sales-are-going-nationwide-299-subscription-too-high)",
      "## What happens if you stop paying?",
      "Tesla’s US agreement says the Cybercab cannot operate without an active plan. That plan covers autonomous driving, connectivity, remote support and specified service and roadside assistance. Owners still pay for insurance, registration, charging and parking. At the quoted rate, 12 paid months cost $3,588 before any price changes. [Tesla Autonomy Subscription Agreement](https://www.tesla.com/configurator/api/v4/terms?category=autonomy_subs&locale=en_US&model=cc&saleType=Sale)",
      "## What the touchscreen can do when a passenger takes control",
      "Tesla’s November 12 agreement draws a specific distinction between autonomous trips and the limited manual operation available on the touchscreen. The latter is for moving short distances at up to 2 mph, is not intended for public roads and requires a valid U.S. driver’s licence. It does not provide an ordinary manual alternative to a trip. The practical consequence is that a buyer who loses access to autonomous operation cannot simply finish a road journey with the screen. The agreement also caps occupancy at two people and sets out rules for restraints and minors. [Source · Tesla, Cybercab Autonomy Subscription Agreement](https://www.tesla.com/configurator/api/v4/terms?category=autonomy_subs&locale=en_US&model=cc&saleType=Sale)",
      "## Safety inspections and service are part of the subscription terms",
      "Tesla says an active subscription requires inspections and maintenance. In its account of the process, owners are notified through the app, and the vehicle may travel empty to a Tesla service centre or be transported. The agreement distinguishes work covered in its appendix from extra repairs that require the owner’s approval. Tesla reserves the right to restrict operation when an inspection is missed or a repair it considers necessary for safety is declined. That makes the network of service providers and availability of appointments relevant to buyers alongside monthly cost. [Source · Tesla, Cybercab Autonomy Subscription Agreement](https://www.tesla.com/configurator/api/v4/terms?category=autonomy_subs&locale=en_US&model=cc&saleType=Sale)",
      "### What the contract says about trip data",
      "The agreement describes collection of identifiable diagnostic and usage data from the car and app. Examples include location, exterior video, cabin camera images and audio in certain ride-support situations. Tesla says its default retention for autonomy data is 30 days, with support requests and safety events handled under its separate privacy notice. The agreement is a description of what the company says it collects and how it handles that data. It does not independently establish how every trip is processed. [Source · Tesla, Cybercab Autonomy Subscription Agreement](https://www.tesla.com/configurator/api/v4/terms?category=autonomy_subs&locale=en_US&model=cc&saleType=Sale)",
      "## The invitation is a dated offer",
      "Initial reporting described an estimated December 2026 delivery in Austin. An estimate on an order screen should be kept separate from a delivery announcement. The same distinction applies to an advertised purchase price, a continuing payment required under the posted terms and the actual places the vehicle is eligible to operate. The table shows the original advertised figures as a snapshot, with a simple calculation buyers can compare against any future offer. For the wider context, see [PRESDA’s coverage of Tesla’s Robotaxi business](/articles/robotaxi-revolution-tesla-waymo-zoox-baidu-2026/). [Source · Electrek, initial order terms](https://electrek.co/2026/11/13/tesla-cybercab-personal-use-orders-299-subscription-geofence/)",
      "[[CYBERCAB_OFFER_SNAPSHOT]]",
      "### A two-seater without manual controls",
      "The butterfly-door two-seater has no steering wheel or pedals for a driver to take over. Riders set destinations through Tesla’s software. The service depends on working connectivity and current software. Tesla can restrict operation by area, road, time or conditions. A buyer should check whether the places they need to reach fall inside the supported area. [Tesla Autonomy Subscription Agreement](https://www.tesla.com/configurator/api/v4/terms?category=autonomy_subs&locale=en_US&model=cc&saleType=Sale)",
      "## How private sales fit Tesla’s Robotaxi strategy",
      "Tesla said in its third-quarter update that it had begun deploying Cybercabs in its Austin Robotaxi fleet. Selling cars to invited owners adds a second model alongside fares. Both depend on Tesla’s ability to operate and support vehicles in specific markets. The invitation offer does not establish nationwide availability or guarantee that privately owned cars can earn fares. [Tesla Q3 2026 update](https://assets-ir.tesla.com/tesla-contents/IR/TSLA-Q3-2026-Update.pdf)",
      "[Related coverage](/articles/meta-italy-805-million-facebook-android-photo-fine/).",
      "## What the subscription adds to the cost",
      "At the advertised $299 monthly rate, 12 paid months add $3,588 before taxes. Added to the advertised base price, that puts the purchase plus 12 paid months at $33,578, before any other charges and assuming the rate stays the same. The calculation is an illustration of the recurring cost rather than a delivery invoice. Buyers need to check the terms attached to their own invitation. [Source · investing.com](https://www.investing.com/news/stock-market-news/tesla-invites-select-customers-to-buy-cybercab-for-personal-use-5027212) [Source · tesla.com](https://www.tesla.com/configurator/api/v4/terms?category=autonomy_subs&locale=en_US&model=cc&saleType=Sale)",
      "## Owning the vehicle and buying rides are different offers",
      "Reuters describes the initial orders as invitations for personal use. Tesla’s ride service gives passengers access to a trip in areas it serves. The purchase offer instead puts the vehicle and an ongoing autonomy payment with the customer. The existence of the ride service does not establish where privately owned Cybercabs can operate. [Source · investing.com](https://www.investing.com/news/stock-market-news/tesla-invites-select-customers-to-buy-cybercab-for-personal-use-5027212)"
    ],
    "references": [
      {
        "name": "Reuters",
        "url": "https://www.investing.com/news/stock-market-news/tesla-invites-select-customers-to-buy-cybercab-for-personal-use-5027212"
      },
      {
        "name": "Tesla Autonomy Subscription Agreement",
        "url": "https://www.tesla.com/configurator/api/v4/terms?category=autonomy_subs&locale=en_US&model=cc&saleType=Sale"
      },
      {
        "name": "Tesla Q3 2026 update",
        "url": "https://assets-ir.tesla.com/tesla-contents/IR/TSLA-Q3-2026-Update.pdf"
      },
      {
        "name": "Not a Tesla App",
        "url": "https://www.notateslaapp.com/news/5014/musk-cybercab-sales-are-going-nationwide-299-subscription-too-high"
      },
      {
        "name": "Electrek, initial order terms",
        "url": "https://electrek.co/2026/11/13/tesla-cybercab-personal-use-orders-299-subscription-geofence/"
      }
    ],
    "relatedSlugs": [
      "meta-italy-805-million-facebook-android-photo-fine"
    ],
    "faq": [
      {
        "question": "Can Cybercab operate without the subscription?",
        "answer": "Tesla’s US contract requires an active subscription for operation."
      },
      {
        "question": "When are deliveries expected?",
        "answer": "Tesla initially estimated December 2026 for invited customers."
      }
    ],
    "readingTime": "5 min read"
  },
  {
    "id": "463",
    "slug": "gavin-bear-hynam-cars-4-youth-victoria-local-hero",
    "title": "After losing his son, mechanic Gavin Hynam gave 19 cars to young people in need",
    "seoTitle": "Gavin Hynam’s 19 car donations and Victoria award",
    "metaDescription": "In regional Victoria, Cars 4 Youth turns used cars into a way to reach school, work and appointments. The mechanic behind it has been named Victoria’s 2027 Local Hero.",
    "excerpt": "In regional Victoria, Cars 4 Youth turns used cars into a way to reach school, work and appointments. The mechanic behind it has been named Victoria’s 2027 Local Hero.",
    "category": "World",
    "schemaType": "NewsArticle",
    "date": "2026-11-15",
    "lastUpdated": "2026-11-15",
    "author": "PRESDA Editorial",
    "status": "published",
    "heroPreserveAspect": true,
    "coverImage": "/articles/gavin-bear-hynam-cars-4-youth-workshop.jpg",
    "coverAlt": "Editorial workshop scene with a mechanic and a young person receiving car keys",
    "headlineHighlights": {
      "red": "Gavin Hynam",
      "gold": "19 cars"
    },
    "tags": [
      "Gavin Hynam",
      "World"
    ],
    "content": [
      "Chelsea Robinson had just passed her driving test when her instructor handed her the keys to the car they had been using for lessons. This time the keys were hers to keep. In and around Horsham, in western Victoria, volunteer mechanic Gavin “Bear” Hynam has made that handover possible for young people who might otherwise have a licence and no car. [ABC Wimmera](https://www.abc.net.au/news/2025-08-18/wimmera-man-fixes-and-gifts-cars-to-disadvantaged-drivers/105646116)",
      "## The son Hynam remembers",
      "In 2008 Hynam lost his eldest son, Preston, in an accident shortly before Preston turned 21. Years later, Hynam told ABC that he saw his son’s influence in the work he was doing. Cars 4 Youth grew out of two things he could offer locally, his time as a driving mentor and his skill at putting used cars back on the road. [ABC Wimmera](https://www.abc.net.au/news/2025-08-18/wimmera-man-fixes-and-gifts-cars-to-disadvantaged-drivers/105646116)",
      "### A licence opens one door. A car opens another.",
      "Hynam volunteers with Victoria’s L2P program, which helps learners without access to a car or supervising driver get practice. For Robinson, the gift followed the lessons. For Kaitlyn Sommerfield, a first car eased a different problem. She had been walking her daughter to appointments and needed a way to reach a kindergarten across town. Hynam’s initiative addresses the gap between knowing how to drive and being able to get somewhere on your own. [ABC Wimmera](https://www.abc.net.au/news/2025-08-18/wimmera-man-fixes-and-gifts-cars-to-disadvantaged-drivers/105646116)",
      "## The two barriers a donated car can address",
      "Learning to drive and having a car after the test are separate problems. Victoria’s TAC L2P program pairs eligible learners with volunteer mentors when they lack suitable access to a supervising driver or vehicle. That supplies the supervised practice a learner needs. Cars 4 Youth addresses what happens afterward. Hynam sources a used car, makes it roadworthy, and gives it to a young person who needs transport. The award organizers report that the gift can include six months’ registration, which gives a recipient time to begin using the vehicle without facing immediate registration costs. [Source · Transport Victoria, TAC L2P](https://transport.vic.gov.au/road-and-active-transport/registration-and-licensing/licences/learner-permit/tac-l2p-learner-driver-mentor-program) [Source · National Australia Day Council](https://uat.australianoftheyear.org.au/sites/default/files/2026-11/vic_recipient_media_release.pdf)",
      "### What counts as a handover",
      "The number in the headline comes from ABC’s August 2025 reporting. It is a count of the vehicles the broadcaster reported had been handed over by that point. The 2027 Victorian Local Hero announcement is a later piece of evidence about his work, not a new count. Keeping the dates apart matters because a cumulative donation figure can change while the nature of the program remains the same. [Source · National Australia Day Council](https://uat.australianoftheyear.org.au/sites/default/files/2026-11/vic_recipient_media_release.pdf) [Source · ABC News, Wimmera reporting](https://www.abc.net.au/news/2025-08-18/wimmera-man-fixes-and-gifts-cars-to-disadvantaged-drivers/105646116)",
      "## Why the town and its distances matter",
      "ABC’s reporting in and around Horsham puts the gifts in practical terms. For one young driver, it changed journeys that had previously been made on foot. For a parent, it made it easier to get a child to appointments. Neither example proves a population-wide effect, but both show what several ordinary journeys can require when the person who needs to make them has no car. The award organizers also cite work, study and family responsibilities as uses of the transport recipients gained. [Source · National Australia Day Council](https://uat.australianoftheyear.org.au/sites/default/files/2026-11/vic_recipient_media_release.pdf) [Source · ABC News, Wimmera reporting](https://www.abc.net.au/news/2025-08-18/wimmera-man-fixes-and-gifts-cars-to-disadvantaged-drivers/105646116)",
      "## What the recognition means",
      "The National Australia Day Council named Hynam as the 2027 Local Hero for Victoria at its Melbourne ceremony on November 12, 2026. The year in the award title identifies the award cycle. The venue and date record when the state recipients were announced. The four Victorian categories had separate recipients, so the distinction is the state’s Local Hero recognition. [Source · National Australia Day Council](https://uat.australianoftheyear.org.au/sites/default/files/2026-11/vic_recipient_media_release.pdf)",
      "[[CARS_4_YOUTH_TIMELINE]]",
      "## Nineteen handovers and a state award",
      "ABC documented 19 donated cars by August 2025 and cited the same total in its November 2026 award coverage. It is a documented count, rather than an estimate of every later donation. Hynam has helped finance the project himself, with additional support raised locally. [ABC News](https://www.abc.net.au/news/2026-11-13/australian-of-the-year-victorian-winners/107379768)",
      "## Recognition in Melbourne",
      "On November 12 in Melbourne, the awards organizers named him Victoria’s 2027 Local Hero. The state award advances him to the national round in Canberra. Back in the Wimmera, the work can be measured in smaller changes, like a young driver taking a set of keys home after her test. [Australian of the Year Awards](https://uat.australianoftheyear.org.au/sites/default/files/2026-11/vic_recipient_media_release.pdf)",
      "[Related coverage](/articles/1925-serum-run-nome-sled-dogs-balto-togo/).",
      "## How the first gifts took shape",
      "ABC traced the initiative to 2017, when Hynam met two recent arrivals in the Wimmera who needed a way to get around. He repaired a used car for each of them. A third donation followed. His skill as a mechanic let him start at a scale he could manage and respond to people he already knew. [Source · abc.net.au](https://www.abc.net.au/news/2025-08-18/wimmera-man-fixes-and-gifts-cars-to-disadvantaged-drivers/105646116)",
      "## One set of keys after the driving test",
      "ABC documented what the handover meant for Chelsea Robinson, who met Hynam through Victoria’s L2P learner-driver program. After she passed her licence test, he gave her the keys to the car in which they had practiced. She told the broadcaster that she had previously walked everywhere. The same report follows Kaitlyn Sommerfield, whose first car helped her get her daughter to appointments in Horsham. [Source · abc.net.au](https://www.abc.net.au/news/2025-08-18/wimmera-man-fixes-and-gifts-cars-to-disadvantaged-drivers/105646116)"
    ],
    "references": [
      {
        "name": "ABC Wimmera",
        "url": "https://www.abc.net.au/news/2025-08-18/wimmera-man-fixes-and-gifts-cars-to-disadvantaged-drivers/105646116"
      },
      {
        "name": "ABC News",
        "url": "https://www.abc.net.au/news/2026-11-13/australian-of-the-year-victorian-winners/107379768"
      },
      {
        "name": "Australian of the Year Awards",
        "url": "https://uat.australianoftheyear.org.au/sites/default/files/2026-11/vic_recipient_media_release.pdf"
      },
      {
        "name": "Transport Victoria, TAC L2P",
        "url": "https://transport.vic.gov.au/road-and-active-transport/registration-and-licensing/licences/learner-permit/tac-l2p-learner-driver-mentor-program"
      }
    ],
    "relatedSlugs": [
      "1925-serum-run-nome-sled-dogs-balto-togo"
    ],
    "faq": [
      {
        "question": "How many cars did Gavin Hynam give away?",
        "answer": "ABC documented 19 and cited that figure again in November 2026."
      },
      {
        "question": "Which award did he receive?",
        "answer": "He was named Victoria’s 2027 Local Hero at the November 2026 state ceremony."
      }
    ],
    "readingTime": "4 min read"
  }
];
