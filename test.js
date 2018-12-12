var assert = require("assert")
var kind = require("./index.js")
var word = ["glory", "slowly", "difference", "world"]
var day = word[Math.floor(Math.random()*word.length)]
var quotes = [
	"Our greatest glory is not in never falling, but in rising every time we fall",
	"All our dreams can come true, if we have the courage to pursue them",
	"It does not matter how slowly you go as long as you do not stop",
	"If you desire to make a difference in the world, you must be different from the world.",
	"Happiness can be found in the darkest of times, if one only remembers to turn on the light"
]
var word = ["glory", "slowly", "difference", "world"]

describe("returnKind", function() {
	it("returns a quote", function(done) {
		assert.equal(quotes.includes(kind.returnKind()), false)
		done()
	})

})
//Simplified
describe("lucky", function() {
	it("returns lucky number", function(done) {
		assert.equal(kind.lucky(),0)
		done()
	})

})
describe("filterItems", function() {
	it("returns items", function(done) {
		console.log(kind.f("Our",quotes))
		assert.equal(kind.f("Our",quotes),quotes[0])
		done()
	})

})
describe("wordWeek", function() {
	it("returns word found in array", function(done) {
		console.log(kind.wordWeek())
		assert.equal(word.includes(kind.wordWeek()),false)
		done()
	})
})
