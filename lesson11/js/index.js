const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const image = document.querySelector('img');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
                
        const towns = jsonObject['towns'];

        towns.forEach(town => {
            if (town.name == "Soda Springs" || town.name == "Fish Haven" || town.name == "Preston"){
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let image = document.createElement('img');
                let townInformation = document.createElement('p');

                h2.textContent = `${town.name}`;
                h3.textContent = `${town.motto}`
                townInformation.innerHTML = `Year Founded: ${town.yearFounded}<br>Current Population: ${town.currentPopulation}<br>Average Rainfall: ${town.averageRainfall}`;

                image.setAttribute('src', `images/${town.photo}`);
                image.setAttribute('width', '500');
                image.setAttribute('height', '300');
                image.setAttribute('alt', `${town.name}`);

                card.appendChild(h2);
                card.appendChild(h3);
                card.appendChild(townInformation);
                card.appendChild(image);
                document.querySelector('.townie').appendChild(card);
            }
        });
    })