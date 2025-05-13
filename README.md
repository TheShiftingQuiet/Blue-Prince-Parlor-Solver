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
[\[Click here to open the solver with the pre-filled labels for this example\]](https://theshiftingquiet.github.io/Blue-Prince-Parlor-Solver/?blueCount=3&Blue_s1_true_label=always+true&Blue_s1_true_code=true&Blue_s1_false_label=impossible&Blue_s1_false_code=false&Blue_s2_true_label=The+Black+Box+has+at+least+two+true+statements.+%28always+true%29&Blue_s2_true_code=true&Blue_s2_false_label=impossible&Blue_s2_false_code=false&Blue_s3_true_label=The+gems+are+in+this+box&Blue_s3_true_code=blue.hasGems&Blue_s3_false_label=The+gems+are+in+white+or+black&Blue_s3_false_code=blue.isEmpty&whiteCount=3&White_s1_true_label=Every+statement+on+the+blue+box+is+false&White_s1_true_code=blue.isAllFalse&White_s1_false_label=Blue+has+at+least+one+true+statement&White_s1_false_code=%21blue.isAllFalse&White_s2_true_label=Every+statement+on+the+black+box+is+true&White_s2_true_code=black.isAllTrue&White_s2_false_label=Black+has+at+least+one+false+statement&White_s2_false_code=%21black.isAllTrue&White_s3_true_label=The+gems+are+in+this+box&White_s3_true_code=white.hasGems&White_s3_false_label=The+gems+are+in+blue+or+black&White_s3_false_code=white.isEmpty&blackCount=3&Black_s1_true_label=This+is+a+true+statement&Black_s1_true_code=true&Black_s1_false_label=paradox%2C+impossible&Black_s1_false_code=false&Black_s2_true_label=This+is+a+true+statement&Black_s2_true_code=true&Black_s2_false_label=paradox%2C+impossible&Black_s2_false_code=false&Black_s3_true_label=The+gems+are+in+this+box&Black_s3_true_code=black.hasGems&Black_s3_false_label=The+gems+are+in+blue+or+white&Black_s3_false_code=black.isEmpty)  
  
Blue box:  
  
1. True label: always true  
   True JS: `true`  
   False label: impossible  
   False JS: `false`  
2. True label: The Black Box has at least two true statements. (always true)  
   True JS: `true`  
   False label: impossible  
   False JS: `false`  
3. True label: The gems are in this box  
   True JS: `blue.hasGems`  
   False label: The gems are in white or black  
   False JS: `blue.isEmpty`  
  
White box:  
  
1. True label: Every statement on the blue box is false  
   True JS: `blue.isAllFalse`  
   False label: Blue has at least one true statement  
   False JS: `!blue.isAllFalse`  
2. True label: Every statement on the black box is true  
   True JS: `black.isAllTrue`  
   False label: Black has at least one false statement  
   False JS: `!black.isAllTrue`  
3. True label: The gems are in this box  
   True JS: `white.hasGems`  
   False label: The gems are in blue or black  
   False JS: `white.isEmpty`  
  
Black box:  
  
1. True label: This is a true statement  
   True JS: `true`  
   False label: paradox, impossible  
   False JS: `false`  
2. True label: This is a true statement  
   True JS: `true`  
   False label: paradox, impossible  
   False JS: `false`  
3. True label: The gems are in this box  
   True JS: `black.hasGems`  
   False label: The gems are in blue or white  
   False JS: `black.isEmpty`  
  
The result looks like this:  

![image](https://github.com/user-attachments/assets/fd3b8e1f-615d-44ce-95f3-44bdc74b68d6)
![image](https://github.com/user-attachments/assets/17b8972a-523f-4002-9367-2d9e8cdf7c03)

Hopefully you guys will have as much fun using the tool as I had making it! If you find any parlor puzzles that don't get solved correctly using this tool, let me know - it would be fun to look at them.  
  
Enjoy!  
