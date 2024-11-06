// Function to validate the email field
function validateEmail() {
    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)) {
        emailError.innerHTML = "Please enter a valid email address.";
        return false; // used mainly by the validInfo() function that is called when we click submit
    } else {
        emailError.innerHTML = ""; // Clear error message if valid
        return true; // used mainly by the validInfo() function that is called when we click submit
    }
}

// Function to validate the password field
function validatePassword() {
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    

    if (!passwordRegex.test(password)) {
        passwordError.innerHTML = "Password must be at least 8 characters, with uppercase, lowercase, and a number.";
        return false; // used mainly by the validInfo() function that is called when we click submit
    } else {
        passwordError.innerHTML = "";
        return true; // used mainly by the validInfo() function that is called when we click submit
    }
}

// Function to validate re-entered password
function validateReEnterPassword() {
    let password = document.getElementById("password").value;
    let reEnterPassword = document.getElementById("ReenterPassword").value;

    let reEnterPasswordError = document.getElementById("reEnterPasswordError");

    if (password != reEnterPassword) {
        reEnterPasswordError.innerHTML = "Passwords do not match.";
        return false; // used mainly by the validInfo() function that is called when we click submit
    } else {
        reEnterPasswordError.innerHTML = "";
        return true; // used mainly by the validInfo() function that is called when we click submit
    }
}

// Function to validate first name fields
function validateFirstName() {
    let name = document.getElementById("FirstName").value;
    let errorField = document.getElementById("firstNameError");
    let nameRegex = /^[a-zA-Z\s'-]+$/;

    if (!nameRegex.test(name)) {
        errorField.innerHTML = "First Name can only contain letters, spaces, hyphens, and apostrophes and cannot be empty.";
        return false; // used mainly by the validInfo() function that is called when we click submit
    } else {
        errorField.innerHTML = "";
        return true; // used mainly by the validInfo() function that is called when we click submit
    }
}

// Function to validate name fields (First and Last Name)
function validateLastName() {
    let name = document.getElementById("LastName").value;
    let errorField = document.getElementById("lastNameError");
    let nameRegex = /^[a-zA-Z\s'-]+$/;

    if (!nameRegex.test(name)) {
        errorField.innerHTML = "Last Name can only contain letters, spaces, hyphens, and apostrophes and cannot be empty.";
        return false; // used mainly by the validInfo() function that is called when we click submit
    } else {
        errorField.innerHTML = "";
        return true; // used mainly by the validInfo() function that is called when we click submit
    }
}

// Function to validate the date of birth field
function validateDOB() {
    let dob = document.getElementById("DOB").value;
    let dobError = document.getElementById("dobError");
    let dobRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    
    if (dobRegex.test(dob)) {
        // the dob matches the regex but we need to do more checks.
        let dateParts = dob.split('/');
        let day = parseInt(dateParts[0]); // "02" => 2
        let month = parseInt(dateParts[1]);
        let year = parseInt(dateParts[2]);
        
        // Check if the date values are realistic
        let today = new Date();
        if (day < 1 || day > 31 || month < 1 || month > 12 || year < today.getFullYear() - 120) {
            dobError.innerHTML = "Enter a valid date of birth in the format dd/mm/yyyy.";
            return false; // used mainly by the validInfo() function that is called when we click submit
        }

        // Check if the date is not in the future
        let dobDate = new Date(year, month - 1, day); // we removed 1 from month because January is at index 0 and not 1 and so on for other months
        if (dobDate > today) {
            dobError.innerHTML = "Date of birth cannot be in the future.";
            return false; // used mainly by the validInfo() function that is called when we click submit
        }

        // Check if day exists (e.g., April 31 is invalid, February 30 is invalid, February 29 is only valid in leap years)
        if (dobDate.getDate() != day || dobDate.getMonth() + 1 != month || dobDate.getFullYear() != year) {
            dobError.innerHTML = "Enter a valid date of birth in the format dd/mm/yyyy.";
            return false; // used mainly by the validInfo() function that is called when we click submit
        }

        dobError.innerHTML = ""; // Clear error message if valid
        return true; // used mainly by the validInfo() function that is called when we click submit
    } else {
        dobError.innerHTML = "Enter DOB in the format dd/mm/yyyy.";
        return false; // used mainly by the validInfo() function that is called when we click submit
    }
}


// Validate the entire form when submitted
function validInfo() {
    // Calls each field validation and prevents form submission if any validation fails
    let isEmailValid = validateEmail();
    let isPasswordValid = validatePassword();
    let isReEnterPasswordValid = validateReEnterPassword();
    let isFirstNameValid = validateFirstName();
    let isLastNameValid = validateLastName();
    let isDOBValid = validateDOB();

    let isFormValid = isEmailValid && isPasswordValid && isReEnterPasswordValid && isFirstNameValid && isLastNameValid && isDOBValid;
    
    if(!isFormValid){
        alert('Please make sure all field are entered correctly');
        return false;
    } else {
        // Only allow form submission if all functions return true
        return true;
    }

}