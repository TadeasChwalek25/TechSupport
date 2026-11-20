const list = document.querySelector("#ticket-list");
const empty = document.querySelector("#ticket-empty");

if (list && empty) {

    // Načtení požadavků z LocalStorage
    const tickets = JSON.parse(
        localStorage.getItem("techsupport-tickets") || "[]"
    );

    // Pokud nejsou žádné požadavky
    empty.hidden = tickets.length > 0;

    // Vykreslení požadavků
    list.innerHTML = tickets.map(ticket => `
        <article class="ticket-row">

            <div>
                <h3>${escapeText(ticket.subject)}</h3>

                <p>
                    ${escapeText(ticket.id)}
                    · ${escapeText(ticket.category)}
                    · ${escapeText(ticket.date)}
                </p>

                <p class="ticket-meta">
                    ${escapeText(ticket.email)}
                </p>
            </div>

            <span class="ticket-tag">
                ${escapeText(ticket.status)}
            </span>

        </article>
    `).join("");

}


// Ochrana textu před vložením HTML kódu

function escapeText(value) {

    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    }[char]));

}