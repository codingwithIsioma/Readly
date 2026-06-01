class StreakTracker {
  constructor({ streakCount, lastVisit }) {
    this.streakCount = streakCount;
    this.lastVisit = lastVisit;
  }

  checkStreakCount(newVisit) {
    const newVisitToString = newVisit.toDateString();

    if (this.lastVisit === newVisitToString) {
      // same day
      console.log("same day");
      return;
    }

    const nextDayFromLastVisit = new Date(this.lastVisit).getTime() + 86400000;
    const nextDayFromLastVisitString = new Date(
      nextDayFromLastVisit,
    ).toDateString();

    if (newVisitToString === nextDayFromLastVisitString) {
      this.streakCount++;
      this.saveToLocalStorage(this.streakCount, newVisitToString);
      console.log("new day");
    } else {
      this.streakCount = 1;
      this.saveToLocalStorage(this.streakCount, newVisitToString);
      console.log("skipped day");
    }
  }

  saveToLocalStorage(streakCount, lastVisit) {
    localStorage.setItem(
      "readly_streak",
      JSON.stringify({
        streakCount: streakCount,
        lastVisit: lastVisit,
      }),
    );
  }

  static loadFromLocalStorage() {
    const getStreakCount = JSON.parse(localStorage.getItem("readly_streak"));
    return getStreakCount;
  }

  static removeFromLocalStorage() {
    localStorage.clear("readly_streak");
  }
}
