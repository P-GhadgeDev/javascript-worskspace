# ECMAScript es6

1. v1, v2,v3,v4,v5,v5.1,v6,v7
2. ECMASccript is the standard.
3. JavaSCript is the implementation.
4. ES6 Code -> Babel -> ES5 Code (Safe to run in your browser!)

## Array Helper Methods

1. forEach
   1. 'colors' array
      1. red, green, blue
         1. Iterator Function
2. find
3. reduce
4. map
5. every
6. filter
7. some

## Variable declaration with let and const

## Template Literals

## Enhanced Object Literals

## Default Function Arguments

## Rest and Spread Operator

## Destructuring

## Classes

## Generators

1. What is a generator?

2. What does a generator do?

3. Iteration with generators

4. Generator delegation

5. Generators with Symbol.iterator

## Promises and Fetch

1. Absolute time to do this: 1 millisecond
   1. ```js
      const url = 'http://www.json.com'
      ```

2. Absolute time to do this: 3 seconds
   1. ```js
      data = makeRequest(url);
      ```

3. Internet
   1. makes request
   2. then

4. Absolute time to do this: 1 millisecond
   1. ```js
      console.log(data)
      ```

5. 3 States of Promises
   1. 'unresolved'
      1. waiting for something to finish...
   2. 'resolved'
      1. something finished and it all went ok
   3. 'rejected'
      1. something finished and something went bad

6. Promise
   1. Everthing worked out
      1. 'resolved'
         1. status
            1. then
               1. catch
   2. Something Bad Happened
      1. 'rejected'
         1. status
            1. catch
               1. callbacks