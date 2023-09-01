// algo 1
// zip arrays into maps/objects

const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
var expected1 = {
  abc: 42,
  3: "wassup",
  yo: true,
};

const keys2 = [];
const vals2 = [];
var expected2 = {};

const keys3 = ["Yup", 55, "Infinity", "Nope", "Soup", "Rats", "Rat Soup"]
var vals3 = ["Uhhuh", true, "Cars", "Starvin", "Marvin", "14", "Hello"]

function zipArraysIntoMap (keys, values) {
    if (values.length < keys.length) keys.length = values.length;
    else if (keys.length < values.length) values.length = keys.length;

    const newMap = {}

    for (let i = 0; i < keys.length; i++) {
        newMap[keys[i]] = values[i]
    }

    return newMap
}



console.log(zipArraysIntoMap(keys1, vals1) + " should be " + expected1)
console.log(zipArraysIntoMap(keys2, vals2) + " should be " + expected2)
console.log(zipArraysIntoMap(keys3, vals3))


// algo 2
// invert hash of object so they values become keys and the keys become values

const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
var expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

function invertObj(obj) {

    for (const key in obj) {
        obj[obj[key]] = key;
        delete obj[key];
    }

    return obj;
}

console.log(invertObj(obj1), "should be", expected1)
