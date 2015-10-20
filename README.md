#Ante Up Test Suite.

I wrote a Jasmine test suite if you want to work on [the Ante Up challenge](http://www.codenewbie.org/blogs/ante-up) using Test-Driven Development (TDD).

Here's a step-by-step guide to understanding the tests.

###1. Clone the repo
Clone this repo to your own machine with `git clone https://github.com/dsberger/ante-up.git`. (I'm assuming you know git and the command line well enough to do this.)

###2. Look around the directory
Move into the directory with `cd ante-up`. Let's take a look around.
	
The file `AnteUp.js` is where you'll be writing the code to solve the challenge.

The directory `test` contains a bunch of things.

* `test/lib` is where the Jasmine files live. Don't mess with this one!
* `test/spec` contains `AnteUpSpec.js`, which is the file that has all the tests I've written.
* `test/SpecRunner.html` is a file that will show us which of our tests are passing or failing.

###3. Behold our failing tests, and despair
Open `test/SpecRunner.html` in your browser. You should see, from the top left:

* The Jasmine logo
* A row of 27 red Xs
* A message that says, "27 specs, 27 failures"
* A line that reads `Spec List | Failures`. Click "Spec List" to see a list of every test scenario (in red, of course). Click "Failures" to toggle back.
* On the "Failures" tab is a very long list of all 27 failing specs, with their stack traces.

###4. Dig in to the first test
	
Let's take a look at the very first failing test, `high card with a seven`. The message is a bit mysterious: `Expected undefined to be 'high card'.` Let's look at the spec file to figure out what's going on.

In your text editor, open `test/spec/AnteUpSpec.js`. Here are the first few lines: 

```
describe("high card", function(){
  it("with a seven", function(){
    expect( AnteUp.read(["2H", "3S", "7C", "4H", "5D"]) ).toBe( "high card" );
  });
  ...
});
```

What's going on here? Read that third line until you understand it.

1. The test suite _expects_ that...
2. when we give the `AnteUp.read()` function...
3. an array of short strings representing cards, `["2H", "3S", "7C", "4H", "5D"]`...
4. the return value is going _to be_ "high card".

###5. Make the test pass!

Let's look at that failure message again: `Expected undefined to be 'high card'.` When the test ran `AnteUp.read(["2H", "3S", "7C", "4H", "5D"])` it got `undefined` as the return value, not "high card", so it failed.

In another tab of your text editor, open `AnteUp.js`. You can see that it contains the `AnteUp` object, with a function `read()`. It's not hard to see why our test failed... `read()` has no return value at all!

Delete the line that says `// Your code here!` and replace in with `return "high card"`.

Save the file and refresh `SpecRunner.html` in your browser. That line of 27 red Xs should now be 3 green circles followed by 24 red Xs. The next line should say "27 specs, 24 failures". If you click `Spec List`, you will see that the first batch of tests, under the "high card" group, are all passing.

###6. Do the Ante Up challenge!
Unfortunately, now the first failing test says `Expected 'high card' to be 'one pair'.` The `read()` function always returns the string "high card", no matter what input you give it.

Now comes the fun part! You should see more and more of your tests passing as you implement your solution to the Ante Up challenge.

Good luck! Email me at [dsberger@gmail.com](mailto:dsberger@gmail.com) if you have any questions about this introduction to the Jasmine test suite.

