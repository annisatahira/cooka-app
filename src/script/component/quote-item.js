class QuoteItem extends HTMLElement {
  set item(quote) {
    this._quote = quote;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div>
        <div class="col s12 m12 l12">
        <p>${this._quote.tSay}</p>
        <h7>${this._quote.tName}</h7>
        </div>
      </div>
      `;
  }
}

customElements.define("quote-item", QuoteItem);
