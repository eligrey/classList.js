QUnit.module("classList.remove");

QUnit.test("Removes a class", function(assert) {
  var p = document.createElement("p");
  var g = document.createElementNS("http://www.w3.org/2000/svg","svg").appendChild( document.createElement("g") );
  var gList = g.classList;
  var pList = p.classList;
  g.className = "c1 c2";
  p.className = "c1 c2";

  pList.remove("c1");
  assert.ok(!pList.contains("c1"), "Removes a class that is present in HTML element");
  assert.strictEqual(p.className, "c2");

  gList.remove("c1");
  assert.ok(!gList.contains("c1"), "Removes a class that is present in SVG element");
  assert.strictEqual(g.className, "c2");
});

QUnit.test("Removes multiple classes", function(assert) {
  var p = document.createElement("p");
  var g = document.createElementNS("http://www.w3.org/2000/svg","svg").appendChild( document.createElement("g") );
  var gList = g.classList;
  var pList = p.classList;
  g.className = "c1 c2 c3";
  p.className = "c1 c2 c3";

  pList.remove("c1", "c3");
  assert.ok(!pList.contains("c1") && !pList.contains("c3"), "Removes mutliple classes that are present in HTML element");
  assert.strictEqual(p.className, "c2");

  gList.remove("c1", "c3");
  assert.ok(!gList.contains("c1") && !gList.contains("c3"), "Removes mutliple classes that are present in SVG element");
  assert.strictEqual(g.className, "c2");
});

QUnit.test("Removes duplicated instances of class", function(assert) {
  var p = document.createElement("p");
  var g = document.createElementNS("http://www.w3.org/2000/svg","svg").appendChild( document.createElement("g") );
  var gList = g.classList;
  var pList = p.classList;
  g.className = "c1 c1 c1";
  p.className = "c1 c1 c1";

	pList.remove("c1");
	assert.ok(!pList.contains("c1"), "Removes all duplicated instances of classes that are present in HTML element");
	assert.strictEqual(p.className, "");

  gList.remove("c1");
  assert.ok(!gList.contains("c1"), "Removes all duplicated instances of classes that are present in SVG element");
  assert.strictEqual(g.className, "");
});
