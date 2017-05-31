//declare all global variables
const name = document.getElementById('name');
const jobRole = document.getElementById('title');
const otherRole = document.getElementById('other-title');
const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');
const color1 = document.querySelector('option[value=cornflowerblue]').value;
const color2 = document.querySelector('option[value=darkslategrey]').value;
const color3 = document.querySelector('option[value=gold]').value;
const color4 = document.querySelector('option[value=tomato]').value;
const color5 = document.querySelector('option[value=steelblue]').value;
const color6 = document.querySelector('option[value=dimgrey]').value;
const colors = ['cornflowerblue', 'darkslategrey', 'gold', 'tomato', 'steelblue', 'dimgrey']
let jsPuns = [];
let heartJs = [];

//      
name.focus();
otherRole.style.display = 'none';

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
} else if (shirtDesign.value === 'heart js') {
    shirtColor.innerHTML = '<option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>'
} else {
    shirtColor.innerHTML = '<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option><option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> <option value="gold">Gold (JS Puns shirt only)</option><option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>'
}
})


