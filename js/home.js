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

greetingText.textContent = userDetails.getGreeting();
streakCount.textContent = retrieveStreak.streakCount;

(async () => {
  let allArticles = [];
  const getArticles = new ApiService();
  allArticles = await getArticles.fetchWithFallback();

  // POPULATE PILLS SECTIONS
  const getArticleTopic = allArticles.map((article) => {
    return article.topic;
  });
  const uniqueArticleTopic = [...new Set(getArticleTopic)];
  uniqueArticleTopic.unshift("All");
  let pillsHTML = "";
  uniqueArticleTopic.forEach((topic) => {
    pillsHTML += `<button type="button" class="article-pill">${topic}</button>`;
  });
  pillsContainer.innerHTML = pillsHTML;

  // RENDER ARTICLE LIST TO TOP PICKS
  let articleHTML = "";
  allArticles.slice(0, 10).forEach((article, index) => {
    articleHTML += `<div class="main-article" id="${article.id}">
                        <div class="article">
                        <span class="article-num">${String(index + 1).padStart(2, "0")}</span>
                        <div class="article-body">
                            <p class="article-tag">${article.topic}</p>
                            <p class="article-title">
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
})();
