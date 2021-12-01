var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');
var propertyButton = document.getElementById('propButton');
var buyersButton = document.getElementById('buyButton');
var sellersButton = document.getElementById('sellButton');

    menu.addEventListener('click', function(e){ 
        nav.classList.toggle('hide-mobile');
        e.preventDefault();
    });

    exit.addEventListener('click', function(e){ 
        nav.classList.add('hide-mobile');
        e.preventDefault();
    });

    function openNav() {
        nav.style.width = "100%";
      }
      
    function closeNav() {
        nav.style.width = "0";
    }

    propButton.onclick = function () {
        location.href = "";
    };
    document.getElementById("buyButton").onclick = function () {
        location.href = 'buyers.html';
    };
    sellButton.onclick = function () {
        location.href = "/sellers.html";
    };
