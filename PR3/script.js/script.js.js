/* ==========================================
   1. LẤY CÁC PHẦN TỬ HTML
   ========================================== */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");
const backToTop = document.getElementById("backToTop");


/* =========================================
2. MENU BA GẠCH TRÊN ĐIỆN THOẠI
========================================= */

function openMenu() {
navLinks.classList.add("open");
menuToggle.classList.add("is-open");

menuToggle.setAttribute("aria-expanded", "true");
menuToggle.setAttribute("aria-label", "Đóng menu");
}

function closeMenu() {
navLinks.classList.remove("open");
menuToggle.classList.remove("is-open");

menuToggle.setAttribute("aria-expanded", "false");
menuToggle.setAttribute("aria-label", "Mở menu");
}

menuToggle.addEventListener("click", function () {
const menuIsOpen = navLinks.classList.contains("open");

if (menuIsOpen) {
closeMenu();
} else {
openMenu();
}
});


/* =========================================
3. ĐÓNG MENU KHI NHẤN VÀO LIÊN KẾT
========================================= */

navItems.forEach(function (link) {
link.addEventListener("click", function () {
closeMenu();
});
});


/* =========================================
4. ĐÓNG MENU KHI NHẤN PHÍM ESCAPE
========================================= */

document.addEventListener("keydown", function (event) {
if (event.key === "Escape") {
closeMenu();
}
});


/* =========================================
5. ĐÓNG MENU KHI NHẤN RA BÊN NGOÀI
========================================= */

document.addEventListener("click", function (event) {
const clickedInsideMenu = navLinks.contains(event.target);
const clickedMenuButton = menuToggle.contains(event.target);

if (!clickedInsideMenu && !clickedMenuButton) {
closeMenu();
}
});


/* =========================================
6. TỰ ĐỘNG ĐÓNG MENU KHI ĐỔI KÍCH THƯỚC
========================================= */

window.addEventListener("resize", function () {
if (window.innerWidth > 800) {
closeMenu();
}
});


/* =========================================
7. NÚT QUAY LÊN ĐẦU TRANG
========================================= */

window.addEventListener("scroll", function () {
if (window.scrollY > 400) {
backToTop.classList.add("visible");
} else {
backToTop.classList.remove("visible");
}
});

backToTop.addEventListener("click", function () {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});


/* =========================================
8. ĐÁNH DẤU MỤC ĐANG ĐƯỢC CHỌN
========================================= */

const sections = document.querySelectorAll(
"#home, #article, #moments, #team"
);

function updateActiveNavigation() {
let currentSection = "home";

sections.forEach(function (section) {
const sectionTop = section.offsetTop - 150;
const sectionBottom = sectionTop + section.offsetHeight;

if (
window.scrollY >= sectionTop &&
window.scrollY < sectionBottom
) {
currentSection = section.getAttribute("id");
}
});

navItems.forEach(function (link) {
link.classList.remove("active");

const linkTarget = link.getAttribute("href");

if (linkTarget === "#" + currentSection) {
link.classList.add("active");
}
});
}

window.addEventListener("scroll", updateActiveNavigation);

window.addEventListener("load", updateActiveNavigation);


/* =========================================
9. KIỂM TRA ẢNH BỊ THIẾU
========================================= */

const allImages = document.querySelectorAll("img");

allImages.forEach(function (image) {
image.addEventListener("error", function () {
image.classList.add("image-error");
image.alt = "Không tìm thấy ảnh. Hãy kiểm tra tên và vị trí file ảnh.";
});
});
