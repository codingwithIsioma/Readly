class TopicTracker {
  constructor(topicMap) {
    this.topicMap = new Map(topicMap || []);
  }

  increment(topic) {
    this.topicMap.set(topic, (this.topicMap.get(topic) || 0) + 1);
    this.saveToLocalStorage(this.topicMap);
  }

  getTopN(n) {
    const transformToArray = Array.from(this.topicMap);
    const sortedArray = transformToArray.sort((a, b) => b[1] - a[1]);
    return sortedArray.slice(0, n);
  }

  saveToLocalStorage(mapObject) {
    const transformedMap = [...mapObject.entries()];
    localStorage.setItem("readly_topic_count", JSON.stringify(transformedMap));
  }

  static loadFromLocalStorage() {
    return JSON.parse(localStorage.getItem("readly_topic_count"));
  }

  static removeFromLocalStorage() {
    localStorage.clear("readly_topic_count");
  }
}
