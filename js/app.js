//declare all global variables
const name = document.getElementById('name');
const email = document.getElementById('mail');
const jobRole = document.getElementById('title');
const otherRole = document.getElementById('other-title');
const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');
const colorPuns = document.getElementById('colors-js-puns');
let subTotal = 0;
let insertCost = 'Total Cost = ';
const allActivities = document.getElementsByClassName('activities');
let numOfActivities = 0;
const mainConf = document.getElementsByName('all')[0];
const jsFrameworks = document.getElementsByName('js-frameworks')[0];
const jsLibs = document.getElementsByName('js-libs')[0];
const express = document.getElementsByName('express')[0];
const node = document.getElementsByName('node')[0];
const buildTools = document.getElementsByName('build-tools')[0];
const npm = document.getElementsByName('npm')[0];
const paymentType = document.getElementById('payment');
const ccNum = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvvNum = document.getElementById('cvv');
const button = document.getElementsByTagName('button')[0];
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementsByTagName('p')[0];
const bitcoin = document.getElementsByTagName('p')[1];

//Declare error variables with a paragraph element and also assign them a errorClass.
const errorName = document.createElement('p');
errorName.className = 'errorClass';
const errorEmail = document.createElement('p');
errorEmail.className = 'errorClass';
const errorOtherRole = document.createElement('p');
errorOtherRole.className = 'errorClass';
const errorDesign = document.createElement('p');
errorDesign.className = 'errorClass';
const errorActivities = document.createElement('p');
errorActivities.className = 'errorClass';
const errorPayment = document.createElement('p');
errorPayment.className = 'errorClass';
const errorCreditCard = document.createElement('p');
errorCreditCard.className = 'errorClass';
const errorZipCode = document.createElement('p');
errorZipCode.className = 'errorClass';
const errorCvv = document.createElement('p');
errorCvv.className = 'errorClass';

//Preparing Form on page load. Focus on name, hide the otherRole, hide the colors selector, hide paypal and bitcoin.
name.focus();
otherRole.style.display = 'none';
colorPuns.style.display = 'none';
paypal.style.display = 'none';
bitcoin.style.display = 'none';

//showing Other Text field only when Other is selected
jobRole.addEventListener('change', () => {
    if (jobRole.value == 'other') {
      otherRole.style.display = '';
    } else if (jobRole.value != 'other') {
        otherRole.style.display = 'none';
    }
})

//change options of colors depending on which shirt design is picked.
shirtDesign.addEventListener('change', () => {
    if (shirtDesign.value === 'js puns') {
    shirtColor.innerHTML = '<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option><option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> <option value="gold">Gold (JS Puns shirt only)</option>';
    colorPuns.style.display = '';
} else if (shirtDesign.value === 'heart js') {
    shirtColor.innerHTML = '<option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>';
    colorPuns.style.display = '';
} else {
    colorPuns.style.display = 'none';
}
})

//Totaling Costs and scheduling properly.
 totalCost = document.createElement('p');
    totalCost.className = 'totalCost';
    //inserts the element but not content
    npm.parentElement.after(totalCost);

//If mainConf is checked add 200 to the cost and if unchecked remove 200 from cost
function mainActivity () {
    mainConf.addEventListener('change', () => {
        if (mainConf.checked) {
            subTotal = subTotal + 200;
            totalCost.textContent = insertCost + subTotal;
            numOfActivities++;      
        } else {
            subTotal = subTotal - 200;
            totalCost.textContent = insertCost + subTotal;
            numOfActivities++;
        }
    })
}

//if any other conference is checked add 100 or remove 100 if unchecked.
function activities (x) {
    x.addEventListener('change', () => {
        if (x.checked) {
            subTotal = subTotal + 100;
            totalCost.textContent = insertCost + subTotal;
            numOfActivities++;
        } else {
            subTotal = subTotal - 100;
            totalCost.textContent = insertCost + subTotal;
            numOfActivities++;
        }
// hide all conferences that overlap on time.
        if (jsFrameworks.checked) {
            express.parentElement.style.display = 'none';
            buildTools.parentElement.style.display = 'none';
        } else if (express.checked) {
            jsFrameworks.parentElement.style.display = 'none';
            buildTools.parentElement.style.display = 'none';
        } else if (buildTools.checked) {
            jsFrameworks.parentElement.style.display = 'none';
            express.parentElement.style.display = 'none';
        } else {
            buildTools.parentElement.style.display = '';
            jsFrameworks.parentElement.style.display = '';
            express.parentElement.style.display = '';
        }
        if (jsLibs.checked) {
            node.parentElement.style.display = 'none';
            npm.parentElement.style.display = 'none';
        } else if (node.checked) {
            jsLibs.parentElement.style.display = 'none';
            npm.parentElement.style.display = 'none';
        } else if (npm.checked) {
            jsLibs.parentElement.style.display = 'none';
            node.parentElement.style.display = 'none';
        } else {
            npm.parentElement.style.display = '';
            jsLibs.parentElement.style.display = '';
            node.parentElement.style.display = '';
        } 
    })
}

