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
const backToFeed = document.querySelector(".back-to-feed");
const specificArticleContainer = document.querySelector(".article-container");
const firstLetter = document.querySelector(".article-body");
const pageTitle = document.querySelector(".page-title");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const specificArticleID = urlParams.get("id");
const getTopicsCount = TopicTracker.loadFromLocalStorage();
const getArticlesRead = Article.loadCountFromLocalStorage();
let articlesRead = getArticlesRead ? getArticlesRead.articlesRead : 0;

specificArticleContainer.innerHTML = `
        <div class="skeleton-article-details">
            <div>
              <div class="skeleton-article-category"></div>
              <div class="skeleton-article-title"></div>
              <div class="skeleton-article-meta">
                <div class="skeleton-author-initials"></div>
                <div>
                  <div class="skeleton-author"></div>
                  <div class="skeleton-read-time"></div>
                </div>
              </div>
            </div>
            <div class="skeleton-bookmark-article"></div>
        </div>

        <div class="skeleton-article-body">
            <div class="skeleton-body-p"></div>
            <div class="skeleton-body-p"></div>
            <div class="skeleton-body-p--short"></div>
            <div class="skeleton-body-p"></div>
            <div class="skeleton-body-p--shorter"></div>
        </div>
`;

(async () => {
  const getSpecificArticle = new ApiService();
  const specificArticle =
    await getSpecificArticle.fetchArticleById(specificArticleID);
  pageTitle.textContent = specificArticle.title;
  specificArticleContainer.innerHTML = FeaturedArticle.render(specificArticle);
  const firstLetter = document.querySelector(".article-body p");
  firstLetter.classList.add("drop-cap");

  // increment number of articles read
  articlesRead += 1;
  Article.saveCountToLocalStorage(articlesRead);

  // increment number of articles per topic read
  const newTopicCount = new TopicTracker(getTopicsCount);
  newTopicCount.increment(specificArticle.topic);
})();

backToFeed.addEventListener("click", () => {
  window.history.back();
});