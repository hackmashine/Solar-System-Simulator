// Система языков
let currentLanguage = localStorage.getItem('language') || 'ru';

// Данные о планетах на двух языках
const planetData = {
    sun: {
        ru: {
            name: "Солнце",
            description: "Центральная звезда нашей солнечной системы. Массивный шар из водорода и гелия, который производит энергию через ядерный синтез.",
            distance: "0 млн км",
            period: "25-35 дней (вращение)",
            diameter: "1,392,700 км",
            temperature: "5,500°C (поверхность), 15,000,000°C (ядро)"
        },
        en: {
            name: "Sun",
            description: "The central star of our solar system. A massive ball of hydrogen and helium that produces energy through nuclear fusion.",
            distance: "0 million km",
            period: "25-35 days (rotation)",
            diameter: "1,392,700 km",
            temperature: "5,500°C (surface), 15,000,000°C (core)"
        },
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9InVybCgjZ3JhZGllbnQpIi8+CjxkZWZzPgo8cmFkaWFsR3JhZGllbnQgaWQ9ImdyYWRpZW50IiBjeD0iMC41IiBjeT0iMC41IiByPSIwLjUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZkNzAwO3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjUwJSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmOGMwMDtzdG9wLW9wYWNpdHk6MSIgLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY0NTAwO3N0b3Atb3BhY2l0eToxIiAvPgo8L3JhZGlhbEdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="
    },
    mercury: {
        ru: {
            name: "Меркурий",
            description: "Самая близкая к Солнцу планета. Небольшая каменистая планета с экстремальными перепадами температуры.",
            distance: "57.9 млн км",
            period: "88 дней",
            diameter: "4,879 км",
            temperature: "-180°C до +430°C"
        },
        en: {
            name: "Mercury",
            description: "The closest planet to the Sun. A small rocky planet with extreme temperature variations.",
            distance: "57.9 million km",
            period: "88 days",
            diameter: "4,879 km",
            temperature: "-180°C to +430°C"
        },
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9InVybCgjZ3JhZGllbnQpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50IiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2OTY5Njk7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2E5YTlhOTtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
    },
    venus: {
        ru: {
            name: "Венера",
            description: "Вторая планета от Солнца. Известна как 'утренняя звезда' и имеет плотную атмосферу из углекислого газа.",
            distance: "108.2 млн км",
            period: "225 дней",
            diameter: "12,104 км",
            temperature: "462°C (средняя)"
        },
        en: {
            name: "Venus",
            description: "The second planet from the Sun. Known as the 'morning star' and has a dense atmosphere of carbon dioxide.",
            distance: "108.2 million km",
            period: "225 days",
            diameter: "12,104 km",
            temperature: "462°C (average)"
        },
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9InVybCgjZ3JhZGllbnQpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50IiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNkYWE1MjA7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmZDcwMDtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
    },
    earth: {
        ru: {
            name: "Земля",
            description: "Наша родная планета. Единственная известная планета с жизнью, имеет жидкую воду и защитную атмосферу.",
            distance: "149.6 млн км",
            period: "365.25 дней",
            diameter: "12,742 км",
            temperature: "-88°C до +58°C"
        },
        en: {
            name: "Earth",
            description: "Our home planet. The only known planet with life, has liquid water and a protective atmosphere.",
            distance: "149.6 million km",
            period: "365.25 days",
            diameter: "12,742 km",
            temperature: "-88°C to +58°C"
        },
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9InVybCgjZ3JhZGllbnQpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50IiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0MTY5ZTE7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwYmZmZjtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
    },
    mars: {
        ru: {
            name: "Марс",
            description: "Красная планета. Имеет тонкую атмосферу, полярные ледяные шапки и самый большой вулкан в солнечной системе.",
            distance: "227.9 млн км",
            period: "687 дней",
            diameter: "6,792 км",
            temperature: "-140°C до +20°C"
        },
        en: {
            name: "Mars",
            description: "The Red Planet. Has a thin atmosphere, polar ice caps and the largest volcano in the solar system.",
            distance: "227.9 million km",
            period: "687 days",
            diameter: "6,792 km",
            temperature: "-140°C to +20°C"
        },
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9InVybCgjZ3JhZGllbnQpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50IiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNjZDVjNWM7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmNjM0NztzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
    },
    jupiter: {
        ru: {
            name: "Юпитер",
            description: "Самый большой газовый гигант. Имеет мощное магнитное поле и более 79 известных спутников.",
            distance: "778.5 млн км",
            period: "11.86 лет",
            diameter: "139,820 км",
            temperature: "-110°C (облака)"
        },
        en: {
            name: "Jupiter",
            description: "The largest gas giant. Has a powerful magnetic field and more than 79 known moons.",
            distance: "778.5 million km",
            period: "11.86 years",
            diameter: "139,820 km",
            temperature: "-110°C (clouds)"
        },
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9InVybCgjZ3JhZGllbnQpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50IiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNkYWE1MjA7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmOGMwMDtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
    },
    saturn: {
        ru: {
            name: "Сатурн",
            description: "Планета с кольцами. Известна своими впечатляющими кольцами, состоящими из льда и камней.",
            distance: "1.4 млрд км",
            period: "29.46 лет",
            diameter: "116,460 км",
            temperature: "-140°C (облака)"
        },
        en: {
            name: "Saturn",
            description: "The ringed planet. Known for its impressive rings made of ice and rocks.",
            distance: "1.4 billion km",
            period: "29.46 years",
            diameter: "116,460 km",
            temperature: "-140°C (clouds)"
        },
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9InVybCgjZ3JhZGllbnQpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50IiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmNGE0NjA7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2RlYjg4NztzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
    },
    uranus: {
        ru: {
            name: "Уран",
            description: "Ледяной гигант. Уникален тем, что вращается на боку, его ось наклонена почти на 98 градусов.",
            distance: "2.9 млрд км",
            period: "84 года",
            diameter: "50,724 км",
            temperature: "-195°C (облака)"
        },
        en: {
            name: "Uranus",
            description: "Ice giant. Unique in that it rotates on its side, its axis is tilted almost 98 degrees.",
            distance: "2.9 billion km",
            period: "84 years",
            diameter: "50,724 km",
            temperature: "-195°C (clouds)"
        },
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9InVybCgjZ3JhZGllbnQpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50IiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0MGUwZDA7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwY2VkMTtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
    },
    neptune: {
        ru: {
            name: "Нептун",
            description: "Самый дальний газовый гигант. Имеет самые быстрые ветры в солнечной системе - до 2,100 км/ч.",
            distance: "4.5 млрд км",
            period: "164.8 года",
            diameter: "49,244 км",
            temperature: "-200°C (облака)"
        },
        en: {
            name: "Neptune",
            description: "The farthest gas giant. Has the fastest winds in the solar system - up to 2,100 km/h.",
            distance: "4.5 billion km",
            period: "164.8 years",
            diameter: "49,244 km",
            temperature: "-200°C (clouds)"
        },
        image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9InVybCgjZ3JhZGllbnQpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50IiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0MTY5ZTE7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzFlOTBmZjtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
    }
};

