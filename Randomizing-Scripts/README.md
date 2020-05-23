# Illustrator CC Randomizing Scripts

A collection of object randomizing scripts that include a few extra tools for opacity, scale, and rotation. 

## Randomize Color

[RandomizeColor.jsx](https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Randomizing-Scripts/RandomizeColor.jsx)

Randomly recolor selected objects using a color group or swatches. 

## Randomize Opacity

[RandomizeOpacity.jsx](https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Randomizing-Scripts/RandomizeOpacity.jsx)

This script does 2 things:

* Set the opacity of selected objects using a given percent.
* Randomize the opacity of objects using a min and max percent. 

Randomizing: 

* Depending on the range set and an object's origianl opacity, changes can happen in both directions - an 80% object could become 42% or 97%. 
* This script can make 0% objects - and it often does. 
* It can also make 100% objects - but it usually doesn't. 


## Randomize Object Order

[RandomizeObjectOrder.jsx](https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Randomizing-Scripts/RandomizeOrder.jsx)

Randomly change the stacking order of selected objects in the Layers panel.

* Objects remain at their current XY coordinate.
* Objects on multiple layers remain on their current layer. 


## Randomize Rotation

[RandomizeRotation.jsx](https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Randomizing-Scripts/RandomizeRotation.jsx)

This script does 2 things: 

* Rotate selected objects a given number of degrees.
* Randomly rotate objects use maximum clockwise and counterclockwise angles. 

Rotation: 

* Objects rotate around their center points so they stay in place. 
* Objects rotate relative to their current rotation.
* Objects rotated with this script DO NOT have a `BBAccumRotation` tag - In other words, objects aren't rotated in the same way as using a handle or the Properties panel. Instead, objects are moved into their new postions as if via a live effect and will have an angle of 0 degrees.  

## Randomize Scale

[RandomizeScale.jsx](https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Randomizing-Scripts/RandomizeScale.jsx)

This script can do several things:

* Proportionately scale selected objects to a given width in pixels. 
* Proportionately scale selected objects to a given height in points.
* Proportionately scale selected objects using a scaling factor / percent. 
* Randomize the scale of objects both proportionately and disproportionately. 


## Randomize Selection

[RandomizeSelection.jsx](https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Randomizing-Scripts/RandomizeSelection.jsx)

Randomly select objects to bulk edit using a maximum percent. 

* Script works best up to about 80% - if you enter 50, close to 50% of objects will be selected.
* Once you go above 80%, aboout 60% - 80% of objects will be selected. This is the nature of randomization. 


## Compatibility

* Scripts are written in JSX and work for Widnows and Mac.
* Scripts were tested in Adobe Illustrator CC 2020. 
* Scripts should be backwards compatible to CS6 - though I haven't tested this. 
