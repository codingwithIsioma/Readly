// AUTHENTICATION GUARD
const retrieveUser = User.loadFromLocalStorage();
if (!retrieveUser || retrieveUser.isLoggedIn === false) {
  window.location.href = "./signin.html";
}

(async () => {
  // UPDATE STREAK COUNTER
  const retrieveStreak = StreakTracker.loadFromLocalStorage();
  const userStreak = new StreakTracker(retrieveStreak);
  userStreak.checkStreakCount(new Date());

  // EVERYTHING ELSE....
  const userDetails = new User(retrieveUser);
  const greetingText = document.getElementById("greetingText");
  const streakCount = document.getElementById("streak");
  const articleContainer = document.querySelector(".article-section-container");

  greetingText.textContent = userDetails.getGreeting();
  streakCount.textContent = retrieveStreak.streakCount;

  let allArticles = [];
  const getArticles = new ApiService();
  allArticles = await getArticles.fetchWithFallback();

  let articleHTML = "";
  allArticles.slice(0, 3).forEach((element, index) => {
    articleHTML += `<div class="main-article" id="${element.id}">
                        <div class="article">
                        <span class="article-num">${String(index + 1).padStart(2, "0")}</span>
                        <div class="article-body">
                            <p class="article-tag">${element.topic}</p>
                            <p class="article-title">
                            ${element.title}
                            </p>
                            <p class="article-excerpt">
                            ${element.excerpt}
                            </p>
                            <span class="article-meta">${element.readTime} min read · ${element.author}</span>
                        </div>
                        </div>
                        <div class="bookmark-article">
                        <i class="fa-regular fa-bookmark"></i>
                        </div>
                    </div>`;
  });
  articleContainer.innerHTML = articleHTML;
})();