// Состояние приложения
let appState = {
    isPaused: false,
    speed: 50,
    scale: 50,
    currentView: 'simulation',
    selectedPlanet: null
};

// Функция смены языка
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Обновляем атрибут lang у html
    document.documentElement.lang = lang;
    
    // Обновляем заголовок страницы
    document.title = document.querySelector('title').getAttribute(`data-${lang}`);
    
    // Обновляем все элементы с атрибутами data-en и data-ru
    const elements = document.querySelectorAll('[data-en][data-ru]');
    elements.forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });
    
    // Обновляем активную кнопку языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Обновляем информацию о планете, если она открыта
    if (appState.selectedPlanet) {
        showPlanetInfo(appState.selectedPlanet);
    }
}

// Навигация
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.view');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetView = this.dataset.view;
            
            // Обновляем активную кнопку
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Показываем нужную секцию
            views.forEach(view => {
                view.classList.remove('active');
                if (view.id === targetView) {
                    view.classList.add('active');
                }
            });
            
            appState.currentView = targetView;
        });
    });
}

// Управление элементами
function setupControls() {
    const speedSlider = document.getElementById('speed');
    const scaleSlider = document.getElementById('scale');
    const pauseBtn = document.getElementById('pause-btn');
    const resetBtn = document.getElementById('reset-btn');
    const speedValue = document.getElementById('speed-value');
    const scaleValue = document.getElementById('scale-value');

    // Скорость времени
    speedSlider.addEventListener('input', function() {
        appState.speed = parseInt(this.value);
        speedValue.textContent = appState.speed + 'x';
        updateAnimationSpeed();
    });

    // Масштаб орбит
    scaleSlider.addEventListener('input', function() {
        appState.scale = parseInt(this.value);
        scaleValue.textContent = appState.scale + '%';
        updateOrbitScales();
    });

    // Пауза/Продолжить
    pauseBtn.addEventListener('click', function() {
        appState.isPaused = !appState.isPaused;
        const planets = document.querySelectorAll('.planet');
        
        if (appState.isPaused) {
            planets.forEach(planet => planet.style.animationPlayState = 'paused');
            this.innerHTML = '<i class="fas fa-play"></i> <span data-en="Continue" data-ru="Продолжить">Продолжить</span>';
        } else {
            planets.forEach(planet => planet.style.animationPlayState = 'running');
            this.innerHTML = '<i class="fas fa-pause"></i> <span data-en="Pause" data-ru="Пауза">Пауза</span>';
        }
    });

    // Сброс
    resetBtn.addEventListener('click', function() {
        resetSimulation();
    });
}

