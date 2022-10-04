function cutPizzaSlices(numOfSlices) {
    function calcNumOfSlicesPerPerson(numOfPeople) {
        return `Each person gets ${(numOfSlices / numOfPeople).toFixed(2)} slices of pizza`
    } 
    return calcNumOfSlicesPerPerson;
}

var sharePizza = cutPizzaSlices(8);

console.log(sharePizza(2)); 
console.log(sharePizza(3));