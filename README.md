# 🏥 Hospital Management System (HMS)

Welcome to the HMS project! This project is built to simulate a simple but structured hospital management system with multiple user roles: Patients, Doctors, and Admins.

This `README.md` is a full onboarding guide **for developers** joining the project. If you're new to HTML, CSS, and JavaScript projects — you're in the right place. 💡

---

## 📌 Project Purpose

The goal of this HMS project is to:
- Simulate real-world hospital operations (appointments, patient records, billing, etc.)
- Build a modular, scalable frontend project (with optional backend integration)
- Help developers practice collaboration, clean UI design, and JavaScript logic

---

## 🧰 Tech Stack

| Layer | Tools |
|-------|-------|
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla) |
| **Styling Helpers** | Bootstrap or Tailwind CSS (optional) |
| **Version Control** | Git & GitHub |
| **Backend (Optional)** | JSON Server / Firebase / Express API |
| **Storage (No Backend)** | localStorage/sessionStorage |

---

## 🗂️ Folder & File Structure (Example)

```

/hms-project
│
├── /assets/              # Images, icons, etc.
├── /css/                 # CSS stylesheets
│   └── styles.css
├── /js/                  # JavaScript logic
│   ├── main.js
│   ├── appointments.js
│   └── billing.js
├── /pages/               # Individual page files
│   ├── index.html
│   ├── login.html
│   ├── dashboard-patient.html
│   ├── dashboard-doctor.html
│   ├── dashboard-admin.html
│   └── billing.html
└── README.md             # This file

````

---

## 🚀 How to Get Started (Step-by-Step)

### 1. **Fork or Clone the Repo**
```bash
git clone https://github.com/codegallantx/hms-project.git
cd hms
````

### 2. **Open in VS Code or your code editor**

You can use:

* [VS Code](https://code.visualstudio.com/)
* Brackets, Sublime Text, or any lightweight IDE

### 3. **Run the Project**

Since this is a static HTML/CSS/JS project (no backend), you can open any `.html` file directly in your browser.

Or better:
Use a live server extension (like in VS Code) to auto-refresh on changes.

---

## 🧑🏽‍💻 For Developers – Your Guide

### 👇 Start Small, Build Confidence:

* Pick **one page or component** to work on (e.g., the appointment form)
* Read the UI layout — don't worry about JavaScript yet
* Add structure with **HTML**, then beautify with **CSS**
* Later, add interactivity using **JavaScript**

### 🧠 Understand Page Ownership

Each page has:

* HTML layout
* CSS styles (can be shared or inline)
* JavaScript logic (validation, form submission, storage)

Ask: *"Does my page need a form? Does it need to pull or save data?"*

---

## ⚙️ How We Use JavaScript

### Without Backend:

We use **`localStorage`** or **mock data** (JavaScript arrays/objects) to simulate database behavior.

```js
// Example: Save appointment
const appointment = { name: "John", date: "2025-06-30" };
localStorage.setItem("appointment", JSON.stringify(appointment));
```

You can access this saved data on another page using `localStorage.getItem()`.

---

## 📥 Task Workflow (How to Contribute)

### 1. Check Your Assigned Page

Ask the Project Manager or check the Trello/Notion board.

### 2. Create a New Branch (Optional)

```bash
git checkout -b john-dashboard-doctor                                                                                                                                      
```

### 3. Build Your Page

Work inside the `/pages/`, `/js/`, or `/css/` folders as needed.

### 4. Test It

Open the page in your browser and test all inputs, links, and flows.

### 5. Push Changes

```bash
git add .
git commit -m "Added doctor dashboard page"
git push origin john-dashboard-doctor
```

### 6. Create a Pull Request

Ask for review if needed. The team lead will merge after reviewing.

---

## 📋 Naming Guidelines

| Type         | Convention                                       |
| ------------ | ------------------------------------------------ |
| File names   | kebab-case (e.g., `dashboard-doctor.html`)       |
| Variables    | camelCase (e.g., `patientName`)                  |
| Folder names | lowercase, no spaces (e.g., `/assets`, `/css`)   |
| CSS classes  | kebab-case (e.g., `.form-input`, `.btn-primary`) |

---

## ✅ Best Practices

* Keep code **clean and readable**
* Use **comments** to explain what your JS code does
* Test your form fields before pushing
* Avoid copy-pasting random code from the internet (ask first!)
* Commit often, with clear messages

---

## 🔍 Things You Can Work On (If You're Free)

* Make the layout responsive (mobile-friendly)
* Add validation to forms (e.g., required fields)
* Style alerts/success messages
* Build dummy data using `localStorage`
* Add hover effects and animations

---

## 👥 Who to Ask for Help
 
| Role             | Name           |
| ---------------- | -------------- |
| Project Manager  | Femi |
| Product Designer | Lolade |
| Developer Lead  | Samuel John    |

---

## 📦 Resources for Learning

* [MDN Web Docs](https://developer.mozilla.org/)
* [W3Schools](https://www.w3schools.com/)
* [CSS Tricks](https://css-tricks.com/)
* [JavaScript.info](https://javascript.info/)

---

## 💬 Still Confused?

Don't panic. Drop your question in the group chat or ask the Project Manager. We’re here to **learn together** — no one knows everything.

---

Let’s build something real.
Let’s grow while doing it.
Let’s make this project rock. 🚀