// Взаимодействие с планетами
function setupPlanetInteractions() {
    const planets = document.querySelectorAll('.planet');
    
    planets.forEach(planet => {
        planet.addEventListener('click', function() {
            const planetName = this.dataset.planet;
            showPlanetInfo(planetName);
        });
        
        // Добавляем эффект при наведении
        planet.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3)';
            this.style.zIndex = '30';
        });
        
        planet.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '1';
        });
    });
}

// Панель информации
function setupInfoPanel() {
    const infoPanel = document.querySelector('.info-panel');
    const closeBtn = document.querySelector('.close-btn');
    
    closeBtn.addEventListener('click', function() {
        infoPanel.classList.remove('active');
        appState.selectedPlanet = null;
    });
}

// Показать информацию о планете
function showPlanetInfo(planetName) {
    const planet = planetData[planetName][currentLanguage];
    if (!planet) return;
    
    const infoPanel = document.querySelector('.info-panel');
    const planetImg = document.getElementById('planet-img');
    const planetNameEl = document.getElementById('planet-name');
    const planetDesc = document.getElementById('planet-description');
    const distance = document.getElementById('distance');
    const period = document.getElementById('period');
    const diameter = document.getElementById('diameter');
    const temperature = document.getElementById('temperature');
    
    // Обновляем информацию
    planetImg.src = planetData[planetName].image;
    planetImg.alt = planet.name;
    planetNameEl.textContent = planet.name;
    planetDesc.textContent = planet.description;
    distance.textContent = planet.distance;
    period.textContent = planet.period;
    diameter.textContent = planet.diameter;
    temperature.textContent = planet.temperature;
    
    // Показываем панель
    infoPanel.classList.add('active');
    appState.selectedPlanet = planetName;
}

// Образовательный контент
function setupEducationalContent() {
    const learnButtons = document.querySelectorAll('.learn-more-btn');
    
    learnButtons.forEach(button => {
        button.addEventListener('click', function() {
            const topic = this.dataset.topic;
            showEducationalModal(topic);
        });
    });
}

