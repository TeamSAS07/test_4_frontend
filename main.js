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
  






// gsap Animation

// about us section

let splitTypes = document.querySelectorAll('.reveal_animation')

splitTypes.forEach((char, i) => {
    const text = new SplitType(char, {type: 'chars', position: "absolute"})
    let about_us_tl = gsap.timeline()

    about_us_tl.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            scrub: 2,
            markers: false,
            start: 'top 70%',
            end: 'top 20%'   
        },
        stagger: 0.1,
        opacity: 0.2,
    })
})


// animation 1
// opacity: 0.2,

// animation 2
// opacity: 0,
// y: 50,

// animation 3
// scaleY: 0,
// y: -20,
// TransformOrigin: 'top'








// our services section


let services_elem = document.querySelectorAll('.service_animation')
let services_tl = new gsap.timeline()

services_elem.forEach((elem, i) => {
    console.log(elem)
    services_tl.from(elem, {
        scrollTrigger: {
            trigger: elem,
            scrub: 2,
            markers: false,
            start: 'top 110%',
            end: 'top 100%'   
        },
        stagger: true,
        opacity: 0.2,
        scale: 0,
        y: 100,
    })
})




// projects section


let project_elem = document.querySelectorAll('.project_animation')
let project_tl = new gsap.timeline()

project_tl.from('.project_animation', {
    scrollTrigger: {
        trigger: '.project_animation',
        scrub: 2,
        markers: false,
        start: 'top 100%',
        end: 'top 90%'   
    },
    stagger: 0.1,
    opacity: 0.2,
    scale: 0,
    y: 100,
})


let project_heading_elem = document.querySelectorAll('.project_heading_ani')

project_tl.from('.project_heading_ani', {
    scrollTrigger: {
        trigger: '.project_heading_ani',
        scrub: 5,
        markers: false,
        start: 'top 100%',
        end: 'top 90%'   
    },
    stagger: 0.1,
    y: 100
})




// testimonial section
let testimonial_tl = new gsap.timeline()

testimonial_tl.from('#testimonials', {
    scrollTrigger: {
        trigger: '#testimonials',
        scrub: 2,
        markers: false,
        start: 'top 90%',
        end: 'top 80%'   
    },
    stagger: 1,
    opacity: 0.2,
    scale: 0,
})




// contact us section
let contact_tl = new gsap.timeline()

contact_tl.from('.form-group', {
    scrollTrigger: {
        trigger: '.form-group',
        scrub: 2,
        markers: false,
        start: 'top 90%',
        end: 'top 70%'   
    },
    stagger: 1,
    opacity: 0,
    scale: 0,
    x: 100,
})








// show more button feature

let services = document.querySelectorAll('.service')
let show_more_btn = document.querySelector('.show_more_container button')
let show_value = services.length
for (let i = 0; i < services.length; i++) {
    const element = services[i];
    element.classList.toggle('invisible')
    element.classList.toggle('col-md-4')
}
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
    ScrollTrigger.refresh();
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




