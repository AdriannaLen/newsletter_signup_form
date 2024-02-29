
// document.getElementById("subscribe").addEventListener("click", function() {

//     document.getElementsByClassName("subscription__window")
//      [0].classList.add("active");

// })

// document.getElementById("dissmiss__popout__btn").addEventListener("click", function() {

//     document.getElementsByClassName("subscription__window")
//     [0].classList.remove("active");
    
//  })


// Get references to the input field, error message, and the subscribe button
const emailInput = document.getElementById('emailInput');
const subscribeButton = document.getElementById('subscribe');
const invalidEmail = document.getElementById("invalidEmail");

// Function to validate email
function validateEmail(email) {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to handle subscription
function subscribe() {
    const email = emailInput.value; //zwraca string

    // Validate email format
    if (!validateEmail(email)) {

        // Display error message if email is invalid

        invalidEmail.textContent = "Valid email required";
        invalidEmail.style.display = "block";

        return; // Exit function if email is invalid
    }

    else { 

        document.getElementsByClassName("subscription__window")
         [0].classList.add("active");
        
         mainContent.style.display = "none";
         invalidEmail.style.display = "none";
     }

    // Clear the input field after subscription
    emailInput.value = '';
   
}

document.getElementById("dissmiss__popout__btn").addEventListener("click", function() {

    document.getElementsByClassName("subscription__window")
    [0].classList.remove("active");

    mainContent.style.display = "block";
    
 })


// Event listener for the subscribe button click
subscribeButton.addEventListener('click', subscribe);


// Event listener for the Enter key press in the input field to trigger subscription
emailInput.addEventListener('keypress', function(event) {
    // Check if the Enter key was pressed
    if (event.key === 'Enter') {
        subscribe();
    }
});


