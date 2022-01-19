import List from "./list.js";

class DataApiList {
  constructor(keyword, listID, listItem) {
    const url = `https://www.themealdb.com/api/json/v1/1/${keyword}`;
    this.value = url;
    this.listID = listID;
    this.listItem = listItem;
  }

  getList = async () => {
    try {
      const response = await fetch(`${this.value}`);
      const responseJson = await response.json();
      let jsonData;
      if (this.listID === "#categoryList") {
        jsonData = responseJson.categories;
      } else {
        jsonData = responseJson.meals;
      }
      const dataList = await jsonData;
      this.renderList(dataList);
    } catch (message) {
      this.showResponseMessage(message);
    }
  };

  renderList(data) {
    const dataList = new List(this.listID, this.listItem, data);
    dataList.renderItems();
  }

  showResponseMessage = (message = "Check Your Connection") => {
    alert(message);
  };
}

export default DataApiList;
