import xml.etree.ElementTree as ET

root = ET.parse('vertical_sliding_tabs.xml').getroot()

def printNode(pNode):
   print "node:", pNode.tag, "-", len(pNode)
   printAttr(node)
   if(len(pNode) > 0): # has children, recursion recursion
      for childNode in pNode:
         printNode(childNode)
    
def printAttr(pNode):
   for attr in pNode.attrib.items():
      print "   ", attr[0], ": ", attr[1]
      
def setNodeText(pNode, pText):
   getNode(pNode)

printNode(root)