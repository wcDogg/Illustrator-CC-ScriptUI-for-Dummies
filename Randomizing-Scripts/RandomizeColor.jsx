 /**
 * @file Randomize Color
 * @decription Randomly recolor objects using a color group or swatches.  
 * @version  1.0.0  
 * @link https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Randomizing-Scripts/RandomizeColor.jsx
 * @author Lisa Burton
 * @license unlicense
 * @example Select some ungrouped objects. Select a color group. Alternatively, press and hold CTRL to select individual swatches. Run this script.
 */


// Check for open document.
// Check for at least 2 objects selected.
if (app.documents.length == 0 ) {
    NoOpenDoc();
} else if (app.activeDocument.selection.length < 2 || app.activeDocument.swatches.getSelected().length < 2 )  {
    NoSelection();
} else {
    RandomizeColor();
}


// No open documents
function NoOpenDoc() {

    // Dialog
    var d_noDoc = new Window('dialog'); 
        d_noDoc.text = 'Randomize Color'; 
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
        noDoc_desc.add('statictext', undefined, 'Randomly recolor objects using ', {name: 'noDoc_desc'}); 
        noDoc_desc.add('statictext', undefined, 'a color group or swatches.', {name: 'noDoc_desc'}); 

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


function NoSelection() {

    // Dialog
    var d_noSel = new Window('dialog'); 
        d_noSel.text = 'Randomize Color'; 
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
        noSel_desc.add('statictext', undefined, 'Randomly recolor objects using ', {name: 'noSel_desc'}); 
        noSel_desc.add('statictext', undefined, 'a color group or swatches.', {name: 'noSel_desc'}); 

    // Dialog text wrap
    var noSel_text = d_noSel.add('group'); 
        noSel_text.orientation = 'column'; 
        noSel_text.alignChildren = ['left','center']; 
        noSel_text.spacing = 10; 
        noSel_text.margins = [0,4,0,10]; 

    // Dialog text
    var noSel_text_01 = noSel_text.add('statictext', undefined, 'Select some objects.'); 
    var noSel_text_02 = noSel_text.add('statictext', undefined, 'Select a color group.'); 
    var noSel_text_03 = noSel_text.add('statictext', undefined, 'Or press & hold CTRL to select swatches.'); 
    var noSel_text_04 = noSel_text.add('statictext', undefined, 'Then run this script.'); 

    // Dialog button
    // IMPORTANT must use name:'ok' proerty here
    var noSel_btn = d_noSel.add('button', undefined, 'Got it!', {name: 'ok'}); 
        noSel_btn.alignment = ['left','top']; 

    // Show dialog
    d_noSel.show();

}; // NoSelection


// Randomize color
function RandomizeColor() {
    
    // Document variables  
    var iDoc = app.activeDocument;
    var aObj = iDoc.selection;
    var nObj = aObj.length;
    var aSwa = iDoc.swatches.getSelected();
    var nSwa = aSwa.length;
     
    // Dialog
    var d_main = new Window('dialog'); 
        d_main.text = 'Randomize Color'; 
        d_main.orientation = 'column'; 
        d_main.alignChildren = ['fill','top']; 
        d_main.spacing = 10; 
        d_main.margins = [8,12,8,16]; 

    // Dialog description
    var main_desc = d_main.add('group'); 
        main_desc.orientation = 'column'; 
        main_desc.alignChildren = ['left','center']; 
        main_desc.spacing = 0; 

        main_desc.add('statictext', undefined, 'Randomly recolor objects using a ', {name: 'main_desc'}); 
        main_desc.add('statictext', undefined, 'color group or swathces.', {name: 'main_desc'}); 

    // Dialog text
    var main_text = d_main.add('group'); 
        main_text.orientation = 'column'; 
        main_text.alignChildren = ['left','center']; 
        main_text.spacing = 6; 
        main_text.margins = [0,4,0,10]; 

    // Dialog text
    var main_text_01 = main_text.add('statictext', undefined, 'Select some objecs.'); 
    var main_text_02 = main_text.add('statictext', undefined, 'Select a color group.'); 
    var main_text_03 = main_text.add('statictext', undefined, 'Or press & hold CTRL to select swatches.'); 

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
    // IMPORTANT must use name:'cancel' property here. No onClick needed.
    var main_btn_cancel = main_btn.add('button', undefined, 'Cancel', {name: 'cancel'}); 

    // Display dialog
    // IMPORTANT must come afer onClick, addEventListener, etc. 
    d_main.show();

    // Randomize values
    function RandomizeValues() {
        // alert('Randomize ran');

        if (aObj instanceof Array) {

            for (i=0; i<nObj; i++) {
                if (aObj[i].typename == 'PathItem' || aObj[i].typename == 'CompoundPathItem') {

                    var selItem = aObj[i];
                    selItem.filled = true;

                    var swatchIndex = Math.round( Math.random() * (nSwa - 1 ));
                    
                    if (selItem.typename == 'PathItem') {
                        selItem.fillColor = aSwa[swatchIndex].color;
                    } else {
                        selItem.pathItems[0].fillColor = aSwa[swatchIndex].color;
                    }               
                } //  if
            } // for
        } // if

        d_rand.exit();  

    }; // 


}; // RandomizeColor

