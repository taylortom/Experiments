from XML import XML
from Topic import Topic

screen = XML("vertical_sliding_tabs.xml")
#screen.printStructure()

topic = Topic("topic.xml")
topic.addScreen("<screen><!-- This is just a test --></screen>")
topic.printStructure()
topic.saveToFile("test_output.xml")