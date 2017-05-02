QUnit.module("classList.toggle");

QUnit.test("Toggle-adds a class", function(assert) {
	var pList = document.createElement("p").classList;
  var gList = document.createElementNS("http://www.w3.org/2000/svg","svg").appendChild( document.createElement("g") ).classList;

	pList.toggle("c1");
	assert.ok(pList.contains("c1"), "Adds a class that is not present in HTML element");
	assert.strictEqual(
		pList.toggle("c2"),
		true,
		"Returns true when class is added to HTML element"
	);

	gList.toggle("c1");
	assert.ok(gList.contains("c1"), "Adds a class that is not present");
	assert.strictEqual(
		gList.toggle("c2"),
		true,
		"Returns true when class is added to SVG element"
	);
});

QUnit.test("Toggle-removes a class", function(assert) {
	var pList = document.createElement("p").classList;
  var gList = document.createElementNS("http://www.w3.org/2000/svg","svg").appendChild( document.createElement("g") ).classList;

	pList.add("c1");
	pList.toggle("c1");
	assert.ok(!pList.contains("c1"), "Removes a class that is present in HTML element");

	pList.add("c2");
	assert.strictEqual(
		pList.toggle("c2"),
		false,
		"Return false when class is removed from HTML element"
	);

	gList.add("c1");
	gList.toggle("c1");
	assert.ok(!gList.contains("c1"), "Removes a class that is present in SVG element");

	gList.add("c2");
	assert.strictEqual(
		gList.toggle("c2"),
		false,
		"Return false when class is removed from SVG element"
	);
});

QUnit.test("Toggle-adds a class with second argument", function(assert) {
	var pList = document.createElement("p").classList;
  var gList = document.createElementNS("http://www.w3.org/2000/svg","svg").appendChild( document.createElement("g") ).classList;

	pList.toggle("c1", true);
	assert.ok(pList.contains("c1"), "Adds a class that is not present in HTML element");
	assert.strictEqual(
		pList.toggle("c2", true),
		true,
		"Returns true when class is added to HTML element"
	);

	pList.add("c3");
	pList.toggle("c3", true);
	assert.ok(
		pList.contains("c3"),
		"Does not remove a class that is already present in HTML element"
	);

	pList.add("c4");
	assert.strictEqual(
		pList.toggle("c4", true),
		true,
		"Returns true when class is already present in HTML element"
	);

	gList.toggle("c1", true);
	assert.ok(gList.contains("c1"), "Adds a class that is not present in SVG element");
	assert.strictEqual(
		gList.toggle("c2", true),
		true,
		"Returns true when class is added to SVG element"
	);

	gList.add("c3");
	gList.toggle("c3", true);
	assert.ok(
		gList.contains("c3"),
		"Does not remove a class that is already present in SVG element"
	);

	gList.add("c4");
	assert.strictEqual(
		gList.toggle("c4", true),
		true,
		"Returns true when class is already present in SVG element"
	);
});

QUnit.test("Togggle-removes a class with second argument", function(assert) {
	var pList = document.createElement("p").classList;
  var gList = document.createElementNS("http://www.w3.org/2000/svg","svg").appendChild( document.createElement("g") ).classList;

	pList.add("c1");
	pList.toggle("c1", false);
	assert.ok(!pList.contains("c1"), "Removes a class that is present in HTML element");
	assert.strictEqual(
		pList.toggle("c2", false),
		false,
		"Returns false when class is removed from HTML element"
	);

	pList.toggle("c3", false);
	assert.ok(
		!pList.contains("c3"),
		"Does not add a class that is not present in HTML element"
	);

	assert.strictEqual(
		pList.toggle("c4", false),
		false,
		"Returns false when class was not present in HTML element"
	);

	gList.add("c1");
	gList.toggle("c1", false);
	assert.ok(!gList.contains("c1"), "Removes a class that is present in SVG element");
	assert.strictEqual(
		gList.toggle("c2", false),
		false,
		"Returns false when class is removed from SVG element"
	);

	gList.toggle("c3", false);
	assert.ok(
		!gList.contains("c3"),
		"Does not add a class that is not present in SVG element"
	);

	assert.strictEqual(
		gList.toggle("c4", false),
		false,
		"Returns false when class was not present in SVG element"
	);
});
