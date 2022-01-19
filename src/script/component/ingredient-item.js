class IngredientItem extends HTMLElement {
  //mendapatkan data
  set item(ingredient) {
    this._ingredient = ingredient;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="ingredientItem" class="col s6 m4 l3 changeListIngredient">
         <p><a class="ingredientId">${this._ingredient.strIngredient}</a></p>
     </div>
          `;
  }
}

customElements.define("ingredient-item", IngredientItem);
