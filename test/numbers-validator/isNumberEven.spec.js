
import{NumbersValidator} from "../../app/numbers_validator.js";
import { expect } from "chai";
import {describe, beforeEach, afterEach, it} from "mocha";

// 'describe' is used to group related tests together into a test suite.
// Here, it describes a suite of tests for the 'isNumberEven' method of NumbersValidator class.
describe('isNumberEven', function () {
  // Declaring a variable 'validator' outside of the 'beforeEach' and 'it' blocks
  // to make it accessible throughout this describe block.
  let validator;

  // 'beforeEach' is a hook that runs before each test ('it' block) within this 'describe' block.
  // It's usually used for setting up the test environment.
  beforeEach(function () {
    // Instantiates a new NumbersValidator object before each test and assigns it to 'validator'
    validator = new NumbersValidator();
  });

  // 'afterEach' is a hook that runs after each test. It is often used for cleanup activities.
  afterEach(function () {
    // Sets the validator variable to null to clean up memory after each test
    validator = null;
  });

  // 'it' is used for individual test cases - it includes the actual test.
  // The string argument describes what the test should do.
  it('should return true if number is even', function () {
    // Using 'expect' to assert that the 'isNumberEven' method returns true when
    // passed the even number 4. The '.to.be.equal(true)' is the actual assertion check.
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });

  // Additional tests would follow for different test cases, such as testing if an odd number
  // returns false or if passing a non-number throws an error.
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



});

