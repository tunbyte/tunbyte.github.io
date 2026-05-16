const greetingKeys = [
    { until: 12, key: 'greeting_morning' },
    { until: 17, key: 'greeting_day' },
    { until: 21, key: 'greeting_evening' },
    { until: 24, key: 'greeting_night' },
];

const weatherKeys = {
    0: 'weather_clear',
    1: 'weather_mostly_clear',
    2: 'weather_partly_cloudy',
    3: 'weather_cloudy',
    45: 'weather_foggy',
    48: 'weather_dense_fog',
    51: 'weather_light_drizzle',
    61: 'weather_light_rain',
    63: 'weather_rain',
    65: 'weather_heavy_rain',
    71: 'weather_light_snow',
    73: 'weather_snow',
    80: 'weather_showers',
    95: 'weather_storm',
};

function getGreetingKey() {
    const hour = new Date().getHours();
    return greetingKeys.find(g => hour < g.until)?.key ?? 'greeting_night';
}

async function loadWeather() {
    const wtGreeting = document.getElementById('weatherGreeting');
    const wtTemp = document.getElementById('weatherTemp');
    const wtStat = document.getElementById('weatherStat');

    // Aktif locale'i çek
    const lang = localStorage.getItem('lang') || 'tr';
    const res = await fetch(`locales/${lang}.json`);
    const locale = await res.json();

    wtGreeting.textContent = locale[getGreetingKey()] || '';

    try {
        const apiRes = await fetch(
            'https://api.open-meteo.com/v1/forecast?latitude=41.0053&longitude=28.6825&current=temperature_2m,weathercode&timezone=Europe%2FIstanbul'
        );
        const data = await apiRes.json();
        const temp = Math.round(data.current.temperature_2m);
        const code = data.current.weathercode;
        const weatherKey = weatherKeys[code];

        wtTemp.textContent = `${temp}°C`;
        wtStat.textContent = `· ${locale[weatherKey] || ''}`;
    } catch (e) {
        console.log(`Weather API error: ${e}`);
    }
}

// Dil değişince yeniden yükle
$(document).on('langChanged', () => loadWeather());

loadWeather();