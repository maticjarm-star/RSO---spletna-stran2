const gumbi = document.querySelectorAll('.gumb');

gumbi.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#D3D3D3';
        button.classList.add('odprto');
    });

    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = 'white';
        button.classList.remove('odprto');
    });
});


const slike = [
    "1.slika.png",
    "2.slika.png",
    "3.slika.png",
    "4.slika.png",
    "5.slika.png",
];

let trenutna = 0;
const slika = document.getElementById("prikazanaSlika");

function prikaziSliko() {
    slika.src = "slike/" + slike[trenutna];
}

function naprej() {
    trenutna++;
    if (trenutna >= slike.length) {
        trenutna = 0;
    }
    prikaziSliko();
}

function nazaj() {
    trenutna--;
    if (trenutna < 0) {
        trenutna = slike.length - 1;
    }
    prikaziSliko();
}

if (slika) {
    document.getElementById("naprej").addEventListener("click", naprej);
    document.getElementById("nazaj").addEventListener("click", nazaj);
    setInterval(naprej, 4000);
}



//prjavnca
const obrazec = document.getElementById("obrazec");
const rezultat = document.getElementById("rezultat");

if (obrazec) {
    obrazec.addEventListener("submit", function (e) {
        e.preventDefault();

        const ime = document.getElementById("ime").value;
        const email = document.getElementById("email").value;
        const datum = document.getElementById("datum").value;
        const selekcija = document.getElementById("selekcija").value;

        if (ime === "" || email === "" || datum === "" || selekcija === "") {
            rezultat.textContent = "Izpolni vsa polja.";
            rezultat.classList.remove("uspeh");
            rezultat.classList.add("napaka");
        } else {
            rezultat.textContent = ime + " (" + email + "), rojen/a " + datum +
                ", selekcija: " + selekcija + ". Hvala za prijavo!";
            rezultat.classList.remove("napaka");
            rezultat.classList.add("uspeh");
        }
    });
}
