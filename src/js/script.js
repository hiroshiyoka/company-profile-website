window.onscroll = function () {
  addNavbarBackgroundOnScroll();
};

const body = document.body;
const navbar = document.getElementById("navbar");
const topPadding = 16 * 0.5;

function addNavbarBackgroundOnScroll() {
  const fixedNavbarClasses = [
    "fixed",
    "bg-gray-800",
    "bg-opacity-10",
    "backdrop-filter",
    "backdrop-blur-xl",
    "border-b",
    "border-gray-700",
  ];
  if (
    document.body.scrollTop > topPadding ||
    document.documentElement.scrollTop > topPadding
  ) {
    navbar.classList.add(...fixedNavbarClasses);
    body.style.paddingTop = `calc(${navbar.offsetHeight}px + 0.5rem)`;
  } else {
    navbar.classList.remove(...fixedNavbarClasses);
    body.style.paddingTop = "";
  }
}

const lampiran = document.getElementById("lampiran");
const namaFile = document.getElementById("namaFile");

lampiran.onchange = function (event) {
  if (event.target.files[0]) {
    namaFile.innerText = event.target.files[0].name;
  }
};

function toggleMobileMenu(open) {
  const html = document.documentElement;
  const mobileMenu = document.getElementById("mobile-navbar-menu");
  const scrollLockClasses = ["overflow-y-hidden", "sm:overflow-y-auto"];

  if (open) {
    html.classList.add(...scrollLockClasses);
    body.classList.add(...scrollLockClasses);
    mobileMenu.classList.remove("translate-x-full");
  } else {
    html.classList.remove(...scrollLockClasses);
    body.classList.remove(...scrollLockClasses);
    mobileMenu.classList.add("translate-x-full");
  }
}

document.addEventListener("click", (event) => {
  if (
    (event.target.href && event.target.href.includes("#")) ||
    event.target.dataset.target
  ) {
    event.preventDefault();
    const tagName = event.target.tagName;
    const href =
      tagName === "A" ? event.target.href : event.target.dataset.target;
    const targetId = href.slice(href.indexOf("#") + 1);
    const offsetTop = document.getElementById(targetId).offsetTop;
    let target = offsetTop - 100;

    window.scrollTo({ top: target });

    const isMobileMenu =
      event.target.parentElement.parentElement.parentElement.id ===
      "mobile-navbar-menu";
    if (isMobileMenu) {
      toggleMobileMenu(false);
    }
  }
});
