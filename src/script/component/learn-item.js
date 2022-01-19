class LearnItem extends HTMLElement {
  set item(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="col s12 m4 l4">
          <div class="card grey darken-4">
            <img
              src=${this._item.bgImg}
            />
            <div class="card-content white-text">
              <span class="card-title"><span>${this._item.title}</span>
            </div>
          </div>
    </div>`;
  }
}

customElements.define("learn-item", LearnItem);
