import $ from "jquery";
import "slick-carousel";
import "../component/category-item.js";
import "../component/banner-item.js";
import "../component/text-item.js";
import "../component/learn-item.js";
import "../component/area-item.js";
import "../component/video-item.js";
import "../component/ingredient-item.js";
import "../component/quote-item.js";
import {
  banners,
  about,
  learns,
  areas,
  quotes,
  videos
} from "../data/data-app.js";

import List from "../component/container/list.js";
import TitleList from "../component/container/list-w-title.js";
import DataApiList from "../component/container/api-list.js";
import ChangeList from "../action/change-list.js";

const main = () => {
  const getCategoryMeal = async () => {
    try {
      const categoryList = await new DataApiList(
        "categories.php",
        "#categoryList",
        "category-item"
      );
      await categoryList.getList();
      await slick();
      changeListCategory.changeList();
    } catch (message) {
      showResponseMessage(message);
    }
  };

  const getIngredientsCategory = async () => {
    try {
      const ingredientList = await new DataApiList(
        "list.php?i=list",
        "#ingredientList",
        "ingredient-item"
      );
      await ingredientList.getList();
      await displayIngredients();
      changeListIngredient.changeList();
    } catch (message) {
      showResponseMessage(message);
    }
  };

  const categoryTitle = document.querySelector("#categoryTitle");
  const title = document.createElement("h1");
  title.innerHTML = `Meal Categories`;
  categoryTitle.appendChild(title);

  const ingredientTitle = document.querySelector("#ingredientTitle");
  const iTitle = document.createElement("h1");
  iTitle.innerHTML = `Ingredient Categories`;
  ingredientTitle.appendChild(iTitle);

  const slick = () => {
    $("#categoryList").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  };

  const displayIngredients = () => {
    const ingredientItemElement = document.querySelectorAll("#ingredientItem");

    for (let i = 0; i < ingredientItemElement.length; i++) {
      ingredientItemElement[i].style.display = "none";
    }

    for (let i = 0; i < 40; i++) {
      ingredientItemElement[i].style.display = "block";
    }
  };

  const showResponseMessage = (message = "Check Your Connection") => {
    alert(message);
  };

  const bannerList = new List("#banner", "banner-item", banners);
  bannerList.renderItems();

  $("#banner").slick({
    dots: true,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });

  const textList = new List("#textList", "text-item", about);
  textList.renderItems();
  textList.renderMore();

  if ($("text-item").length > 2) {
    $("text-item:gt(0)").hide();
    $(".show-more").show();
  }

  $(".show-more").on("click", function() {
    $("text-item:gt(0)").toggle();
    $(this).text() === "Show more"
      ? $(this).text("Show less")
      : $(this).text("Show more");
  });

  const learnList = new TitleList(
    "#learnList",
    "learn-item",
    learns,
    "Why We Should Learn Cooking"
  );
  learnList.renderItems();

  const getAreaList = async () => {
    try {
      const areaList = await new TitleList(
        "#areaList",
        "area-item",
        areas,
        "World's Meal Categories"
      );
      await areaList.renderItems();
      await showPagination();
      await pagination("area-item");
      changeListArea.changeList();
    } catch (message) {
      showResponseMessage(message);
    }
  };

  const showPagination = () => {
    $(".pagination").css("display", "block");
  };

  const pagination = item => {
    //
    //  get num of item and compute num of pages
    //
    const nItem = $(item).length;
    const nPages = Math.ceil(nItem / $(".pagination").data("page-size"));
    //
    // save num pages as a data attribute of pagination element
    //
    $(".pagination").data("num-pages", nPages);
    //
    // Create the buttons on the fly
    //
    for (let i = 1; i < nPages; i++) {
      $("<li/>")
        .append($("<a/>", { href: "#", text: i + 1 }))
        .insertBefore(".pagination li:has([rel]):last");
    }
    //
    // handle pagination
    //
    $(".pagination li").on("click", function(e) {
      //
      // prevent default action
      //
      e.preventDefault();

      //
      // The clicked element is the next one......
      //
      let clickedElement = $(this);
      let nextElement = clickedElement;

      //
      // ....if the clicked element is Next or Prev buttons
      //
      let nextPrevAnchorElement = clickedElement.find("a[rel]");
      if (nextPrevAnchorElement.length == 1) {
        //
        // compute the next element
        //
        if (nextPrevAnchorElement.text().trim() == "Next") {
          nextElement = $(".pagination li.active").next("li:not(:has([rel]))");
          if (nextElement.length == 0) {
            nextElement = $(".pagination li:not(:has([rel])):first");
          }
        } else {
          nextElement = $(".pagination li.active").prev("li:not(:has([rel]))");
          if (nextElement.length == 0) {
            nextElement = $(".pagination li:not(:has([rel])):last");
          }
        }
      }
      //
      // toggle active page
      //
      $(".pagination li.active").removeClass("active");
      nextElement.addClass("active");

      //
      // get the number of active page
      //
      let currentPageNumber =
        +nextElement
          .find("a")
          .text()
          .trim() - 1;

      //
      // get the page size
      //
      let pageSize = +$(".pagination").data("page-size");
      //
      // toggle visibility
      //
      $(`${item}:visible`).toggle(false);
      $(item)
        .slice(currentPageNumber * pageSize, (currentPageNumber + 1) * pageSize)
        .toggle(true);
    });
    //
    // show the active page
    //
    $(".pagination li.active a").trigger("click");
  };

  const quoteTitle = document.querySelector("#quoteTitle");
  const qTitle = document.createElement("h1");
  qTitle.innerHTML = `Quote's About Cooking`;
  quoteTitle.appendChild(qTitle);

  const quoteList = new List("#quoteList", "quote-item", quotes);

  quoteList.renderItems();

  $("#quoteList").slick({
    dots: false,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true
  });

  const videoList = new TitleList(
    "#videoList",
    "video-item",
    videos,
    "Recommended Cooking Video"
  );
  videoList.renderItems();

  const changeListCategory = new ChangeList(
    ".changeListCategory",
    ".categoryId",
    "c"
  );

  const changeListIngredient = new ChangeList(
    ".changeListIngredient",
    ".ingredientId",
    "i"
  );

  const changeListArea = new ChangeList(".changeListArea", ".areaId", "a");

  getCategoryMeal();
  getIngredientsCategory();
  getAreaList();
};

export default main();
