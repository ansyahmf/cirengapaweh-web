document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");
    const searchDropdown = document.getElementById("searchDropdown");
    const btnSearchHero = document.getElementById("btnSearchHero");
    let selectedProductUrl = null;

    // Ambil data produk langsung dari database.js statis
    const productsData = typeof productsDatabase !== "undefined" ? Object.values(productsDatabase) : [];

    searchBar.addEventListener("input", function () {
        const keyword = this.value.trim().toLowerCase();
        selectedProductUrl = null;

        if (keyword.length === 0) {
            searchDropdown.style.display = "none";
            return;
        }

        // Filter keyword nama produk
        const filtered = productsData.filter(product =>
            product.name.toLowerCase().includes(keyword)
        );

        searchDropdown.innerHTML = "";
        searchDropdown.style.display = "flex";

        if (filtered.length === 0) {
            searchDropdown.innerHTML = `<div class="searchDropdownEmpty">Tidak ada produk ditemukan</div>`;
        } else {
            filtered.forEach(product => {
                const item = document.createElement("div");
                item.className = "searchDropdownItem";
                item.innerText = product.name;
                item.addEventListener("click", () => {
                    searchBar.value = product.name;
                    selectedProductUrl = `produk.html?id=${product.id}`;
                    searchDropdown.style.display = "none";
                    window.location.href = selectedProductUrl;
                });
                searchDropdown.appendChild(item);
            });
        }
    });

    document.addEventListener("click", (e) => {
        if (!searchBar.contains(e.target) && !searchDropdown.contains(e.target)) {
            searchDropdown.style.display = "none";
        }
    });

    // tombol cari
    btnSearchHero.addEventListener("click", () => {
        if (selectedProductUrl) {
            window.location.href = selectedProductUrl;
        } else {
            const keyword = searchBar.value.trim().toLowerCase();
            const found = productsData.find(product => product.name.toLowerCase().includes(keyword));
            if (found && keyword.length > 0) {
                window.location.href = `produk.html?id=${found.id}`;
            } else {
                searchBar.focus();
                searchBar.style.border = "2px solid var(--primary-brand-red)";
                searchBar.value = "";
                searchBar.placeholder = "Pilih produk dari daftar!";
                setTimeout(() => {
                    searchBar.style.border = "";
                    searchBar.placeholder = "Cari menu favoritmu di sini...";
                }, 1500);
            }
        }
    });

    // Enter search bar
    searchBar.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            btnSearchHero.click();
        }
    });
});