let coins = 0;
let perClick = 1;

document.getElementById("click-btn").addEventListener("click", () => {
    coins += perClick;
    document.getElementById("coins").innerText = "Монеты: " + coins;
});

function buyUpgrade() {
    if (coins >= 10) {
        coins -= 10;
        perClick += 1;
        document.getElementById("coins").innerText = "Монеты: " + coins;
        alert("Прокачка куплена! Доход за клик: " + perClick);
    } else {
        alert("Недостаточно монет!");
    }
}
