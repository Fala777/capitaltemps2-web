/* ========================================
   WEATHER API & DATA MANAGEMENT
   ======================================== */

let currentWeatherData = [];

async function fetchWeatherData() {
    try {
        // Build query parameters
        const params = new URLSearchParams();
        
        // Get selected continents (from checkboxes)
        const continentCheckboxes = document.querySelectorAll('input.continent-checkbox:checked');
        const selectedContinents = Array.from(continentCheckboxes)
            .filter(cb => cb.value !== 'all')
            .map(cb => cb.value);
        
        if (selectedContinents.length > 0) {
            selectedContinents.forEach(continent => {
                params.append('continents', continent);
            });
        }
        
        // Get selected population ranges (from checkboxes)
        const populationCheckboxes = document.querySelectorAll('input.population-checkbox:checked');
        const selectedPopulations = Array.from(populationCheckboxes).map(cb => cb.value);
        
        if (selectedPopulations.length > 0) {
            selectedPopulations.forEach(population => {
                params.append('population', population);
            });
        }
        
        // Get Filter 3 value (if exists)
        const filter3 = document.getElementById('filter-3');
        if (filter3 && filter3.value) {
            params.append('filter3', filter3.value);
        }
        
        // Get search input (if exists)
        const searchInput = document.getElementById('city-input');
        if (searchInput && searchInput.value.trim()) {
            params.append('search', searchInput.value.trim());
        }
        
        // Build the URL
        let url = 'http://localhost:8082/api/weather';
        if (params.toString()) {
            url += '?' + params.toString();
        }
        
        console.log('Fetching from:', url);
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (response.ok) {
            console.log('Weather data received:', data);
            currentWeatherData = data.payload || [];
            updateWeatherGrid(currentWeatherData);
            
            // Show success feedback
            if (data.message) {
                console.log('Server feedback:', data.message);
            }
        } else {
            console.error('API error:', data.message);
            alert('Fehler beim Abrufen der Wetterdaten: ' + data.message);
        }
    } catch (error) {
        console.error('Connection error:', error);
        alert('Verbindungsfehler: ' + error.message);
    }
}

function updateWeatherGrid(weatherData) {
    const weatherGrid = document.querySelector('.weather-grid');
    
    if (!weatherData || weatherData.length === 0) {
        weatherGrid.innerHTML = '<p>Keine Wetterdaten gefunden.</p>';
        return;
    }
    
    // Apply sorting
    const sortBy = document.querySelector('input[name="sort"]:checked')?.value || 'az';
    const sortedData = sortWeatherData(weatherData, sortBy);
    
    // Clear existing cards
    weatherGrid.innerHTML = '';
    
    // Create cards from data
    sortedData.forEach(city => {
        const cardHTML = `
            <div class="weather-card">
                <div class="card-content">
                    <div class="card-text">
                        <h3>${city.capital?.name || 'Unknown'}</h3>
                        <p>${city.capital?.countryName || 'Unknown'}</p>
                        <p class="weather-data">
                            Temperatur: ${city.temperature || 'N/A'}°C | 
                            Luftfeuchtigkeit: ${city.humidity || 'N/A'}% | 
                            Wind: ${city.windSpeed || 'N/A'} m/s
                        </p>
                    </div>
                    <div class="card-icon"></div>
                </div>
            </div>
        `;
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = cardHTML;
        const card = tempDiv.firstElementChild;
        
        // Handle flag image or fallback
        const cardIcon = card.querySelector('.card-icon');
        
        if (city.capital?.flagSVG) {
            const img = document.createElement('img');
            img.src = city.capital.flagSVG;
            img.alt = `${city.capital.countryName} flag`;
            cardIcon.appendChild(img);
        } else {
            // Fallback if no flag available
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('viewBox', '0 0 80 60');
            
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('width', '80');
            rect.setAttribute('height', '60');
            
            svg.appendChild(rect);
            cardIcon.appendChild(svg);
        }
        
        weatherGrid.appendChild(card);
    });
}

