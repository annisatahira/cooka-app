class SearchData {
  constructor(keyword) {
    this.keyword = keyword;
    this.getResult();
  }

  getResult = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.keyword}`
      );
      const responseJson = await response.json();
      this.renderResult(responseJson.meals);
    } catch (message) {
      const resultElement = document.querySelector("#result");
      resultElement.innerHTML = `<h1>${this.keyword} not found :( but don't worry let's try seach another meals :)</h1>`;
    }
  };

  renderResult = meals => {
    const resultElement = document.querySelector("#result");
    resultElement.innerHTML = `<h1>Result of ${this.keyword}</h1>`;

    meals.forEach(meal => {
      resultElement.innerHTML += `
      <style>
      .card-content {
        position: relative;
        text-align: center;
        height: 100px;
        padding: 0;
      }
      
      .card-title {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
      </style>
      <div class="col s12 m6 l3 listItem">
        <div class="card item">
          <div class="card-image">
            <img src=${meal.strMealThumb}>
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">cooka</i></a>
          </div>
          <div class="card-content">
            <h6 class="idMeal">${meal.idMeal}</h6>
            <span class="card-title">${meal.strMeal}</span>
          </div>
        </div>
      </div>
      `;
    });
  };
}

export default SearchData;