//call previous function for each type of activity.
mainActivity(mainConf);
activities(jsFrameworks);
activities(jsLibs);
activities(express);
activities(node);
activities(buildTools);
activities(npm);

// Hide or show bitcoin/paypal/credit card based on option chosen.
paymentType.addEventListener('change', () => {
    if (paymentType.value === 'bitcoin') {
        creditCard.style.display = 'none';
        paypal.style.display = 'none';
        bitcoin.style.display = '';        
    } else if (paymentType.value === 'paypal') {
        creditCard.style.display = 'none';
        paypal.style.display = '';
        bitcoin.style.display = 'none';        

    } else {
        creditCard.style.display = '';
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
    }
})

//function to remove all errors once the proper input is made
function removePaymentErrors () {
    errorPayment.remove();
    errorCreditCard.remove();
    errorZipCode.remove();
    errorCvv.remove();
}

//Form Validation placed on the submit button.
button.addEventListener('click', () => {
// if any blank inputs run the code
    if (name.value == '' || email.value === '' || jobRole.value === 'other' || paymentType.value === 'credit-card' || 
    paymentType.value === 'select-method' || numOfActivities === 0) {
// if blank name or email run stop the submit and throw errors on form.
        if (name.value == '') {
            event.preventDefault();
            errorName.textContent = 'Please make sure to add in your name.';
            name.after(errorName);
            name.style.borderColor = 'red';
        } 
        if (email.value == '') {
            event.preventDefault();
            errorEmail.textContent = 'Please make sure to add in your email address.';
            email.after(errorEmail);
            email.style.borderColor = 'red';
        } 
// if jobRole is other and the textField is blank stop the submit and throw errors on form.
    if (jobRole.value === 'other' && otherRole.value === '') {
        errorOtherRole.textContent = 'Please make sure to add in your role.'
        otherRole.after(errorOtherRole);
        otherRole.style.borderColor = 'red';
        event.preventDefault();
    } 
// if a design is not selected stop the submit and throw errors on form.
        if (shirtDesign.value === 'Select Theme') {
            errorDesign.textContent = 'Please make sure to select a design type';
            shirtDesign.style.borderColor = 'red';
            $('#design').css('color', 'red');
            shirtDesign.after(errorDesign);
            event.preventDefault();
        }
// if there are 0 activities checked stop the submit and throw errors on form.
        if (numOfActivities === 0) {
            errorActivities.textContent = 'Please make sure to select atleast one activity.';
            $('.activities').css('color', 'red');
            $('.activities').after(errorActivities);
            event.preventDefault();
        }
        if (paymentType.value === 'credit card') {
// if CreditCard# is blank or not 13-16 digits stop submit and throw errors       
            if (ccNum.value === '' || ccNum.value.length < 13 || ccNum.value.length > 16) {
                errorCreditCard.textContent = 'Please make sure to add in your Credit Card Number containing 13-16 digits.';
                $('label[for="cc-num"]').css('color', 'red');
                ccNum.style.borderColor = 'red';
                paymentType.after(errorCreditCard);
                event.preventDefault();
            }
// if ZipCode is blank or not 5 digits stop submit and throw errors
            if (zipCode.value === '' || zipCode.value.length != 5) {
                errorZipCode.textContent = 'Please make sure to add in your 5-digit Zip Code.';
                zipCode.style.borderColor = 'red';
                $('label[for="zip"]').css('color', 'red');
                paymentType.after(errorZipCode);
                event.preventDefault();
            }
// if CVV is blank or not 3 digits stop submit and throw errors
            if (cvvNum.value === '' || cvvNum.value.length != 3) {
                errorCvv.textContent = 'Please make sure to add in your 3-digit CVV number.';
                cvvNum.style.borderColor = 'red';
                $('label[for="cvv"]').css('color', 'red');
                paymentType.after(errorCvv);
                event.preventDefault();
            }
        }
// if Payment type is not selected stop submit and throw errors
        if (paymentType.value === 'select_method') {
            errorPayment.textContent = 'Please make sure to select a payment option.';
            paymentType.style.borderColor = 'red';
            paymentType.after(errorPayment);
            event.preventDefault();
        }
    }
//assign the red color to the errorClass that appear on form
    $('.errorClass').css('color', 'red');
})

//When name has an error and is now fixed remove errors
name.addEventListener('keypress', () => {
    if (name.value != '') {
        name.style.borderColor = '';
        errorName.remove();  
    }
})

