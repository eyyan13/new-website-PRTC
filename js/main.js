
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    document.querySelector('.animated-toggler').addEventListener('click', function () {
        this.classList.toggle('collapsed');
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    $(document).ready(function() {

        $(`[unique-script-id="w-w-dm-id"] .btn-box`).click(function() {
          $(this).parent().children(".overlay").show();
      
        });
      
      
        $(`[unique-script-id="w-w-dm-id"] .close`).click(function() {
          $(`[unique-script-id="w-w-dm-id"] .overlay`).hide();
        });
      });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 25,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

function toggleDetails(button) {
    const details = button.nextElementSibling; // Get the next sibling which is the details div
    
    if (details.style.display === "none") {
        details.style.display = "block"; // Show details
        button.innerHTML = "View Less"; // Change button text
    } else {
        details.style.display = "none"; // Hide details
        button.innerHTML = "View Details"; // Change button text
    }
    
}


    // Search Functionality
    document.getElementById("searchInput").addEventListener("input", function () {
        const searchValue = this.value.toLowerCase();
        const rows = document.querySelectorAll("#dealersTable tbody tr");

        rows.forEach(row => {
            const name = row.cells[0].textContent.toLowerCase();
            const address = row.cells[1].textContent.toLowerCase();
            const city = row.cells[2].textContent.toLowerCase();

            if (name.includes(searchValue) || address.includes(searchValue) || city.includes(searchValue)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });

    // Find Nearest Dealer Function (Placeholder)
    function findNearestDealer() {
        alert("Finding nearest dealer...");
        // Add logic to find nearest dealer using Geolocation API or other methods
    }

    document.addEventListener("DOMContentLoaded", function () {
        const patternCards = document.querySelectorAll(".pattern-card"); // Select all cards
    
        patternCards.forEach(card => {
            card.addEventListener("click", function () {
                // Get the image inside the clicked card
                const imgSrc = card.querySelector(".pattern-img").src;
    
                // Update modal image dynamically
                document.getElementById("patternImage").src = imgSrc;
    
                // Show modal
                let modal = new bootstrap.Modal(document.getElementById("patternModal"));
                modal.show();
            });
        });
    });
    
    
    
    