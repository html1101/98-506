import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let student = {
    name: null,
    year: null,
    classes: []
}

function yearCallback(year) {
    student.year = Number(year)

    rl.question("What are your classes?", (classes) => {
        const classesArr = classes.split(",")
        student.classes = classesArr

        rl.close()
    })
}

function questionCallback(name) {
    console.log("Hello " + name + "!") 
    student.name = name
    
    rl.question("What is your year?", yearCallback)
}

rl.question("What is your name?", questionCallback)