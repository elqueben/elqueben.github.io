// Function to send form data via email
function sendEmail(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form inputs
    const nameInput = document.querySelector('input[name="name"]');
    const messageInput = document.querySelector('textarea[name="message"]');
  
    // Compose email body
    const emailBody = `Name: ${nameInput.value}\n\nMessage: ${messageInput.value}`;
  
    // Open user's email client with prefilled email details
    window.location.href = `mailto:kewi.cardenas@gmail.com?subject=New%20Message%20from%20Website&body=${encodeURIComponent(emailBody)}`;
  
    // Clear form inputs after submission
    nameInput.value = '';
    messageInput.value = '';
  }
  
  // Attach form submit event listener
  const form = document.querySelector('.my-form');
  form.addEventListener('submit', sendEmail);
  