FLIPIUM
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
* cacheOnLoad: By set to true, Flipium will crop and cache your images into flippable pages and save them in the ApplicationDataDirectory. If set to false, Flipium will expect each page to already be separated into two equally-sized images, with filenames in the format: "img_1_t.png" and "img_1_b.png" for top-bottom flipping, or "img_1_l.png" and "img_1_r.png" for left-right flipping (default = false)
* distance: A number specifying the distance for the 3D animation. No meaningful units (default = 1000)

createFlipView also accepts the normal properties passed in Ti.UI.createView(), such as width and height.


DragView Configuration
----------------------

The following properties can be passed as a single object to the createDragView() function:

* dragDistance: The distance in pixels/points the user has to drag to manually flip a page (default = 230)
* dragThreshold: After manually flipping a page past this percentage, the page will continue to flip over (default = 0.5)
* initialDrag: The minimum distance in pixels/points the user has to drag before the page starts manually flipping (default = 10)
* tapThreshold: The maximum (accidental) distance in pixels/points the user can drag in order for the gesture to be considered a tap (default = 5)
* topLimit: When the user tries to flip to a previous page but is at the start limit, the page will stop flipping at this percentage (default = 0.7)
* bottomLimit: When the user tries to flip to a next page but is at the end limit, the page will stop flipping at this percentage (default = 0.3)

createDragView also accepts the normal properties passed in Ti.UI.createView(), such as width and height.

Caching
-------
If cacheOnLoad is true, images will be split and cached on load. Set to false if you are splitting images yourself and specifying a path to the split images folder. Call flipview.cacheImages() to manually cache images.

Clicking
--------
To handle click events on the dragView, add an event listener for "tap" instead of "click", as the latter will disable gestures.

Supported Platforms
-------------------
Flipium has been tested on iOS 5.0 simulator and device, and Android 2.2 emulator but not device.

