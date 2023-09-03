# in both python and JavaScript, construct a function utilizing 
# ternary operators and a callback function.
# Then, call the function utilizing lambda.

def greater_than_10(callback, x):
    return "yes" if (callback(x) > 10) else "no"


print(greater_than_10(lambda x: x * 2, 3))