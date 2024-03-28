import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export function validateUserInputData(
    fullName,
    email,
    mobileNumber,
) {
    const isValidName = validateName(fullName);
    const isValidEmail = validateEmail(email);
    const isValidMobileNumber = validateMobileNumber(mobileNumber);
    return {
        isValidName,
        isValidEmail,
        isValidMobileNumber
    }
}

function validateName(fullName) {
    const nameValidationRegExp = /^[a-zA-Z ]+$/
    const isValidName = nameValidationRegExp.test(fullName);
    if(!isValidName) {
        toast.error("Please enter valid name");
    }
    return isValidName;
}

function validateEmail(email) {
    const emailValidationRegExp = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    const isValidEmail = emailValidationRegExp.test(email);
    if(!isValidEmail) {
        toast.error("Please enter valid email")
    }
    return isValidEmail;
}

function validateMobileNumber(mobileNumber) {
    const mobileNumberValidationRegExp = /^\d{10}$/
    const isValidMobileNumber = mobileNumberValidationRegExp.test(mobileNumber);
    if(!isValidMobileNumber) {
        toast.error("Please enter valid mobile number")
    }
    return isValidMobileNumber;
}