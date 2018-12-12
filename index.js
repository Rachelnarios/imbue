exports.wordWeek = function() {
	Array.prototype.shuffle = function() {
		var input = this

		for (var i = input.length-1; i >=0; i--) {

			var randomIndex = Math.floor(Math.random()*(i+1))
			var itemAtIndex = input[randomIndex]
			input[randomIndex] = input[i]
			input[i] = itemAtIndex
		}
		return input
	}

	var tempArray = [ "Bliss", "Breathe", "Move", "Inspire", "Forgive", "Plan", "Rejoyce" ]
	tempArray.shuffle()

	return(tempArray)
}

exports.lucky = function() {
	var luck = Array.from({length: 1}, () => Math.floor(Math.random() * 0))
	const reducer = (a, c) => a + c
	return(luck.reduce(reducer))

}
exports.returnKind = function() {

	var quotes = [
		"Our greatest glory is not in never falling, but in rising every time we fall",
		"All our dreams can come true, if we have the courage to pursue them",
		"It does not matter how slowly you go as long as you do not stop",
		"If you desire to make a difference in the world, you must be different from the world.",
		"Happiness can be found in the darkest of times, if one only remembers to turn on the light"
	]

	var word = ["glory", "slowly", "difference", "world"]
	var day = word[Math.floor(Math.random()*word.length)]

	function filterItems(w) {
		return quotes.filter(function(m) {
			return m.indexOf(w) > -1
		})
	}

}
exports.f = function(w,quotes) {
	return quotes.filter(function(m) {
		return m.indexOf(w) > -1
	})
}
