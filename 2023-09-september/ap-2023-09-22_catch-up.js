// algo
// in League of Legends, champions have a movement speed stat that = units moved per second.
// given two champion speeds and the distance between them, assume they are traveling in the
// same direction on the same line. Calculate and print how many seconds
// it will take the faster champion to catch up to the slower champion. 

function catchUp(ms1, ms2, startDistance) {

    switch (ms1) {
    case (ms1 <= 490): {
        ms1 = ms1 * .8 + 83
        break;
    }
    case (ms1 > 490): {
        ms1 = ms1 * .5 + 230
        break;
    }
    default: break;
    }

    let catchupRate = Math.round(ms2 - ms1)
    let catchupTime = Math.ceil(startDistance / catchupRate)
    console.log(`champ 2 gains ${catchupRate} units per second`)
    console.log(`It will take champ 2 ${catchupTime}s to catch up`)
}

catchUp(330, 375, 500)

