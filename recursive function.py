import math

def fac(n):
    
    if n < 1:
        return 1
    
else:
    rest = fac(n - 1 )
    return n*rest

#recursive function