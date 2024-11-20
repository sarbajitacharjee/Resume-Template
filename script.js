// Back to Top Button
let backToTopBtn = document.getElementById("backToTop");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};


backToTopBtn.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;    // regular expression

  if (name === "" || email === "" || subject === "" || message === "") {
    alert("Please fill all fields.");
    event.preventDefault();
  } else if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
  }
});


    //  all the elements that should fade in
    const faders = document.querySelectorAll('.fade-in');

    // Created an IntersectionObserver to watch the elements
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');  // Add 'in-view' class when the element is in the viewport
                observer.unobserve(entry.target);  // Optional: Stop observing once the animation is triggered
            }
        });
    }, { threshold: 0.2 });  // Trigger when 20% of the element is visible

    // Attach the observer to each fade-in element
    faders.forEach(fade => {
        observer.observe(fade);
    });

    // -----------blog trigger ---------------
    window.addEventListener("scroll", function() {
      const blogContainer = document.querySelector('.blogs-container');
      const position = blogContainer.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
  
      if (position < screenHeight - 100) {
          blogContainer.classList.add('scroll-visible');
      }
  });
  