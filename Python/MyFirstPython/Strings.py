#
# Some tests using strings
#
# Note: can't change individual characters in a string,
# but can set a new string using a 'slice' of the old
#

str = "Bamboozle"
listStr = 'Im,my,own,worst,enemy'

print 'str length:', len(str) # length
print 'char at 4:', str[4] 	  # indexing individual characters
print 'char at -3:', str[-3]  # - can also count from the end
print '5-9:', str[5:9]		  # 'slice', from 5, up to (not including) 9
print str * 5				  # string repetition
print str.find('oo')		  # searches for string, returns the offset
print str.replace('oo', 'ee') # search and replace
print listStr.split(',')	  # split into a list using passed delimiter
print str.upper()			  # to upper-case
print str.swapcase()		  # invert the case
print str.isalpha()			  # is the string only letters (also other is... methods)

# the re module
import re

desktopPath = '/usr/tom/Desktop/Hello.py'

match = re.match('/(.*)/(.*)/(.*)/', desktopPath).groups()
print match

filename = re.match('/(.*)/(.*)/(.*)/(.*)', desktopPath).group(4)
print filename