# Adobe Illustrator CC Object Tag Scripts
 

## Resorces

* [Illustrator CC Scripting Guide > Tag](https://illustrator-scripting-guide.readthedocs.io/jsobjref/Tag/#tag)
* [Illustrator CC Scripting Guide > Tags](https://illustrator-scripting-guide.readthedocs.io/jsobjref/Tags/#tags)
* Vasily Hall: [Adobe Illustrator Variable Data​: dealing with overset text.](https://www.linkedin.com/pulse/adobe-illustrator-variable-data-dealing-overset-text-vasily-hall)


## Add or Update an Object Tag

[object_tags_add-update.jsx](https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Object-Tag-Scripts/object_tags_add-update.jsx)

A ScriptUI dialog for adding or updating custom object tags. 

* Iterate object `.selection`
* `try` + `catch` for `.tags.getByName`
* `.tags.add()` or update `.tag.value` as needed

Caveat is that `getByName` only gets first instance of a tag name. If you've previously added tags without first checking if they exist - as this script does - then there could be duplicate tag names - something we never want.


## Display an Object's Tags as an Alert

[object_tags_alert.jsx](https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Object-Tag-Scripts/object_tags_alert.jsx)

Select an object an run this script to see an object's tags displayed as alerts. 

* Iterate object `.selection`
* Iterate an object's `.tags`
* Alert if none found. Alert for each if found.


## Remove an Object Tag by Name

[object_tags_remove.jsx](https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Object-Tag-Scripts/object_tags_remove.jsx)

A ScriptUI dialog to remove an object's tag using a tag name. 

* Iterate object `.selection`
* Iterate an object's `.tags`
* Conditionally check for `.tag.name` match
* `.tag.remove()` if found


## Display an Object's Tags in a New Document

[object_tags_report.jsx](https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Object-Tag-Scripts/object_tags_report.jsx)

Select an object an run this script to see an object's tags displayed as alerts. Taken from the Illustrator scripting guide and updated so it does not add a temporary tag. 

* Iterate object `.selection`
* Iterate an object's `.tags`
* `app.documents.add()` a new document
* `.textFrames.add()` tag info to doc


## Rotate an Object 30 Degrees

[rotate_30.jsx](https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Object-Tag-Scripts/rotate_30.jsx)

A test script for demonstrating that rotating an object using `.rotate()` does not add the `BBAccumRotation` tag as you might expect. 


## Object Rotation

* [Illustrator CC Scripting Guide > Rotate](https://illustrator-scripting-guide.readthedocs.io/jsobjref/PageItem/?highlight=rotate#pageitem-rotate)
* Adobe Support Community: [How to get the angle of an object?](https://community.adobe.com/t5/illustrator/how-to-get-the-angle-of-an-object/td-p/8803169?page=1)

Illustrator uses the `BBAccumRotation` to track an object's rotation in radians `0.51246700`.

`BBAccumRotation` **IS** set if object:

* Is currently rotated - radians = walue of rotation.
* Was previously rotated and is currently at 0 degrees - radians = 0.000000.
* Is rotated via Object > Transform > Rotate
* Is rotated via Properties panel > Rotate

`BBAccumRotation` **IS NOT** set if object:

* Was rotated via a script such as `rotate_30.jsx` in this folder. 
* Is rotated via live Effects > Distort & Transform > Transform > Rotate
* Was rotated with a live effect and expanded
