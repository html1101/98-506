// NUMBER
console.log("Testing integers:", Number.isInteger(3.5), Number.isInteger(3))
console.log("Testing NaN:", Number.isNaN(0 / 0))

function safeDivide(x, y) {
    return x / Math.max(y, Number.EPSILON)
}
console.log("Safe divide 3/0:", safeDivide(3, 0))

function sampleRandomCircleArea() {
    return Math.PI * Math.pow(Math.random(), 2)
}
console.log("Area:", sampleRandomCircleArea())

// OBJECT
const exampleUser = {
    username: "janedoe123",
    email: "janedoe@mail.com",
    displayName: "Jane Doe"
}

console.log("Keys:", Object.keys(exampleUser))
console.log("Values:", Object.values(exampleUser))
console.log("Entries:", Object.entries(exampleUser))

const capitalizedUser = Object.fromEntries(
    Object.entries(exampleUser).map(([key, val]) => [key.toUpperCase(), val.toUpperCase()])
)
console.log("Capitalized:", capitalizedUser)

const testScores = [
    { name: "Alice", score: 89 },
    { name: "Bob", score: 65 },
    { name: "Charlie", score: 77 },
    { name: "David", score: 72 },
    { name: "Eve", score: 40 }
]
function scoreToGrade(score) {
    if (score >= 90) {
        return "A"
    } else if (score >= 80) {
        return "B"
    } else if (score >= 70) {
        return "C"
    } else if (score >= 60) {
        return "D"
    } else {
        return "F"
    }
}
const gradeGroups = Object.groupBy(testScores, ({ score }) => scoreToGrade(score))
console.log("Grade groups:", gradeGroups)

// SET
const A = new Set([1, 2, 3])
A.add(0)
const B = new Set([3, 6, 9])
console.log("Union:", A.union(B))
console.log("Intersection:", A.intersection(B))
console.log("Difference:", A.difference(B))
console.log("Sizes:", A.size, B.size)
console.log("4 in A:", A.has(4))

// MAP
const userScores = new Map([
    ["CHDZ5LnC", Math.random()],
    ["ztBo8kbC", Math.random()],
    ["ivTr2y8Z", Math.random()],
    ["OHXzc7LI", Math.random()]
])

console.log("Size:", userScores.size)
userScores.set("jBnhG4vW", Math.random())
console.log("New size:", userScores.size)
console.log("Has user jBnhG4vW:", userScores.has("jBnhG4vW"))

console.log("Keys:", userScores.keys())
console.log("Values:", userScores.values())
console.log("Entries:", userScores.entries())