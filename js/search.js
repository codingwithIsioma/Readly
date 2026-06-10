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
const retrieveBookmarks = BookmarkManager.loadBookmarksFromLocalStorage();
const newBookmark = new BookmarkManager(retrieveBookmarks);
const searchInput = document.getElementById("search");
const searchResultContainer = document.querySelector(".search-result");
const searchResultLength = document.querySelector(".result-length");
const searchParam = document.querySelector(".search-param");
const resultContainer = document.querySelector(".result-body");
const resultTag = document.querySelector(".result-tag");

let allArticles = [];
searchResultContainer.style.display = "none";
resultTag.style.display = "none";
resultContainer.innerHTML = `<div class="not-searched">Make a search above me!</div>`;

(async () => {
  const getArticles = new ApiService();
  allArticles = await getArticles.fetchWithFallback();
  if (allArticles) {
    searchInput.disabled = false;
  }

  searchInput.addEventListener("input", (e) => {
    let searchValue = e.target.value;
    searchValue = searchValue.toLowerCase();
    if (!searchValue) {
      searchResultContainer.style.display = "none";
      resultTag.style.display = "none";
      resultContainer.innerHTML = `<div class="not-searched">Make a search above me!</div>`;
    } else {
      resultContainer.innerHTML = "";
      const getFilteredResult = allArticles.filter((article) => {
        const searchTopic = (article.topic || "").toLowerCase();
        const searchAuthor = (article.author || "").toLowerCase();
        const searchTitle = (article.title || "").toLowerCase();
        return (
          searchTopic.includes(searchValue) ||
          searchAuthor.includes(searchValue) ||
          searchTitle.includes(searchValue)
        );
      });
      resultTag.style.display = "block";
      searchResultContainer.style.display = "block";
      searchResultLength.textContent = getFilteredResult.length;
      searchParam.textContent = `"${searchValue}"`;
      if (getFilteredResult.length === 0) {
        resultTag.style.display = "none";
      }
      let searchHTML = "";
      getFilteredResult.slice(0, 30).forEach((article, index) => {
        searchHTML = Article.render(article, index, searchHTML);
      });
      resultContainer.innerHTML = searchHTML;

      // SHOW BOOKMARKED ARTICLES ON RENDER
      const resultContainerChildren = [...resultContainer.children];
      resultContainerChildren.forEach((child) => {
        if (newBookmark.hasBookmark(child.attributes.id.value)) {
          const bookmarkIcon = child.lastElementChild.children[0];
          bookmarkIcon.className = "fa-solid fa-bookmark bookmarkBtn";
        }
      });

      // bookmark functionality
      resultContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("bookmarkBtn")) {
          const articleID = e.target.attributes.id.value;
          const isBookmarked = newBookmark.hasBookmark(articleID);
          if (isBookmarked) {
            newBookmark.removeBookmark(articleID);
            e.target.className = "fa-regular fa-bookmark bookmarkBtn";
          } else {
            const findArticle = allArticles.filter(
              (article) => article.id === articleID,
            );
            newBookmark.addBookmark(findArticle[0]);
            e.target.className = "fa-solid fa-bookmark bookmarkBtn";
          }
        }
      });
    }
  });
})();

// redirect to full article page
const displayArticle = (articleID) => {
  window.location.href = `./article.html?id=${articleID}`;
};
