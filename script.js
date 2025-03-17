document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector(".card-container");
    const weekContent = document.getElementById("week-content");

    const weeks = [
        { title: "Introduction to Frontend Development", days: [
            "Introduction to Frontend Development",
            "HTML Basics: Elements, Forms, and Tables",
            "CSS Basics: Selectors, Box Model, and Flexbox",
            "JavaScript Basics: Variables, Data Types, and Operators",
            "DOM Manipulation Basics",
            "Mini Project: Static Portfolio Page",
            "Review & Q&A"
        ]},
        { title: "JavaScript Essentials & Vanilla JS Mastery", days: [
            "Advanced JavaScript: ES6+ Features",
            "Functions & Scope",
            "Arrays & Objects Deep Dive",
            "Event Handling & DOM Events",
            "Higher-Order Functions & Callbacks",
            "Mini Project: Dynamic To-Do List",
            "Review & Q&A"
        ]},
        { title: "Asynchronous JavaScript & Error Handling", days: [
            "Callbacks vs Promises",
            "Async/Await & Fetch API",
            "Error Handling in JavaScript",
            "Local Storage, Session Storage & Cookies",
            "Mini Project: Weather App (Fetch API)",
            "Review & Q&A"
        ]},
        { title: "Introduction to React", days: [
            "What is React? Why React?",
            "Setting up a React Project",
            "JSX & Virtual DOM",
            "Components (Functional vs Class)",
            "Props & State Management Basics",
            "Mini Project: Simple Counter App",
            "Review & Q&A"
        ]},
        { title: "React Core Concepts", days: [
            "Event Handling in React",
            "Controlled vs Uncontrolled Components",
            "Forms in React (useState, onChange)",
            "Conditional Rendering & Lists",
            "Mini Project: Interactive Survey Form",
            "Review & Q&A"
        ]},
        { title: "React Hooks & Advanced State Management", days: [
            "Introduction to React Hooks",
            "useState & useEffect",
            "Custom Hooks & useRef",
            "Lifting State Up & Context API",
            "Mini Project: Task Manager App",
            "Review & Q&A"
        ]},
        { title: "React Routing & Styling", days: [
            "React Router Basics",
            "Dynamic Routing & Navigation",
            "Component Styling Techniques",
            "Mini Project: Multi-Page Portfolio",
            "Review & Q&A"
        ]},
        { title: "Performance Optimization & Debugging", days: [
            "React Performance Optimization",
            "React Developer Tools & Debugging",
            "Error Boundaries & Handling Errors in React",
            "Mini Project: Movie Search App",
            "Review & Q&A"
        ]},
        { title: "Advanced React Concepts", days: [
            "Higher-Order Components (HOCs)",
            "Context API vs Redux Basics",
            "State Management Patterns",
            "Mini Project: E-Commerce Cart System",
            "Review & Q&A"
        ]},
        { title: "UI/UX & Advanced Styling Techniques", days: [
            "CSS Frameworks: Tailwind, Bootstrap",
            "Animations in React (Framer Motion)",
            "Creating Reusable Components",
            "Mini Project: Animated Dashboard",
            "Review & Q&A"
        ]},
        { title: "Testing in React & Deployment", days: [
            "Introduction to Testing (Jest & React Testing Library)",
            "Writing Unit Tests for Components",
            "CI/CD Basics",
            "Deployment on Vercel/Netlify",
            "Mini Project: Fully Deployed Portfolio",
            "Review & Q&A"
        ]},
        { title: "Capstone Project & Final Review", days: [
            "Capstone Project Kickoff",
            "Advanced Debugging & Code Review",
            "UI/UX Enhancements & Performance Optimization",
            "Final Project Presentation & Feedback",
            "Career Tips & Interview Preparation",
            "Certification & Closing Session"
        ]}
    ];

    // Base start date
    const baseStartDate = new Date("2025-03-19");

    weeks.forEach((week, index) => {
        // Create flashcard for each week
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<h2>Week ${index + 1}</h2><p>${week.title}</p>`;

        card.addEventListener("click", () => {
            // Clear previous content
            weekContent.innerHTML = "";

            // Create heading
            const weekHeading = document.createElement("h2");
            weekHeading.textContent = `Week ${index + 1}: ${week.title}`;
            weekContent.appendChild(weekHeading);

            // Create table for schedule
            const table = document.createElement("table");
            table.innerHTML = `
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Topic</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            `;

            let startDate = new Date(baseStartDate);
            startDate.setDate(startDate.getDate() + index * 7);

            const tbody = table.querySelector("tbody");
            week.days.forEach((day, i) => {
                let date = new Date(startDate);
                date.setDate(startDate.getDate() + i);
                
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${date.toDateString()}</td>
                    <td>${day}</td>
                `;
                tbody.appendChild(row);
            });

            weekContent.appendChild(table);
            weekContent.scrollIntoView({ behavior: "smooth" });
        });

        cardContainer.appendChild(card);
    });
});
