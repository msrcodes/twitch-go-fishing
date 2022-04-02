### Create all combinations of image
from PIL import Image
from os import listdir, getcwd
from os.path import isfile, join
import shutil

## Get list of all fish
mypath = getcwd()+'/components/'
bodies = [f for f in listdir(mypath+'body/') if isfile(join(mypath+'body/', f))]
eyes = [f for f in listdir(mypath+'eyes/') if isfile(join(mypath+'eyes/', f))]
hats = [f for f in listdir(mypath+'hat/') if isfile(join(mypath+'hat/', f))]
print(bodies)
print(eyes)
print(hats)

colours = [ (255,    0,   0),
            (  0,  255,   0),
            (  0,    0, 255),
            (255,  255,   0),
            (255,    0, 255),
            (  0,  255, 255)]

white =     (255, 255, 255, 255)

def makeHue(colour, grey):
    """Return hue of colour based on grey input"""
    if type(grey) == tuple:
        grey = grey[0]
    grey /= 255
    r = round(colour[0]*grey)
    g = round(colour[1]*grey)
    b = round(colour[2]*grey)
    return (r, g, b, 255)

def changeColour (im, newColour):
    """Returns new image data based on a greyscale image input and a colour"""
    global white
    newimdata = []
    for color in im.getdata():
        if color != white:
            newimdata.append(makeHue(newColour, color))
        #elif len(color) == 
        else:
            newimdata.append((color[0], color[1], color[3], 0))
    newim = Image.new(im.mode,im.size)
    newim.putdata(newimdata)
    return newim

## Make copy of body image
for body in bodies:
    image = Image.open(mypath+"colour/"+body)
    changeColour(image, colours[0]).save(mypath+"../images/"+body)

## Layer body outline

## Get colour layer based on body layer

## Recolour colour layer

## Layer on colour

## Add eyes

## Save image