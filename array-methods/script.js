console.log('array methods 🦄');

// to check if an array method changes the original array
// https://doesitmutate.xyz/

// map - changes every element of the array

const nums = [1, 2, 3, 4, 5]
const result = nums.map(function (num) {
	// what we define here is gonna happen to every element
	// in the 'nums' array
	return num * 2
})
console.log(result)
// to see what's happening inside map let's write our own map function
function myMap(arr, callback) {
	let newArr = []
	for (let element of arr) {
		// console.log(element)
		const changedEl = callback(element)
		newArr.push(changedEl)
	}
	return newArr
}
const resultMyMap = myMap(nums, function (num) {
	return num + 10
})
// console.log(resultMyMap)

const beatles = ['john', 'paul', 'george', 'ringo']
// -> ['mr john', 'mr paul', 'mr ...']
function prefix(beatle) {
	return 'mr ' + beatle
}

const prefixed = beatles.map(prefix)
console.log(prefixed)

const names = ['foo', 'bar', 'baz']

// map over names and return an array that contains 
// the names uppercased

const upNames = names.map(function (name) {
	// return name[0].toUpperCase() + name.slice(1);
	return name.toUpperCase()
});
console.log(upNames)


// 

const students = [
	{
		name: "Tony Parker",
		firstProject: 80,
		secondProject: 75
	},
	{
		name: "Marc Barchini",
		firstProject: 84,
		secondProject: 65
	},
	{
		name: "Claudia Lopez",
		firstProject: 45,
		secondProject: 95
	},
	{
		name: "Carolina Perez",
		firstProject: 85,
		secondProject: 72
	}
];

console.clear()
// 1. map over students and create an array containing only the names 
// ['Tony Parker', 'Marc Barchini', etc]
const studentNames = students.map(function (student) {
	return student.name
})
console.log(studentNames)

// map over students and change the array to:
// [{name: <name of student>, total: <score of 1. and 2. projects added>}]
const totalScores = students.map(function (student) {
	return {
		name: student.name,
		total: student.firstProject + student.secondProject
	}
})

console.log(totalScores)


// reduce - reduces an array to a single value

// calculate the sum of all the numbers in an array
const nums2 = [2, 4, 6]

const sum = nums2.reduce(function (accumulator, currentValue) {
	console.log('this is the acc: ', accumulator)
	console.log('this is the value: ', currentValue)
	return accumulator + currentValue
})
console.log(sum)

const words = ['foo', 'bar', 'baz']
// sum of all the string lengths
const wordsSum = words.reduce(function (acc, val) {
	return acc + val.length
})
console.log(wordsSum)

const people = [
	{ name: "Candice", age: 25 },
	{ name: "Tammy", age: 30 },
	{ name: "Allen", age: 49 },
	{ name: "Nettie", age: 21 },
	{ name: "Stuart", age: 17 }
];

// use reduce to sum up all the ages in the array

// const sumOfAges = people.map(function (person) {
// 	return person.age
// }).reduce(function (acc, val) {
// 	return acc + val
// })
const sumAges = people.reduce(function (sum, person) {
	return sum + person.age
}, 0)
console.log(sumAges)
console.clear()
// 

const product = {
	name: "AmazonBasics Apple Certified Lightning to USB Cable",
	price: 7.99,
	manufacter: "Amazon",
	reviews:
		[
			{
				user: "Pavel Nedved",
				comments: "It was really usefull, strongly recommended",
				rate: 4
			},
			{
				user: "Alvaro Trezeguet",
				comments: "It lasted 2 days",
				rate: 1
			},
			{
				user: "David Recoba",
				comments: "Awesome",
				rate: 5
			},
			{
				user: "Jose Romero",
				comments: "Good value for money",
				rate: 4
			},
			{
				user: "Antonio Cano",
				comments: "It broked really fast",
				rate: 2
			},
		]
}

// sum up all the rates of this product using reduce
const rates = product.reviews.reduce(function (acc, val) {
	return acc + val.rate
}, 0)
console.log(rates)

// filter - iterates over an array and returns a new array 
// containing all the elements that match the provided function
const nums3 = [1, 2, 3, 4, 5, 6, 7, 8]

