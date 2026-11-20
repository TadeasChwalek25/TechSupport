const form = document.querySelector("#contact-form");

if (form) {

    form.addEventListener("submit", event => {

        event.preventDefault();

        if (!form.reportValidity()) {
            return;
        }

        const data = new FormData(form);

        // Načtení uložených požadavků
        const tickets = JSON.parse(
            localStorage.getItem("techsupport-tickets") || "[]"
        );

        // Vytvoření nového požadavku
        const ticket = {
            id: "TS-" + Math.floor(10000 + Math.random() * 90000),
            name: data.get("name"),
            email: data.get("email"),
            category: data.get("category"),
            subject: data.get("subject"),
            message: data.get("message"),
            date: new Date().toLocaleString("cs-CZ"),
            status: "Přijato"
        };

        // Uložení požadavku
        tickets.unshift(ticket);

        localStorage.setItem(
            "techsupport-tickets",
            JSON.stringify(tickets)
        );

        // Zobrazení potvrzení
        const success = document.querySelector("#form-success");

        success.textContent =
            `Požadavek byl vytvořen! Vaše číslo je ${ticket.id}. Najdete ho také v sekci Moje požadavky.`;

        success.hidden = false;

        // Vymazání formuláře
        form.reset();

        success.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    });

}