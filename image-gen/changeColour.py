from PIL import Image
import random
#import PIL.Image
imagePath = 'ex1.jpg'
newImagePath = 'ex'
n=0
im = Image.open(imagePath)

def redOrBlack (im):
    newimdata = []
    orignal = (176,11,105)
    new = (random.randint(1,255),random.randint(1,255),random.randint(1,255))
    for color in im.getdata():
        if color == orignal:
            newimdata.append( new )
        else:
            newimdata.append( color )
    newim = Image.new(im.mode,im.size)
    newim.putdata(newimdata)
    return newim

for i in range (1,10):
    redOrBlack(im).save(newImagePath+str(i)+'.jpg')
