let heroi = "Neguinho";
let xp = 7500;
let nivel = "";


if (xp <= 1000) {
    nivel = "Ferro";
}else if (xp <= 2000) {
    nivel = "bronze";
}else if (xp <= 4000) {
    nivel = "prata";
}else if (xp <= 6000) {
    nivel = "ouro";
}else if (xp <= 8000) {
    nivel = "Platina";
}else if (xp <= 10000) {
    nivel = "Imortal";
}else if (xp >= 10.001) {
    nivel = "Radiante";
}

console.log(`o seu herói ${heroi} está no nivel ${nivel}.`);

