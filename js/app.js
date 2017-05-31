//declare all global variables
const name = document.getElementById('name');
const jobRole = document.getElementById('title');
const otherRole = document.getElementById('other-title');

name.focus();
otherRole.style.display = 'none';

jobRole.addEventListener('change', () => {
    if (jobRole.value == 'other') {
      otherRole.style.display = '';
    } else if (jobRole.value != 'other') {
        otherRole.style.display = 'none';
    }
})


