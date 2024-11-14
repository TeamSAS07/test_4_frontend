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

    fetch('https://script.google.com/macros/s/AKfycbx-cyJbxTjWsIfRwF7vHRrg0QXTT9t4tZ6Q_J8G2ZC96ALM-obH3ctod803JOaCc7mA/exec', {
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


// let menu = document.querySelector("#navbarNav")
// menu.addEventListener("click", () => {
//     menu.classList.toggle('show')
// })








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
  



let services = document.querySelectorAll('.service')
let show_more_btn = document.querySelector('.show_more_container button')
let show_value = services.length
let i = 0
show_more_btn.addEventListener('click', () => {
    console.log(show_value, services.length)
    show_value = show_value - 3

    if (show_value < 0) {
        show_more_btn.classList.toggle('invisible')    
    }
    
    for (; i < (services.length - show_value); i++) {
        const element = services[i];
        element.classList.toggle('invisible')
        element.classList.toggle('col-md-4')
    }
})








// swiper js

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
        delay: 2000,
    },
  });