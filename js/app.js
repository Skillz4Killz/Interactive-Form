//declare all global variables
const name = document.getElementById('name');
const jobRole = document.getElementById('title');
const otherRole = document.getElementById('other-title');
const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');
let subTotal = 0;
let insertCost = 'Total Cost = ';
const allActivities = document.getElementsByClassName('activities');
const mainConf = document.getElementsByName('all')[0];
const jsFrameworks = document.getElementsByName('js-frameworks')[0];
const jsLibs = document.getElementsByName('js-libs')[0];
const express = document.getElementsByName('express')[0];
const node = document.getElementsByName('node')[0];
const buildTools = document.getElementsByName('build-tools')[0];
const npm = document.getElementsByName('npm')[0];
const paymentType = document.getElementById('payment');
const button = document.getElementsByTagName('button')[0];
const email = document.getElementById('mail');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementsByTagName('p')[0];
const bitcoin = document.getElementsByTagName('p')[1];

//Preparing Form on page load.s
name.focus();
otherRole.style.display = 'none';
document.getElementById('colors-js-puns').style.display = 'none';
document.getElementsByTagName('p')[0].style.display = 'none';
document.getElementsByTagName('p')[1].style.display = 'none';

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
    document.getElementById('colors-js-puns').style.display = '';
} else if (shirtDesign.value === 'heart js') {
    shirtColor.innerHTML = '<option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>';
    document.getElementById('colors-js-puns').style.display = '';
} else {
    document.getElementById('colors-js-puns').style.display = 'none';
}
})

//Totaling Costs and scheduling properly.
 totalCost = document.createElement('p');
    totalCost.className = 'totalCost';
    npm.parentElement.after(totalCost);

function mainActivity () {
    mainConf.addEventListener('change', () => {
        if (mainConf.checked) {
            subTotal = subTotal + 200;
            totalCost.textContent = insertCost + subTotal;
            console.log(subTotal);
            
        } else {
            subTotal = subTotal - 200;
            console.log(subTotal);
            totalCost.textContent = insertCost + subTotal;
        }
    })
}

function activities (x) {
    x.addEventListener('change', () => {
        if (x.checked) {
            subTotal = subTotal + 100;
            totalCost.textContent = insertCost + subTotal;
            console.log(subTotal);
        } else {
            subTotal = subTotal - 100;
            console.log(subTotal);
            totalCost.textContent = insertCost + subTotal;
        }
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

mainActivity(mainConf);
activities(jsFrameworks);
activities(jsLibs);
activities(express);
activities(node);
activities(buildTools);
activities(npm);





//Payment selecting changing options per option.
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

//Form Validation
button.addEventListener('click', () => {
    if (name.value == '' || email.value === '' || otherRole === '' || paymentType.value === 'credit-card' || 
    paymentType.value === 'select-method') {
        errorName = document.createElement('p');
        errorName.className = 'errorClass';
        errorEmail = document.createElement('p');
        errorEmail.className = 'errorClass';
        errorDesign = document.createElement('p');
        errorDesign.className = 'errorClass';
        errorColor = document.createElement('p');
        errorColor.className = 'errorClass';
        errorPayment = document.createElement('p');
        errorPayment.className = 'errorClass';
        errorCreditCard = document.createElement('p');
        errorCreditCard.className = 'errorClass';
        errorZipCode = document.createElement('p');
        errorZipCode.className = 'errorClass';
        errorCvv = document.createElement('p');
        errorCvv.className = 'errorClass';
        if (name.value == '' || email.value === '' ) {
            event.preventDefault();
            if (name.value == '') {
                errorName.textContent = 'Please make sure to add in your name.';
                document.getElementById('name').after(errorName);
            } 
            if (email.value == '') {
                errorEmail.textContent = 'Please make sure to add in your email address.';
                document.getElementById('mail').after(errorEmail);
            } 
    }
        if (title.value === 'other' && otherRole === '') {
            event.preventDefault();
        }
        if (document.getElementById('design').value === 'Select Theme') {
            errorDesign.textContent = 'Please make sure to select a design type';
            document.getElementById('design').style.borderColor = 'red';
            $('#design').css('color', 'red');
            document.getElementById('design').after(errorDesign);
            event.preventDefault();
            }

        if (paymentType.value === 'credit-card' || paymentType.value === 'select-method' || payment.value === 'select_method') {
            
            if (document.getElementById('cc-num').value === '' || document.getElementById('cc-num').value.length < 13 || document.getElementById('cc-num').value.length > 16) {
                errorCreditCard.textContent = 'Please make sure to add in your Credit Card Number containing 13-16 digits.';
                $('label[for="cc-num"]').css('color', 'red');
                document.getElementById('cc-num').style.borderColor = 'red';
                document.getElementById('payment').after(errorCreditCard);
                event.preventDefault();
            }
            if (document.getElementById('zip').value === '' || document.getElementById('zip').value.length != 5) {
                errorZipCode.textContent = 'Please make sure to add in your 5-digit Zip Code.';
                document.getElementById('zip').style.borderColor = 'red';
                $('label[for="zip"]').css('color', 'red');
                document.getElementById('payment').after(errorZipCode);
                event.preventDefault();
            }
            if (document.getElementById('cvv').value === '' || document.getElementById('cvv').value.length != 3) {
                errorCvv.textContent = 'Please make sure to add in your 3-digit CVV number.';
                document.getElementById('cvv').style.borderColor = 'red';
                $('label[for="cvv"]').css('color', 'red');
                document.getElementById('payment').after(errorCvv);
                event.preventDefault();
            }
            if (payment.value === 'select_method') {
                errorPayment.textContent = 'Please make sure to select a payment option.';
                document.getElementById('payment').style.borderColor = 'red';
                document.getElementById('payment').after(errorPayment);
                event.preventDefault();
            }
        }
        
    }
    while (email.value.search(@) === -1) {
        
    }
    $('.errorClass').css('color', 'red');

    
})
