// 全部商品數據
const menuData = {
    beer: [
      { name: "經典啤酒", description: "清爽的口感，適合搭配任何餐點。", price: 120, image: "beer.jpg" },
      { name: "黑啤酒", description: "濃郁麥香，適合啤酒愛好者。", price: 150, image: "darkbeer.jpg" },
    ],
    draft: [
        { name: "海尼根生啤酒", description: "清爽可口，新鮮直送。", price: 210, image: "beer.jpg" },
        { name: "生力生啤酒", description: "帶點蜂蜜甜味，苦澀感較低。", price: 180, image: "darkbeer.jpg" },
      ],
    cocktail: [
      { name: "環遊世界", description: "七款烈酒調製而成...。", price: 400, image: "mojito.jpg" },
      { name: "長島冰茶", description: "五款烈酒調和而成...。", price: 350, image: "margarita.jpg" },
    ],
  };
  
  // 動態生成分類內容
  function renderMenu(category) {
    const menuContainer = document.getElementById("menu-container");
    menuContainer.innerHTML = ""; // 清空舊內容
  
    if (!menuData[category] || menuData[category].length === 0) {
      menuContainer.innerHTML = `<p>目前尚無商品。</p>`;
      return;
    }
  
    const items = menuData[category];
    items.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("menu-item");
  
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;
  
      const name = document.createElement("h3");
      name.textContent = item.name;
  
      const description = document.createElement("p");
      description.textContent = item.description;
  
      const price = document.createElement("span");
      price.textContent = `$${item.price}`;
  
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(description);
      card.appendChild(price);
  
      menuContainer.appendChild(card);
    });
  }
  
  // 搜尋功能
  function searchMenu(keyword) {
    const menuContainer = document.getElementById("menu-container");
    menuContainer.innerHTML = "";
  
    const results = [];
    Object.values(menuData).forEach((category) => {
      category.forEach((item) => {
        if (item.name.includes(keyword) || item.description.includes(keyword)) {
          results.push(item);
        }
      });
    });
  
    if (results.length === 0) {
      menuContainer.innerHTML = `<p>找不到相關商品。</p>`;
      return;
    }
  
    results.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("menu-item");
  
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;
  
      const name = document.createElement("h3");
      name.textContent = item.name;
  
      const description = document.createElement("p");
      description.textContent = item.description;
  
      const price = document.createElement("span");
      price.textContent = `$${item.price}`;
  
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(description);
      card.appendChild(price);
  
      menuContainer.appendChild(card);
    });
  }
  
  // 初始化
  document.addEventListener("DOMContentLoaded", () => {
    const menuSelector = document.getElementById("menu-selector");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
  
    // 根據選單切換分類
    menuSelector.addEventListener("change", () => {
      const category = menuSelector.value;
      renderMenu(category);
    });
  
    // 搜尋功能
    searchButton.addEventListener("click", () => {
      const keyword = searchInput.value.trim();
      if (keyword) searchMenu(keyword);
    });
  
    // 預設顯示第一個分類
    renderMenu(menuSelector.value);
  });