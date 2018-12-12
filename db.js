const mongoose = require("mongoose")
const Schema = mongoose.Schema

var day = new mongoose.Schema({
	date: String,
	stars: String,
	best: String,
	bad: String,
	better:String,
	quote:String,

})
var comments = new mongoose.Schema({
	name: String,
	email: String,
	comment: String

})

// is the environment variable, NODE_ENV, set to PRODUCTION?
let dbconf = ""
if (process.env.NODE_ENV === "PRODUCTION") {
	const fs = require("fs")
	const path = require("path")
	const fn = path.join(__dirname, "config.json")
	const data = fs.readFileSync(fn)

	const conf = JSON.parse(data)
	dbconf = conf.dbconf
} else {
	dbconf = "mongodb://rnr266:SeS4TJ3ATidvPRG@ds157503.mlab.com:57503/diary"
}
mongoose.model("day", day)
mongoose.model("comments", comments)
mongoose.connect("mongodb://rnr266:SeS4TJ3ATidvPRG@ds157503.mlab.com:57503/diary")
