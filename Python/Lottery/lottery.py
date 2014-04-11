import random

numbers = 5
stars = 2


def printNumbers(num):
   
   for i in range(0, num):
      print getLine()


def getLine():
   
   line = ""
   
   # numbers
   for i in range(0, numbers):
      line += str(random.randint(1, 50)) + ", "
     
   # stars 
   for i in range(0, stars):
         line += "[" + str(random.randint(1, 11)) + "] "
      
   return line

printNumbers(4)