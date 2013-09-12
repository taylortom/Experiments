from rt import RT

class Movie():
   
   def __init__(self, pTitle):
      self.className = "Movie"
      self.data = RT().search(pTitle, page_limit=1)[0]
      
      self.setData()
         
   def setData(self):
      self.id = self.data['id']
      self.title = self.data['title']
      self.year = self.data['year']
      self.rating = self.data['mpaa_rating']
      self.runtime = self.data['runtime']
      self.criticScore = self.data['ratings']['critics_score']
      self.fresh = self.data['ratings']['critics_rating'] == 'Certified Fresh'
      self.synopsis = self.data['synopsis']
      self.cover = self.data['posters']['detailed']
         
   def printInfo(self):
      print self.className, "printInfo"
      print "  id:", self.id
      print "  title:", self.title
      print "  year:", self.year
      print "  rating:", self.rating
      print "  runtime:", self.runtime
      print "  critic score:", self.criticScore
      print "  fresh:", self.fresh
      print "  synopsis:", self.synopsis
      print "  cover:", self.cover
      
   def printAllData(self):
      for item in self.data:
         print "  ", item