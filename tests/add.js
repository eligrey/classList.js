QUnit.module("classList.toggle");

QUnit.test("Adds a class", function(assert) {
	var p = document.createElement("p");
	var g = document.createElementNS("http://www.w3.org/2000/svg","svg").appendChild( document.createElement("g") );
	var gList = g.classList;
	var pList = p.classList;

	pList.add("c1");
	assert.ok(pList.contains("c1"), "Adds a class that is not present in HTML element");
	assert.strictEqual(p.className, "c1");

	gList.add("c1");
	assert.ok(gList.contains("c1"), "Adds a class that is not present in SVG element");
	assert.strictEqual(g.className, "c1");
});

QUnit.test("Adds multiple classes", function(assert) {
	var p = document.createElement("p");
	var g = document.createElementNS("http://www.w3.org/2000/svg","svg").appendChild( document.createElement("g") );
	var gList = g.classList;
	var pList = p.classList;

	pList.add("c1", "c2");
	assert.ok(pList.contains("c1") && pList.contains("c2"), "Adds classes that are not present in HTML element");
	assert.strictEqual(p.className, "c1 c2");

	gList.add("c1", "c2");
	assert.ok(gList.contains("c1") && gList.contains("c2"), "Adds classes that are not present in SVG element");
	assert.strictEqual(g.className, "c1 c2");
});
