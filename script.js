
// Function to generate the random password
function generatePassword() {
    // Password length between 7 and 11 (inclusive)
    const minLength = 7;
    const maxLength = 11;
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength; //the math which enable generating Random length between 7 and 11
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
  
    // Show loading animation
    document.getElementById("message").style.opacity = 0;
    document.getElementById("message").textContent = "Generating...";
  
    setTimeout(() => {
      // Generate random password
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
  
      // Display the password in the input field
      document.getElementById('password').value = password;
      document.getElementById('message').textContent = 'Password Generated!';
      document.getElementById("message").style.opacity = 1;
    }, 1000);
  }
  
  // Function to copy the password to the clipboard
  function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
  
    // Show success message
    const message = document.getElementById('message');
    message.textContent = 'Password copied to clipboard!';
    message.style.color = 'blue';
  
    setTimeout(() => {
      message.style.opacity = 0;
    }, 2000);
  }
  
  function typeText(elementId, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Call the function when the page loads
window.onload = function() {
    typeText("developerText", "Created by Developer Thabit", 230); // Adjust speed (milliseconds per letter)
};
