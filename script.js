const root = document.documentElement;
const body = document.body;

const imagePairs = {
  "openai-next-gen-model": {
    dark: "/images/articles/openai-sam-dark.png",
    light: "/images/articles/openai-sam-light.png"
  },
  "xabi-alonso-chelsea-pressure": {
    dark: "/images/articles/xabi-alonso-dark.png",
    light: "/images/articles/xabi-alonso-light.png"
  },
  "gta6-trailer-culture-shift": {
    dark: "/images/articles/gta6-poster-dark.png",
    light: "/images/articles/gta6-poster-light.png"
  },
  "elon-mars-signal": {
    dark: "/images/articles/elon-mars-dark.png",
    light: "/images/articles/elon-mars-light.png"
  },
  "world-cup-2026-countdown": {
    dark: "/images/articles/fifa-world-cup-dark.png",
    light: "/images/articles/fifa-world-cup-light.png"
  },
  "bill-gates-foundation-impact": {
    dark: "/images/articles/bill-gates-dark.png",
    light: "/images/articles/bill-gates-light.png"
  },
  "japan-enters-ai-care-era": {
    dark: "/images/articles/japan-ai-care-dark.png",
    light: "/images/articles/japan-ai-care-light.png"
  },
  "keanu-reeves-kindness-powerful": {
    dark: "/images/articles/keanu-kindness-dark.png",
    light: "/images/articles/keanu-kindness-light.png"
  },
  "mourinho-real-madrid-return-signal": {
    dark: "/images/articles/mourinho-real-madrid-dark.png",
    light: "/images/articles/mourinho-real-madrid-light.png"
  }
};

const versioned = (src) => `${src}?v=presda-static-source-20260525`;

function updateThemeImages(mode) {
  const key = mode === "light" ? "light" : "dark";
  document.querySelectorAll("[data-article-image-slug]").forEach((image) => {
    const pair = imagePairs[image.dataset.articleImageSlug];
    if (pair) image.src = versioned(pair[key]);
  });
}

function updateFavicons(mode) {
  const icon = mode === "light" ? "favicon-light.png?v=presda-20260523-light" : "favicon-dark.png?v=presda-20260523-dark";
  document.querySelectorAll("[data-dynamic-favicon]").forEach((link) => {
    link.href = `/${icon}`;
  });
}

function setTheme(mode) {
  const isLight = mode === "light";
  root.classList.toggle("light-mode", isLight);
  body.classList.toggle("light-mode", isLight);
  document.querySelector(".theme-toggle")?.setAttribute("aria-pressed", String(isLight));
  updateFavicons(mode);
  updateThemeImages(mode);
}

const savedMode = localStorage.getItem("presda-mode");
const preferredMode = savedMode || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
setTheme(preferredMode);

document.querySelector(".theme-toggle")?.addEventListener("click", () => {
  const nextMode = root.classList.contains("light-mode") ? "dark" : "light";
  localStorage.setItem("presda-mode", nextMode);
  setTheme(nextMode);
});

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".main-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open") || false;
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.querySelector(".newsletter-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  if (!button) return;
  const original = button.textContent;
  button.textContent = "Subscribed";
  window.setTimeout(() => {
    button.textContent = original;
  }, 1600);
});

