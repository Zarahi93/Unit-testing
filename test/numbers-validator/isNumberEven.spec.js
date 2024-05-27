
import{NumbersValidator} from "../../app/numbers_validator.js";
import { expect } from "chai";
import {describe, beforeEach, afterEach, it} from "mocha";

describe('isNumberEven', function () {
  
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  afterEach(function () {
    validator = null;
  });

  it('should return true if number is even', function () {
    
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });

  it('should throw an error when provided a string', function (){
    expect(()=>{
      validator.isNumberEven('5');
    }).to.throw('[5] is not of type "Number" it is of type "string"')
  })

  
  it('should return an array of even numbers', () => {
    const arrayOfNumbers = [1,2,3,4,5,6];
    const evenNumbersFromArray= validator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(evenNumbersFromArray).to.be.eql([2,4,6]);
  });

  it('should throw an error if all the elements of the array are not numbers', ()=>{
  const arrayOfElements = [1,2,'3',4,5,6];
  expect(()=>{
    validator.getEvenNumbersFromArray(arrayOfElements);
  }).to.throw('[1,2,3,4,5,6] is not an array of "Numbers"')
  });

  it('should throw an error if not an array', ()=>{
const element = 4;
expect(()=>{
  validator.isAllNumbers(element);
}).to.throw('[4] is not an array')
});

it('should return true if all are numbers', function () {
 
  expect(validator.isAllNumbers([2,4,6])).to.be.equal(true);
});

it('should throw an error if the value is not a number',()=>{
  const value = '8';
  expect(()=>{
    validator.isInteger(value);
  }).to.throw('[8] is not a number')});

  it('should return true if value is a number', function () {
 
    expect(validator.isInteger(5)).to.be.equal(true);
  });

});