// Показать образовательное модальное окно
function showEducationalModal(topic) {
    const modalContent = {
        sun: {
            ru: {
                title: "Солнце - Наша Звезда",
                content: `
                    <h3>Характеристики Солнца</h3>
                    <ul>
                        <li><strong>Тип:</strong> Желтый карлик (G2V)</li>
                        <li><strong>Масса:</strong> 1.989 × 10³⁰ кг (333,000 масс Земли)</li>
                        <li><strong>Диаметр:</strong> 1,392,700 км</li>
                        <li><strong>Температура поверхности:</strong> 5,500°C</li>
                        <li><strong>Температура ядра:</strong> 15,000,000°C</li>
                    </ul>
                    <h3>Энергия Солнца</h3>
                    <p>Солнце производит энергию через ядерный синтез, превращая водород в гелий. Каждую секунду Солнце излучает 3.8 × 10²⁶ ватт энергии.</p>
                `
            },
            en: {
                title: "Sun - Our Star",
                content: `
                    <h3>Sun Characteristics</h3>
                    <ul>
                        <li><strong>Type:</strong> Yellow dwarf (G2V)</li>
                        <li><strong>Mass:</strong> 1.989 × 10³⁰ kg (333,000 Earth masses)</li>
                        <li><strong>Diameter:</strong> 1,392,700 km</li>
                        <li><strong>Surface temperature:</strong> 5,500°C</li>
                        <li><strong>Core temperature:</strong> 15,000,000°C</li>
                    </ul>
                    <h3>Solar Energy</h3>
                    <p>The Sun produces energy through nuclear fusion, converting hydrogen into helium. Every second, the Sun emits 3.8 × 10²⁶ watts of energy.</p>
                `
            }
        },
        terrestrial: {
            ru: {
                title: "Планеты Земной Группы",
                content: `
                    <h3>Общие характеристики</h3>
                    <ul>
                        <li><strong>Состав:</strong> Каменистые породы и металлы</li>
                        <li><strong>Поверхность:</strong> Твердая</li>
                        <li><strong>Атмосфера:</strong> Тонкая или отсутствует</li>
                        <li><strong>Размер:</strong> Относительно небольшие</li>
                    </ul>
                    <h3>Планеты группы</h3>
                    <ol>
                        <li><strong>Меркурий:</strong> Самая близкая к Солнцу</li>
                        <li><strong>Венера:</strong> Самая горячая планета</li>
                        <li><strong>Земля:</strong> Единственная планета с жизнью</li>
                        <li><strong>Марс:</strong> Красная планета</li>
                    </ol>
                `
            },
            en: {
                title: "Terrestrial Planets",
                content: `
                    <h3>General Characteristics</h3>
                    <ul>
                        <li><strong>Composition:</strong> Rocky materials and metals</li>
                        <li><strong>Surface:</strong> Solid</li>
                        <li><strong>Atmosphere:</strong> Thin or absent</li>
                        <li><strong>Size:</strong> Relatively small</li>
                    </ul>
                    <h3>Planets in the Group</h3>
                    <ol>
                        <li><strong>Mercury:</strong> Closest to the Sun</li>
                        <li><strong>Venus:</strong> Hottest planet</li>
                        <li><strong>Earth:</strong> Only planet with life</li>
                        <li><strong>Mars:</strong> Red planet</li>
                    </ol>
                `
            }
        },
        "gas-giants": {
            ru: {
                title: "Газовые Гиганты",
                content: `
                    <h3>Общие характеристики</h3>
                    <ul>
                        <li><strong>Состав:</strong> В основном водород и гелий</li>
                        <li><strong>Поверхность:</strong> Газообразная</li>
                        <li><strong>Размер:</strong> Очень большие</li>
                        <li><strong>Кольца:</strong> Многие имеют кольцевые системы</li>
                    </ul>
                    <h3>Планеты группы</h3>
                    <ol>
                        <li><strong>Юпитер:</strong> Самый большой</li>
                        <li><strong>Сатурн:</strong> Известен кольцами</li>
                        <li><strong>Уран:</strong> Вращается на боку</li>
                        <li><strong>Нептун:</strong> Самый ветреный</li>
                    </ol>
                `
            },
            en: {
                title: "Gas Giants",
                content: `
                    <h3>General Characteristics</h3>
                    <ul>
                        <li><strong>Composition:</strong> Mainly hydrogen and helium</li>
                        <li><strong>Surface:</strong> Gaseous</li>
                        <li><strong>Size:</strong> Very large</li>
                        <li><strong>Rings:</strong> Many have ring systems</li>
                    </ul>
                    <h3>Planets in the Group</h3>
                    <ol>
                        <li><strong>Jupiter:</strong> Largest</li>
                        <li><strong>Saturn:</strong> Known for rings</li>
                        <li><strong>Uranus:</strong> Rotates on its side</li>
                        <li><strong>Neptune:</strong> Windiest</li>
                    </ol>
                `
            }
        },
        "moons-rings": {
            ru: {
                title: "Спутники и Кольца",
                content: `
                    <h3>Спутники планет</h3>
                    <ul>
                        <li><strong>Луна (Земля):</strong> Единственный естественный спутник Земли</li>
                        <li><strong>Ио, Европа, Ганимед, Каллисто (Юпитер):</strong> Галилеевы спутники</li>
                        <li><strong>Титан (Сатурн):</strong> Второй по величине спутник в солнечной системе</li>
                    </ul>
                    <h3>Кольцевые системы</h3>
                    <p>Кольца состоят из частиц льда, камней и пыли. Сатурн имеет самые впечатляющие кольца, но все газовые гиганты имеют кольцевые системы.</p>
                `
            },
            en: {
                title: "Moons and Rings",
                content: `
                    <h3>Planetary Moons</h3>
                    <ul>
                        <li><strong>Moon (Earth):</strong> Earth's only natural satellite</li>
                        <li><strong>Io, Europa, Ganymede, Callisto (Jupiter):</strong> Galilean moons</li>
                        <li><strong>Titan (Saturn):</strong> Second largest moon in the solar system</li>
                    </ul>
                    <h3>Ring Systems</h3>
                    <p>Rings consist of ice particles, rocks and dust. Saturn has the most impressive rings, but all gas giants have ring systems.</p>
                `
            }
        }
    };
    
    const content = modalContent[topic][currentLanguage];
    if (!content) return;
    
    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = 'educational-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${content.title}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                ${content.content}
            </div>
        </div>
    `;
    
    // Добавляем стили
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(5px);
    `;
    
    const modalContentEl = modal.querySelector('.modal-content');
    modalContentEl.style.cssText = `
        background: var(--primary-color);
        border-radius: var(--border-radius);
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    `;
    
    const modalHeader = modal.querySelector('.modal-header');
    modalHeader.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    `;
    
    const modalBody = modal.querySelector('.modal-body');
    modalBody.style.cssText = `
        padding: 1.5rem;
        color: var(--text-secondary);
        line-height: 1.6;
    `;
    
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: var(--text-secondary);
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Обработчики событий
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    document.body.appendChild(modal);
}

// Обновление масштаба орбит
function updateOrbitScales() {
    const planets = document.querySelectorAll('.planet');
    const scale = appState.scale / 100;
    
    planets.forEach(planet => {
        const orbit = planet.querySelector('.orbit');
        if (orbit) {
            const baseSize = getBaseOrbitSize(planet.dataset.planet);
            const newSize = baseSize * scale;
            orbit.style.width = newSize + 'px';
            orbit.style.height = newSize + 'px';
        }
    });
}

// Получить базовый размер орбиты
function getBaseOrbitSize(planetName) {
    const sizes = {
        mercury: 120,
        venus: 180,
        earth: 240,
        mars: 300,
        jupiter: 420,
        saturn: 540,
        uranus: 660,
        neptune: 780
    };
    return sizes[planetName] || 120;
}

// Обновление скорости анимации
function updateAnimationSpeed() {
    const planets = document.querySelectorAll('.planet');
    const speed = appState.speed / 50; // Нормализуем скорость
    
    planets.forEach(planet => {
        const baseDuration = getBaseOrbitDuration(planet.dataset.planet);
        const newDuration = baseDuration / speed;
        planet.style.animationDuration = newDuration + 's';
    });
}

// Получить базовую длительность орбиты
function getBaseOrbitDuration(planetName) {
    const durations = {
        mercury: 2,
        venus: 3,
        earth: 4,
        mars: 5,
        jupiter: 12,
        saturn: 15,
        uranus: 18,
        neptune: 22
    };
    return durations[planetName] || 4;
}

// Сброс симуляции
function resetSimulation() {
    appState.isPaused = false;
    appState.speed = 50;
    appState.scale = 50;
    
    // Сброс элементов управления
    document.getElementById('speed').value = 50;
    document.getElementById('scale').value = 50;
    document.getElementById('speed-value').textContent = '50x';
    document.getElementById('scale-value').textContent = '50%';
    
    // Сброс кнопки паузы
    const pauseBtn = document.getElementById('pause-btn');
    pauseBtn.innerHTML = '<i class="fas fa-pause"></i> <span data-en="Pause" data-ru="Пауза">Пауза</span>';
    
    // Перезапуск анимаций
    const planets = document.querySelectorAll('.planet');
    planets.forEach(planet => {
        planet.style.animationPlayState = 'running';
    });
    
    // Обновление масштаба и скорости
    updateOrbitScales();
    updateAnimationSpeed();
    
    // Скрытие панели информации
    document.querySelector('.info-panel').classList.remove('active');
    appState.selectedPlanet = null;
}

// Запуск анимации
function startAnimation() {
    // Анимация уже запущена через CSS
    // Здесь можно добавить дополнительные эффекты
    console.log('Симуляция солнечной системы запущена!');
}

// Дополнительные эффекты
function addStarFieldEffect() {
    const starsBackground = document.querySelector('.stars-background');
    
    // Добавляем больше звезд
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: twinkle ${2 + Math.random() * 3}s ease-in-out infinite;
        `;
        starsBackground.appendChild(star);
    }
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupLanguageSwitcher();
    setupNavigation();
    setupControls();
    setupPlanetInteractions();
    setupInfoPanel();
    setupEducationalContent();
    updateOrbitScales();
    startAnimation();
    
    // Устанавливаем язык по умолчанию
    changeLanguage(currentLanguage);
}

// Настройка переключателя языков
function setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.dataset.lang;
            changeLanguage(lang);
        });
    });
}

// Инициализация дополнительных эффектов
setTimeout(addStarFieldEffect, 1000);

// Обработка клавиатуры
document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case ' ':
            e.preventDefault();
            document.getElementById('pause-btn').click();
            break;
        case 'r':
        case 'R':
            document.getElementById('reset-btn').click();
            break;
        case 'Escape':
            document.querySelector('.info-panel').classList.remove('active');
            break;
    }
});

// Адаптивность для мобильных устройств
function handleMobileOptimization() {
    if (window.innerWidth <= 768) {
        // Оптимизации для мобильных устройств
        const simulationContainer = document.querySelector('.simulation-container');
        if (simulationContainer) {
            simulationContainer.style.height = '70vh';
        }
    }
}

window.addEventListener('resize', handleMobileOptimization);
handleMobileOptimization();

// Экспорт для использования в других модулях
window.SolarSystemSimulator = {
    planetData,
    appState,
    showPlanetInfo,
    resetSimulation,
    changeLanguage
}; 