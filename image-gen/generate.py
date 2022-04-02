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

colours = { "red":   (255,    0,   0),
            "green": (  0,  255,   0),
            "blue":  (  0,    0, 255),
            "yellow":(255,  255,   0),
            "purple":(255,    0, 255),
            "cyan":  (  0,  255, 255)}

white =     (255, 255, 255, 255)
off_white = (243, 242, 238, 255)

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
        if color[0] == 0 or color == white or color == off_white:
            newimdata.append(color)
        else:
            newimdata.append(makeHue(newColour, color))
    newim = Image.new(im.mode,im.size)
    newim.putdata(newimdata)
    return newim

def mergeImage(colour_layer_path, body_layer_path, eye_layer_path, hat_layer_path=None):
    colour_layer =  Image.open(colour_layer_path)#.convert('RGBA')
    body_layer =  Image.open(body_layer_path)#.convert('RGBA')
    eye_layer =  Image.open(eye_layer_path)#.convert('RGBA')
    if hat_layer_path != None:
        hat_layer = Image.open(hat_layer_path)
#    merge=Image.new(image1.mode,image1.size)
#    merge = 'merged.jpg'
    Image.alpha_composite(image1, image2,).save("merged.png")
    merge =  Image.open('merged.png')
    Image.alpha_composite(merge, image3,).save("merged.png")

## Make copy of body image
for body in bodies:
    for c in colours.keys():
        image = Image.open(mypath+"colour/"+body)
        changeColour(image, colours[c]).save(mypath+"../images/"+c+"_"+body)

## Layer body outline

## Get colour layer based on body layer

## Recolour colour layer

## Layer on colour

## Add eyes

## Save image