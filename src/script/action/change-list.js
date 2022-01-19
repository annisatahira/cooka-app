import $ from "jquery";

class ChangeList {
  constructor(listItem, listId, selector) {
    this.listItem = listItem;
    this.listId = listId;
    this.selector = selector;
  }

  changeList() {
    const _listItem = this.listItem;
    const _listId = this.listId;
    const _selector = this.selector;
    $(_listItem).click(function() {
      const index = $(_listItem).index(this);
      let element = document.querySelectorAll(_listId);
      let value = element[index].innerHTML;
      let listData = `${_selector}=${value}`;
      localStorage.setItem("data", listData);
      $(location).attr("href", "pageList.html");
    });
  }
}

export default ChangeList;
