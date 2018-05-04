function toggleMenu() {
  var menuList = document.getElementById("navList");
  if (menuList.className === "menu-list") {
    menuList.className += " responsive";
  } else {
    menuList.className = "menu-list";
  }
}
