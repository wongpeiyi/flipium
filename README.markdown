Flipium
=======

Introducion
-----------

Flipium provides Titanium Appcelerator UI elements to simulate Flipboard's page-turning animation on a series of images, and is written purely in Coffeescript.


Basic Usage
-----------

There are two main functions to call: createFlipView() and createDragView()

createFlipView() creates an Ti.UI.View object that contains all your images as flippable pages.

createDragView() creates another Ti.UI.View object that will be overlayed across the screen, and acts as a gesture control to manipulate the FlipView. 


FlipView Configuration
----------------------

The following properties can be passed as a single object to the createFlipView() function:

* duration: Time for the a page to turn fully in ms (default = 500)
* images: An array containing your image filenames, e.g. ["1.png", "2.png", "3.png"]
* horizontal: Set to true for horizontal flipping (default = false)
* startPage: FlipView will flip to this page on load (default = 1)
* path: Specify path to the folder containing your images
* cacheOnLoad: By default, Flipium will crop and cache your images into flippable pages and save them in the ApplicationDataDirectory. If set to false, Flipium will expect each page to already be separated into two equally-sized images, with filenames in the format: "img_1_t.png" and "img_1_b.png" for top-bottom flipping, or "img_1_l.png" and "img_1_r.png" for left-right flipping.



AVAILABLE OPTIONS FOR DRAGVIEW:
  dragDistance: 230
  dragThreshold: 0.5
  initialDrag: 10
  tapThreshold: 5
  topLimit: 0.7
  bottomLimit: 0.3

CACHING:
  If cacheOnLoad is true, images will be split and cached on load.
  Set to false if you are splitting images yourself and specifying
  a path to the split images folder. 
  Call flipview.cacheImages() to manually cache images.

CLICKING:
  To handle click events on the dragView, add an event listener for
  "tap" instead of "click", as the latter will disable gestures.
