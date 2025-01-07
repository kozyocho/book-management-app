const searchTab = document.getElementById("js-search-tab");
const wishlistTab = document.getElementById("js-wishlist-tab");
const doneTab = document.getElementById("js-done-tab");
const searchSection = document.getElementById("js-search-section");
const wishlistSection = document.getElementById("js-wishlist-section");
const doneSection = document.getElementById("js-done-section");

const tabs = [searchTab, wishlistTab, doneTab];
const sections = [searchSection, wishlistSection, doneSection];

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // 他のタブの "active" クラスを削除
    tabs.forEach((t) => t.classList.remove("active"));

    // クリックされたタブに "active" クラスを付与
    tab.classList.add("active");

    // クリックされたタブに対応するセクションを表示
    const tabId = tab.id.replace("js-", "").replace("-tab", "");
    sections.forEach((section) => {
      section.classList.remove("active");
    });
    let sectionElement = document.getElementById(`js-${tabId}-section`);
    sectionElement.classList.add("active");
    console.log(sectionElement);
  });
});