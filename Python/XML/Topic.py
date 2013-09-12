import xml.etree.ElementTree as ET
from XML import XML

class Topic(XML):
   
   #def __init__(self, pFilename):
      #super(Topic, self).__init__()
         
   def addScreen(self, pScreen):
      print "Topic.addScreen"
      #self.root.append(pScreen)
      
      screen = ET.SubElement(self.root, 'screen')
      ET.dump(self.root)
      #self.root.text = str(pScreen)
      #rank.set('updated', 'yes')
      
   def saveToFile(self, pFilename):
      self.tree.write(pFilename)
      