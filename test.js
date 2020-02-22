const test = require("ava")
const WheneverReady = require(".")

test("main", async (t) => {
	const wReady = new WheneverReady()
	wReady.ready = true
	await wReady.when().then(() => t.true(wReady.ready))
})
