document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector(".card-container");
    const weekContent = document.getElementById("week-content");

    const weeks = [
        { title: "Frontend Basics & JavaScript", days: [
            "Introduction to Frontend Development",
            "HTML & CSS Basics",
            "JavaScript Essentials (ES6+)",
            "DOM Manipulation",
            "Project: Build a Static Portfolio Page",
            "Review & Practice",
            "Q&A Session"
        ]},
        { title: "Introduction to React", days: [
            "What is React? Why React?",
            "Setting up React Project",
            "JSX & Virtual DOM",
            "Components (Function & Class)",
            "Props & State Management",
            "Project: Simple To-Do List",
            "Q&A Session"
        ]},
        { title: "React Core Concepts", days: [
            "Event Handling in React",
            "Controlled vs Uncontrolled Components",
            "Forms in React",
            "Conditional Rendering",
            "Project: Interactive Survey Form",
            "Review & Practice",
            "Q&A Session"
        ]},
        { title: "React Hooks & Lifecycle", days: [
            "useState Hook",
            "useEffect & Lifecycle Methods",
            "useRef Hook",
            "Lifting State Up",
            "Project: Weather App with API Integration",
            "Review & Practice",
            "Q&A Session"
        ]},
        { title: "Routing & Styling", days: [
            "React Router Basics",
            "Dynamic Routing & Navigation",
            "Component Styling Techniques",
            "Project: Multi-Page Blog",
            "Review & Practice",
            "Q&A Session",
            "Deployment Discussion"
        ]},
        { title: "State Management", days: [
            "Local & Global State",
            "React Context API",
            "Redux Basics",
            "Project: E-Commerce Cart System",
            "Review & Practice",
            "Q&A Session",
            "Advanced State Management"
        ]},
        { title: "API & Performance", days: [
            "Fetching Data with Axios",
            "Custom Hooks for API Calls",
            "Optimizing Performance",
            "Project: Movie Search App",
            "Review & Practice",
            "Q&A Session",
            "Performance Tuning"
        ]},
        { title: "Authentication & Deployment", days: [
            "JWT Authentication",
            "Role-Based Access Control",
            "Deployment on Vercel/Netlify",
            "Final Project: Full-Stack Dashboard",
            "Code Review & Best Practices",
            "Final Review & Testing",
            "Closing Session"
        ]}
    ];

    // Base start date
    const baseStartDate = new Date("2025-03-18");

    weeks.forEach((week, index) => {
        // Create flashcard
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<h2>Week ${index + 1}</h2><p>${week.title}</p>`;

        card.addEventListener("click", () => {
            // Hide any previously displayed content
            weekContent.innerHTML = "";

            // Create heading with new format
            const weekHeading = document.createElement("h2");
            weekHeading.textContent = `Week 1 - Week ${weeks.length}: ${week.title}`;
            weekContent.appendChild(weekHeading);

            // Generate table for the week schedule
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
