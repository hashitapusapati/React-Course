document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector(".card-container");
    const weekContent = document.getElementById("week-content");

    const weeks = [
        { title: "Introduction & Web Basics", days: [
            "Introduction to Web Development",
            "HTML Basics",
            "CSS Fundamentals",
            "JavaScript Introduction",
            "Project: Simple Landing Page",
            "Review & Practice",
            "Q&A Session"
        ]},
        { title: "JavaScript Essentials", days: [
            "JavaScript Basics (ES6+)",
            "Functions & Scope",
            "DOM Manipulation",
            "Event Handling",
            "Project: Interactive Calculator",
            "Review & Practice",
            "Q&A Session"
        ]},
        { title: "Advanced JavaScript & Async Programming", days: [
            "Closures & Callbacks",
            "Promises & Async/Await",
            "Working with APIs",
            "LocalStorage & SessionStorage",
            "Project: Weather App with API",
            "Review & Practice",
            "Q&A Session"
        ]},
        { title: "Introduction to React", days: [
            "Why React? Basics of JSX",
            "React Components & Props",
            "State & Event Handling",
            "React Lifecycle Methods",
            "Project: Simple To-Do App",
            "Review & Practice",
            "Q&A Session"
        ]},
        { title: "React Core Concepts", days: [
            "Conditional Rendering",
            "Forms & Controlled Components",
            "Lifting State Up",
            "React Router Basics",
            "Project: Multi-Page Blog",
            "Review & Practice",
            "Q&A Session"
        ]},
        { title: "React Hooks & State Management", days: [
            "useState & useEffect",
            "useContext & Custom Hooks",
            "Redux Basics",
            "Project: E-Commerce Cart System",
            "Review & Practice",
            "Q&A Session",
            "Advanced State Management"
        ]},
        { title: "Styling & Performance Optimization", days: [
            "CSS-in-JS & Styled Components",
            "Material UI & Tailwind CSS",
            "React Performance Optimization",
            "Project: Portfolio Website",
            "Review & Practice",
            "Q&A Session",
            "Performance Tuning"
        ]},
        { title: "APIs & Data Fetching", days: [
            "Fetching Data with Fetch & Axios",
            "Handling Errors in API Calls",
            "Authentication & JWT",
            "Project: Movie Search App",
            "Review & Practice",
            "Q&A Session",
            "Advanced API Handling"
        ]},
        { title: "Advanced React Features", days: [
            "React Context API vs Redux",
            "Server-Side Rendering (SSR) Basics",
            "Next.js Introduction",
            "Project: Blogging Platform",
            "Review & Practice",
            "Q&A Session",
            "Performance Improvements"
        ]},
        { title: "Full Stack Development Basics", days: [
            "Introduction to Backend (Node.js & Express)",
            "Connecting React with Express",
            "MongoDB & Mongoose Basics",
            "Project: Full-Stack Notes App",
            "Review & Practice",
            "Q&A Session",
            "Final Project Discussion"
        ]},
        { title: "Authentication & Deployment", days: [
            "User Authentication with JWT",
            "Role-Based Access Control",
            "Hosting & Deployment on Netlify/Vercel",
            "Final Project: Full-Stack Dashboard",
            "Code Review & Best Practices",
            "Final Review & Testing",
            "Closing Session"
        ]},
        { title: "Capstone Project & Final Review", days: [
            "Capstone Project Kickoff",
            "Team Collaboration & Git",
            "Final Debugging & Optimization",
            "Final Presentations & Feedback",
            "Q&A & Career Advice",
            "Certification & Closing Ceremony",
            "Final Celebration"
        ]}
    ];

    const baseStartDate = new Date("2025-03-18");

    weeks.forEach((week, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<h2>Week ${index + 1}</h2><p>${week.title}</p>`;

        card.addEventListener("click", () => {
            weekContent.innerHTML = "";
            const weekHeading = document.createElement("h2");
            weekHeading.textContent = `Week ${index + 1}: ${week.title}`;
            weekContent.appendChild(weekHeading);

            const table = document.createElement("table");
            table.innerHTML = `
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Topic</th>
                    </tr>
                </thead>
                <tbody></tbody>
            `;

            let startDate = new Date(baseStartDate);
            startDate.setDate(startDate.getDate() + index * 7);

            const tbody = table.querySelector("tbody");
            week.days.forEach((day, i) => {
                let date = new Date(startDate);
                date.setDate(startDate.getDate() + i);
                const row = document.createElement("tr");
                row.innerHTML = `<td>${date.toDateString()}</td><td>${day}</td>`;
                tbody.appendChild(row);
            });

            weekContent.appendChild(table);
            weekContent.scrollIntoView({ behavior: "smooth" });
        });

        cardContainer.appendChild(card);
    });
});
