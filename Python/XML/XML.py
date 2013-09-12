import xml.etree.ElementTree as ET

class XML:
   
   def __init__(self, pFilename):
      self._parse(pFilename)
   
   def _parse(self, pFilename):
      self.tree = ET.parse(pFilename)
      self.root = self.tree.getroot()

   def printStructure(self):
      self.printNode(self.root)

   def printNode(self, pNode):
      print "node:", pNode.tag, "-", len(pNode)
      self.printAttr(pNode)
      print "   ", pNode.text
      if(len(pNode) > 0): # has children, recursion recursion
         for childNode in pNode:
            self.printNode(childNode)
             
   def printAttr(self, pNode):
      for attr in pNode.attrib.items():
         print "   ", attr[0], ": ", attr[1]