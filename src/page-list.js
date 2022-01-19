import "regenerator-runtime";
import "./style/style.css";
import $ from "jquery";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import "./script/component/app-bar.js";
import "./script/component/footer.js";

import PageList from "./script/component/container/page-list.js";
import PageDetail from "./script/component/page-detail.js";

const main = () => {
  const setValue = async () => {
    try {
      let value = await localStorage.getItem("data");
      let pageList = new PageList(value);
      pageList;
    } catch (message) {
      showResponseMessage(message);
    }
  };

  const setIdDetail = () => {
    $("#detailList").on("click", ".item", function() {
      const index = $(this).index(".item");
      let element = document.querySelectorAll(".idMeal");
      let value = element[index].innerHTML;
      localStorage.setItem("id", value);
    });
  };

  const getIdDetail = () => {
    $("#detailList").on("click", function() {
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
