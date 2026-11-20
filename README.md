# 💻 TechSupport – AI technická podpora

**TechSupport** je moderní webová aplikace poskytující technickou podporu pomocí umělé inteligence. Jejím cílem je pomáhat uživatelům s řešením běžných i složitějších technických problémů rychle, jednoduše a srozumitelně.

Uživatel může popsat svůj problém a umělá inteligence mu následně připraví odpověď, doporučení nebo postup krok za krokem.

---

## 📌 O projektu

TechSupport vznikl jako projekt zaměřený na zjednodušení dostupnosti technické podpory.

Ne každý uživatel si dokáže poradit s technickými problémy. Někdy stačí drobná chyba v nastavení, jindy může jít o složitější problém se softwarem, hardwarem nebo připojením k internetu.

Právě proto TechSupport využívá umělou inteligenci, která dokáže analyzovat popsaný problém a nabídnout uživateli možné řešení.

Projekt je navržen tak, aby byl přehledný, moderní a snadno použitelný i pro uživatele bez pokročilých technických znalostí.

## 🚀 Hlavní funkce

- 🤖 **AI technická podpora** – automatické odpovědi na technické dotazy.
- 💬 **Popis problému** – uživatel může jednoduše popsat, s čím potřebuje pomoci.
- 📧 **Nepovinný e-mail** – možnost uvést kontaktní e-mail.
- ⚡ **Rychlé odpovědi** – AI analyzuje dotaz a připraví doporučené řešení.
- 🛠️ **Různé oblasti techniky** – podpora počítačů, mobilních telefonů, softwaru, internetu a další elektroniky.
- 📱 **Responzivní design** – přizpůsobení různým velikostem obrazovek.
- 🌐 **Webová dostupnost** – aplikaci lze používat přímo v internetovém prohlížeči.

## 🧠 Jak TechSupport funguje?

Celý proces je navržen co nejjednodušeji:

1. Uživatel otevře webovou stránku TechSupport.
2. Vybere možnost technické podpory.
3. Popíše svůj technický problém.
4. Volitelně vyplní svůj e-mail.
5. Odešle požadavek.
6. Backend předá dotaz umělé inteligenci prostřednictvím Groq API.
7. Umělá inteligence zpracuje požadavek a vytvoří odpověď.
8. Výsledek se zobrazí přímo na webové stránce.

## 🛠️ Použité technologie

Projekt využívá několik technologií, které společně zajišťují jeho fungování.

| Technologie | Využití |
|---|---|
| HTML5 | Struktura webových stránek |
| CSS3 | Vzhled a responzivní design |
| JavaScript | Interaktivita a komunikace s backendem |
| Python | Backend aplikace |
| Flask | Zpracování požadavků |
| Groq API | Komunikace s umělou inteligencí |
| GitHub Pages | Hosting webové části |
| Render | Hosting Python backendu |

## 🤖 Umělá inteligence

Odpovědi na uživatelské dotazy zajišťuje jazykový model dostupný prostřednictvím **Groq API**.

Model dokáže například pomoci s těmito oblastmi:

- Problémy s operačním systémem Windows.
- Chyby při spouštění programů a aplikací.
- Problémy s internetovým připojením a Wi-Fi.
- Nastavení počítačů a mobilních telefonů.
- Řešení softwarových a hardwarových problémů.
- Základní diagnostika technických zařízení.

AI se snaží poskytovat srozumitelné návody a postupy, které může uživatel následovat.

Je však důležité počítat s tím, že odpovědi generuje umělá inteligence a nemusí být vždy zcela správné.

## 🏗️ Struktura projektu

Projekt je rozdělen na frontendovou a backendovou část.

```text
TechSupport/
│
├── index.html
├── help.html
├── tickets.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   └── support.js
│
├── app.py
├── requirements.txt
│
└── README.md
```

*Struktura je orientační a může se měnit podle dalšího vývoje projektu.*

## 🔐 Bezpečnost

Bezpečnost je důležitou součástí projektu.

- API klíč Groq není uložen ve veřejném frontendovém kódu.
- Citlivé údaje jsou uchovávány v environment variables na platformě Render.
- Komunikace mezi webem a backendem probíhá prostřednictvím API.
- Backend kontroluje přijaté požadavky.

**Upozornění:** Do veřejného repozitáře nikdy nevkládejte API klíče, hesla ani jiné citlivé údaje.

## 🌍 Dostupnost projektu

Webová aplikace je dostupná prostřednictvím GitHub Pages.

**Web:** [TechSupport](https://tadeaschwalek25.github.io/TechSupport/)

**GitHub:** [TadeasChwalek25/TechSupport](https://github.com/TadeasChwalek25/TechSupport)

## 🎯 Cíl projektu

Hlavním cílem TechSupportu je vytvořit jednoduchou a dostupnou platformu, která uživatelům usnadní řešení technických problémů.

Projekt se zaměřuje především na:
- Jednoduché ovládání.
- Moderní uživatelské prostředí.
- Rychlou komunikaci s AI.
- Srozumitelné technické návody.
- Možnost dalšího rozšiřování.

## 🔮 Plánovaný vývoj

Do budoucna je možné projekt rozšířit například o:

- Historii předchozích dotazů.
- Uživatelské účty.
- Ukládání požadavků.
- Pokročilejší diagnostiku problémů.
- Rozšíření možností AI asistenta.
- Další funkce pro komunikaci s technickou podporou.

## 👨‍💻 Autor

Projekt vytvořil **Tadeáš Chwalek**.

TechSupport je samostatný projekt zaměřený na propojení moderních webových technologií a umělé inteligence.

---

<p align="center">
  <strong>TechSupport – Technická podpora jednoduše a rychle. 💻</strong>
</p>
