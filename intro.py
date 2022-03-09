# What are we actually doing
"""
giving a computer a set of instructions
because computers are dumb!
"""

"""
If they are so dumb, how do you tell your computer what to do?

The answer -> Code
the more specific answer -> functions
"""


"""
So!   what is a function? 


A function is a package of instructions 
they are created so that humans and computers alike can keep a set of instructions in the same spot


Now what else is a funtion

So    
A function is something that takes an input and gives you and output 
- keep in mind "nothing" is an input
- and "nothing" is an output


you can put nothing into a function and get nothing
you can put something into a function and get nothing
you can put nothing into a funciton and get somthing
and you can put something into a funciton and get something
"""


# same thing as there is a function named "addTwoNumbers"
# put in something and return nothing    (hint: something will still happen because a function is a collection of instructions!)
def addTwoNumbers(a, b):
    """
    params: 
        a   is a number
        b   is a number
    returns: 
        nothing!

    This function will print the sum of a and b
    """
    # print(a + b)
    return a + b


#here is where we tell the computer what to do
# print("calling addTwoNumbers(1, 1)")
# addTwoNumbers(1, 1)
# print()


# here we are saying    myvariable is going to represent (or store or contain or whatever intuitive understanding you have of variables) what is returned by the computer when we tell it to "addTwoNumbers"
# print(
# """
# calling:
# myvariable = addTwoNumbers(1, 1)
# print(myvariable)
# """
# )
# myvariable = addTwoNumbers(1, 1)
# print(myvariable)
# print()





def makeMeASandwich(typeOfSandwich):
    # case 1: return nothing, just print
    print("I MADE YOU A SANDWICH: NUMBER ", typeOfSandwich)
    return typeOfSandwich

mysandwich = makeMeASandwich(5)
print(mysandwich)
# Lists

# Loops

# Functions

# Why


import quadraticEquation

print(quadraticEquation.quadraticEquationV2(10, 2, 3))