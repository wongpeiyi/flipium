// ========================================================================= //
//   EXAMPLE APP                                                             //
// ========================================================================= //

var Flipium = require("flipium");

fv = Flipium.createFlipView({
  images: ["1.png", "2.png", "3.png"],
  horizontal: false,
  path: "/example/",
  cacheOnLoad: true,
  duration: 500,
  height: 460  
});

dv = Flipium.createDragView(fv);

win = Ti.UI.createWindow({
  backgroundColor: "#fff",
  backgroundImage: "bg.jpg",
  navBarHidden: true  
})

win.add(fv);
win.add(dv);
win.open();
