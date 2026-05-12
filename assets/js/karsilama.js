function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Günaydın";
    else if (hour < 17) return "İyi Günler";
    else if (hour < 21) return "İyi Akşamlar";
    return "İyi Geceler";
}

function getWeatherStatus(code) {
    const map = {
        0: "Açık ☀️",
        1: "Çoğunlukla Açık 🌤️",
        2: "Parçalı Bulutlu ⛅",
        3: "Kapalı 🌥️",
        45: "Sisli 🌫️",
        48: "Yoğun Sis 🌫️",
        51: "Hafif Çisenti 🌦️",
        61: "Hafif Yağmurlu 🌧️",
        63: "Yağmurlu 🌧️",
        65: "Şiddetli Yağmur 🌧️",
        71: "Hafif Karlı 🌨️",
        73: "Karlı ❄️",
        80: "Sağanak 🌦️",
        95: "Fırtınalı ⛈️",
    };
    return map[code] ?? "";
}

async function loadWeather() {
    const wtGreeting = document.getElementById("weatherGreeting");
    const wtTemp = document.getElementById("weatherTemp");
    const wtStat = document.getElementById("weatherStat");

    wtGreeting.textContent = getGreeting();

    try {
        const res = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=41.0053&longitude=28.6825&current=temperature_2m,weathercode&timezone=Europe%2FIstanbul"
        );
        const data = await res.json();
        const temp = Math.round(data.current.temperature_2m);
        const code = data.current.weathercode;

        wtTemp.textContent = `${temp}°C`;
        wtStat.textContent = `· ${getWeatherStatus(code)}`;
    } catch (e) {
        console.log(`Weather API error: ${e}`);
    }
}

loadWeather();