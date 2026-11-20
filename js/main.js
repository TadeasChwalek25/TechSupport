// Přepínání tmavého a světlého režimu

const themeButton = document.querySelector(".theme-toggle");

if (localStorage.getItem("techsupport-theme") === "light") {
    document.body.classList.add("light-theme");
}

if (themeButton) {
    themeButton.textContent =
        document.body.classList.contains("light-theme") ? "☾" : "☼";

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");

        const light = document.body.classList.contains("light-theme");

        localStorage.setItem(
            "techsupport-theme",
            light ? "light" : "dark"
        );

        themeButton.textContent = light ? "☾" : "☼";
    });
}


// Mobilní navigace

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}


// Vyhledávání v návodech

const searchInput = document.querySelector("#help-search");

if (searchInput) {
    const items = document.querySelectorAll(".faq-item");
    const groups = document.querySelectorAll(".help-group");
    const noResults = document.querySelector("#no-results");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLocaleLowerCase("cs").trim();

        let visibleCount = 0;

        items.forEach(item => {
            const text = item.textContent.toLocaleLowerCase("cs");
            const match = text.includes(query);

            item.hidden = !match;

            if (match) {
                visibleCount++;
            }
        });

        groups.forEach(group => {
            const visibleItems = [...group.querySelectorAll(".faq-item")]
                .some(item => !item.hidden);

            group.hidden = !visibleItems;
        });

        noResults.hidden = visibleCount !== 0;
    });
}