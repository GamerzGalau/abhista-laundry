// navbar.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAg2mhpdg3DH4fJGm2626_2-ysvsXKHRFg",
  authDomain: "abhista-laundry.firebaseapp.com",
  projectId: "abhista-laundry",
  storageBucket: "abhista-laundry.appspot.com",
  messagingSenderId: "784467467337",
  appId: "1:784467467337:web:c81cb521dc477b8dc07398",
  databaseURL: "https://abhista-laundry-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Target nav
const nav = document.getElementById("main-nav");
const currentPage = window.location.pathname.split("/").pop();

// Fungsi render menu dinamis
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

// Deteksi status login
onAuthStateChanged(auth, (user) => {
  renderNavbar(!!user);
});

// Fungsi logout
window.logout = function () {
  signOut(auth).then(() => {
    alert("Logout berhasil!");
    window.location.href = "index.html";
  });
};
