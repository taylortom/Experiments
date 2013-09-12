from rt import RT

class Movie():
   
   def __init__(self, pTitle):
      self.className = "Movie"
      self.data = RT().search(pTitle, page_limit=1)[0]
      self.setData()
         
   def setData(self):
      self.title = self.data['title']
      #self.releaseDate = self
      self.criticScore = self.data['ratings']['critics_score']
      self.fresh = self.data['ratings']['critics_rating'] == 'Certified Fresh'
         
   def printInfo(self):
      print self.className, "printInfo"
      #for item in self.data:
         #print "  ", item
      print "  ", self.criticScore
      print "  ", self.fresh