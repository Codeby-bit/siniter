// User authentication: Sign-up and login functionality
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            authenticateUser(username, password);
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const username = document.getElementById('usernameSignup').value;
            const password = document.getElementById('passwordSignup').value;
            registerUser(email, username, password);
        });
    }
});

// Authentication and Registration Simulation
function authenticateUser(username, password) {
    // Replace this with actual API call
    if (username === "testuser" && password === "password123") {
        alert("Login successful!");
        window.location.href = "profile.html";  // Redirect to profile page
    } else {
        alert("Invalid username or password");
    }
}

function registerUser(email, username, password) {
    // Replace this with actual API call
    alert("Registration successful! Please log in.");
    window.location.href = "login.html";  // Redirect to login page
}

// Dynamic notifications
function showNotification(type, message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    if (type === 'success') {
        notification.classList.add('success');
    } else if (type === 'error') {
        notification.classList.add('error');
    }
    notification.textContent = message;

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', function() {
        notification.remove();
    });
    
    notification.appendChild(closeBtn);
    document.body.appendChild(notification);

    setTimeout(function() {
        notification.remove();
    }, 3000);
}

// Daily/Weekly Progress Tracking
function trackProgress() {
    const progress = {
        weight: 72,  // Example data, replace with dynamic input
        calories: 2200,
        steps: 10000,
    };
    displayProgress(progress);
}

function displayProgress(progress) {
    const progressSection = document.getElementById('progressSection');
    progressSection.innerHTML = `
        <h2>Daily Progress</h2>
        <p>Weight: ${progress.weight} kg</p>
        <p>Calories: ${progress.calories} kcal</p>
        <p>Steps: ${progress.steps}</p>
    `;
}

// Dynamic Workout Plan Generation (e.g., for weight gain/weight loss)
function generateWorkoutPlan(goal) {
    let plan;
    if (goal === 'weight_gain') {
        plan = {
            day1: 'Upper Body (Push)',
            day2: 'Lower Body',
            day3: 'Rest',
            day4: 'Upper Body (Pull)',
            day5: 'Lower Body (Focus on Glutes)',
            day6: 'Full Body',
            day7: 'Rest'
        };
    } else if (goal === 'weight_loss') {
        plan = {
            day1: 'Full Body Strength',
            day2: 'HIIT & Core',
            day3: 'Lower Body Strength',
            day4: 'Rest or Active Recovery',
            day5: 'Upper Body Strength',
            day6: 'Cardio or HIIT',
            day7: 'Rest'
        };
    }

    displayWorkoutPlan(plan);
}

function displayWorkoutPlan(plan) {
    const workoutSection = document.getElementById('workoutSection');
    workoutSection.innerHTML = `
        <h2>Weekly Workout Plan</h2>
        <p>Day 1: ${plan.day1}</p>
        <p>Day 2: ${plan.day2}</p>
        <p>Day 3: ${plan.day3}</p>
        <p>Day 4: ${plan.day4}</p>
        <p>Day 5: ${plan.day5}</p>
        <p>Day 6: ${plan.day6}</p>
        <p>Day 7: ${plan.day7}</p>
    `;
}

// Menstrual Cycle Tracker
function trackMenstrualCycle() {
    const cycleInfo = {
        startDay: "2024-09-01",  // Example date, replace with user input
        averageCycleLength: 28,  // Average cycle length in days
    };
    
    const today = new Date();
    const startDate = new Date(cycleInfo.startDay);
    const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    const currentPhase = (daysPassed % cycleInfo.averageCycleLength) < 14 ? 'Follicular Phase' : 'Luteal Phase';

    displayCycleInfo(currentPhase);
}

function displayCycleInfo(phase) {
    const cycleSection = document.getElementById('cycleSection');
    cycleSection.innerHTML = `
        <h2>Menstrual Cycle Info</h2>
        <p>Current Phase: ${phase}</p>
    `;
}

// Call necessary functions on page load
document.addEventListener('DOMContentLoaded', function() {
    // Example of functions to be called when respective pages load
    if (document.getElementById('progressSection')) {
        trackProgress();
    }

    if (document.getElementById('workoutSection')) {
        generateWorkoutPlan('weight_loss');  // Example: weight_loss or weight_gain
    }

    if (document.getElementById('cycleSection')) {
        trackMenstrualCycle();
    }
});