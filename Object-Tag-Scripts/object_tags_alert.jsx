 /**
 * @file Object Tag Alert
 * @decription Determine if an object has tags and display each one as an alert. 
 * @version  1.0.0  
 * @link https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Object-Tag-Scripts/object_tags_alert.jsx
 * @author Lisa Burton
 * @license unlicense
 * @example Select 1 object and run this script. An alert is displayed if no tags and for each tag. 
 */


// Check for open doucment.
// Check for 1 and only 1 object selected.
if (app.documents.length == 0 ) {
    alert('Open a document to run this script.');
} else if (app.activeDocument.selection.length != 1)  {
    alert('Select 1 object to run this script.');
} else {
    TagAlert();
}


function TagAlert() {

    // There is an array of open documents 
    // and this is the active one.
    var iDoc = app.activeDocument;
    // Selected objects are tracked in an array.
    var aObj = iDoc.selection;
    // That array may contain 0, 1, or more objects.
    var nObj = aObj.length;

    // We know this selection has only 1 object,
    // but we still need to iterate the selection array. 
    for ( i = 0; i < nObj; i++ ) {

        // There is an object.
        var obj = selection[0];
        // It has an array for storing tags.
        var aTags = obj.tags;
        // The array can have 0, 1, or more tags.
        var nTags = aTags.length;

        // If object has no tags, alert.
        // Else iterate and alert for each tag.
        if (nTags == 0) {

            alert('No tags.')

        } else {

            // Iterate tags
            for ( i = 0; i < nObj; i++ ) {
                
                // There is an object.
                var obj = aObj[0];
                // It has an array where tags are stored.
                var aTags = obj.tags;
                // It may or may not have tags in it
                // though we know it does.
                var nTags = aTags.length;

                // Iterate tags and alert for each.
                for ( i = 0; i < nTags; i++ ) {

                    tagName = aTags[i].name;
                    tagVal = aTags[i].value;

                    alert(tagName + ' ' + tagVal);

                } // for

            } // for

        } // if

    } // for

}; // TagAlert

