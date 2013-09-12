import MyFirstPython

# pull in some vars from another file
a = MyFirstPython.j
b = MyFirstPython.k
c = MyFirstPython.l

# array
d = ('one', 'two', 'three', 'four', 'five')

print "This is MySecondPython...", a, b + c
print d[3]

# prints the names available in a module
print dir(MyFirstPython)