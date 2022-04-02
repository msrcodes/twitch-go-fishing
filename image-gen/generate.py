### Create all combinations of image
from xxlimited import new
from PIL import Image
from os import listdir, getcwd
from os.path import isfile, join
import shutil

## Get list of all fish
mypath = getcwd()+'/components/'
savepath = getcwd()+"/../public/fish-images/"
bodies = [f for f in listdir(mypath+'body/') if isfile(join(mypath+'body/', f))]
eyes = [f for f in listdir(mypath+'eyes/') if isfile(join(mypath+'eyes/', f))]
hats = [f for f in listdir(mypath+'hat/') if isfile(join(mypath+'hat/', f))]
print(bodies)
print(eyes)
print(hats)

colours = { "yellow":(255,  255,   0),
            "purple":(255,    0, 255),
            "cyan":  (  0,  255, 255),
            "maximumbluegreen": (43, 203, 186),
            "sunflower": (241, 196, 15),
            "syntheticpumpkin": (255, 121, 63)}

white =     (255, 255, 255, 255)
off_white = (243, 242, 238, 255)

def makeHue(colour, grey):
    """Return hue of colour based on grey input"""
    if type(grey) == tuple:
        grey = grey[0]
    grey = 1-(grey/255)
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

def createFish(colour, colour_layer_path, body_layer_path, eye_layer_path, hat_layer_path=None):
    """Creates a fish based on a mash up of images"""
    colour_layer =  Image.open(colour_layer_path)
    body_layer =  Image.open(body_layer_path)
    eye_layer =  Image.open(eye_layer_path)
    if hat_layer_path != None:
        hat_layer = Image.open(hat_layer_path)
    colour_layer = changeColour(colour_layer, colour)
    newImage = Image.alpha_composite(colour_layer, body_layer)
    newImage = Image.alpha_composite(newImage, eye_layer)
    if hat_layer_path != None:
        newImage = Image.alpha_composite(newImage, hat_layer)
    return newImage

## Make copy of body image
for body in bodies:
    for c in colours.keys():
        for eye in eyes:
            createFish(colours[c], mypath+"colour/"+body, mypath+"body/"+body, mypath+"eyes/"+eye).save(savepath+c+eye[:-4]+body)
