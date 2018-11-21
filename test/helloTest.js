const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();
const say = require("../hello.js");


it ('isSaying',function (){
        const saying = say.hello();
        //TDD
        assert.equal(saying,"Hello World");
        //BDD
        expect(saying).to.be.a('string');
        saying.should.be.a('string');
        saying.should.equal('Hello World');
});