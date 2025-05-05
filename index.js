document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active'); 
    const navLinks = document.querySelector('.nav-links ul');
    navLinks.classList.toggle('active'); 

    const container = document.querySelector('.container');
    if (navLinks.classList.contains('active')) {
        container.style.transform = 'translateY(260px)';
    } else {
        container.style.transform = 'translateY(0)';
    }
});



document.querySelector('.hamburger').addEventListener('click', function(){
    document.querySelector('.hamburger').classList.toggle('change');
    document.querySelector('.nav-menu').classList.toggle('change');
});




// const form = document.getElementById('contactForm');
// const inputs = form.querySelectorAll('input, textarea');
// const submitButton = document.getElementById('submitButton');

// inputs.forEach(input => {
//     input.addEventListener('input', () => {
//         const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
//         submitButton.disabled = !allFilled;
//     });
// });

// form.addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevent default form submission
//     alert('Form submitted successfully!'); // Replace this with actual form handling logic
// });


// contact form

emailjs.init("Hakeem Muhideen"); // Replace with your EmailJS user ID

// Get the form and submit button
const form = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton");

// Handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Show loading text or disable button
    submitButton.innerHTML = "Sending...";
    submitButton.disabled = true;

    // Gather form data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const comments = document.getElementById("comments").value;

    // Prepare the email data
    const emailData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        comments: comments,
    };

    // Send the email via EmailJS
    emailjs.send("Hakeem Muhideen", "template_skccyrx", emailData)
        .then(function(response) {
            console.log("SUCCESS", response);
            alert("Your message has been sent successfully!");
            form.reset(); // Reset the form after submission
            submitButton.innerHTML = "Submit form"; // Reset button text
            submitButton.disabled = false; // Enable the button again
        }, function(error) {
            console.log("FAILED", error);
            alert("There was an error sending your message. Please try again later.");
            submitButton.innerHTML = "Submit form";
            submitButton.disabled = false;
        });
});



