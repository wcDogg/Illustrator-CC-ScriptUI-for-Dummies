 /**
 * @file Object Tag Report
 * @decription Determine if an object has tags and report them in a new document. 
 * @version  1.0.0  
 * @link https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Object-Tag-Scripts/object_tags_report.jsx
 * @author Lisa Burton
 * @license unlicense
 * @example Select 1 object and run this script. If the object has no tags, an alert is given. If the object does have tags, a report opens in a new doucment. 
 */


// Check for open doucment.
// Check for 1 and only 1 object selected.
if (app.documents.length == 0 ) {
    alert('Open a document to run this script.');
} else if (app.activeDocument.selection.length != 1)  {
    alert('Select 1 object to run this script.');
} else {
    TagReport();
}


function TagReport() {

    // There is an arry of open documents in
    // and this is the active one.
    var iDoc = app.activeDocument;
    // Selected objects are tracked in an array.
    var aObj = iDoc.selection;
    // That array contains 0, 1, or more objects,
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
        // Else report.
        if (nTags == 0) {

            alert('No tags.')

        } else {

            // Create a document and add a new line 
            // for each tag with its name and value.
            var reportDocument = app.documents.add();
            var top_offset = 400;

            for ( i = 0; i < nTags; i++ ) {

                var tagName = aTags[i].name;
                var tagVal = aTags[i].value;

                var newItem = reportDocument.textFrames.add();
                    newItem.contents = "Tag: (" + tagName + " , " + tagVal + ")";
                    newItem.position = Array(100, top_offset);
                    newItem.textRange.size = 24;

                top_offset = top_offset - 20;

            } // for

        } // if

    } // for

}; // TagReport

