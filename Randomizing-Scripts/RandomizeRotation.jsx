 /**
 * @file Randomize Rotation
 * @decription Randomly rotate selected objects. Alternatively, rotate objects by a given degree.
 * @version  1.0.0  
 * @link https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Randomizing-Scripts/RandomizeRotation.jsx
 * @author Lisa Burton
 * @license unlicense
 * @example Select some objects. Run this script. Follow the prompts. 
 */


// Check for open document.
// Check for at least 2 objects selected.
if (app.documents.length == 0 ) {
    NoOpenDoc();
} else if (app.activeDocument.selection.length < 2)  {
    NoSelection();
} else {
    RandomizeRotation();
}


function NoOpenDoc() {

    // Dialog
    var d_noDoc = new Window('dialog'); 
        d_noDoc.text = 'Randomize Rotation'; 
        d_noDoc.orientation = 'column'; 
        d_noDoc.alignChildren = ['fill','top']; 
        d_noDoc.spacing = 10; 
        d_noDoc.margins = [8,12,8,16]; 

    // Script description
    var noDoc_desc = d_noDoc.add('group'); 
        noDoc_desc.orientation = 'column'; 
        noDoc_desc.alignChildren = ['left',"center"]; 
        noDoc_desc.spacing = 0; 

        // IMPORTANT all noDoc_desc must me used
        noDoc_desc.add('statictext', undefined, 'Randomly rotate objects using a range. ', {name: 'noDoc_desc'}); 
        noDoc_desc.add('statictext', undefined, 'Also lets you rotate objects by a given number of degrees.', {name: 'noDoc_desc'}); 

    // Dialog text wrap
    var noDoc_text = d_noDoc.add('group'); 
        noDoc_text.orientation = 'row'; 
        noDoc_text.alignChildren = ['left',"center"]; 
        noDoc_text.spacing = 10; 
        noDoc_text.margins = [0,4,0,10]; 

    // Dialog text
    var noDoc_text_01 = noDoc_text.add('statictext', undefined, 'Open a document to run this script.'); 

    // Dialog button
    // IMPORTANT must use name:'ok' proerty here
    var noDoc_btn = d_noDoc.add('button', undefined, 'Got it!', {name: 'ok'}); 
        noDoc_btn.alignment = ['left','top']; 


    // Show dialog
    d_noDoc.show();

}; // NoOpenDoc


function NoSelection() {

    // Dialog
    var d_noSel = new Window('dialog'); 
        d_noSel.text = 'Randomize Rotation'; 
        d_noSel.orientation = 'column'; 
        d_noSel.alignChildren = ['fill','top']; 
        d_noSel.spacing = 10; 
        d_noSel.margins = [8,12,8,16]; 

    // Script description
    var noSel_desc = d_noSel.add('group'); 
        noSel_desc.orientation = 'column'; 
        noSel_desc.alignChildren = ['left',"center"]; 
        noSel_desc.spacing = 0; 

        // IMPORTANT all noSel_desc must me used
        noSel_desc.add('statictext', undefined, 'Randomly rotate objects using a range. ', {name: 'noSel_desc'}); 
        noSel_desc.add('statictext', undefined, 'Also lets you rotate objects by a given number of degrees.', {name: 'noSel_desc'}); 

    // Dialog text wrap
    var noSel_text = d_noSel.add('group'); 
        noSel_text.orientation = 'row'; 
        noSel_text.alignChildren = ['left',"center"]; 
        noSel_text.spacing = 10; 
        noSel_text.margins = [0,4,0,10]; 

    // Dialog text
    var noSel_text_01 = noSel_text.add('statictext', undefined, 'Select some objects to run this script.'); 

    // Dialog button
    // IMPORTANT must use name:'ok' proerty here
    var noSel_btn = d_noSel.add('button', undefined, 'Got it!', {name: 'ok'}); 
        noSel_btn.alignment = ['left','top']; 


    // Show dialog
    d_noSel.show();

}; // NoSelection    


