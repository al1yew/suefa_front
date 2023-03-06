/*
let input = document.getElementById('name');
let btn = document.getElementById('btn');

btn.onclick = function () {
    let input_value_name = input.value;
    document.getElementById('begin').classList.add('d-none');
    document.getElementById('main').classList.remove('visib');

    document.getElementById('player_name').innerHTML = input_value_name;

}

let result = document.getElementById('result');
let random_result = document.getElementById('random_result');
let game_elements = document.getElementById('game_elements');

let arr = [
    "rock",
    "scissors",
    "paper"
];

let a = 0;
let b = 0;

for (let div of game_elements.children) {

    div.onclick = function () {

        math = arr[Math.floor(Math.random() * arr.length)];

        random_result.innerHTML = `Computer selected ${math.toUpperCase()}`;

        if (div.id === math) {
            result.innerHTML = 'Draw!';
            result.className = 'col-lg-6 col-8';
            result.classList.add('draw');
            result.style.color = 'black';
        }
        else if (div.id == 'rock' && math == 'paper') {
            result.innerHTML = 'You Lost!';
            result.className = 'col-lg-6 col-8';
            result.classList.add('lost');
            result.style.color = 'white';
            b++;
        }
        else if (div.id == 'rock' && math == 'scissors') {
            result.innerHTML = 'You Won!';
            result.className = 'col-lg-6 col-8';
            result.classList.add('win');
            result.style.color = 'white';
            a++;
        }
        else if (div.id == 'paper' && math == 'rock') {
            result.innerHTML = 'You Won!';
            result.className = 'col-lg-6 col-8';
            result.classList.add('win');
            result.style.color = 'white';
            a++;
        }
        else if (div.id == 'paper' && math == 'scissors') {
            result.innerHTML = 'You Lost!';
            result.className = 'col-lg-6 col-8';
            result.classList.add('lost');
            result.style.color = 'white';
            b++;
        }
        else if (div.id == 'scissors' && math == 'rock') {
            result.innerHTML = 'You Lost!';
            result.className = 'col-lg-6 col-8';
            result.classList.add('lost');
            result.style.color = 'white';
            b++;
        }
        else if (div.id == 'scissors' && math == 'paper') {
            result.innerHTML = 'You Won!';
            result.className = 'col-lg-6 col-8';
            result.classList.add('win');
            result.style.color = 'white';
            a++;
        }

        document.getElementById('count_player').innerHTML = a;
        document.getElementById('count_comp').innerHTML = b;
    }
}
*/

$(document).ready(function () {

    $('.preloaderdiv').addClass('d-none');
    $('#phoneno').focus();

    $(document).on('click', '#rock', function () {
        $('.absolutuser').addClass('moveright')
        $('.absolutcomp').addClass('moveleft')

        setTimeout(() => {
            $('.absolutuser').removeClass('moveright')
            $('.absolutcomp').removeClass('moveleft')
        }, 750);
    })

    //#region prevent letters and nonnumeric

    $(document).on('input', '#phoneno', function (e) {
        if (!/^[0-9]+$/.test($(this).val())) {
            $(this).val($(this).val().slice(0, -1))
        }
    })

    //#endregion prevent letters and nonnumeric

    //#region submit login

    $(document).on('submit', '#loginform', function (e) {
        e.preventDefault();

        $('#login').hide(300);
        $('#mainpage').show(300);
    })

    //#endregion submit login

    $(document).on('click', '#reload', function () {
        window.location.reload();
    })

})