//ceheck for whether email is validated or not then throw an error or clear the error.
email.addEventListener('change', () => {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    email.style.borderColor = '';
    errorEmail.remove();  
    return (true)  
  } else {
        errorEmail.textContent = 'Please make sure that your email is formatted correctly.';
        email.style.borderColor = 'red';
        email.after(errorEmail);
        return (false)  
    }
})

//check for whether other role is selected help understand the value must be filled by throwing some errors.
// jobRole.addEventListener('change', () => {
//     if (jobRole.value === 'other' && otherRole.value === '') {
//         errorOtherRole.textContent = 'Please make sure to add in your role.'
//         otherRole.after(errorOtherRole);
//         otherRole.style.borderColor = 'red';
//     } 
// })
//once other role text has a value remove the errors
otherRole.addEventListener('change', () => {
    if (otherRole.value != '') {
    errorOtherRole.remove();
    otherRole.style.borderColor = '';  
    }
})
//When Design has an error and is now fixed remove errors
shirtDesign.addEventListener('change', () => {
    if (shirtDesign.value != '') {
        shirtDesign.style.borderColor = '';
        errorDesign.remove();  
    }
})

//When mainConf is checked remove the activities errors.
mainConf.addEventListener('change', () => {
    if (numOfActivities > 0) {
        $('.activities').css('color', '');
        errorActivities.remove();  
    }
})
//When jsFrameworks is checked remove the activities errors.
jsFrameworks.addEventListener('change', () => {
    if (numOfActivities > 0) {
        $('.activities').css('color', '');
        errorActivities.remove();  
    }
})
//When jsLibs is checked remove the activities errors.
jsLibs.addEventListener('change', () => {
    if (numOfActivities > 0) {
        $('.activities').css('color', '');
        errorActivities.remove();  
    }
})
//When express is checked remove the activities errors.
express.addEventListener('change', () => {
    if (numOfActivities > 0) {
        $('.activities').css('color', '');
        errorActivities.remove();  
    }
})
//When node is checked remove the activities errors.
node.addEventListener('change', () => {
    if (numOfActivities > 0) {
        $('.activities').css('color', '');
        errorActivities.remove();  
    }
})
//When buildtools is checked remove the activities errors.
buildTools.addEventListener('change', () => {
    if (numOfActivities > 0) {
        $('.activities').css('color', '');
        errorActivities.remove();  
    }
})
//When npm is checked remove the activities errors.
npm.addEventListener('change', () => {
    if (numOfActivities > 0) {
        $('.activities').css('color', '');
        errorActivities.remove();  
    }
})
//When paymentType has errors and then changed to a different type either paypal or bitcoin remove errors.
paymentType.addEventListener('change', () => {
    if (paymentType.value != 'select_method') {
        paymentType.style.borderColor = '';
        removePaymentErrors();
    } else if (paymentType.value != 'cc-num') {
        removePaymentErrors();
    } else if (paymentType.value != 'paypal') {
        paymentType.style.borderColor = '';
        removePaymentErrors();
    } else {
        paymentType.style.borderColor = '';
        removePaymentErrors();
    }
})
//When ccNum is not correct throw error and if it is correct remove errors.
ccNum.addEventListener('change', () => {
    if (ccNum.value.length >= 13 && ccNum.value.length <= 16) {
        ccNum.style.borderColor = '';
        $('label[for="cc-num"]').css('color', '');
        errorCreditCard.remove();
    } else {
        errorCreditCard.textContent = 'Please make sure to add in your Credit Card Number containing 13-16 digits.';
        $('label[for="cc-num"]').css('color', 'red');
        ccNum.style.borderColor = 'red';
        paymentType.after(errorCreditCard);
    }
})
//When zipcode is not correct throw error and if it is correct remove errors.
zipCode.addEventListener('change', () => {
    if (zipCode.value.length == 5) {
        zipCode.style.borderColor = '';
        $('label[for="zip"]').css('color', '');
        errorZipCode.remove();
    } else {
        errorZipCode.textContent = 'Please make sure to add in your 5-digit Zip Code.';
        zipCode.style.borderColor = 'red';
        $('label[for="zip"]').css('color', 'red');
        document.getElementById('payment').after(errorZipCode);
    }
})
//When CVV is not correct throw error and if it is correct remove errors.
cvvNum.addEventListener('change', () => {
    if (cvvNum.value.length == 3) {
        cvvNum.style.borderColor = '';
        $('label[for="cvv"]').css('color', '');
        errorCvv.remove();
    } else {
        errorCvv.textContent = 'Please make sure to add in your 3-digit CVV number.';
        cvvNum.style.borderColor = 'red';
        $('label[for="cvv"]').css('color', 'red');
        paymentType.after(errorCvv);
    }
})