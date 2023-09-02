# algo 1
# Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
# The first word within the output should be capitalized only if the 
# original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). 
#The next words should be always capitalized.

def to_camel_case(text):
    text = text.replace("-", " ").replace.replace('_', ' ').split(' ')
    for i in range(1, len(text)):
        text[i] = text[i].capitalize()
    return ''.join(text)

text1 = "my-name-is-kathy"
text2 = "How-are-you"
text3 = "what_should_we_do"

print(to_camel_case(text1))
print(to_camel_case(text2))
print(to_camel_case(text3))