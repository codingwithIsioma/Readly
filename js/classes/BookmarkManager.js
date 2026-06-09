class BookmarkManager {
  constructor(bookmarkArray) {
    this.bookmarkArray = bookmarkArray || [];
  }

  addBookmark(article) {
    this.bookmarkArray.push({
      articleDetails: article,
    });
    this.saveBookmarksToLocalStorage(this.bookmarkArray);
  }

  removeBookmark(id) {
    const findBookmark = this.bookmarkArray.findIndex(
      (article) => article.articleDetails.id === id,
    );
    this.bookmarkArray.splice(findBookmark, 1);
    this.saveBookmarksToLocalStorage(this.bookmarkArray);
  }

  hasBookmark(id) {
    return this.bookmarkArray.some(
      (article) => article.articleDetails.id === id,
    );
  }

  renderBookmarkedArticles() {
    let container = "";
    this.bookmarkArray.forEach((article) => {
      container += `
        <div class="bookmark-item">
            <p class="bookmark-category">${article.articleDetails.topic}</p>
            <h4 class="bookmark-title" id="${article.articleDetails.id}">
              ${article.articleDetails.title.length > 70 ? article.articleDetails.title.slice(0, 69) + "..." : article.articleDetails.title}
            </h4>
            <p class="bookmark-meta">${article.articleDetails.readTime} min read · ${article.articleDetails.author}</p>
            <button type="button" class="remove-bookmark" id="${article.articleDetails.id}">
              Remove bookmark
            </button>
        </div>
        `;
    });
    return container;
  }

  getBookmarkCount() {
    return this.bookmarkArray.length;
  }

  saveBookmarksToLocalStorage(newBookmarkArray) {
    localStorage.setItem("readly_bookmarks", JSON.stringify(newBookmarkArray));
  }

  static loadBookmarksFromLocalStorage() {
    return JSON.parse(localStorage.getItem("readly_bookmarks"));
  }

  static removeBookmarksFromLocalStorage() {
    localStorage.clear("readly_bookmarks");
  }
}
