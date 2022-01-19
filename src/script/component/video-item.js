class VideoItem extends HTMLElement {
  set item(video) {
    this._video = video;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="col s12 m4 l4">
        <iframe src=${this._video.source}></iframe>
    </div>`;
  }
}

customElements.define("video-item", VideoItem);
