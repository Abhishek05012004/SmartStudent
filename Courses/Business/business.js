// scripts.js

// Placeholder for future functionality - replace with actual logout logic
function logout() {
  console.log("Logout function called"); // Debugging output
  // Example: Redirect to login page after logout
  window.location.href = "Login/login.html";
}

// Placeholder for dynamic navigation based on clicked box
function navigateTo(page) {
  const pageUrls = {
    administration: "Administration/administration.html",
    finance: "Finance/finance.html", // Add other pages similarly
    marketing: "Marketing/marketing.html",
    management: "Management/management.html",
    accounting: "Accounting/accounting.html",
    enterprenuer: "Enterprenuer/enterprenuer.html",
    human: "Human/human.html",
  };

  if (pageUrls.hasOwnProperty(page)) {
    console.log("Navigating to:", pageUrls[page]); // Debugging output
    window.location.href = pageUrls[page];
  } else {
    console.error("Page not found:", page);
  }
}

// Additional scripts for future functionalities like data tables, user management, etc.
