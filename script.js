/* ================= NAVBAR SCROLL EFFECT ================= */

const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* ================= SEARCH ================= */

function searchProducts() {

    const searchValue =
        document.getElementById("searchInput").value.toLowerCase().trim();

    const products =
        document.querySelectorAll(".product-item");

    if (searchValue === "") {

        products.forEach(product => {
            product.style.display = "block";
        });

        return;
    }

    products.forEach(product => {

        const productName =
            product.innerText.toLowerCase();

        if (productName.includes(searchValue)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

}


/* ================= ENTER KEY SEARCH ================= */

document
    .getElementById("searchInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
            searchProducts();
        }

    });


/* ================= SELL BUTTON ================= */

function sellItem() {

    alert(
        "Welcome to LocalMart!\n\n" +
        "The item listing form will be available here."
    );

}


/* ================= CLOSE MOBILE MENU ================= */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", function() {

        const navbarMenu =
            document.getElementById("navbarNav");

        if (navbarMenu.classList.contains("show")) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbarMenu);

            if (bsCollapse) {
                bsCollapse.hide();
            }

        }

    });

});