list_int = [1,2,3]
b = [4,5,6]
c = [7,8,9]
def return_total(x,y,z):
    return x + y + z
result = list(map(return_total, list_int,b,c))

print(result)

list_int = ["1","2","3"]
def return_list_int(x):
    return int(x)
print(list_int)
result2 = list(map(return_list_int, list_int))

print(result2)

s = ["  hello  ","  world  ","  python  "]
def return_strip(x):
    return(x.strip())
result3 = list(map(return_strip, s))

print(result3)

celsius = [0,20,37,100]
def return_fahren(x):
    return((x*9/5)+32)
result4 = list(map(return_fahren, celsius))

print(result4)

words = ["apple","banana","cherry"]
def return_first(x):
    return(x[0])
result5 = list(map(return_first, words))

print(result5)

def return_upper(x): 
    return(x.upper())
result6 = list(map(return_upper, words))
print(result6)
