class User {
  constructor({ name, email, password, joinedAt, isLoggedIn }) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.joinedAt = joinedAt;
    this.isLoggedIn = isLoggedIn;
  }

  getInitials() {
    const initials = this.name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
    return initials;
  }

  getGreeting() {
    const hour = new Date().getHours();
    const timeOfDay =
      hour < 12
        ? "GOOD MORNING"
        : hour < 17
          ? "GOOD AFTERNOON"
          : "GOOD EVENING";
    return timeOfDay;
  }

  saveToLocalStorage() {
    const userObject = {
      name: this.name,
      email: this.email,
      password: this.password,
      joinedAt: this.joinedAt,
      isLoggedIn: this.isLoggedIn,
    };
    localStorage.setItem("readly_user", JSON.stringify(userObject));
  }

  static loadFromLocalStorage() {
    const returningUser = JSON.parse(localStorage.getItem("readly_user"));
    return returningUser;
  }
}
