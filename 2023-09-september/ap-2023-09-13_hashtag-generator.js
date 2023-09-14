// create a hashtag generator that turns a string to title case and
// joins it together after a hashtag.
// Return false if the result is empty or > 140 characters.

function generateHashtag (str) {
    
    if ((str.length < 1) || (!str.trim())) return false;
    
    str = str.split(' ');
    let hashtag = '#'
    
    for (i = 0; i < str.length; i++) {
        str[i] = str[i].split('')
        str[i][0] = str[i][0].toUpperCase()
        hashtag += str[i].join('')
    }

    return (hashtag.length <= 140) ? hashtag : false
}