// filter out the even numbers
const evens = nums3.filter(function (num) {
	if (num % 2 === 0) {
		return true
	} else {
		return false
	}
	// shorter: 
	// return num % 2 === 0
})
console.log(evens)

// filter out all the numbers from the array that are larger
// than 3

const largerThanThree = nums3.filter(function (num) {
	// if (num > 3) {
	// 	return true
	// }
	// return false
	return num > 3
})
console.log(largerThanThree)
console.clear()

const places = [
	{
		title: "Awesome Suite 20' away from la Rambla",
		price: 200,
		type: "Private Room",
		pool: true,
		garage: false
	},
	{
		title: "Private apartment",
		price: 190,
		type: "Entire Place",
		pool: true,
		garage: true
	},
	{
		title: "Apartment with awesome views",
		price: 400,
		type: "Entire Place",
		pool: false,
		garage: false
	},
	{
		title: "Apartment in la Rambla",
		price: 150,
		type: "Private Room",
		pool: false,
		garage: true
	},
	{
		title: "Comfortable place in Barcelona´s center",
		price: 390,
		type: "Entire place",
		pool: true,
		garage: true
	}
];
// 1. filter all with a price above 300
const priceAbove300 = places.filter(function (place) {
	if (place.price > 300) {
		return true
	}
	return false
	// return place.price > 300 
})
console.log(priceAbove300)
// 2. create an array that contains only the titles
// of the places that have a pool ['title1', 'title2', ...]

function getTitlesOfPlacesWithPool(arr) {
	// filter out the pools
	const withPool = arr.filter(function (place) {
		if (place.pool) {
			return true
		}
		return false
		// return place.pool
	})
	// change to only strings
	const onlyTitles = withPool.map(function (place) {
		return place.title
	})
	return onlyTitles
}

const filtered = getTitlesOfPlacesWithPool(places)
console.log(filtered)


// kata solution 
function gooseFilter(birds) {
	var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
	const result = birds.filter(function (bird) {
		// if the bird is not contained in the geese array the return true
		// if (geese.indexOf(bird) === - 1) {
		//   return true
		// }
		// return false
		// if (!geese.includes(bird)) {
		//   return true
		// }
		// return false
		return !geese.includes(bird)
	})
	return result
};

// we can access additional parameters
const nums4 = [1, 2, 3, 4, 5]
const result2 = nums.map(function (num, index) {
	console.log(index)
	return num * 2
})
console.log(result2)
console.clear()

// reverse - this reverses an array

const nums5 = [1, 2, 3, 4, 5]
const reversed = nums5.reverse()

console.log(reversed)

// reverse this string

const str = 'hello'
// change a string to an array - split()
const arr = str.split('')
// reverse the array
arr.reverse()
console.log(arr)
// change an array to a string - join()
const reversedStr = arr.join('')
console.log(reversedStr)
str.split('').reverse()

// nice trick get the number of occurences of a 
// character, in that case 'o'
str.split('o').length - 1

// you can also use join() with a parameter
str.split('').join('*')

console.clear()

// sort - this sorts an array in place - we change the array
// directly - there is no new array created 

const nums6 = [23, 45, 7, 12]

nums6.sort(function (a, b) {
	// this is ascending
	// return a - b
	// this is descending
	return b - a
	// if (b < a) {
	// 	return 4
	// }
	// if (a < b) {
	// 	return - 34
	// }
	// if (a === b) {
	// 	return 0
	// }
})
console.log(nums6)

console.clear()

// 


const reviews = [
	{
		name: 'foo',
		rate: 9,
		score: 7
	},
	{
		name: 'bar',
		rate: 9,
		score: 5
	},
	{
		name: 'baz',
		rate: 5,
		score: 4
	}
]

// sort the reviews ascending by it's rate

const sorted = reviews.sort(function (a, b) {
	return a.rate - b.rate
})



// this is how you can implement a secondary sort 
// criterion

// const sorted = reviews.sort(function (a, b) {
// 	if (a.rate === b.rate) {
// 		return a.score - b.score
// 	}
// 	return a.rate - b.rate
// })
console.log(sorted)