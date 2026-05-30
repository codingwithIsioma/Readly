class StreakTracker {
  constructor({ streakCount, lastVisit }) {
    this.streakCount = streakCount;
    this.lastVisit = lastVisit;
  }

  checkStreakCount(newVisit) {
    const newVisitToString = newVisit.toDateString();

    if (this.lastVisit === newVisitToString) {
      // same day
      return;
    }

    const nextDayFromLastVisit = new Date(this.lastVisit).getTime() + 86400000;
    const nextDayFromLastVisitString = new Date(
      nextDayFromLastVisit,
    ).toDateString();

    if (newVisitToString === nextDayFromLastVisitString) {
      this.streakCount++;
      this.saveToLocalStorage(this.streakCount, newVisitToString);
    } else {
      this.streakCount = 1;
      this.saveToLocalStorage(this.streakCount, newVisitToString);
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
}
