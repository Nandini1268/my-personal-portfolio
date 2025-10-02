// Contact Form Handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page refresh

  const name = e.target[0].value;
  const email = e.target[1].value;
  const message = e.target[2].value;

  // Simple thank-you message (can be improved with email service later)
  const msg = document.getElementById('msg');
  msg.textContent = `Thank you, ${name}! Your message has been received. I'll get back to you soon.`;
  msg.style.color = 'green';

  // Reset the form
  e.target.reset();
});
