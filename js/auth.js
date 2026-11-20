
document.addEventListener("DOMContentLoaded", () => {

    const USERS_KEY = "techsupport_users";
    const SESSION_KEY = "techsupport_session";

    function getUsers() {
        try {
            return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
        } catch {
            return [];
        }
    }

    function showMessage(element, message, type) {
        element.textContent = message;
        element.className = "message " + type;
    }

    // REGISTRACE
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("registerEmail").value.trim().toLowerCase();
            const password = document.getElementById("registerPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const message = document.getElementById("registerMessage");

            if (password.length < 6) {
                showMessage(message, "Heslo musí mít alespoň 6 znaků.", "error");
                return;
            }

            if (password !== confirmPassword) {
                showMessage(message, "Hesla se neshodují.", "error");
                return;
            }

            const users = getUsers();

            if (users.some(user => user.email === email)) {
                showMessage(message, "Tento e-mail už je zaregistrovaný.", "error");
                return;
            }

            // Pouze demonstrační ukládání.
            // Není určeno pro skutečná hesla.
            users.push({
                name,
                email,
                password
            });

            localStorage.setItem(USERS_KEY, JSON.stringify(users));

            showMessage(message, "Registrace proběhla úspěšně! Přesměrovávám...", "success");

            registerForm.reset();

            setTimeout(() => {
                window.location.href = "login.html";
            }, 1200);
        });
    }

    // PŘIHLÁŠENÍ
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const email = document.getElementById("loginEmail").value.trim().toLowerCase();
            const password = document.getElementById("loginPassword").value;
            const message = document.getElementById("loginMessage");

            const users = getUsers();

            const user = users.find(user =>
                user.email === email && user.password === password
            );

            if (!user) {
                showMessage(message, "Nesprávný e-mail nebo heslo.", "error");
                return;
            }

            localStorage.setItem(SESSION_KEY, JSON.stringify({
                name: user.name,
                email: user.email
            }));

            showMessage(message, "Přihlášení proběhlo úspěšně!", "success");

            setTimeout(() => {
                window.location.href = "index.html";
            }, 800);
        });
    }

});

// ZÍSKÁNÍ PŘIHLÁŠENÉHO UŽIVATELE
function getLoggedUser() {
    try {
        return JSON.parse(localStorage.getItem("techsupport_session"));
    } catch {
        return null;
    }
}

// ODHLÁŠENÍ
function logoutUser() {
    localStorage.removeItem("techsupport_session");
    window.location.href = "index.html";
}

