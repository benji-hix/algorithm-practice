# codewars algo 1
# write a funciton that returns the sum of all numbers 1 through a given number

def summation(num):
    return sum(range(1, num+1))


print(summation(5))

# codewars algo 2
# Every day you rent a car costs $40.
# if you rent the car for 7 or more days, you get $50 off
# if you rent for 3 or more days, you get $20 off
#write a function that determines your total cost

def rental_car_cost(d):
    cost = d * 40
    if d >= 7:
        cost -= 50
    elif d >= 3:
        cost -= 20
    else:
        return cost

# codewars algo 3
# write a function that removes first and last characters of a string
def remove_chars(string):
    return string[1:-1]

#codewars algo 4
# given a number, multiply it by 8 if it is even and 9 otherwise

def simple_multiplication(number):
    if number % 2 == 0:
        return number * 8
    else:
        return number * 9
