//turn pages when click next or prev btn
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})

// Contact me btn when click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick =() => {
    pages.forEach((page, index) => {
        setTimeout(() =>{
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)

        }, (index + 1) * 200 + 100)
    })
}

//creat reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex(){
    pageNumber--;
    if(pageNumber < 0){
        pageNumber = totalPages - 1;
    }
}

//back profile btn when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () =>{
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    // Handle 'Read More' clicks
    document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const parent = button.closest('.service-content');
            parent.querySelector('.overlay').style.display = 'block';
            parent.querySelector('.details-box').style.display = 'block';
        });
    });

    // Handle 'Go Back' clicks
    document.querySelectorAll('.go-back-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const parent = button.closest('.service-content');
            if (parent) {
                parent.querySelector('.overlay').style.display = 'none';
                parent.querySelector('.details-box').style.display = 'none';
            }
        });
    });

    // Close on clicking overlay
    document.querySelectorAll('.overlay').forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.style.display = 'none';
            overlay.nextElementSibling.style.display = 'none';
        });
    });
});

//opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');


//opening animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800)

//opening animation (page left or profile page animation)
setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200)

//opening animation (all pages right animation)
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1) * 200 + 2100)
})


// import emailjs from 'emailjs-com';

// Initialize EmailJS
emailjs.init('07sQdsnEO7o7KsVH6'); 

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from reloading the page

  // Collect form data
  const serviceID = 'khushali_gmail_service'; // Replace with your service ID
  const templateID = 'template_kjom0kn'; // Replace with your template ID
  const form = this;

  emailjs.sendForm(serviceID, templateID, form)
    .then((response) => {
      alert('Message sent successfully!');
      console.log('Success:', response.status, response.text);
    })
    .catch((error) => {
      alert('Failed to send message. Please try again later.');
      console.error('Error:', error);
    });
});


