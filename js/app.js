//declare all global variables
const name = document.getElementById('name');
const jobRole = document.getElementById('title');
const otherRole = document.getElementById('other-title');
const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');
let totalCost;
let insertCost = '<p>Total Cost = ';
const mainConf = document.getElementsByName('all');
const activities = document.querySelectorAll('[type="checkbox"]');
const paymentType = document.getElementById('payment');
const button = document.getElementsByTagName('button')[0];
const email = document.getElementById('mail');

//Preparing Form on page load.
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
// activities.addEventListener('change', () => {

// })

paymentType.addEventListener('change', () => {
    if (paymentType.value === 'bitcoin') {
        document.getElementById('credit-card').style.display = 'none';
        document.getElementsByTagName('p')[0].style.display = 'none';
        document.getElementsByTagName('p')[1].style.display = '';        
    } else if (paymentType.value === 'paypal') {
        document.getElementById('credit-card').style.display = 'none';
        document.getElementsByTagName('p')[0].style.display = '';
        document.getElementsByTagName('p')[1].style.display = 'none';        

    } else {
        document.getElementById('credit-card').style.display = '';
        document.getElementsByTagName('p')[0].style.display = 'none';
        document.getElementsByTagName('p')[1].style.display = 'none';
    }
})

button.addEventListener('click', () => {
    if (name.value == '' || email.value === '' || otherRole === '' || paymentType.value === 'credit-card' || 
    paymentType.value === 'select-method') {
        errorName = document.createElement('p');
        errorName.className = 'errorClass';
        errorEmail = document.createElement('p');
        errorEmail.className = 'errorClass';
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
        if (paymentType.value === 'credit-card' || paymentType.value === 'select-method' || payment.value === 'select_method') {
            
            if (document.getElementById('cc-num').value === '') {
                errorCreditCard.textContent = 'Please make sure to add in your Credit Card Number.';
                $('label[for="cc-num"]').css('color', 'red');
                document.getElementById('cc-num').style.borderColor = 'red';
                event.preventDefault();
            }
            if (document.getElementById('zip').value === '') {
                errorZipCode.textContent = 'Please make sure to add in your Zip Code.';
                document.getElementById('zip').style.borderColor = 'red';
                $('label[for="zip"]').css('color', 'red');
                event.preventDefault();
            }
            if (document.getElementById('cvv').value === '') {
                errorCvv.textContent = 'Please make sure to add in your CVV number.';
                document.getElementById('cvv').style.borderColor = 'red';
                $('label[for="cvv"]').css('color', 'red');
                event.preventDefault();
            }
            if (payment.value === 'select_method') {
                errorPayment.textContent = 'Please make sure to select a payment option.';
                document.getElementById('payment').style.borderColor = 'red';
                event.preventDefault();
            }
        }
        
    }
    $('.errorClass').css('color', 'red');

    
})
