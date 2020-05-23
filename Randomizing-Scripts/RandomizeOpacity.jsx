 /**
 * @file Smart Opacity
 * @decription Set the opacity of objects. Randomize the opacity of objects.
 * @version  1.0.0  
 * @link https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Randomizing-Scripts/RandomizeOpacity.jsx
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
    RandomizeOpacity();
}


function NoOpenDoc() {

    // Dialog
    var d_noDoc = new Window('dialog'); 
        d_noDoc.text = 'Randomize Opacity'; 
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
        noDoc_desc.add('statictext', undefined, 'Randomize the opacity of objects using a range. '); 
        noDoc_desc.add('statictext', undefined, 'Also lets you set the opacity of object to a given percent.'); 

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

}; // NoOpendoc


function NoSelection() {

    // Dialog
    var d_noSel = new Window('dialog'); 
        d_noSel.text = 'Randomize Opacity'; 
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
        noSel_desc.add('statictext', undefined, 'Randomize the opacity of objects using a range. '); 
        noSel_desc.add('statictext', undefined, 'Also lets you set the opacity of objects to a given percent.'); 

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


function RandomizeOpacity() {

    // Document variables  
    var iDoc = app.activeDocument;
    var aObj = iDoc.selection;
    var nObj = aObj.length;


    // Dialog
    var d_main = new Window('dialog'); 
        d_main.text = 'Randomize Opacity'; 
        d_main.orientation = 'column'; 
        d_main.alignChildren = ['fill','top']; 
        d_main.spacing = 10; 
        d_main.margins = [8,16,8,16]; 

    //
    // Opacity Panel
    //
    var opac_panel = d_main.add('panel'); 
        opac_panel.text = 'Rotate'; 
        opac_panel.orientation = 'column'; 
        opac_panel.alignChildren = ['left','top']; 
        opac_panel.spacing = 10; 
        opac_panel.margins = [10,14,10,14]; 

    // Opacity group
    var opac_group = opac_panel.add('group'); 
        opac_group.orientation = 'row'; 
        opac_group.alignChildren = ['left',"center"]; 
        opac_group.spacing = 6; 
        opac_group.margins = 0; 

    // Opacity text
    var opac_text = opac_group.add('statictext', undefined, 'Set opacity for selected objects to:'); 

    // Opacity value (new percent)
    var opac_value = opac_group.add('edittext {justify: "center", properties: {enterKeySignalsOnChange: true}}'); 
        opac_value.text = '100'; 
        opac_value.preferredSize.width = 40; 
        opac_value.helpTip = 'Opacity percent to apply to all selected objects.';

    // Handle text
    opac_value.onChanging = function () { 
        if (isNaN(opac_value.text)) { opac_value.text = 50; } 
        if (opac_value.text < 0) { opac_value.text = 0; }
        if (opac_value.text > 100) { opac_value.text = 100;}
        opac_value.text = Math.round(opac_value.text); 
    };    

    // Opaciy button
    // IMPORTANT must use name:'ok' property here.
    var opac_btn = opac_panel.add('button', undefined, 'Opacity'); 

    // Handle button
    opac_btn.onClick = SetOpacity;

    // Set opacity
    function SetOpacity() {
        // alert('Set Opacity ran');

        // Iterate and set
        for(i = 0; i < nObj; i++) {
            aObj[i].opacity = opac_value.text;
        }

        // Close dialog
        d_main.close();       

    }; // SetOpacity

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
    // Min opacity
    //
    var min_group = rand_row.add('group'); 
        min_group.preferredSize.width = 180; 
        min_group.orientation = 'column'; 
        min_group.alignChildren = ['fill',"center"]; 
        min_group.spacing = 10; 
        min_group.margins = 0; 

    // Min row
    var min_row = min_group.add('group'); 
        min_row.orientation = 'row'; 
        min_row.alignChildren = ['left',"center"]; 
        min_row.spacing = 10; 
        min_row.margins = 0; 

    // Min text
    var min_text = min_row.add('statictext', undefined, 'Minimum Opacity'); 

    // Min value
    var min_value = min_row.add('edittext {justify: "center", properties: {enterKeySignalsOnChange: true}}'); 
        min_value.text = '0'; 
        min_value.preferredSize.width = 40; 
        min_value.helpTip = 'The lowest opacity percent an object can have';

    // Min Slider
    var min_slider = min_group.add('slider', undefined, 0, 0, 100); 
        min_slider.helpTip = 'The lowest opacity percent an object can have.';

    // Sync Min slider to text
    min_slider.onChanging = function () { 
        min_value.text = Math.round(min_slider.value); 
    };

    // Sync Min text to slider
    min_value.onChanging = function () { 
        if (isNaN(min_value.text)) { min_value.text = 50; } 
        if (min_value.text < 0) { min_value.text = 0; }
        if (min_value.text > 100) { min_value.text = 100;}
        min_slider.value = Math.round(min_value.text); 
    }; 

    // div
    var div = rand_row.add('panel'); 
        div.alignment = 'fill'; 

    //
    // Maximum opacity
    //
    var max_group = rand_row.add('group'); 
        max_group.preferredSize.width = 180; 
        max_group.orientation = 'column'; 
        max_group.alignChildren = ['fill',"center"]; 
        max_group.spacing = 10; 
        max_group.margins = 0; 

    // Max row
    var max_row = max_group.add('group'); 
        max_row.orientation = 'row'; 
        max_row.alignChildren = ['left',"center"]; 
        max_row.spacing = 10; 
        max_row.margins = 0; 

    // Max text
    var max_text = max_row.add('statictext', undefined, 'Maximum Opacity'); 

    // Max value
    var max_value = max_row.add('edittext {justify: "center", properties: {enterKeySignalsOnChange: true}}'); 
        max_value.text = '100'; 
        max_value.preferredSize.width = 40; 
        max_value.helpTip = 'The maximum opacity percent an object can have.';

    // Max slider
    var max_slider = max_group.add('slider', undefined, 100, 0, 100); 
        max_slider.helpTip = 'The maximum opacity percent an object can have.';

    // Sync Max slider to text
    max_slider.onChanging = function () { 
        max_value.text = Math.round(max_slider.value); 
    };   

    // Sync Max text to slider
    max_value.onChanging = function () { 
        if (isNaN(max_value.text)) { max_value.text = 50; } 
        if (max_value.text < 0) { max_value.text = 0; }
        if (max_value.text > 100) { max_value.text = 100;}
        max_slider.value = Math.round(max_value.text); 
    };     

    // Randomize button
    // IMPORTANT must use name:'ok' property here
    var rand_btn = rand_panel.add('button', undefined, 'Randomize'); 
        rand_btn.alignment = ['left','top']; 

    // Handle randomize button
    rand_btn.onClick = RandomizeValues;

    // Randomize values
    function RandomizeValues() {
        // alert('Randomize ran');

        // Fix Min > Max
        if (min_slider.value > max_slider.value) {
            temp = min_slider.value;
            min_slider.value = max_slider.value;
            max_slider.value = temp;
        }
        // Iterate and randomize
        for(i=0; i<nObj; i++) {
            var min =  Math.ceil(min_slider.value);
            var max =  Math.floor(max_slider.value);

            aObj[i].opacity = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // Close dialog
        d_main.close();

    }; // 

    // Dialog cancel button
    // IMPORTANT must use name:'cancel' property here
    var d_btn_canel = d_main.add('button', undefined, 'Cancel', {name: 'cancel'}); 
        d_btn_canel.alignment = ['right','top']; 

    // Display dialog
    // IMPORTANT must come after onClick / addEventListener
    d_main.show();


}; // RandomizeOpacity

