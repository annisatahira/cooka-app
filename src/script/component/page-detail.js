import "jquery";
import $ from "jquery";
import "materialize-css/dist/js/materialize.min";
import "materialize-css/dist/css/materialize.min.css";

class PageDetail {
  constructor(id) {
    this.id = id;
    this.getDetailItem();
  }

  getDetailItem = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`
      );
      const responseJson = await response.json();
      await this.renderDetailItem(responseJson.meals);
      this.showDetail();
    } catch (message) {
      this.showResponseMessage(message);
    }
  };

  renderDetailItem = meals => {
    const detailItemElement = document.querySelector("#detailItem");

    meals.forEach(meal => {
      detailItemElement.innerHTML += `
      <div id="overlayItem">
          <span class="closebtn" title="Close Meal">×</span>
          <div id="itemContent" class="card">
            <div class="row">
              <div class="col s12 m12 l5">
                <img src=${meal.strMealThumb} />
                <h4>${meal.strMeal}</h4>
                <br />
                <div class="col s6 m6 l6 border-right">
                  <h5>${meal.strArea}<h5>
                </div>
                <div class="col s6 m6 l6">
                  <h5>${meal.strCategory}<h5>
                </div>
                <div class="col s12 m12 l12">
                  <h5 style="padding-top:20px;"><a href=${meal.strYoutube}>Click to Watch Video</a></h5>
                </div>
              </div>
              <div class="col s12 m12 l7 scrollable">
                <div id="ingredients" class="col s12 l12">
                <h4>Ingredients</h4>
                <table>
                <thead>
                  <tr>
                      <th>Ingredient</th>
                      <th>Measure</th>
                  </tr>
                </thead>
        
                <tbody>
                  <tr>
                    <td>${meal.strIngredient1}</td>
                    <td>${meal.strMeasure1}</td>
                  </tr>
                  <tr>
                    <td>${meal.strIngredient2}</td>
                    <td>${meal.strMeasure2}</td>
                  </tr>
                  <tr>
                    <td>${meal.strIngredient3}</td>
                    <td>${meal.strMeasure3}</td>
                  </tr>
                  <tr>
                    <td>${meal.strIngredient4}</td>
                    <td>${meal.strMeasure4}</td>
                  </tr>
                  <tr>
                    <td>${meal.strIngredient5}</td>
                    <td>${meal.strMeasure5}</td>
                  </tr>
                  <tr>
                    <td>${meal.strIngredient6}</td>
                    <td>${meal.strMeasure6}</td>
                  </tr>
                  <tr>
                    <td>${meal.strIngredient7}</td>
                    <td>${meal.strMeasure7}</td>
                  </tr>
                  <tr>
                    <td>${meal.strIngredient8}</td>
                    <td>${meal.strMeasure8}</td>
                  </tr>
                  <tr>
                    <td>${meal.strIngredient9}</td>
                    <td>${meal.strMeasure9}</td>
                  </tr>
                  <tr>
                    <td>${meal.strIngredient10}</td>
                    <td>${meal.strMeasure10}</td>
                  </tr>
                  <tr>
                    <td class="empty">${meal.strIngredient11}</td>
                    <td class="empty">${meal.strMeasure11}</td>
                  </tr>
                  <tr>
                    <td class="empty">${meal.strIngredient12}</td>
                    <td class="empty">${meal.strMeasure12}</td>
                  </tr>
                  <tr>
                    <td class="empty">${meal.strIngredient13}</td>
                    <td class="empty">${meal.strMeasure13}</td>
                  </tr>
                  <tr>
                    <td class="empty">${meal.strIngredient14}</td>
                    <td class="empty">${meal.strMeasure14}</td>
                  </tr>
                  <tr>
                    <td class="empty">${meal.strIngredient15}</td>
                    <td class="empty">${meal.strMeasure15}</td>
                  </tr>
                  <tr>
                    <td class="empty">${meal.strIngredient16}</td>
                    <td class="empty">${meal.strMeasure16}</td>
                </tr>
                  <tr>
                    <td>${meal.strIngredient17}</td>
                    <td>${meal.strMeasure17}</td>
                  </tr>
                  <tr>
                    <td>${meal.strIngredient18}</td>
                    <td>${meal.strMeasure18}</td>
                  </tr>
                  <tr>
                    <td>${meal.strIngredient19}</td>
                    <td>${meal.strMeasure19}</td>
                  </tr>
                  <tr>
                    <td>${meal.strIngredient20}</td>
                    <td>${meal.strMeasure20}</td>
                  </tr>
                </tbody>
              </table>
                </div>
                <div id="instruction" class="col s12">
                <h4>How To Cook</h4>
                  <p>
                    ${meal.strInstructions}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  };

  hideCellIfEmpty() {
    const ingredientItemElement = document.querySelectorAll("td");

    for (let i = 0; i < ingredientItemElement.length; i++) {
      if (
        ingredientItemElement[i].innerText === "null" ||
        ingredientItemElement[i].innerText === ""
      )
        $(ingredientItemElement[i]).hide();
    }
  }

  showDetail() {
    document.querySelector("#overlayItem").style.display = "block";
    this.hideCellIfEmpty();
    $(".closebtn").on("click", function(e) {
      e.preventDefault();
      document.getElementById("overlayItem").style.display = "none";
      $("#overlayItem").remove();
    });
  }

  showResponseMessage = (message = "Check Your Connection") => {
    alert(message);
  };
}

export default PageDetail;
