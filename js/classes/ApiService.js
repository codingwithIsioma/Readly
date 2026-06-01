class ApiService {
  async fetchArticles(topic) {
    const baseUrl = topic
      ? `https://content.guardianapis.com/search?from-date=2026-05-01&show-fields=body%2Cbyline%2CtrailText&order-by=newest&q=${topic}&page-size=150&api-key=09a809bc-ce21-469e-a00e-d4f1ceb6f181
`
      : `https://content.guardianapis.com/search?show-fields=body%2Cbyline%2CtrailText&use-date=published&page-size=150&api-key=09a809bc-ce21-469e-a00e-d4f1ceb6f181
`;

    const response = await fetch(baseUrl);
    const data = await response.json();
    const articleData = data.response.results;
    const newArticleArray = articleData.map((article) => {
      return this.#transformArticle(article);
    });
    return newArticleArray;
  }

  #transformArticle(rawArticle) {
    const transformedArticle = {
      id: rawArticle.id,
      title: rawArticle.webTitle,
      topic: rawArticle.sectionName,
      author: rawArticle.fields.byline,
      readTime: Math.round(rawArticle.fields.body.length / 400),
      excerpt: rawArticle.fields.trailText,
      body: rawArticle.fields.body,
    };
    return transformedArticle;
  }

  async fetchArticleById(id) {
    const baseUrl = `https://content.guardianapis.com/${id}?api-key=09a809bc-ce21-469e-a00e-d4f1ceb6f181&show-fields=body,byline,trailText`;
    const response = await fetch(baseUrl);
    const data = await response.json();
    const articleData = data.response.content;
    const articleDataObj = {
      id: articleData.id,
      title: articleData.webTitle,
      topic: articleData.sectionName,
      author: articleData.fields.byline,
      readTime: Math.round(articleData.fields.body.length / 400),
      excerpt: articleData.fields.trailText,
      body: articleData.fields.body,
    };
    return articleDataObj;
  }

  async fetchWithFallback(topic) {
    try {
      const articleResult = await this.fetchArticles(topic);
      return articleResult;
    } catch (error) {
      throw new Error("Could not fetch data");
      return topic ? getArticlesByTopic(topic) : articles;
    }
  }
}


// `https://content.guardianapis.com/search?show-fields=body%2Cbyline%2CtrailText&order-by=newest&use-date=published&page-size=150&api-key=09a809bc-ce21-469e-a00e-d4f1ceb6f181