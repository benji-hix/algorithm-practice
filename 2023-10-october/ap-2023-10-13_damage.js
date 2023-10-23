// calculate how much bonus damage lethality provides 
// parameters are lethality and target's armor 

/* 
~ sources of lethality:
~   ghostblade: 18 + 7-18
~   collector, prwoler's, duskblade: 18
~   serpent's: 15
~   umbral: 13
~   eclipse: 12
~   edge of night: 10
~   sudden impact: 9

* sources of percent pen:
*   last whisper: 18%
*   ldr/mortal reminder/serylda's: 30%
*/



function lethalityBonusPercentage(targetArmor, level, lethality=0, percentPen=0) {
    const flatArmorPen = lethality * (.6 + .4 * level / 18)
    // console.log(`Armor penetration: ${flatArmorPen}`)

    let baseDamage = 100/(100+targetArmor)
    // console.log(`Base damage: ${Math.round(baseDamage*100)}%`)

    let percentPenDamage = 100/(100+(targetArmor*(1-percentPen)))
    // console.log(`Percent pen damage: ${Math.round(percentPenDamage*100)}%`)

    let flatPenDamage = 100/(100+(targetArmor*(1-percentPen)-flatArmorPen))
    // console.log(`Final damage: ${Math.round(flatPenDamage*100)}%`)

    let bonus = baseDamage - flatPenDamage
    console.log(`Bonus damage: ${-1*Math.round(bonus*100)}%`)
}

// console.log('Case lv 3, sudden impact')
// lethalityBonusPercentage(33, 3, 9)

// console.log('\nCase first back, dirk purchase')
// lethalityBonusPercentage(45, 6, 10)

// console.log('\nCase first back, dirk purchase, sudden impact')
// lethalityBonusPercentage(45, 6, 19)

// console.log('\nCase collector rush')
// lethalityBonusPercentage(62, 10, 18)

// console.log('\nCase collector rush, sudden impact')
// lethalityBonusPercentage(62, 10, 27)

// console.log('\nCase ghostblade + collector')
// lethalityBonusPercentage(75, 13, 43)

console.log ('\nCase full build')
lethalityBonusPercentage(164, 18, 64, .3)
