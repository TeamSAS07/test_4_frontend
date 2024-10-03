document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial-item');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    showTestimonial(currentIndex);

    // Auto-slide every 3 seconds
    setInterval(showNext, 3000);
});


document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch('https://script.google.com/macros/s/AKfycbxC1_RzO5cgxSJQR8GA5DMp3ycQpxSaN7LfgQXCjELkrckIsovs6WTp6io4EU9aZehl/exec', {
        method: 'POST',
        body: formData
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json(); // parse response as JSON
    })
    .then(data => {
        alert('your message is successfully submited');
    })
    .catch(err => {
        console.log(`Error: ${err}`);
        alert(`An error occurred: ${err.message}`);
    });
});








// function doPost(e) {
//     // Get the form data
//     var name = e.parameter.name;
//     var email = e.parameter.email;
//     var message = e.parameter.message;
    
//     // Open the Google Sheet by its ID (replace with your own sheet ID)
//     var sheet = SpreadsheetApp.openById('1vvKOwgyRApMEgcKrvVLw3LieXTZ3VkyhGfdWQs71JOw').getSheetByName('Form Responses');
    
//     // Append the data to the sheet
//     sheet.appendRow([new Date(), name, email, message]);
    
//     // Prepare a response
//     return ContentService.createTextOutput(
//       JSON.stringify({ result: 'Success' })
//     ).setMimeType(ContentService.MimeType.JSON);
//   }
  