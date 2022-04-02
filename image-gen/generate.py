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

## Make copy of body image
#shutil.copyfile()

## Layer body outline

## Get colour layer based on body layer

## Recolour colour layer

## Layer on colour

## Add eyes

## Save image