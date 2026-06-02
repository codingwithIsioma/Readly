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
}
