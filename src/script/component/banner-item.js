class BannerItem extends HTMLElement {
  set item(banner) {
    this._banner = banner;
    this.render();
  }

  render() {
    this.innerHTML = `
    <img src=${this._banner.bannerImage} alt="food wallpaper"/>
    <div class="text-banner">
      <h1>${this._banner.title}</h1>
      <p>${this._banner.description}</p>
    </div>
         `;
  }
}

customElements.define("banner-item", BannerItem);
