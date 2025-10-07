let basicLevel = {
    layout: "basic",
    enemyLevels: [1, 1, 2, 3]
}
let gameLevels = []

// Naive approach to create 5 basic levels
for (let i = 0; i < 3; i++) {
    basicLevel.levelNum = i
    gameLevels.push(basicLevel)
}

console.log("Naive:", gameLevels)
console.log()

// Comment this out to continue to the later code
process.exit()

// Spread operator approach
basicLevel = {
    layout: "basic",
    enemyLevels: [1, 1, 2, 3]
}
gameLevels = []
for (let i = 0; i < 3; i++) {
    const newLevel = { ...basicLevel, levelNum: i }
    gameLevels.push(newLevel)
}

console.log("Spread:", gameLevels)

gameLevels[2].enemyLevels.push(5)
console.log("Spread (modified):", gameLevels)
console.log("basicLevel (modified):", basicLevel)
console.log()

// Comment this out to continue to the later code
process.exit()

// Structured clone approach
basicLevel = {
    layout: "basic",
    enemyLevels: [1, 1, 2, 3]
}
gameLevels = []
for (let i = 0; i < 3; i++) {
    const newLevel = globalThis.structuredClone(basicLevel)
    newLevel.levelNum = i
    gameLevels.push(newLevel)
}

console.log("Cloned:", gameLevels)

gameLevels[2].enemyLevels.push(5)
console.log("Cloned (modified):", gameLevels)
console.log("basicLevel (modified):", basicLevel)