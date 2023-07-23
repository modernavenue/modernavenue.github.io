const navItems = document.querySelectorAll("#navbar li a");
const currentPath = window.location.pathname;
const homeLink = document.querySelector("#navbar li:first-child a");
const shopLink = document.querySelector("#navbar li:nth-child(2) a");
const blogLink = document.querySelector("#navbar li:nth-child(3) a");
const aboutLink = document.querySelector("#navbar li:nth-child(4) a");
const contactLink = document.querySelector("#navbar li:nth-child(5) a");

const bar = document.getElementById('bar');
const closeButtons = document.querySelectorAll('#close a');
const nav = document.getElementById('navbar');

const toggleNavbar = () => {
  nav.classList.toggle('active');
};

closeButtons.forEach((close) => {
  close.addEventListener('click', (event) => {
    event.preventDefault();
    toggleNavbar();
  });
});

if (bar) {
  bar.addEventListener('click', () => {
    toggleNavbar();
  });
}

navItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    navItems.forEach((navItem) => {
      navItem.classList.remove("active");
    });
    item.classList.add("active");
  });
});

document.addEventListener("mouseleave", () => {
  navItems.forEach((item) => {
    item.classList.remove("active");
  });

  if (currentPath === "/index.html") {
    homeLink.classList.add("active");
  } else if (currentPath === "/shop.html") {
    shopLink.classList.add("active");
  } else if (currentPath === "/blog.html") {
    blogLink.classList.add("active");
  } else if (currentPath === "/about.html") {
    aboutLink.classList.add("active");
  } else if (currentPath === "/contact.html") {
    contactLink.classList.add("active");
  }
});

document.addEventListener("mouseover", () => {
  const hoveredItem = document.querySelector("#navbar li a:hover");
  if (!hoveredItem) {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });

    if (currentPath === "/index.html") {
      homeLink.classList.add("active");
    } else if (currentPath === "/shop.html") {
      shopLink.classList.add("active");
    } else if (currentPath === "/blog.html") {
      blogLink.classList.add("active");
    } else if (currentPath === "/about.html") {
      aboutLink.classList.add("active");
    } else if (currentPath === "/contact.html") {
      contactLink.classList.add("active");
    }
  }
});

if (currentPath === "/index.html") {
  homeLink.classList.add("active");
} else if (currentPath === "/shop.html") {
  shopLink.classList.add("active");
} else if (currentPath === "/blog.html") {
  blogLink.classList.add("active");
} else if (currentPath === "/about.html") {
  aboutLink.classList.add("active");
} else if (currentPath === "/contact.html") {
  contactLink.classList.add("active");
}

// Function to update the subtotal based on the quantity
function updateSubtotal() {
  const quantityInput = document.querySelector("#pdetails input[type='number']");
  const quantity = parseInt(quantityInput.value);
  const price = 1500; // Replace with the actual price value from your data
  const subtotal = quantity * price;

  return subtotal;
}

// Function to remove an item from the cart
function removeItem(event) {
  const removeButton = event.target;
  const row = removeButton.closest("tr");
  const subtotalCell = row.querySelector(".subtotal");
  const subtotal = parseInt(subtotalCell.textContent.slice(3));
  const subtotalContainer = document.getElementById("subtotal");
  const currentSubtotal = parseInt(subtotalContainer.dataset.subtotal);
  const newSubtotal = currentSubtotal - subtotal;

  row.remove();
  subtotalContainer.dataset.subtotal = newSubtotal;
  subtotalContainer.textContent = `Subtotal: Php ${newSubtotal}.00`;
}

