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
const retrieveBookmarks = BookmarkManager.loadBookmarksFromLocalStorage();
const newBookmark = new BookmarkManager(retrieveBookmarks);

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

let articleHTML = "";

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
    .slice(0, 40)
    .sort()
    .forEach((topic) => {
      pillsHTML += `<button type="button" class="article-pill" onclick=filterArticle("${topic.toLowerCase().split(" ").join("-")}")>${topic}</button>`;
    });
  pillsContainer.innerHTML = pillsHTML;

  // RENDER ARTICLE LIST TO TOP PICKS
  allArticles.slice(0, 20).forEach((article, index) => {
    articleHTML = Article.render(article, index, articleHTML);
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

  // ......on load active pill should be "all"
  const articlePill = document.querySelectorAll(".article-pill");
  articlePill.forEach((pill) => {
    if (pill.textContent.toLowerCase() === "all") {
      pill.classList.add("active-pill");
    }
  });

  // SHOW BOOKMARKED ARTICLES ON RENDER
  const articleContainerChildren = [...articleContainer.children];
  articleContainerChildren.forEach((child) => {
    if (newBookmark.hasBookmark(child.attributes.id.value)) {
      const bookmarkIcon = child.lastElementChild.children[0];
      bookmarkIcon.className = "fa-solid fa-bookmark bookmarkBtn";
    }
  });

  // bookmark functionality
  articleContainer.addEventListener("click", (e) => {
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
})();

// RENDER LIST BASED ON FILTER PILL
const filterArticle = (topic) => {
  const articlePill = document.querySelectorAll(".article-pill");
  articlePill.forEach((pill) => {
    if (pill.textContent.toLowerCase() === topic.split("-").join(" ")) {
      pill.classList.add("active-pill");
    } else {
      pill.classList.remove("active-pill");
    }
  });
  if (topic === "all") {
    let allContainer = "";
    allArticles.slice(0, 20).forEach((article, index) => {
      allContainer = Article.render(article, index, allContainer);
    });
    articleContainer.innerHTML = allContainer;
    // SHOW BOOKMARKED ARTICLES ON RENDER
    const articleContainerChildren = [...articleContainer.children];
    articleContainerChildren.forEach((child) => {
      if (newBookmark.hasBookmark(child.attributes.id.value)) {
        const bookmarkIcon = child.lastElementChild.children[0];
        bookmarkIcon.className = "fa-solid fa-bookmark bookmarkBtn";
      }
    });
  } else {
    const filteredArr = allArticles.filter((article) => {
      return article.topic.toLowerCase() === topic.split("-").join(" ");
    });
    let filteredHTML = "";
    filteredArr.slice(0, 20).forEach((article, index) => {
      filteredHTML = Article.render(article, index, filteredHTML);
    });
    articleContainer.innerHTML = filteredHTML;
    // SHOW BOOKMARKED ARTICLES ON RENDER
    const articleContainerChildren = [...articleContainer.children];
    articleContainerChildren.forEach((child) => {
      if (newBookmark.hasBookmark(child.attributes.id.value)) {
        const bookmarkIcon = child.lastElementChild.children[0];
        bookmarkIcon.className = "fa-solid fa-bookmark bookmarkBtn";
      }
    });
  }
};

// redirect to full article page
const displayArticle = (articleID) => {
  window.location.href = `./article.html?id=${articleID}`;
};