function RandomizeRotation() {

    // Document variables  
    var iDoc = app.activeDocument;
    var aObj = iDoc.selection;
    var nObj = aObj.length;
    

    // Dialog
    var d_main = new Window('dialog'); 
        d_main.text = 'Randomize Rotation'; 
        d_main.orientation = 'column'; 
        d_main.alignChildren = ['fill','top']; 
        d_main.spacing = 10; 
        d_main.margins = [8,16,8,16]; 

    //
    // Rotate Panel
    //
    var rot_panel = d_main.add('panel'); 
        rot_panel.text = 'Rotate'; 
        rot_panel.orientation = 'column'; 
        rot_panel.alignChildren = ['left','top']; 
        rot_panel.spacing = 10; 
        rot_panel.margins = [10,14,10,14]; 

    // Rotate group
    var rot_group = rot_panel.add('group'); 
        rot_group.orientation = 'row'; 
        rot_group.alignChildren = ['left',"center"]; 
        rot_group.spacing = 6; 
        rot_group.margins = 0; 

    // Rotate text
    var rot_text = rot_group.add('statictext', undefined, 'Rotate selected objects:'); 

    // Rotate value (angle to rotate by)
    var rot_value = rot_group.add('edittext {justify: "center", properties: {enterKeySignalsOnChange: true}}'); 
        rot_value.text = '360'; 
        rot_value.preferredSize.width = 40; 
        rot_value.helpTip = 'Rotate selected objects by this number of degrees';

    // Handle text
    rot_value.onChanging = function () { 
        if (isNaN(rot_value.text)) { rot_value.text = 50; } 
        if (rot_value.text < 0) { rot_value.text = 0; }
        if (rot_value.text > 100) { rot_value.text = 100;}
        rot_value.text = Math.round(rot_value.text); 
    };    

    // Rotate button
    var rot_btn = rot_panel.add('button', undefined, 'Rotate'); 
        rot_btn.onClick = RotateTo;
    
    // Rotate
    function RotateTo() {

        for(i=0; i<nObj; i++) {

            // Check for current rotation and reset to 0
            // if(aObj[i].tags.length > 0 && aObj[i].tags[0].name == 'BBAccumRotation'){
            //     var radians_current = aObj[i].tags[0].value;
            //     var angle_current = 180 * radians_current / Math.PI;  
            //     aObj[i].rotate(360 - angle_current);
            //     alert(angle_current + ' ' + radians_current); 
            // } else {
            //     alert('No rotation.');
            // }

            // Rotate
            aObj[i].rotate(rot_value.text);

        } 

        d_main.close(); 

    }; // RotateTo

    //
    // Randomize Panel
    //     
    var rand_panel = d_main.add('panel'); 
        rand_panel.text = 'Randomize'; 
        rand_panel.orientation = 'column'; 
        rand_panel.alignChildren = ['fill','top']; 
        rand_panel.spacing = 10; 
        rand_panel.margins = [10,14,10,14]; 

    // Randomize row
    var rand_row = rand_panel.add('group'); 
        rand_row.orientation = 'row'; 
        rand_row.alignChildren = ['left',"center"]; 
        rand_row.spacing = 10; 
        rand_row.margins = 0; 

    //
    // Counterclockwise
    // CCW = Maximum positive angle = Max for rand
    //
    var ccw_group = rand_row.add('group'); 
        ccw_group.preferredSize.width = 180; 
        ccw_group.orientation = 'column'; 
        ccw_group.alignChildren = ['fill',"center"]; 
        ccw_group.spacing = 10; 
        ccw_group.margins = 0; 

    // CCW row
    var ccw_row = ccw_group.add('group'); 
        ccw_row.orientation = 'row'; 
        ccw_row.alignChildren = ['left',"center"]; 
        ccw_row.spacing = 10; 
        ccw_row.margins = 0; 

    // CCW text
    var ccw_text = ccw_row.add('statictext', undefined, 'Max Counterclockwise'); 

    // CCW value
    var ccw_value = ccw_row.add('edittext {justify: "center", properties: {enterKeySignalsOnChange: true}}'); 
        ccw_value.text = '180'; 
        ccw_value.preferredSize.width = 40; 
        ccw_value.helpTip = 'The maximum number of degrees to rotate counterclockwise';

    // CCW Slider
    var ccw_slider = ccw_group.add('slider', undefined, 180, 0, 180); 
        ccw_slider.helpTip = 'The maximum number of degrees to rotate counterclockwise';

    // Sync CCW slider to text
    ccw_slider.onChanging = function () { 
        ccw_value.text = Math.round(ccw_slider.value); 
    };

    // Sync CCW text to slider
    ccw_value.onChanging = function () { 
        if (isNaN(ccw_value.text)) { ccw_value.text = 50; } 
        if (ccw_value.text < 0) { ccw_value.text = 0; }
        if (ccw_value.text > 100) { ccw_value.text = 100;}
        ccw_slider.value = Math.round(ccw_value.text); 
    }; 

    // div
    var div = rand_row.add('panel'); 
        div.alignment = 'fill'; 

    //
    // Clockwise
    // CW = Maximum negative angle = Min for rand (* -1)
    //
    var cw_group = rand_row.add('group'); 
        cw_group.preferredSize.width = 180; 
        cw_group.orientation = 'column'; 
        cw_group.alignChildren = ['fill',"center"]; 
        cw_group.spacing = 10; 
        cw_group.margins = 0; 

    // CW row
    var cw_row = cw_group.add('group'); 
        cw_row.orientation = 'row'; 
        cw_row.alignChildren = ['left',"center"]; 
        cw_row.spacing = 10; 
        cw_row.margins = 0; 

    // CW text
    var cw_text = cw_row.add('statictext', undefined, 'Max Clockwise'); 

    // CW value
    var cw_value = cw_row.add('edittext {justify: "center", properties: {enterKeySignalsOnChange: true}}'); 
        cw_value.text = '180'; 
        cw_value.preferredSize.width = 40; 
        cw_value.helpTip = 'The maximum number of degrees to rotate clockwise.';

    // CW slider
    var cw_slider = cw_group.add('slider', undefined, 180, 0, 180);
        cw_slider.helpTip = 'The maximum number of degrees to rotate clockwise'; 

    // Sync CW slider to text
    cw_slider.onChanging = function () { 
        cw_value.text = Math.round(cw_slider.value); 
    };   

    // Sync CW text to slider
    cw_value.onChanging = function () { 
        if (isNaN(cw_value.text)) { cw_value.text = 50; } 
        if (cw_value.text < 0) { cw_value.text = 0; }
        if (cw_value.text > 100) { cw_value.text = 100;}
        cw_slider.value = Math.round(cw_value.text); 
    };   

    // Randomize button
    var rand_btn = rand_panel.add('button', undefined, 'Randomize'); 
        rand_btn.alignment = ['left','top']; 
        rand_btn.onClick = RandomizeValues;

    // Dialog cancel button
    // IMPORTANT must use name:'cancel' property here
    var d_btn_canel = d_main.add('button', undefined, 'Cancel', {name: 'cancel'}); 
        d_btn_canel.alignment = ['right','top']; 

    // Display dialog
    // IMPORTANT must come after onClick / addEventListener
    d_main.show();


    // Randomize values
    function RandomizeValues() {
        // alert('Randomize ran'); 

        for(i=0; i<nObj; i++) {

            // Check for current rotation and reset to 0
            if(aObj[i].tags.length > 0 && aObj[i].tags[0].name == 'BBAccumRotation'){
                var angle_current = 180 *aObj[i].tags[0].value/Math.PI;               
                aObj[i].rotate(360 - angle_current);
                // alert(angle_current); 
            } 

            // clockwize = maximum negative angle (* -1) = min for rand
            var min =  Math.ceil(cw_slider.value * (-1));
            // counterclockwize = maximum positive angle = max for rand
            var max =  Math.floor(ccw_slider.value);
            // new random angle
            var angle_random = Math.floor(Math.random() * (max - min + 1)) + min;

            // Rotate
            aObj[i].rotate(angle_random);

            // alert(angle_random);
        } 

        d_main.close(); 

    }; // RandomizeValues


}; // MainFunct

