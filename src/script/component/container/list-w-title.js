import List from "./list.js";

class TitleList extends List {
  constructor(selector, item, data, title) {
    super(selector, item, data);
    this.title = title;
    this.renderTitle();
  }

  renderTitle() {
    const title = document.createElement("h1");
    title.innerHTML = `${this.title}`;
    this.selector.appendChild(title);
  }
}

export default TitleList;
