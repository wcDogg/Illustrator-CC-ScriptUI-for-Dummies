 /**
 * @file Object Add or Update Tag
 * @decription ScriptUI dialog for adding or updating object tags. 
 * @version  1.0.0  
 * @link https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Object-Tag-Scripts/object_tags_add-update.jsx
 * @author Lisa Burton
 * @license unlicense
 * @example Select 1 object and run this script. Enter a tag name and value. An alert confirms new or updated tag. 
 */


// Check for open doucment.
// Check for 1 and only 1 object selected.
if (app.documents.length == 0 ) {
    alert('Open a document to run this script.');
} else if (app.activeDocument.selection.length != 1)  {
    alert('Select 1 object to run this script.');
} else {
    TagAdd();
}


function TagAdd() {

    // There is an array of open documents 
    // and this is the active one.
    var iDoc = app.activeDocument;
    // Selected objects are tracked in an array.
    var aObj = iDoc.selection;
    // That array may contain 0, 1, or more objects.
    var nObj = aObj.length;

    // Dialog
    var d_main = new Window("dialog"); 
        d_main.text = "Add Custom Tag"; 
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

    // Value group
    var tag_value_group = d_main.add("group"); 
        tag_value_group.orientation = "row"; 
        tag_value_group.alignChildren = ["left","center"]; 
        tag_value_group.spacing = 10; 
        tag_value_group.margins = 0; 

    var tag_value_label = tag_value_group.add("statictext"); 
        tag_value_label.text = "Tag Value"; 
        tag_value_label.preferredSize.width = 60; 

    var tag_value_value = tag_value_group.add('edittext'); 
        tag_value_value.text = "Value here"; 
        tag_value_value.preferredSize.width = 200; 

    // Button group
    var main_btn = d_main.add("group"); 
        main_btn.orientation = "row"; 
        main_btn.alignChildren = ["left","center"]; 
        main_btn.spacing = 20; 
        main_btn.margins = 0; 

    // IMPORTANT must use name:'ok' property.
    var btn_ok = main_btn.add("button", undefined, 'Add Tag', {name: "ok"}); 
        // Handle click
        btn_ok.onClick = TagAddUpdate;

    // IMPORTANT must use name:'cancel' property - no onClick needed. 
    var btn_cancel = main_btn.add("button", undefined, 'Cancel', {name: "cancel"}); 

    // Display dialog
    d_main.show();

    // Does this object have a tag named 'BBAccumRotation'
    // Could be any baked-in or custom tag name
    function TagAddUpdate() {

        // We know this selection only has 1 object,
        // but we still need to iterate the selected array. 
        for(i = 0; i < nObj; i++) {

            // There is an object
            var obj = aObj[i];
            // It has an arry where tags are stored
            var aTags = obj.tags;
            // The array may or may not contain tags
            var nTags = obj.tags.length;

            // Values from the dialog are: 
            var tName = tag_name_value.text;
            var tVal = tag_value_value.text;
            
            // Try for tag name and update. Or add new.
            // getByName thows error when name does not exist,
            // so we use try catch. 
            try {    

                obj.tags.getByName(tName); 
                tag.value = tVal;
                
                // alert('Found: ' + tName);

            }
            catch(e){

                // alert('Not found: ' + tName);

                var tNew = obj.tags.add();
                    tNew.name = tName;
                    tNew.value = tVal;  
                
                alert(tNew.name + ' ' + tNew.value);

                d_main.close();
                                    
            } // try

        } // for

    }; // ObjTags

}; // TagAdd
