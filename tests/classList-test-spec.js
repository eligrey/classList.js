"use strict";

var data = [
    {
        el: document.createElement('div'),
        title: '.classList for HTMLElements'
    },
    { // TODO Implement http://toddmotto.com/hacking-svg-traversing-with-ease-addclass-removeclass-toggleclass-functions/
        el: document.getElementById('svg-el'),
        title: '.classList for SVGElements'
    }
];

for (var i = 0; i < data.length; i++) {
    describe(data[i].title, function(){
        var el = data[i].el;

        beforeEach(function() {
            el.className = '';
        });

        describe('el.classList', function() {

            it('should return DOMTokenList object', function() {
                el.classList.should.be.instanceof(DOMTokenList);
            });

            it('return object should have length property', function() {
                // el.classList.hasOwnProperty('length') will always return false in Firefox
                el.className = 'first-class second-class third-class';
                el.classList.length.should.equal(3);
            });

            it('should return array-like object', function() {
                el.className = 'first-class second-class third-class';

                el.classList[0].should.equal('first-class');
                el.classList[1].should.equal('second-class');
                el.classList[2].should.equal('third-class');
            });

            it('return object should have item method', function() {
                el.className = 'first-class second-class third-class';

                should.not.exist(el.classList.item(-1) );
                el.classList.item(0).should.equal('first-class');
                el.classList.item(1).should.equal('second-class');
                el.classList.item(2).should.equal('third-class');
                should.not.exist(el.classList.item(4) );
            });

        });

        describe('el.classList.remove()', function() {

            it('should remove class', function() {
                el.className = 'test-class';
                el.classList.remove('test-class');

                el.className.should.equal('');
            });

            it('should remove two equal classes', function() {
                el.className = 'test-class test-class';
                el.classList.remove('test-class');

                el.className.should.equal('');
            });

            it('should remove only passed class', function() {
                el.className = 'test-class other-class';
                el.classList.remove('test-class');

                el.className.should.equal('other-class');
            });

            it('should not change anything if there is no passed class', function() {
                var classNameLiteral = 'first-class second-class';

                el.className = classNameLiteral;
                el.classList.remove('test-class');

                el.className.should.equal(classNameLiteral);
            });

            it('should not delete part of single class name', function() {
                var classNameLiteral = 'long-class-name long_class_name longclassname longClassName';

                el.className = classNameLiteral;
                el.classList.remove('class');

                el.className.should.equal(classNameLiteral);
            });

            it('should throw error if argument contains space char', function() {
                (function() {
                    el.classList.remove('class other-class');
                }).should.throw('');
            });

        });

        describe('el.classList.add()', function() {

            it('should add class', function() {
                el.classList.add('test-class');

                el.className.should.equal('test-class');
            });

            it('should add new class to the end', function() {
                el.className = 'first-class';
                el.classList.add('second-class');

                el.className.should.equal('first-class second-class');
            });

            it('should accept several arguments', function() {
                el.classList.add('first-class', 'second-class', 'third-class');

                el.className.should.equal('first-class second-class third-class');
            });

            it('should not add new class if it already exists', function() {
                var classNameLiteral = 'test-class';

                el.className = classNameLiteral;
                el.classList.add(classNameLiteral);

                el.className.should.equal(classNameLiteral);
            });

            it('should throw error if argument contains space char', function() {
                (function() {
                    el.classList.add('test-class test-class');
                }).should.throw('');
            });

        });

        describe('el.classList.toggle()', function() {

            it('should add class if it not exists', function() {
                el.classList.toggle('test-class');

                el.className.should.equal('test-class');
            });

            it('should remove class if it not exists', function() {
                var classNameLiteral = 'test-class';

                el.className = classNameLiteral;
                el.classList.toggle(classNameLiteral);

                el.className.should.equal('');
            });

            it('should add new class to the end', function() {
                el.className = 'first-class';
                el.classList.toggle('second-class');

                el.className.should.equal('first-class second-class');
            });

            it('should delete from list of classes', function() {
                el.className = 'first-class second-class';
                el.classList.toggle('second-class');

                el.className.should.equal('first-class');
            });

            it('should remove a class (if it exists or not) if second argument is false', function() {
                el.className = 'first-class second-class';
                el.classList.toggle('second-class', false);
                el.classList.toggle('third-class', false);

                el.className.should.equal('first-class');
            });

            it('should add a class (if it exists or not) if second argument is true', function() {
                el.className = 'first-class second-class';
                el.classList.toggle('second-class', true);
                el.classList.toggle('third-class', true);

                el.className.should.equal('first-class second-class third-class');
            });

            it('should throw error if argument contains space char', function() {
                (function() {
                    el.classList.toggle('test-class test-class');
                }).should.throw('');
            });

        });

        describe('el.classList.contains()', function() {

            it('should find class from single name', function() {
                el.className = 'test-class';
                el.classList.contains('test-class').should.be.true;
            });

            it('should find class from list', function() {
                el.className = 'first-class second-class third-class';
                el.classList.contains('second-class').should.be.true;
            });

            it('should accept several arguments', function() {
                el.className = 'first-class second-class third-class';
                el.classList.contains('first-class', 'second-class').should.be.true;
            });

            it('should not find class from empty', function() {
                el.classList.contains('test-class').should.be.false;
            });

            it('should not find part of the class', function() {
                el.className = 'long-class-name long_class_name longclassname longClassName';
                el.classList.contains('class').should.be.false;
            });

            it('should not find nonexistent class', function() {
                el.className = 'first-class second-class third-class';
                el.classList.contains('fourth-class').should.be.false;
            });

            it('should not accept empty argument', function() {
                (function() {
                    el.classList.contains('');
                }).should.throw('');
            });

            it('should throw error if argument contains space char', function() {
                (function() {
                    el.classList.contains('test-class test-class');
                }).should.throw('');
            });

        });
    });
}