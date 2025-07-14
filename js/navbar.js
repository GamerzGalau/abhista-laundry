// navbar.js
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const nav = document.getElementById("main-nav");
const currentPage = window.location.pathname.split("/").pop();
const auth = getAuth();

function renderNavbar(isLoggedIn) {
  const menuItems = [
    { href: "index.html", label: "Beranda" },
    { href: "layanan.html", label: "Layanan" },
    { href: "order.html", label: "Order" },
    { href: "tracking.html", label: "Tracking" },
    ...(isLoggedIn
      ? [
          { href: "admin-dashboard.html", label: "Dashboard" },
          { href: "pesanan.html", label: "Pesanan" },
          { href: "#", label: "Logout", isLogout: true }
        ]
      : [{ href: "login.html", label: "Login Admin", isLogin: true }])
  ];

  nav.innerHTML = menuItems.map(item => {
    if (item.isLogout) {
      return `<a href="#" class="login-button" onclick="logout()">Logout</a>`;
    }
    if (item.isLogin) {
      return `<a href="${item.href}" class="login-button ${currentPage === item.href ? 'active' : ''}">${item.label}</a>`;
    }
    return `<a href="${item.href}" class="${currentPage === item.href ? 'active' : ''}">${item.label}</a>`;
  }).join("");
}

onAuthStateChanged(auth, (user) => {
  renderNavbar(!!user);
});

window.logout = function () {
  signOut(auth).then(() => {
    alert("Logout berhasil!");
    window.location.href = "index.html";
  });
};
