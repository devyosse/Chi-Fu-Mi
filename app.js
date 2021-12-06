const rock = document.getElementById('pierre');
const paper = document.getElementById('feuille');
const scissors = document.getElementById('ciseau');
const resultat = document.getElementById('result');
let play = x = 0 , y = 0;
const count = document.getElementById('score');
const ordi = [
    rock ,paper ,scissors
];

function jeu(element, draw, loose, win){
    element.addEventListener('click', function (){
        let rdm = Math.floor(Math.random() * ordi.length);
        play++;
        if ( ordi[rdm] === draw){
            resultat.innerHTML = "Egalité";
        }
        if(ordi[rdm] === loose){
            resultat.innerHTML = "Perdu";
            y++;
        }
        if(ordi[rdm] === win){
            resultat.innerHTML = "Gagné";
            x++;
        }
        count.innerHTML = "Victoire = " + x + "  Défaite = " + y;
    })
}

jeu(rock, rock, paper, scissors);
jeu(paper, paper, scissors, rock);
jeu(scissors, scissors, rock, paper);
