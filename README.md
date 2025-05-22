# Blue Prince - Parlor Puzzle Solver

Hello! 
  
I'm an avid parlor room enjoyer. I got a parlor room almost every single run for my first 50 days straight. Eventually, I had come up with a little system and a template in my notes to go through all 6 possible cases for the 1 statement puzzles.  
  
Then, I started getting boxes with 2 statements, which bumped the number of possible cases to 18, and apparently, some people eventually reach 3 statements!  
  
Going through the logic and finding the contradictions is quite fun with a pen and paper, but when it's a bit too convoluted - it can be hard to follow, and the copy-pasting of the true/false statements into the notes can be a little daunting.  
  
Eventually I figured, it would be pretty fun to create a tool that essentially lets you input all of the box statements and have it go through all the possible cases and evaluate if there are any contradictions!  
  
# Links  
  
You can try it out live, here!  
[https://theshiftingquiet.github.io/Blue-Prince-Parlor-Solver/](https://theshiftingquiet.github.io/Blue-Prince-Parlor-Solver/)
  
You can click the "Help" button on the webpage for more instructions.  
  
# How it works  

You can watch a demonstration of what the tool looks like here here, in this YouTube video:  

[![parlor-solver](https://github.com/user-attachments/assets/639f8c50-59cd-4e49-bace-5172db04fb55)](https://www.youtube.com/watch?v=5BayAGZtNHc)  
> **Click the image above to open the video!**  

First of all, to summarize how this works, the tool is going to go through all possible combinations and evaluate each of the statements with the assumed truthfulness, to see if it leads to a contradiction.
There are two main ways to use this tool, a simple method and an advanced method.
For the simple method, you don't even need to understand what these inputs and labels are: you can just follow the steps and everything should work on its own.
Please note that the simple method will use AI, and AI is unreliable. Maybe my prompt can be improved - I'd be happy to check out any suggestions.

1. Take a screenshot of the blue box, paste it in the blue box's paste zone, and press the button "Crop & OCR".
2. Check that the text has been extracted from your screenshot correctly and fix any significant typos you see, then press "Accept" to automatically fill in the statements.
3. Repeat the process for the white and black boxes. Alternatively, you can enable "Show label statements" in the settings and manually fill in the statements yourself.
4. Press the button "Generate JEXL with AI" and then choose the AI of your choice. This will open a new tab with the AI tool, which will be prompted to automatically generate the JEXL expressions for each statement with all the context it needs.
5. Wait for the AI to finish.
6. Copy the generated codeblock and paste it into the "Import from JSON" modal that will have opened (you can re-open it with the button "Import").
7. Press the button "Import": this will automatically fill in the JEXL expressions the AI generated for each statement.
8. Finally, press the button "Calculate" to evaluate all possible cases and find the solution.

The advanced method is the same, except you write the JEXL expressions yourself, rather than using the AI to generate them for you.
You can read more in the other FAQ fields.
  
The way it works is, it goes through all 6-18+ possible combinations of 1-3 true/false statements.  
Then, for each case, goes through all 3 possible gem placements.  
It evaluates each statement with its assumed truthfulness.  
If any of the statements evaluate to false - that's a contradiction.  
If any of the 3 possible gem placements work out with no contradictions across all statements - that's a valid answer.  
In the end, if there's only one valid answer - that's your definitive answer.  
If there's multiple - there's some sort of ambiguity that you can resolve by looking at the page's reasoning for each of the cases.  
If there are none - there must be some logical error in how some of the statements are constructed.  
  
# Security  
  
For the security-conscious, the webpage uses JEXL to evaluate the statements, which means that, even though you are technically able to send a link with JS code in the GET parameters - the expressions are not evaluated as pure JS, so there should be no reflection XSS attack vector.  
  
# Example  
  
If you'd like an example of how you are supposed to fill out the labels in the GUI, here is one!  
  
Let's say you have this puzzle in the parlor:  
  
Blue Box:  
- This box has at least two true statements.  
- The Black Box has at least two true statements.  
- The gems are in this box  
  
White:  
- Every statement on the blue box is false  
- Every statement on the black box is true  
- The gems are in this box  
  
Black:  
- This is a true statement  
- This is a true statement  
- The gems are in this box  
  
This is what you would fill out in the tool:  

![image](https://github.com/user-attachments/assets/0da637f0-7fb9-4765-b8fc-7e2bc000e3e8)
  
Here is the text from the screenshot (you can also get it pre-filled by following this example URL:  
[\[Click here to open the solver with the pre-filled labels for this example\]](https://theshiftingquiet.github.io/Blue-Prince-Parlor-Solver/?data=eyJCbHVlIjp7ImNvdW50IjozLCJzdGF0ZW1lbnRzIjpbeyJ0cnVlIjp7ImxhYmVsIjoiIiwiY29kZSI6ImJsdWUudHJ1ZUNvdW50ID49IDIifSwiZmFsc2UiOnsibGFiZWwiOiIiLCJjb2RlIjoiISggYmx1ZS50cnVlQ291bnQgPj0gMiApIn19LHsidHJ1ZSI6eyJsYWJlbCI6IiIsImNvZGUiOiJibGFjay50cnVlQ291bnQgPj0gMiJ9LCJmYWxzZSI6eyJsYWJlbCI6IiIsImNvZGUiOiIhKCBibGFjay50cnVlQ291bnQgPj0gMiApIn19LHsidHJ1ZSI6eyJsYWJlbCI6IiIsImNvZGUiOiJibHVlLmhhc0dlbXMifSwiZmFsc2UiOnsibGFiZWwiOiIiLCJjb2RlIjoiISggYmx1ZS5oYXNHZW1zICkifX1dfSwiV2hpdGUiOnsiY291bnQiOjMsInN0YXRlbWVudHMiOlt7InRydWUiOnsibGFiZWwiOiIiLCJjb2RlIjoiYmx1ZS5pc0FsbEZhbHNlIn0sImZhbHNlIjp7ImxhYmVsIjoiIiwiY29kZSI6IiEoIGJsdWUuaXNBbGxGYWxzZSApIn19LHsidHJ1ZSI6eyJsYWJlbCI6IiIsImNvZGUiOiJibGFjay5pc0FsbFRydWUifSwiZmFsc2UiOnsibGFiZWwiOiIiLCJjb2RlIjoiISggYmxhY2suaXNBbGxUcnVlICkifX0seyJ0cnVlIjp7ImxhYmVsIjoiIiwiY29kZSI6IndoaXRlLmhhc0dlbXMifSwiZmFsc2UiOnsibGFiZWwiOiIiLCJjb2RlIjoiISggd2hpdGUuaGFzR2VtcyApIn19XX0sIkJsYWNrIjp7ImNvdW50IjozLCJzdGF0ZW1lbnRzIjpbeyJ0cnVlIjp7ImxhYmVsIjoiIiwiY29kZSI6InRydWUifSwiZmFsc2UiOnsibGFiZWwiOiIiLCJjb2RlIjoiISggdHJ1ZSApIn19LHsidHJ1ZSI6eyJsYWJlbCI6IiIsImNvZGUiOiJ0cnVlIn0sImZhbHNlIjp7ImxhYmVsIjoiIiwiY29kZSI6IiEoIHRydWUgKSJ9fSx7InRydWUiOnsibGFiZWwiOiIiLCJjb2RlIjoiYmxhY2suaGFzR2VtcyJ9LCJmYWxzZSI6eyJsYWJlbCI6IiIsImNvZGUiOiIhKCBibGFjay5oYXNHZW1zICkifX1dfX0=)  
  
Blue box:  
1. `blue.trueCount >= 2`  
2. `black.trueCount >= 2`  
3. `blue.hasGems`  

White box:  
1. `blue.isAllFalse`  
2. `black.isAllTrue`  
3. `white.hasGems`  

Black box:  
1. `true`  
2. `true`  
3. `black.hasGems`  

  
The result looks like this:  

![image](https://github.com/user-attachments/assets/fd3b8e1f-615d-44ce-95f3-44bdc74b68d6)
![image](https://github.com/user-attachments/assets/17b8972a-523f-4002-9367-2d9e8cdf7c03)

# Advanced Usage  
The expressions are JEXL (JavaScript Expression Language) expressions, which is pretty similar to JavaScript. For example, you can use <code>white.isEmpty || (black.isAllTrue && black.hasGems)</code> to represent a statement like "the white box is empty or the black box is true AND contains gems".  
You can find more examples in the Help modal.  
If you'd like to read up more on how to write JEXL statements, you can do so <a href="https://github.com/TomFrost/jexl">here</a>, though the examples should be more than enough to get you started, and most of the basic JS syntax will work as you would expect it.  
Your JEXL condition will have access to the following objects (and each will have a different value when considering each possibility) - blue, white, black, each object with:  
  
```js  
{  
    "color": "blue" or "white" or "black",  
    "oneIsTrue": true if blue 1 statement is assumed true in this case, false otherwise,  
    "oneIsFalse": true if blue 1 statement is assumed false in this case, false otherwise,  
    "twoIsTrue": true if blue 2 statement is assumed true in this case, false otherwise,  
    "twoIsFalse": true if blue 2 statement is assumed false in this case, false otherwise,  
    "threeIsTrue": true if blue 3 statement is assumed true in this case, false otherwise,  
    "threeIsFalse": true if blue 3 statement is assumed false in this case, false otherwise,  
    "statements": array of strings, each representing the text of the statement in this box (statements[0] = blue 1 statement, statements[1] = blue 2 statement, etc.)  
    "bools": array of booleans, each representing the truthiness of the statement in this box (bools[0] = blue.oneIsTrue, bools[1] = blue.twoIsTrue, etc.)  
    "isAllTrue" or "isTrue" or "allIsTrue": true if all of the statements in this box are assumed true in this case, false otherwise  
    "isAllFalse" or "isFalse" or "allIsFalse": true if all of the statements in this box are assumed false in this case, false otherwise  
    "isMixed": true if this box has at least one true and at least one false statement (so it's neither an all-true nor all-false box)  
    "trueCount": number of statements that are assumed true in this case  
    "falseCount": number of statements that are assumed false in this case  
    "isEmpty" or "empty" or "hasNoGems": true if this sub-case assumes it's empty  
    "hasGems" or "notEmpty" or "isNotEmpty": true if this sub-case assumes it has gems  
}  
```  
You will also have access to the object "context" with the following properties:  
```js  
{  
    "trueBoxCount" or "allTrueBoxCount": number of boxes that are assumed to have only true statements in this case  
    "falseBoxCount" or "allFalseBoxCount": number of boxes that are assumed to have only false statements in this case  
    "trueStatementCount": number of statements that are assumed true in this case across all boxes  
    "falseStatementCount": number of statements that are assumed false in this case across all boxes  
    "boxWithGems": a reference to the box object that is assumed to have gems in this sub-case  
    "boxesWithoutGems" or "emptyBoxes": an array of references to the box objects that are assumed to be empty in this sub-case  
}  
```  
  
JEXL is more of a subset of JavaScript, so it doesn't support all of the functions you might be used to.  
Though, you can always add your own functions to JEXL, if you are familiar enough with JavaScript.  
For example, you could add a function <code>countAllWords</code> by opening the devtools console and typing like this:  
  
```js  
Jexl.addFunction('countAllWords', box => {  
    return box.statements.reduce((acc, statement) => acc + (statement ? statement.split(' ').length : 0), 0);  
});  
```  
  
You could then use it in your JEXL expressions like this: `countAllWords(blue) > 1`  

# Afterword

Hopefully you guys will have as much fun using the tool as I had making it! If you find any parlor puzzles that don't get solved correctly using this tool, let me know - it would be fun to look at them.  
  
Enjoy!  
