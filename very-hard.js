class Person {
    constructor (name, job, age){
        (this.name = name),
        (this.job = job),
        (this.age = age)
    }
    
    exercise(){
        console.log("Exercise is fun! - said no one ever.")
    }

    fetchJob(){
        console.log(`${this.name} is a ${this.job}`)
    }
}

class Programmer extends Person {
    constructor (name, job, age, languages){
        (super(name, job, age)),
        (this.languages = languages),
        (this.busy = true)
    };

    completeTask(){
        this.busy = false;
    };

    acceptNewTask() {
        this.busy = true;
    };

    offerNewTask() {
        if(this.busy){
            return console.log(`${this.name} can't accept new tasks right now.`);
        }
        else {
            console.log(`${this.name} would like to have a new responsibility.`);
        };
    };

    learnLanguage(newLanguage){
        this.languages.push(newLanguage);
    };

    listLanguages() {
    console.log(this.languages);
    };
}


let john = new Programmer('John', 'Junior Software Engineer', 19, ['Java']);
let sofia = new Programmer('Sofia', 'Junior Software Engineer', 22, ['JavaScript', 'Python', 'C++']);
let luis = new Programmer('Luis', 'Senior Software Engineer', 17, ['Java', 'Python', 'C++']);

console.log(john);
console.log(sofia);
console.log(luis);



