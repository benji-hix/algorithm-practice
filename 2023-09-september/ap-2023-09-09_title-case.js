// write a funciton that will convert a string into title case,
// given a list of exceptions (minor words like a, the, etc.)

function titleCase(title, minorWords='') {
    // convert strings to nested arrays of individual characters
    title = title.toLowerCase().split(' ');
    minorWords = minorWords.toLowerCase().split(' ');
    for (let word in title) title[word] = title[word].split('');
    // first word will always be capitalized
    title[0][0] = title[0][0].toUpperCase();
    title[0] = title[0].join('');
    // for every wother word, capitalize if not in the list of exceptions
    for (let i = 1; i < title.length; i++) {
        if (!minorWords.includes(title[i].join(''))) {
        title[i][0] = title[i][0].toUpperCase()
        }
        title[i] = title[i].join('')
    }

    return title.join(' ')
}

console.log(titleCase('a clash of KINGS', 'a an the of'))
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))
console.log(titleCase('the quick brown fox'))