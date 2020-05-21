 /**
 * @file  Object Rotate 30 Degrees
 * @decription Demonstrates that rotating an object via a script does not add the 'BBAccumRotation' tag.
 * @version  1.0.0  
 * @link https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Object-Tag-Scripts/rotate_30.jsx
 * @author Lisa Burton
 * @license unlicense
 * @example 1) Select 1 and only 1 object. 2) Run 'tags_alert.jsx' to confirm object does not already have 'BBAccumRotation' tag. 3) Run this script. 4) Object will be rotated 30 degrees releative to it's current rotation. 5) Use 'tags_alert.jsx' to confirm 'BBAccumRotation' was NOT added.
 */


// Check for open doucment.
// Check for 1 and only 1 object selected.
if (app.documents.length == 0 ) {
    alert('Open a document to run this script.');
} else if (app.activeDocument.selection.length != 1)  {
    alert('Select 1 and only 1 object to run this script.');
} else {
    RotateObject();
}

function RotateObject() {

    // There is an array of open documents 
    // and this is the active one.
    var iDoc = app.activeDocument;
    // Selected objects are tracked in an array.
    var aObj = iDoc.selection;
    // That array may contain 0, 1, or more objects.
    var nObj = aObj.length;

    // Iterate the selections array and rotate each object.
    for(i = 0; i < nObj; i++) { 
        aObj[i].rotate(30);
    }

}; // Rotate

