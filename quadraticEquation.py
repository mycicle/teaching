
# make another function that multiplies two numbers
# make another function that adds two numbers
# write quadraticEquation to use those two functions


def add(a, b):
    addition = a+b 
    return addition

def multiply(a, b):
    # return a*b
    multiplication= a*b
    return multiplication

def quadraticEquationV1(m, x, b):
    """
    equation: y = m*x + b
    params:
        m = slope
        x = position on x axis 
        b = y intercept
    returns:
        y = position on the y axis
    """

    # multiply m and x and store the value into a variable

    # add the product of m and x to b and store it into a variable

    # return that variable
    daniela = m*x
    daniela = daniela + b
    return daniela


# y = quadraticEquationV1(2, 1, 1)
# print(y)

def quadraticEquationV2(m, x, b):
    multiplication = multiply(m, x)
    addition = add(multiplication, b)
    return addition

# m = 15
# x = 4
# b = 2
# print(quadraticEquationV2( m, x, b ))


"""
    Our computer has RAM
    which is memory 

    and we use that memory to store variables! 


    we also use it to store instructions 

    so why do we write all of our instructions
    line by line
    sequentially
    like a really shitty book

    your ocmputer is like a giant indexed list   it is full of things that it remembers and it remembers where it is all stores and placed


    when you write code
    and "run" it
    what youre actually saying 
    is 

    remember all of these instructions in THIS SPECIFIC ORDER
    AND THEN FOLLOW THEM

    lets say you have some code
    which is







"""


"""
Computer:
    has 'memory'

Two types:
    RAM
        like your hard drive
        but everything in here is temporary
        so your programs and applications use it to store things they need to run 

        RAM can be thought of as a well organized neighborhood

        what do they store? 
        Variables!!!!!


        what is literally happening when you say 
        m = 12
        your computer is finding an available house (which has an address)
        it is placing the number 12 into that house 
        and then recording that 12 lives at address 104 8th street and we will call that location M in our program 


        m = 2 + m

        your computer is looking up location M
        receiving the address 104 8th street
        taking the person who lives there (number 12)
        adding 2 to it
        and then putting it back into its house



        the next time the computer look at location M
        goes to 104 8th street
        and checks who is inside 
        who will it find?
        14!


        0xAAB467FF
        the number 2 in binary
        is 

        10
        11
        100


        10000000000000000000   at 32 you are alrady at 2 billion

        your computer  
    Hard Drive
        1000GB it stores all of your stuff permanently 
        where you keep your files, photos, applcations, etc...
"""































