/// test js
// const add = (a, b = 3) => a + b;

// console.log(add(3))


const makeABaby = (first, last) => {
    const baby = {
        name: `${first} ${last}`,
        age: 0
    }
    return baby;
}

const shawn = makeABaby('shawn', 'benn')


console.log(shawn);