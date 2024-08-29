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
    llb: "Llb/llb.html", // Add other pages similarly
    criminal: "Criminal/criminal.html",
    forensic: "Forensic/forensic.html",
    public: "Public/public.html",
  };

  if (pageUrls.hasOwnProperty(page)) {
    console.log("Navigating to:", pageUrls[page]); // Debugging output
    window.location.href = pageUrls[page];
  } else {
    console.error("Page not found:", page);
  }
}

// Additional scripts for future functionalities like data tables, user management, etc.
