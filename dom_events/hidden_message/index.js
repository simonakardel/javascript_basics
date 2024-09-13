const button = document.getElementById('btn');
const div = document.getElementById('div');

button.addEventListener('mouseover', function () {
    div.classList.remove('hidden');
    div.classList.add('visible');
});

button.addEventListener('mouseout', function () {
    div.classList.add('hidden');
});
