class pii {
    #ssn 
    constructor (firstName, lastName, ssn){
        this.firstName = firstName;
        this.lastName = lastName;
        this.#ssn = ssn;
    }
    getName(){
        return `${this.firstName} ${this.lastName}`
    }
    getSnn(){
        return this.#ssn
    }
}

var information = new pii("Sofia", "Morales", 456789098);

console.log(information.getName())