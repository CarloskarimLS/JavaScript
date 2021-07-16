const country = 'Mexico';
const continent = 'America';
const population = 120;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let lenguage = 'espanol';
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

let splitPopulation = population/2;
console.log(splitPopulation);

let description = country + " is in " + continent + ",and its " + population + " million people speak " + lenguage;
console.log(description);

const averagePopulation = 33;

if (population > averagePopulation) {
    console.log("Portugal's population is above average");
}else{
    console.log("Portugal's population is 22 millon below average'")
}

console.log('9'-'5');
console.log('19'-'13'+'17');
console.log('19'-'13'+17);
console.log('123'<57);
console.log(5+6+'4'+9-4-2);

const numNeighbors = prompt('How many neighbour countries does your contry have?');
if (numNeighbors == 1){
    console.log('Only 1 border');
}else if (numNeighbors>1){
    console.log('More than 1 border');
}else{
    console.log('No borders');
}

if(lenguage === 'english' && population < 50 && !isIsland){
    console.log(`You should live in ${country} `);
}else{
    console.log(`${country} doesn not meet your criteria.`)
}

