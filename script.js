// ==================================================
// EVERGREEN WEBSITE JAVASCRIPT
// ==================================================


// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");


if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });

}


// ================= CLOSE MENU =================

const navLinks =
    document.querySelectorAll("#navMenu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {

            navMenu.classList.remove("active");

        }

    });

});


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name")
                    .value
                    .trim();


            const email =
                document.getElementById("email")
                    .value
                    .trim();


            const project =
                document.getElementById("project")
                    .value;


            const message =
                document.getElementById("message")
                    .value
                    .trim();


            // NAME VALIDATION

            if (name === "") {

                alert(
                    "Please enter your name."
                );

                return;

            }


            // EMAIL VALIDATION

            if (email === "") {

                alert(
                    "Please enter your email."
                );

                return;

            }


            // SERVICE VALIDATION

            if (project === "") {

                alert(
                    "Please select a service."
                );

                return;

            }


            // MESSAGE VALIDATION

            if (message === "") {

                alert(
                    "Please enter your project details."
                );

                return;

            }


            // SUCCESS MESSAGE

            alert(
                "Thank you, " +
                name +
                "! Your project enquiry has been received."
            );


            // CLEAR FORM

            contactForm.reset();

        }
    );

}