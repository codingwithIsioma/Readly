class Article {
  static render(article, index, container) {
    container += `<div class="main-article" id="${article.id}">
                        <div class="article">
                        <span class="article-num">${String(index + 1).padStart(2, "0")}</span>
                        <div class="article-body">
                            <p class="article-tag">${article.topic}</p>
                            <p class="article-title" onclick=displayArticle("${article.id}")>
                            ${article.title}
                            </p>
                            <p class="article-excerpt">
                            ${article.excerpt}
                            </p>
                            <span class="article-meta">${article.readTime} min read · ${article.author}</span>
                        </div>
                        </div>
                        <div class="bookmark-article">
                        <i class="fa-regular fa-bookmark"></i>
                        </div>
                    </div>
  `;
    return container;
  }

  static saveCountToLocalStorage(count) {
    localStorage.setItem(
      "readly_articles_read",
      JSON.stringify({ articlesRead: count }),
    );
  }

  static loadCountFromLocalStorage() {
    return JSON.parse(localStorage.getItem("readly_articles_read"));
  }
}

class FeaturedArticle extends Article {
  static render(article) {
    let container = `
    <div class="article-details">
          <div>
              <p class="article-category">${article.topic}</p>
              <p class="article-title">
                  ${article.title}
              </p>
              <div class="article-meta">
                  <div class="author-initials">${
                    article.author
                      ? article.author
                          .split(" ")
                          .map((w) => w[0])
                          .join("")
                          .toUpperCase()
                          .slice(0, 2)
                      : "-"
                  }</div>
                  <div>
                      <p class="author">${article.author ? article.author : "-"}</p>
                      <p class="read-time">${article.readTime} min read</p>
                  </div>
              </div>
          </div>
          <div class="bookmark-article" id="${article.id}">
              <i class="fa-regular fa-bookmark"></i>
          </div>
      </div>
      <div class="article-body">
         ${article.body}
      </div>
    `;
    return container;
  }
}
