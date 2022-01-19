class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Cooka</h5>
            <p class="grey-text text-lighten-4">
              Provide You Idea What You Cook Today!
            </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Reference Page</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="www.yummly.com/">Yummly</a></li>
              <li><a class="grey-text text-lighten-3" href="www.zomato.com">Zomato</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2020 DIcoding Submission Anta
          <a class="grey-text text-lighten-4 right" href="www.themealdb.com/api.php">The Meal DB API</a>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("app-footer", Footer);
