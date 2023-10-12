# Business Requirement
As a student, I'd like to get a multiplication table of a specified range. 
The input should be 2 integers specifying the start and the end of the table:

AC1: The start number should not be greater than the end number, otherwise the function will return nothing.

AC2: The start number and the end number can be any integer in a range of 1 to 10 (inclusive).

AC3: The output should be a string represents the multiplication table. Suppose that the start number is *2* and the end number is *4*, the output should be something like the following.

```
2*2=4
2*3=6  3*3=9
2*4=8  3*4=12  4*4=16
```

# Practice Requirement
1. Please draw the whole tasking diagram.
2. Please declare all the functions according to your diagram.
3. Please write a test case following given...when...then pattern for a leaf block of the diagram. Then implement the block to pass the test. Should only test the `render` method.
4. Please repeat step 3 until all functions are implemented.


---

Tasking

1. Should check start input is a valid number
    * Input: startNumber: int
    * Output: isValidNumber: boolean
2. Should check end input is a valid number
    * Input: endNumber: int
    * Output: isValidNumber: boolean
3. should check start number is in range
    * Input: startNumber: int
    * Output: isInRange: boolean
4. should check end number is in range
    * Input: endNumber: int
    * Output: isInRange: boolean
5. should check the end number is greater than start number
    * Input: startNumber:int, endNumber: int
    * Output: isEndNumGreaterThanStartNum: boolean
6. should render Multiplication line with start number and end number:
    * Input: startNumber:int, endNumber: int
    * Output: multiplicationLine: string
7. should render Multiplication table with start number and end number base on render Multiplication line func
    * Input: startNumber: int, endNumber: int
    * Output: multiplicationTable: string