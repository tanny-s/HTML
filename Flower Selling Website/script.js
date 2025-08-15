// Carousel Slider
let slideIndex = 0;
function showSlides() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change every 3 seconds
}
showSlides();

// Add to Cart
let cartCount = 0;
function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}

// Search Filter
function searchFlowers() {
    let input = document.getElementById("search-bar").value.toLowerCase();
    let items = document.querySelectorAll(".flower-item");
    items.forEach(item => {
        let name = item.querySelector("h3").innerText.toLowerCase();
        item.style.display = name.includes(input) ? "block" : "none";
    });
}

// Form Validation
function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    if (name == "" || email == "") {
        alert("Please fill out all fields");
        return false;
    }
    if (!email.includes("@")) {
        alert("Please enter a valid email");
        return false;
    }
    return true;
}
