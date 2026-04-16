/* ========================================
   WEATHER API & DATA MANAGEMENT
   ======================================== */

let currentWeatherData = [];

/**
 * Fetches filtered and sorted data from the Java backend.
 * Uses the cache unless the user triggers a refresh.
 */
async function fetchWeatherData() {
    try {
        const params = new URLSearchParams();
        
        // 1. Collect Continents
        const continentCheckboxes = document.querySelectorAll('input.continent-checkbox:checked');
        Array.from(continentCheckboxes)
            .filter(cb => cb.value !== 'all')
            .forEach(cb => params.append('continents', cb.value));
        
        // 2. Collect Population Ranges
        const populationCheckboxes = document.querySelectorAll('input.population-checkbox:checked');
        Array.from(populationCheckboxes).forEach(cb => {
            params.append('populationRanges', cb.value); 
        });
        
        // 3. Collect Search Term (Exact Match)
        const searchInput = document.getElementById('city-input');
        if (searchInput && searchInput.value.trim()) {
            params.append('searchTerm', searchInput.value.trim());
        }

        // 4. Collect Sort Order
        const sortValue = document.querySelector('input[name="sort"]:checked')?.value || 'az';
        params.append('sortBy', sortValue);

        const url = `http://localhost:8082/api/weather?${params.toString()}`;
        console.log('Requesting data from cache:', url);
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (response.ok) {
            currentWeatherData = data.payload || [];
            updateWeatherGrid(currentWeatherData);
        } else {
            console.error('Backend error:', data.message);
        }
    } catch (error) {
        console.error('Connection error:', error);
    }
}


function updateWeatherGrid(weatherData) {
    const weatherGrid = document.querySelector('.weather-grid');
    if (!weatherGrid) return;

    if (!weatherData || weatherData.length === 0) {
        weatherGrid.innerHTML = '<p>Keine Resultate gefunden.</p>';
        return;
    }
    
    weatherGrid.innerHTML = '';
    
    weatherData.forEach(city => {
        const cardHTML = `
            <div class="weather-card">
                <div class="card-content">
                    <div class="card-text">
                        <h3>${city.capital?.name || 'Unbekannt'}</h3>
                        <p>Hauptstadt von ${city.capital?.countryName || 'Unbekannt'}</p>
                        
                        <div class="weather-details">
                            <p class="weather-data">
                                <strong>Bevölkerung:</strong> ${city.capital?.population?.toLocaleString('de-CH') || 'N/A'}
                            </p>
                            <p class="weather-data">
                                <strong>Temperatur:</strong> ${city.temperature ?? 'N/A'}°C
                            </p>
                            <p class="weather-data">
                                <strong>Luftfeuchtigkeit:</strong> ${city.humidity ?? 'N/A'}%
                            </p>
                            <p class="weather-data">
                                <strong>Windgeschwindigkeit:</strong> ${city.windSpeed ?? 'N/A'} m/s
                            </p>
                        </div>
                    </div>
                    <div class="card-icon">
                        ${city.capital?.flagSVG 
                            ? `<img src="${city.capital.flagSVG}" alt="Flag">` 
                            : '<img src="resources/images/logo.png" alt="No Flag">'}
                    </div>
                </div>
            </div>
        `;
        weatherGrid.insertAdjacentHTML('beforeend', cardHTML);
    });
}

/**
 * Sends a request to the backend to clear the cache 
 * and fetch fresh data from external APIs.
 */
async function triggerDataRefresh() {
    const refreshBtn = document.getElementById('refresh-btn');
    if (refreshBtn) {
        refreshBtn.classList.add('loading');
        refreshBtn.disabled = true;
    }

    try {
        const response = await fetch('http://localhost:8082/api/refresh', { 
            method: 'POST' 
        });
        
        if (response.ok) {
            console.log("Backend cache updated.");
            await fetchWeatherData(); // Reload the UI with new data
        } else {
            alert("Fehler beim Aktualisieren der Daten.");
        }
    } catch (error) {
        console.error("Refresh connection error:", error);
    } finally {
        if (refreshBtn) {
            refreshBtn.classList.remove('loading');
            refreshBtn.disabled = false;
        }
    }
}

/* ========================================
   UI & DROPDOWN LOGIC
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // 1. Dropdown Toggles
    const dropdowns = {
        continent: { btn: 'continent-dropdown-btn', menu: 'continent-dropdown-menu' },
        population: { btn: 'population-dropdown-btn', menu: 'population-dropdown-menu' },
        sort: { btn: 'sort-dropdown-btn', menu: 'sort-dropdown-menu' }
    };

    Object.values(dropdowns).forEach(d => {
        const btn = document.getElementById(d.btn);
        const menu = document.getElementById(d.menu);
        
        if (btn && menu) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                // Close other menus
                document.querySelectorAll('.continent-dropdown-menu, .population-dropdown-menu, .sort-dropdown-menu').forEach(m => {
                    if (m !== menu) m.classList.remove('active');
                });
                menu.classList.toggle('active');
            });
        }
    });

    // 2. Global click to close menus
    document.addEventListener('click', () => {
        document.querySelectorAll('.continent-dropdown-menu, .population-dropdown-menu, .sort-dropdown-menu').forEach(m => m.classList.remove('active'));
    });

    // 3. "All" Checkbox Logic
    const allContinentCb = document.querySelector('input.continent-checkbox[value="all"]');
    if (allContinentCb) {
        allContinentCb.addEventListener('change', function() {
            const others = document.querySelectorAll('input.continent-checkbox:not([value="all"])');
            others.forEach(cb => cb.checked = this.checked);
            fetchWeatherData();
        });
    }

    // 4. Change Listeners (Filtering & Sorting)
    document.querySelectorAll('.continent-checkbox:not([value="all"]), .population-checkbox, input[name="sort"]')
        .forEach(input => {
            input.addEventListener('change', fetchWeatherData);
        });

    // 5. Search Button
    const searchBtn = document.getElementById('search-button');
    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            fetchWeatherData();
        });
    }

    // 6. Refresh Button
    const refreshBtn = document.getElementById('refresh-btn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', triggerDataRefresh);
    }

    // 7. Initial load
    fetchWeatherData();
});