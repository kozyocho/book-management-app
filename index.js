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

const inputField = document.getElementById("js-input");
const searchButton = document.getElementById("js-searchButton");

//検索ボタンが押されたら入力された内容を取得
searchButton.addEventListener("click", async function () {
  try {
    const searchText = inputField.value.replace(/[\s　]+/g, "+");

    // const url = `https://www.googleapis.com/books/v1/volumes?q=${searchText}&maxResults=30`;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchText}&maxResults=1`;
    console.log(url);

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    const data = await response.json();
    console.log(data);
    const title = data.items.volumeInfo.title;
    const author = data.items.volumeInfo.authors;
    const description = data.items.volumeInfo.description;
    const thumbnail = data.items.volumeInfo.imageLinks.thumbnail;
  } catch (error) {
    console.error(error);
  }
});
