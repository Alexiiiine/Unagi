from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from datetime import datetime
import eel

eel.init('web')

global state
state = 'Setup'
eel.setText('state-text', state)

def pretty_time():
    now = datetime.now()
    return now.strftime("%H:%M:%S")
def launchBrowser():
    options = Options()
    bb = webdriver.Firefox(options)
    return bb

@eel.expose
def getState():
    return state
@eel.expose
def runIt():
    state = 'running'
    eel.setText('state-text', state)
    eel.log(pretty_time(),'Opening Browser')
    launchBrowser()
    eel.log(pretty_time(),'Browser Open and Ready to Scrape')

eel.start('BremusBasic.html', port=90, size=(800, 800))
