#
# Lists
#

list = [0,1,'two', 3, 'four', 5, 6, 'Bob']

# add to the list
list.append('kate')
print list

# remove an item
list.pop(3)
# can also use list.pop() to remove last item
print list

# sort a list 
list.sort()
print list

# reverse a list
list.reverse()
print list

# list nesting
matrix = [[-1,0,0], [0,-1,0], [0,0,1]]
print matrix[2], matrix[2][2]

# access a 'column' in the matrix
print [row[0] for row in matrix]

# add 1 to each item in column 1
matrix2 = [row[0] + 1 for row in matrix]
print matrix2
