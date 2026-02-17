const categoryContainer = document.getElementById("category-buttons");
const productsContainer = document.getElementById("products-container");

let activeBtn = null;

// Load categories
async function loadCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await res.json();

  createCategoryButton("all");

  categories.forEach(cat => createCategoryButton(cat));
}

// create category buttons
function createCategoryButton(category) {
  const btn = document.createElement("button");
  btn.innerText = category;

  btn.className =
    "px-4 py-2 rounded-full border text-sm font-medium capitalize transition";

  btn.addEventListener("click", () => {
    setActive(btn);
    loadProducts(category);
  });

  categoryContainer.appendChild(btn);

  // default active
  if (category === "all") {
    setActive(btn);
  }
}

// active btn
function setActive(btn) {
  if (activeBtn) {
    activeBtn.classList.remove("bg-indigo-600", "text-white");
  }
  btn.classList.add("bg-indigo-600", "text-white");
  activeBtn = btn;
}

// Load products
async function loadProducts(category) {
 productsContainer.innerHTML = `
  <div class="col-span-full flex justify-center py-10">
    <span class="loading loading-spinner loading-lg text-indigo-600"></span>
  </div>
`;

  let url = "https://fakestoreapi.com/products";

  if (category !== "all") {
    url = `https://fakestoreapi.com/products/category/${category}`;
  }

  const res = await fetch(url);
  const products = await res.json();

  displayProducts(products);
}

// Display Products
function displayProducts(products) {
  productsContainer.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");

    card.innerHTML = `
      <div class="bg-white rounded-2xl shadow-sm overflow-hidden border hover:shadow-md transition">

        <div class="bg-gray-100 flex justify-center items-center h-72">
          <img src="${product.image}" class="h-56 object-contain" />
        </div>

        <div class="p-6">
          <div class="flex justify-between mb-4">
            <span class="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full font-medium capitalize">
              ${product.category}
            </span>
            <span class="text-sm text-gray-500">
              ⭐ ${product.rating.rate} (${product.rating.count})
            </span>
          </div>

          <h3 class="font-semibold text-lg mb-3 line-clamp-2">
  ${product.title}
</h3>


          <p class="font-bold text-lg mb-6">$${product.price}</p>

          <div class="flex gap-4">
            <button class="flex-1 border rounded-lg py-2 text-gray-600 hover:bg-gray-100">
              <i class="fa-regular fa-eye"></i> Details
            </button>
            <button class="flex-1 bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700">
              <i class="fa-solid fa-cart-arrow-down"></i> Add
            </button>
          </div>
        </div>

      </div>
    `;

    productsContainer.appendChild(card);
  });
}

loadCategories();
loadProducts("all");
