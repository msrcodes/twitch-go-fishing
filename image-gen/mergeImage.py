from PIL import Image

def mergeImage():
    image1 =  Image.open('fish1.png')#.convert('RGBA')
    image2 =  Image.open('fish2.png')#.convert('RGBA')
    image3 =  Image.open('fish3.png')#.convert('RGBA')
#    merge=Image.new(image1.mode,image1.size)
#    merge = 'merged.jpg'
    Image.alpha_composite(image1, image2,).save("merged.png")
    merge =  Image.open('merged.png')
    Image.alpha_composite(merge, image3,).save("merged.png")

mergeImage()
