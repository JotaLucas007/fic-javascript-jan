const cars = [
    {
        brand: "Toyota",
        model: "Corola",
        year: 2022,
    },
    {
        brand: "Honda",
        model: "Civic",
        year: 2022,
    },
    {
        brand: "Mitsubish",
        model: "Lancer Evo X",
        year: 2015,
    },
    {
        brand: "Ford ",
        model: "Mustang Gt 500",
        year: 1979,
    },
    {
        brand: "Nissan",
        model: " GT-R R5",
        year: 2007,
    },
    {
        brand: "Lamborghini",
        model: "Aventador",
        year: 2011,
    },

]
/*Cria uma função e chama essa função displayCards, aqui mesmo */
function displayCards() {
    // Variável
    const cardList = document.querySelector("#card-list");

    cars.forEach((car) => {
        // Criamos um elemento div pelo JavaScript
        const cardDiv = document.createElement("div");
        // Criamos uma class css car
        cardDiv.classList.add('car');

        // Criando o modelo
        const carModel = document.createElement("h2");
        carModel.textContent = `${car.brand} ${car.model}`;

        //Criando o Ano
        const cardYear = document.createElement("p");
        cardYear.textContent = `Ano: ${car.year}`;


        // IMprimir na tela as informações
        cardDiv.appendChild(carModel);
        cardDiv.appendChild(cardYear);
        cardList.appendChild(cardDiv);

    })

};

// Chamar Função