/* PRESDA rotating hero progressive enhancement */
;(()=>{if(window.__presdaHeroRotator)return;window.__presdaHeroRotator=1;const S=[["openai-next-gen-model","AI","May 23, 2026","2026-05-23",'<mark class="title-red">OpenAI</mark> Unveils Next-Gen Model','A new generation of <mark class="title-red">artificial intelligence</mark> is pushing faster reasoning, sharper multimodal work, and a more cinematic future for digital assistants.',"/articles/openai-next-gen-model/","4 min read","Sam Altman and OpenAI cinematic PRESDA poster on a dark background","Source: PRESDA Tech Desk"],["xabi-alonso-chelsea-pressure","Sport","May 22, 2026","2026-05-22",'<mark class="title-red">Xabi Alonso</mark> Steps Into The <mark class="title-red">Chelsea</mark> Spotlight','A new tactical era takes shape as <mark class="title-red">Xabi Alonso</mark> becomes the face of pressure, expectation, and elite <mark class="title-red">football</mark> control.',"/articles/xabi-alonso-chelsea-pressure/","5 min read","Xabi Alonso cinematic football poster with Chelsea flag","Source: PRESDA Sport Desk"],["gta6-trailer-culture-shift","Lifestyle","May 21, 2026","2026-05-21",'<mark class="title-red">GTA 6</mark> Becomes A Culture Moment','The next major <mark class="title-red">gaming</mark> release is already behaving less like a product and more like a <mark class="title-red">global entertainment</mark> event.',"/articles/gta6-trailer-culture-shift/","4 min read","GTA 6 neon Vice City cinematic poster","Source: PRESDA Culture Desk"],["elon-mars-signal","Business","May 20, 2026","2026-05-20",'<mark class="title-red">Elon Musk</mark> Turns <mark class="title-red">Mars</mark> Into A Media Signal','<mark class="title-red">Space</mark> ambition, investor attention, and spectacle continue to merge as <mark class="title-red">Mars</mark> becomes a brand, a mission, and a market narrative.',"/articles/elon-mars-signal/","6 min read","Elon Musk above a futuristic city with SpaceX and Tesla branding","Source: PRESDA Business Desk"],["world-cup-2026-countdown","Sport","May 19, 2026","2026-05-19",'<mark class="title-red">World Cup 2026</mark> Countdown Enters Full Speed',"Cities, sponsors, broadcasters, and fans are preparing for one of the largest sports spectacles of the decade.","/articles/world-cup-2026-countdown/","5 min read","FIFA football official in a stadium cinematic poster","Source: PRESDA Sport Desk"]],q=s=>document.querySelector(s),sh=q(".hero-shell"),cat=q(".hero-meta span"),dt=q(".hero-meta time"),h=q(".hero-copy h1"),p=q(".hero-copy p"),ln=q(".hero-actions .primary-link"),rd=q(".hero-actions span"),im=q(".hero-media img"),cap=q(".hero-media figcaption"),prog=q(".hero-progress");if(!sh||!h||!p||!im||!prog)return;let a=0,t;const src=s=>versioned((imagePairs[s]||{})[document.documentElement.classList.contains("light-mode")?"light":"dark"]||im.src),draw=(n,m=1)=>{const x=S[n%S.length];if(m)sh.classList.add("is-transitioning");setTimeout(()=>{a=n%S.length;if(cat)cat.textContent=x[1];if(dt){dt.textContent=x[2];dt.setAttribute("datetime",x[3])}h.innerHTML=x[4];p.innerHTML=x[5];if(ln)ln.href=x[6];if(rd)rd.textContent=x[7];im.dataset.articleImageSlug=x[0];im.src=src(x[0]);im.alt=x[8];if(cap)cap.textContent=x[9];prog.querySelectorAll("button").forEach((b,i)=>{const on=i===a;b.classList.toggle("is-active",on);b.setAttribute("aria-current",on?"true":"false")});if(m)requestAnimationFrame(()=>sh.classList.remove("is-transitioning"))},m?180:0)},play=()=>{clearInterval(t);t=setInterval(()=>draw(a+1),5000)};prog.innerHTML="";S.forEach((x,i)=>{const b=document.createElement("button");b.type="button";b.setAttribute("aria-label","Show featured story: "+x[1]);b.addEventListener("click",()=>{draw(i);play()});prog.appendChild(b)});["mouseenter","focusin"].forEach(e=>sh.addEventListener(e,()=>clearInterval(t)));["mouseleave","focusout"].forEach(e=>sh.addEventListener(e,play));draw(0,0);play()})();
