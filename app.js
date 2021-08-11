let firstName = 'Taufik';
let lastName = 'Ahmed';
let fullName = firstName + ' ' + lastName;
// console.log(fullName);

let letters = []

console.log(letters);
for (let f = 0; f < firstName.length; f += 2) {
    letters.push(firstName[f])
}
// console.log(letters);
// console.log(letters[letters.length - 2])



let numbers = [];

for (let i = 1; i <= 100; i++) {
    numbers.push(i)
}
// console.log(numbers);

let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        evenNumbers.push(numbers[i])
    }
}
// console.log(evenNumbers)


// console.log(oddNumbers)

function getOddNumbers(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            result.push(array[i])
        }
    }
    return result;
}

let another = [1, 2, 4, 6, 8, 3, 4, 9, 10];
let odd1 = getOddNumbers(numbers)
// console.log(odd1);
let odd2 = getOddNumbers(another)
console.log(odd2);


function getEvenNumbers(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            result.push(array[i])
        }
    }
    return result;
}
let even2 = getEvenNumbers(another);
console.log(even2);


let even3 = getEvenNumbers([1, 2, 3, 4])
console.log(even3)

const vowels = ['a', 'e', 'i', 'o', 'u'];



function getVowels(string) {

    let result = [];
    for (let i = 0; i < string.length; i++) {
        if (vowels.indexOf(string[i]) >= 0) {
            result.push(string[i]);
        }
    }
    return result;
}
let someVowels = getVowels('a quick brown fox jumps over the lazy dog');
// console.log(someVowels)



function getConstant(string) {
    return string.split('').filter(letter => {
        return !(vowels.indexOf(letter) >= 0)
    }).filter(letter => {
        return letter != " "
    })
}
// console.log(getConstant('a quick brown fox jumps over the lazy dog'))


function ক্ষেত্রফল(দৈর্ঘ্য, প্রস্থ) {
    return দৈর্ঘ্য * প্রস্থ
}
let আয়ত = ক্ষেত্রফল(8, 9);
console.log(আয়ত)
