const formEl = document.querySelector('form')
formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const pokeName = formEl[0].value
    pokeData(pokeName)
})

const pokeData = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    console.log(data)

    const card = document.createElement('div');
    card.className = `card ${data.types[0].type.name}-card`;
    const  cardImg = document.createElement('div');
    cardImg.className = 'sprite';
    const img = document.createElement('img')
    img.src = data.sprites.front_default;
    cardImg.append(img)
    const infoList = document.createElement('ul')
    const number = document.createElement('li')
    number.innerText = `number : ${data.id}`

    const pName = document.createElement('li')
    pName.innerText = `Name: ${data.forms[0].name}`;

    const element = document.createElement('li')
    element.innerText = `Type: ${data.types[0].type.name}`;

    const abilities = document.createElement('li')
    
    //const abilitiesList = document.createElement('ul');

    //map can create a new array by calling a function using the arrow function.
    // returns a value for each value in a given array, in this case it returns the ability values and joins them using a , to seperate them
    // (this took me a long time to figure out...)
    const abilityNames = data.abilities.map(ability => ability.ability.name).join(', ');


    //const abilitiesTitle = document.createElement('li');

    abilities.innerText = `Abilities: ${abilityNames}`;

/*   could not get this to display how i wanted it to. but it did work
    abilityNames.forEach(abilityName => {
        const abilityListItem = document.createElement('li');
        abilityListItem.innerText = abilityName;
        abilitiesList.append(abilityListItem)
    });
    abilitiesList.append(abilitiesTitle);

    abilities.append(abilitiesList)

*/

    infoList.append(number,pName,element,abilities)
    card.append(cardImg,infoList)

    const cardContainer = document.querySelector('.cardContainer');
    +cardContainer.append(card)
    

}