// Function to add a new item to the cart
function addItemToCart() {
  const productName = document.querySelector("#pdetails .single-pro-details h4").textContent;
  const productPrice = parseInt(document.querySelector("#pdetails .single-pro-details h2").textContent.slice(4));
  const quantity = parseInt(document.querySelector("#pdetails input[type='number']").value);
  const subtotal = productPrice * quantity;

  const tbody = document.querySelector("#cart tbody");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
      <td><button class="remove-button"><i class="far fa-times-circle"></i></button></td>
      <td><img src="img/products/a1.webp" alt=""></td>
      <td>${productName}</td>
      <td>Php ${productPrice}.00</td>
      <td>${quantity}</td>
      <td class="subtotal">Php ${subtotal}.00</td>
  `;

  const removeButton = newRow.querySelector(".remove-button");
  removeButton.addEventListener("click", removeItem);

  tbody.appendChild(newRow);

  const subtotalContainer = document.getElementById("subtotal");
  const currentSubtotal = parseInt(subtotalContainer.dataset.subtotal);
  const newSubtotal = currentSubtotal + subtotal;

  subtotalContainer.dataset.subtotal = newSubtotal;
  subtotalContainer.textContent = `Subtotal: Php ${newSubtotal}.00`;
}

// Add event listener to the "Add To Cart" button
const addToCartButton = document.querySelector("#pdetails .single-pro-button");
addToCartButton.addEventListener("click", addItemToCart);

// Existing code...
document.addEventListener("DOMContentLoaded", function() {
  // Function to update the subtotal based on the quantity
  function updateSubtotal() {
    const quantityInput = document.querySelector("#pdetails input[type='number']");
    const quantity = parseInt(quantityInput.value);
    const price = 1500; // Replace with the actual price value from your data
    const subtotal = quantity * price;

    return subtotal;
  }

  // Function to remove an item from the cart
  function removeItem(event) {
    const removeButton = event.target;
    const row = removeButton.closest("tr");
    const subtotalCell = row.querySelector(".subtotal");
    const subtotal = parseInt(subtotalCell.textContent.slice(4));
    const subtotalContainer = document.getElementById("subtotal");
    const currentSubtotal = parseInt(subtotalContainer.dataset.subtotal);
    const newSubtotal = currentSubtotal - subtotal;

    row.remove();
    subtotalContainer.dataset.subtotal = newSubtotal;
    subtotalContainer.textContent = `Subtotal: Php ${newSubtotal}.00`;
  }

  // Function to add a new item to the cart
  function addItemToCart() {
    const productName = document.querySelector("#pdetails .single-pro-details h4").textContent;
    const productPrice = parseInt(document.querySelector("#pdetails .single-pro-details h2").textContent.slice(4));
    const quantity = parseInt(document.querySelector("#pdetails input[type='number']").value);
    const subtotal = productPrice * quantity;

    const tbody = document.querySelector("#cart tbody");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
      <td><button class="remove-button"><i class="far fa-times-circle"></i></button></td>
      <td><img src="img/products/a1.webp" alt=""></td>
      <td>${productName}</td>
      <td>Php ${productPrice}.00</td>
      <td>${quantity}</td>
      <td class="subtotal">Php ${subtotal}.00</td>
    `;

    const removeButton = newRow.querySelector(".remove-button");
    removeButton.addEventListener("click", removeItem);

    tbody.appendChild(newRow);

    const subtotalContainer = document.getElementById("subtotal");
    const currentSubtotal = parseInt(subtotalContainer.dataset.subtotal);
    const newSubtotal = currentSubtotal + subtotal;

    subtotalContainer.dataset.subtotal = newSubtotal;
    subtotalContainer.textContent = `Subtotal: Php ${newSubtotal}.00`;
  }

  // Add event listener to the "Add To Cart" button
  const addToCartButton = document.querySelector("#pdetails .single-pro-button");
  addToCartButton.addEventListener("click", addItemToCart);
});


function handleCategoryChange(value) {
  if (value !== "") {
    window.location.href = value + '.html';
  }
}

function handleMaterialChange(value) {
  if (value !== "") {
    window.location.href = value + '.html';
  }
}

function handlePriceChange(value) {
  if (value !== "") {
    window.location.href = value + '.html';
  }
}