function sortWeatherData(data, sortBy) {
    const sorted = [...data];
    
    switch(sortBy) {
        case 'az':
            sorted.sort((a, b) => (a.capital?.name || '').localeCompare(b.capital?.name || ''));
            break;
        case 'za':
            sorted.sort((a, b) => (b.capital?.name || '').localeCompare(a.capital?.name || ''));
            break;
        case 'pop-asc':
            sorted.sort((a, b) => (a.population || 0) - (b.population || 0));
            break;
        case 'pop-desc':
            sorted.sort((a, b) => (b.population || 0) - (a.population || 0));
            break;
        case 'temp-high':
            sorted.sort((a, b) => (b.temperature || 0) - (a.temperature || 0));
            break;
        case 'temp-low':
            sorted.sort((a, b) => (a.temperature || 0) - (b.temperature || 0));
            break;
        default:
            return sorted;
    }
    
    return sorted;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.getElementById('continent-dropdown-btn');
    const dropdownMenu = document.getElementById('continent-dropdown-menu');
    const populationDropdownBtn = document.getElementById('population-dropdown-btn');
    const populationDropdownMenu = document.getElementById('population-dropdown-menu');
    const sortDropdownBtn = document.getElementById('sort-dropdown-btn');
    const sortDropdownMenu = document.getElementById('sort-dropdown-menu');
    const continentCheckboxes = document.querySelectorAll('input.continent-checkbox');
    const populationCheckboxes = document.querySelectorAll('input.population-checkbox');
    const sortRadios = document.querySelectorAll('input[name="sort"]');
    const searchButton = document.getElementById('search-button');
    
    // Toggle continent dropdown menu
    if (dropdownBtn) {
        dropdownBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            // Close other dropdowns
            populationDropdownMenu.classList.remove('active');
            sortDropdownMenu.classList.remove('active');
            // Toggle this dropdown
            dropdownMenu.classList.toggle('active');
        });
    }
    
    // Toggle population dropdown menu
    if (populationDropdownBtn) {
        populationDropdownBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            // Close other dropdowns
            dropdownMenu.classList.remove('active');
            sortDropdownMenu.classList.remove('active');
            // Toggle this dropdown
            populationDropdownMenu.classList.toggle('active');
        });
    }
    
    // Toggle sort dropdown menu
    if (sortDropdownBtn) {
        sortDropdownBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            // Close other dropdowns
            dropdownMenu.classList.remove('active');
            populationDropdownMenu.classList.remove('active');
            // Toggle this dropdown
            sortDropdownMenu.classList.toggle('active');
        });
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.continent-dropdown-wrapper')) {
            dropdownMenu.classList.remove('active');
        }
        if (!e.target.closest('.population-dropdown-wrapper')) {
            populationDropdownMenu.classList.remove('active');
        }
        if (!e.target.closest('.sort-dropdown-wrapper')) {
            sortDropdownMenu.classList.remove('active');
        }
    });
    
    // Add event listeners to continent checkboxes
    continentCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Handle "All" checkbox
            if (this.value === 'all') {
                const otherCheckboxes = document.querySelectorAll('input.continent-checkbox:not([value="all"])');
                otherCheckboxes.forEach(cb => {
                    cb.checked = this.checked;
                });
            }
            fetchWeatherData();
        });
    });
    
    // Add event listeners to population checkboxes
    populationCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            fetchWeatherData();
        });
    });
    
    // Add event listeners to sort radios (only re-sort, don't re-fetch)
    sortRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (currentWeatherData.length > 0) {
                updateWeatherGrid(currentWeatherData);
            }
        });
    });
    
    // Search button and input
    const searchInput = document.getElementById('city-input');
    if (searchButton) {
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            fetchWeatherData();
        });
    }
    
    // Allow Enter key in search input
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                fetchWeatherData();
            }
        });
    }
});