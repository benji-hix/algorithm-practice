function effectiveHealth (health, armor, mr) {
let effectivePhysHealth = Math.round(health * (1 + (armor/100)));
let effectibeMagicHealth = Math.round(health * (1 + (mr/100)));


console.log(`Effective physical health: ${effectivePhysHealth}`)
console.log(`Effective magic health: ${effectibeMagicHealth}`)
}

effectiveHealth(1948, 83, 47)
effectiveHealth(2434, 166, 105)
effectiveHealth(2637, 180, 117)