Repo for a coding tutorial for HR department.

We are building a simple calculator with which we can add two numbers.

#Assignment 1: Getting stuff up and running

Start with opening your terminal. (command+space and type "terminal" on Mac)

First we need to download the source, to do so type the following command in your terminal:
`git clone https://github.com/mahulst/coding-tut`

To navigate to the folder that was just created, type in your terminal:
`cd coding-tut`

Open a file browser and navigate to the folder (in your home folder there is now a new folder called 'coding-tut'

Now double click the "index.html" file which should open your browser

Try to put numbers in input 1 and input 2 and click the add button!


#Assignment 2:

Try adding functionality to the calculator

Open your terminal and enter the following command:
`git checkout step-2`

When you go back and refresh the page you just opened earlier you will see a multiply button

It is not working and it is your job to add this functionality

What we need is a function with the name "multiply" which returns the result of the two inputs multiplied.

Open up the file "script.js" in a simple text editor like textEdit or notepad

#Bonus: creating unit tests

To make sure the function you just added works as expected you need to write tests.

Go back to your terminal and run the command:
`npm i`

This will install all the things needed to help you test your app. After it is finished run:
`karma start`

This will show you that 2 tests has succeeded

If you open the file 'test.js'

You can add your test where the file says
```
it('should multiply two numbers', function () {
    //Add your tests here:

});
```
