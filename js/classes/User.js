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
    const greeting = `${timeOfDay}, ${this.name}`;
    return greeting;
  }

  getMemberSince() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = new Date(this.joinedAt).getMonth();
    const year = new Date(this.joinedAt).getFullYear();
    const joined = `${months[month]} ${year}`;
    return joined;
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

  static removeFromLocalStorage() {
    localStorage.clear("readly_user");
  }
}
