function entries(someObj) {
    // loop throug object keys
    const output = [];
    for (const key in someObj) {
        let temp = [];
        if (someObj.hasOwnProperty(key)) {
            temp.push(key, someObj[key]);
            output.push(temp);
        }
    }
    // only add if object.hasOwnProperty()
    return output;
}

const obj1 = {
    name: "Pizza",
    calories: 9001,
};

const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 99,
};

const proto = {
    inheritedKey: "inherited value",
    keyOnProto: "value from proto"
};

const obj3 = Object.assign(Object.create(proto), {
    firstName: "Foo",
    lastName: "Bar",
    age: 99,
});

console.log(entries(obj3))