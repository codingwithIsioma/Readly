// AUTHENTICATION GUARD
const retrieveUser = User.loadFromLocalStorage();
if (!retrieveUser || retrieveUser.isLoggedIn === false) {
  window.location.href = "./signin.html";
}

// UPDATE STREAK COUNTER
const retrieveStreak = StreakTracker.loadFromLocalStorage();
const userStreak = new StreakTracker(retrieveStreak);
userStreak.checkStreakCount(new Date());

// EVERYTHING ELSE....
const userDetails = new User(retrieveUser);
const greetingText = document.getElementById("greetingText");
const streakCount = document.getElementById("streak");
const articleContainer = document.querySelector(".article-section-container");
const pillsContainer = document.querySelector(".pills");
const topicsContainer = document.querySelector("#topic-content");

let allArticles = [];

greetingText.textContent = userDetails.getGreeting();
streakCount.textContent = retrieveStreak.streakCount;

// show a loading screen before fetched data comes in
pillsContainer.innerHTML = `
<div class="skeleton-pill"></div>
<div class="skeleton-pill"></div>
<div class="skeleton-pill"></div>
<div class="skeleton-pill"></div>
<div class="skeleton-pill"></div>
<div class="skeleton-pill"></div>
`;
articleContainer.innerHTML = `
  <div class="skeleton-article">
    <div class="skeleton-num"></div>
    <div class="skeleton-body">
      <div class="skeleton-tag"></div>
      <div class="skeleton-title"></div>
      <div class="skeleton-title skeleton-title--short"></div>
      <div class="skeleton-excerpt"></div>
      <div class="skeleton-excerpt skeleton-excerpt--short"></div>
      <div class="skeleton-meta"></div>
    </div>
  </div>
 
  <div class="skeleton-article">
    <div class="skeleton-num"></div>
    <div class="skeleton-body">
      <div class="skeleton-tag"></div>
      <div class="skeleton-title"></div>
      <div class="skeleton-title skeleton-title--short"></div>
      <div class="skeleton-excerpt"></div>
      <div class="skeleton-excerpt skeleton-excerpt--short"></div>
      <div class="skeleton-meta"></div>
    </div>
  </div>
 
  <div class="skeleton-article">
    <div class="skeleton-num"></div>
    <div class="skeleton-body">
      <div class="skeleton-tag"></div>
      <div class="skeleton-title"></div>
      <div class="skeleton-title skeleton-title--short"></div>
      <div class="skeleton-excerpt"></div>
      <div class="skeleton-excerpt skeleton-excerpt--short"></div>
      <div class="skeleton-meta"></div>
    </div>
  </div>
`;
topicsContainer.innerHTML = `
  <div class="skeleton-topic">
    <span class="skeleton-topic-name"></span>
    <span class="skeleton-topic-count"></span>
  </div>
  <div class="skeleton-topic">
    <span class="skeleton-topic-name"></span>
    <span class="skeleton-topic-count"></span>
  </div>
  <div class="skeleton-topic">
    <span class="skeleton-topic-name"></span>
    <span class="skeleton-topic-count"></span>
  </div>
  <div class="skeleton-topic">
    <span class="skeleton-topic-name"></span>
    <span class="skeleton-topic-count"></span>
  </div>
  <div class="skeleton-topic">
    <span class="skeleton-topic-name"></span>
    <span class="skeleton-topic-count"></span>
  </div>
`;

(async () => {
  const getArticles = new ApiService();
  allArticles = await getArticles.fetchWithFallback();

  // POPULATE PILLS SECTIONS
  const getArticleTopic = allArticles.map((article) => {
    return article.topic;
  });
  const uniqueArticleTopic = [...new Set(getArticleTopic)];
  uniqueArticleTopic.unshift("All");
  let pillsHTML = "";
  uniqueArticleTopic
    .slice(0, 14)
    .sort()
    .forEach((topic) => {
      pillsHTML += `<button type="button" class="article-pill">${topic}</button>`;
    });
  pillsContainer.innerHTML = pillsHTML;

  // RENDER ARTICLE LIST TO TOP PICKS
  let articleHTML = "";
  allArticles.slice(0, 20).forEach((article, index) => {
    articleHTML += `<div class="main-article" id="${article.id}">
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
                    </div>`;
  });
  articleContainer.innerHTML = articleHTML;

  // SHOW TOPICS AND NUMBER OF TOPICS IN EACH
  const onlyUniqueArticleTopic = [...uniqueArticleTopic];
  onlyUniqueArticleTopic.shift();
  let topicsHTML = "";
  onlyUniqueArticleTopic.slice(0, 8).forEach((topic) => {
    const getAllArticlesByTopic = allArticles.filter(
      (article) => article.topic === topic,
    );
    topicsHTML += `
      <div class="topic">
        <span class="topic-name">${topic}</span>
        <span class="topic-count">${getAllArticlesByTopic.length} articles</span>
      </div>
    `;
  });
  topicsContainer.innerHTML = topicsHTML;
})();

const displayArticle = (articleID) => {
  window.location.href = `./article.html?id=${articleID}`;
};
