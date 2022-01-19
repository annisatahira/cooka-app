import "regenerator-runtime";
import "./style/style.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import $ from "jquery";
import "./script/component/app-bar.js";
import "./script/component/footer.js";

import SearchData from "./script/action/page-result.js";
import PageDetail from "./script/component/page-detail.js";

const main = () => {
  const setValue = async () => {
    try {
      let value = await localStorage.getItem("searchValue");
      const pageResult = new SearchData(value);
      pageResult;
    } catch (message) {
      showResponseMessage(message);
    }
  };
  const setIdDetail = () => {
    $("#result").on("click", ".item", function() {
      const index = $(this).index(".item");
      let element = document.querySelectorAll(".idMeal");
      let value = element[index].innerHTML;
      localStorage.setItem("id", value);
    });
  };

  const getIdDetail = () => {
    $("#result").on("click", function() {
      let idMeal = localStorage.getItem("id");
      let pageDetail = new PageDetail(idMeal);
      pageDetail;
    });
  };

  const showResponseMessage = (message = "Check Your Connection") => {
    console.log(message);
  };

  setIdDetail();
  getIdDetail();
  setValue();
};

document.addEventListener("DOMContentLoaded", main());
