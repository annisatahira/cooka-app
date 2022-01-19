class List {
  constructor(selector, item, data) {
    const selectorElement = document.querySelector(selector);
    this.selector = selectorElement;
    this.listElement = item;
    this.data = data;
  }

  renderItems() {
    this.data.forEach(item => {
      const dataElement = document.createElement(this.listElement);
      dataElement.item = item;
      this.selector.appendChild(dataElement);
    });
  }

  renderMore() {
    const more = document.createElement("div");
    more.innerHTML = '<a class="show-more">Show more</a>';
    this.selector.appendChild(more);
  }
}

export default List;
