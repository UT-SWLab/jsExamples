function change_h1() {
    document.querySelector('h1').innerHTML = "Hi, How Are You?";
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = change_h1;
}); 
