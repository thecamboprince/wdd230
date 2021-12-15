const directoryPath = "json/directory.json";

fetch(directoryPath)
  .then((response) => response.json())
  .then((jsonObject) => {
    const businesses = jsonObject.businesses;
    businesses.forEach((business) => {
      let card = document.createElement("div");
      let name = document.createElement("h3");
      let address = document.createElement("p");
      let logo = document.createElement("img");
      let descWrapper = document.createElement("div");
      let level = document.createElement("p");
      let phone = document.createElement("a");
      let email = document.createElement("a");
      let website = document.createElement("a");
      let div = document.createElement("div");

      name.textContent = business.name;
      address.textContent = business.address;
      level.textContent = "Level: \u0020" + business.level;

      phone.textContent = "\u260E:\u0020" + business.phone;
      phone.href = "tel:" + business.phone;

      email.textContent = "✉:\u0020" + business.email;
      email.href = "mailto:" + business.email;

      website.textContent ="🌐:\u0020" + business.website;
      website.href = business.website;

      logo.setAttribute("src", "images/" + business.logo);
      logo.setAttribute("alt", business.name);

      descWrapper.appendChild(logo);

      div.appendChild(name);
      div.appendChild(address);
      div.appendChild(descWrapper);
      div.appendChild(phone);
      div.appendChild(email);
      div.appendChild(website);
      div.appendChild(level);

      card.appendChild(div);
      card.classList.add("card");

      document.getElementById("businesses").appendChild(card);
    });
  });

