function updateCountdown() {
    const targetDate = new Date("2025-10-30T08:00:00");
    const now = new Date();

    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (difference < 0) {
        document.getElementById("countdown").innerHTML = "<p>目標日時を過ぎました。</p>";
    }
}

// 1秒ごとにカウントダウンを更新
setInterval(updateCountdown, 1000);

// 初期表示
updateCountdown(); 