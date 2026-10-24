// NAVBAR JS -> KONEK FOOTER DAN ctaWA JUGA

const initialHash = window.location.hash;

window.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const navbarCollapse = document.getElementById("navbarNav");
    let isMobileMenuOpen = false;
    let scrollTicking = false;

    let isAutoScrolling = false;
    let autoScrollTimeout = null;

    // 1. Logic Background Scroll
    const checkScroll = () => {
        navbar.classList.toggle("scrolled", window.scrollY > 1 || isMobileMenuOpen);
        scrollTicking = false;
    };
    checkScroll();
    window.addEventListener("scroll", () => {
        if (!scrollTicking) {
            window.requestAnimationFrame(checkScroll);
            scrollTicking = true;
        }
    }, { passive: true });

    if (navbarCollapse) {
        navbarCollapse.addEventListener("show.bs.collapse", () => { isMobileMenuOpen = true; checkScroll(); });
        navbarCollapse.addEventListener("hide.bs.collapse", () => { isMobileMenuOpen = false; checkScroll(); });
    }

    // 2. Fix Offset Hash
    window.addEventListener("load", () => {
        if (initialHash) {
            const targetElement = document.querySelector(initialHash);
            if (targetElement) {
                setTimeout(() => {
                    const offset = initialHash === "#reels" ? 144 : 94;
                    window.scrollTo({
                        top: targetElement.getBoundingClientRect().top + window.scrollY - offset,
                        behavior: "smooth"
                    });
                }, 100);
            }
        }
    });

    // Cek posisi di beranda
    const isHomePage = window.location.pathname.endsWith("index.html") ||
        window.location.pathname.endsWith("/") ||
        window.location.pathname === "";

    // 3. Logic Scroll & Offset
    document.querySelectorAll(".hero .btnPlayWrap, .hero .btnOutline, .nav-link, .footer .aMenu a, .ctaWA .btnPrimary").forEach(trigger => {
        trigger.addEventListener("click", function (e) {
            let rawHref = this.getAttribute("href") || "";
            let targetId = null;

            // Deteksi target hash
            if (this.classList.contains("btnPlayWrap")) {
                targetId = "#reels";
            } else if (this.classList.contains("btnOutline")) {
                targetId = "#menu";
            } else if (rawHref.includes("#")) {
                targetId = "#" + rawHref.split("#")[1];
            }

            if (targetId === "#reels") {
                window.hasUserInteractedReels = true;
                window.dispatchEvent(new CustomEvent("triggerReelsAudio"));
            }

            // Jika sedang berada di halaman beranda dan mengarah ke anchor section (#id)
            if (isHomePage && targetId && targetId.startsWith("#")) {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();
                    // lock observer sementara agar tidak bentrok dengan auto-scroll
                    isAutoScrolling = true;
                    clearTimeout(autoScrollTimeout);
                    autoScrollTimeout = setTimeout(() => {
                        isAutoScrolling = false;
                    }, 1000);

                    const offset = targetId === "#reels" ? 144 : 94;
                    window.scrollTo({
                        top: targetElement.getBoundingClientRect().top + window.scrollY - offset,
                        behavior: "smooth"
                    });

                    // Update active navbar
                    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
                    navLinks.forEach(link => link.classList.remove("active"));

                    const isDefaultZone = ["#hero", "#lokasi", "#ctaWA", "#footer"].includes(targetId);
                    if (isDefaultZone) {
                        if (navLinks[0]) navLinks[0].classList.add("active");
                    } else {
                        const targetLink = document.querySelector(`.navbar-nav .nav-link[href$="${targetId}"]`);
                        if (targetLink) targetLink.classList.add("active");
                    }

                    if (targetId === "#hero") {
                        history.replaceState(null, null, window.location.pathname);
                    } else {
                        history.replaceState(null, null, targetId);
                    }

                    if (navbarCollapse?.classList.contains("show")) {
                        bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
                    }
                }
            }
        });
    });

    // 4. Scroll-Spy (IntersectionObserver)
    if (isHomePage) {
        const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

        // Beranda Active Default
        if (!initialHash || initialHash === "#hero") {
            navLinks.forEach(link => link.classList.remove("active"));
            if (navLinks[0]) navLinks[0].classList.add("active");
        }

        const pindah = new IntersectionObserver((sectionView) => {
            if (isAutoScrolling) return;
            if (window.scrollY < 120 && (!window.location.hash || window.location.hash === "#hero")) {
                navLinks.forEach(link => link.classList.remove("active"));
                if (navLinks[0]) navLinks[0].classList.add("active");
                return;
            }

            sectionView.forEach(area => {
                if (area.isIntersecting) {
                    const idSection = area.target.id;
                    navLinks.forEach(link => link.classList.remove("active"));

                    const isDefaultZone = ["hero", "lokasi", "ctaWA", "footer"].includes(idSection);
                    if (isDefaultZone) {
                        if (navLinks[0]) navLinks[0].classList.add("active");
                        if (window.location.hash) {
                            history.replaceState(null, null, window.location.pathname);
                        }
                    } else {
                        const targetLink = document.querySelector(`.navbar-nav .nav-link[href$="#${idSection}"]`);
                        if (targetLink) {
                            targetLink.classList.add("active");
                            history.replaceState(null, null, `#${idSection}`);
                        }
                    }
                }
            });
        }, {
            // rootMargin untuk membaca elemen yang berada di area atas-tengah layar,
            rootMargin: "-94px 0px -55% 0px",
            threshold: 0
        });

        document.querySelectorAll("#hero, #promo, #menu, #reels, #mitra, #lokasi, #ctaWA").forEach(s => pindah.observe(s));
    }
});