 /**
 * @file Randomize Selection
 * @decription Randomly select objects for bulk editing. 
 * @version  1.0.0  
 * @link https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Randomizing-Scripts/RandomizeSelection.jsx
 * @author Lisa Burton
 * @license unlicense
 * @example  Select some objects. Run this script. Enter the maximum percentage of items to randomly select. 
 */


// Check for open document.
// Check for at least 2 objects selected. 
if (app.documents.length == 0 ) {
    NoOpenDoc();
} else if (app.activeDocument.selection.length < 2)  {
    NoSelection();
} else {
    RandomizeSelection();
}


// No open documents
function NoOpenDoc() {

    // Dialog
    var d_noDoc = new Window('dialog'); 
        d_noDoc.text = 'Randomize Selection'; 
        d_noDoc.orientation = 'column'; 
        d_noDoc.alignChildren = ['fill','top']; 
        d_noDoc.spacing = 10; 
        d_noDoc.margins = [8,12,8,16]; 

    // Script description
    var noDoc_desc = d_noDoc.add('group'); 
        noDoc_desc.orientation = 'column'; 
        noDoc_desc.alignChildren = ['left','center']; 
        noDoc_desc.spacing = 0; 

        // IMPORTANT all noDoc_desc must me used
        noDoc_desc.add('statictext', undefined, 'Randomly select objects to bulk edit.'); 

    // Dialog text wrap
    var noDoc_text = d_noDoc.add('group'); 
        noDoc_text.orientation = 'row'; 
        noDoc_text.alignChildren = ['left','center']; 
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


// No selected objects 
function NoSelection() {

    // Dialog
    var d_noSel = new Window('dialog'); 
        d_noSel.text = 'Randomize Selection'; 
        d_noSel.orientation = 'column'; 
        d_noSel.alignChildren = ['fill','top']; 
        d_noSel.spacing = 10; 
        d_noSel.margins = [8,12,8,16]; 

    // Script description
    var noSel_desc = d_noSel.add('group'); 
        noSel_desc.orientation = 'column'; 
        noSel_desc.alignChildren = ['left','center']; 
        noSel_desc.spacing = 0; 

        // IMPORTANT all noSel_desc must me used
        noSel_desc.add('statictext', undefined, 'Randomly select objects to bulk edit.'); 

    // Dialog text wrap
    var noSel_text = d_noSel.add('group'); 
        noSel_text.orientation = 'row'; 
        noSel_text.alignChildren = ['left','center']; 
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


// Randomize selection
function RandomizeSelection() {

    // Document variables  
    var iDoc = app.activeDocument;
    var aObj = iDoc.selection;
    var nObj = aObj.length;

    // Dialog
    var d_main = new Window('dialog'); 
        d_main.text = 'Randomize Selection'; 
        d_main.orientation = 'column'; 
        d_main.alignChildren = ['fill','top']; 
        d_main.spacing = 10; 
        d_main.margins = [8,12,8,16]; 

    // Dialog description
    var main_desc = d_main.add('group'); 
        main_desc.orientation = 'column'; 
        main_desc.alignChildren = ['left','center']; 
        main_desc.spacing = 0; 

        main_desc.add('statictext', undefined, 'Randomly select objects to bulk edit.'); 

    // Max group
    var max_group = d_main.add('group'); 
        max_group.orientation = 'column'; 
        max_group.alignChildren = ['fill','center']; 
        max_group.spacing = 6; 
        max_group.margins = [0,4,0,10]; 

    // Max row
    var max_row = max_group.add('group'); 
        max_row.orientation = 'row'; 
        max_row.alignChildren = ['center','center']; 
        max_row.spacing = 10; 
        max_row.margins = 0; 

    // Max text
    var max_text = max_row.add('statictext', undefined, 'Max percent of objects to select:'); 

    // Max value
    var max_value = max_row.add('edittext {justify: "center"}'); 
        max_value.text = '50'; 
        max_value.preferredSize.width = 40; 
        max_value.helpTip = 'The maximum percent of objects to randomly select.';

    // Max slider
    var max_slider = max_group.add('slider', undefined, 50, 0, 100);    

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

    // Dialog buttons
    var main_btn = d_main.add('group'); 
        main_btn.orientation = 'row'; 
        main_btn.alignChildren = ['left','center']; 
        main_btn.spacing = 140; 
        main_btn.margins = 0; 

    // Run button
    // IMPORTANT must use name:'ok' property here
    var main_btn_run = main_btn.add('button', undefined, 'Randomize', {name: 'ok'}); 
        // IMPORTANT: onClick must come before show()
        main_btn_run.onClick = RandomizeValues;

    // Cancel button
    // IMPORTANT must use name:'canel' property here
    var main_btn_cancel = main_btn.add('button', undefined, 'Cancel', {name: 'cancel'}); 


    // Display dialog
    // IMPORTANT must come afer onClick, addEventListener, etc. 
    d_main.show();


    // Randomize values
    function RandomizeValues() {

        // List variables
        var numRequestedObjects = Math.round(nObj * max_slider.value / 100);
        var nr = new Number;
        var nrList = new Array;
        var modifiedSelection = new Array;
        
        // build up a list of random numbers with list length of numRequestedObjects
        for (k = 0; k < nObj; k++) {
            if (nrList.length >= numRequestedObjects) break;
            nr = Math.floor(Math.random() * nObj);
            if  (!(isContainedByArray (nr, nrList))) nrList.push(nr);
        }

        //alert(scriptID + '\nDebug: nrList.length = ' + nrList.length.toString());
        
        // deselect all...
        iDoc.selection = [];

        // ...then select all objects whose random number index matches
        for (l = 0; l < nrList.length; l++) {
            var idx = nrList[l];
            if (aObj[idx] == undefined) {
                // do nothing;
                //$.writeln('Debug: aObj.length = ' + aObj.length);
                //$.writeln('Debug: aObj[' + idx + '] was undefined');
            } else {
                aObj[idx].selected = true;
            }
        }

        //alert (scriptID + '\nDebug: aObj.length after modification = ' + nObj.toString());

        // Description: Checks if a number 'num' is contained by an array 'arr'
        // ReturnValue: false if num is not contained by arr, true otherwise
        function isContainedByArray(num, arr) {
            var x;
            for (x = 0; x < arr.length; x++) {
                if (arr[x] == num) return true;
            }
            return false;
        };

        // Close dialog
        d_main.exit();  

    }; // 


}; // RandomizeSelection

