const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  
    const towns = jsonObject ['towns'];
    for (let i = 0; i < towns.length; i++ )
    {
        if(towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven")
        {
    let article = document.createElement("article");
    let section = document.createElement('section');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let image = document.createElement('img');

    h3.textContent = towns[i].name;
    h4.textContent = towns[i].motto;
    p1.textContent = 'Founded: ' + towns[i].yearFounded;
    p2.textContent = 'Population: ' + towns[i].currentPopulation;
    p3.textContent = 'Average Rainfall: ' + towns[i].averageRainfall + " inches";
    image.setAttribute('src', "images/" + towns[i].photo);
    image.setAttribute ('alt', towns[i].name + ' ' + ", Idaho");

    section.appendChild(h3);
    section.appendChild(h4);
    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(p3);
    section.appendChild(image);

    document.querySelector('div.townie').appendChild(section);
    }
}});
