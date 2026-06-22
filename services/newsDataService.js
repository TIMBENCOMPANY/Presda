(function attachNewsDataService(global) {
  const env = () => global.PRESDA_ENV || {};
  const localArticles = () => global.PRESDA_ARTICLES || [];

  function fallbackWorldCupNews() {
    return localArticles()
      .filter((article) => /world cup|fifa|football/i.test([article.category, article.title, ...(article.tags || [])].join(" ")))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 6);
  }

  async function requestNewsApi(query = "World Cup 2026") {
    const config = env();
    if (!config.NEWS_API_KEY) {
      return { ok: false, reason: "missing-news-api-key", data: null };
    }

    const url = new URL("https://newsapi.org/v2/everything");
    url.searchParams.set("q", query);
    url.searchParams.set("language", "en");
    url.searchParams.set("sortBy", "publishedAt");
    url.searchParams.set("pageSize", "6");

    const response = await fetch(url, {
      headers: { "X-Api-Key": config.NEWS_API_KEY }
    });

    if (!response.ok) return { ok: false, reason: `news-api-${response.status}`, data: null };
    return { ok: true, data: await response.json() };
  }

  async function getWorldCupNews() {
    const result = await requestNewsApi();
    if (!result.ok) return fallbackWorldCupNews();

    return (result.data?.articles || []).map((item, index) => ({
      id: `external-world-cup-${index}`,
      slug: item.url,
      title: item.title,
      cardTitleHtml: item.title,
      category: "World Cup 2026",
      date: item.publishedAt ? item.publishedAt.slice(0, 10) : new Date().toISOString().slice(0, 10),
      author: item.source?.name || "External Source",
      source: item.source?.name || "External Source",
      image: item.urlToImage || "/images/articles/fifa-world-cup-dark.png",
      imageDark: item.urlToImage || "/images/articles/fifa-world-cup-dark.png",
      imageLight: item.urlToImage || "/images/articles/fifa-world-cup-light.png",
      imageAlt: item.title || "World Cup news image",
      excerpt: item.description || "World Cup 2026 update.",
      readingTime: "2 min read",
      externalUrl: item.url
    }));
  }

  global.PresdaNewsDataService = {
    requestNewsApi,
    getWorldCupNews
  };
})(typeof window !== "undefined" ? window : globalThis);
