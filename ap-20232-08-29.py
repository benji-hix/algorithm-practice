""" Algo 1
You were camping with your friends far away from home, but when it's time to go back,
 you realize that your fuel is running out and the nearest pump is 50 miles away! 
 You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.
"""

def zero_fuel(distance_to_pump, mpg, fuel_left):
    if (fuel_left * mpg >= distance_to_pump):
        return true
    else:
        return false


""" Algo 2
Given a number > 0, return it as negative. 
Given a number < 0, return number.
Give 0, return 0.
"""

def make_negative(number):
    if (number > 0):
            return number * -1
    else:
        return number

print(make_negative(5))
print(make_negative(0))
print(make_negative(-3))

# alternative solution:

def make_negative(number):
    return -abs(number)
    