 /**
 * @file Object Remove Tag
 * @decription ScriptUI dialog for removing object tags.
 * @version  1.0.0  
 * @link https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Object-Tag-Scripts/object_tags_remove.jsx
 * @author Lisa Burton
 * @license unlicense
 * @example Select 1 object and run this script. Enter a tag name An alert confirms tag existed and that it was removed. 
 */


// Check for open doucment.
// Check for 1 and only 1 object selected.
if (app.documents.length == 0 ) {
    alert('Open a document to run this script.');
} else if (app.activeDocument.selection.length != 1)  {
    alert('Select 1 object to run this script.');
} else {
    TagRemove();
}


function TagRemove() {

    // There is an array of open documents 
    // and this is the active one.
    var iDoc = app.activeDocument;
    // Selected objects are tracked in an array.
    var aObj = iDoc.selection;
    // That array may contain 0, 1, or more objects.
    var nObj = aObj.length;

    // Dialog
    var d_main = new Window("dialog"); 
        d_main.text = "Remove Object Tag"; 
        d_main.orientation = "column"; 
        d_main.alignChildren = ["fill","top"]; 
        d_main.spacing = 10; 
        d_main.margins = [8,12,8,16]; 

    // Name group
    var tag_name_group = d_main.add("group"); 
        tag_name_group.orientation = "row"; 
        tag_name_group.alignChildren = ["left","center"]; 
        tag_name_group.spacing = 10; 
        tag_name_group.margins = 0; 

    var tag_name_lable = tag_name_group.add("statictext"); 
        tag_name_lable.text = "Tag Name"; 
        tag_name_lable.preferredSize.width = 60; 

    var tag_name_value = tag_name_group.add('edittext'); 
        tag_name_value.text = "CustomTag"; 
        tag_name_value.preferredSize.width = 200; 

    // Button group
    var main_btn = d_main.add("group"); 
        main_btn.orientation = "row"; 
        main_btn.alignChildren = ["left","center"]; 
        main_btn.spacing = 20; 
        main_btn.margins = 0; 

    // IMPORTANT must use name:'ok' property.
    var btn_ok = main_btn.add("button", undefined, 'Remove Tag', {name: "ok"}); 
        // Handle click
        btn_ok.onClick = RemoveTag;

    // IMPORTANT must use name:'cancel' property - no onClick needed. 
    var btn_cancel = main_btn.add("button", undefined, 'Cancel', {name: "cancel"}); 

    // Display dialog
    d_main.show();


    function RemoveTag() {

        // We know this selection only has 1 object,
        // but we still need to iterate the selected array. 
        for(i = 0; i < nObj; i++) {

            // There is an object.
            var obj = aObj[i];

            // It has an arry where tags are stored.
            var aTags = obj.tags;

            // The array may or may not contain tags.
            var nTags = obj.tags.length;

            // Values from the dialog is: 
            var tName = tag_name_value.text;

            // Check for tags, iterate, and remove.
            if (nTags == 0) {

                alert('No tags to remove.');

            } else {

                for(i = 0; i < nTags; i++) {

                    // There is a tag.
                    var iTag = aTags[0];

                    if (iTag.name == tName) {

                        iTag.remove();
                        
                        alert('Removed: ' + tName);

                    } // if

                }// for

            } // if

        } // for

        // Close dialog
        d_main.close();

    }; // ObjTags

}; // TagRemove

