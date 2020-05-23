 /**
 * @file Randomize Order
 * @decription Randomly reorder objects in the Layers panel.  
 * @version  1.0.0  
 * @link https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Randomizing-Scripts/RandomizeOrder.jsx
 * @author Lisa Burton
 * @license unlicense
 * @example Select some objects. Run this script. Objects remain at their current XY coordinates and on their current layer. 
 */


// Check for open document.
// Check for at least 2 objects selected. 
if (app.documents.length == 0 ) {
    NoOpenDoc();
} else if (app.activeDocument.selection.length < 2)  {
    NoSelection();
} else {
    RandomizeOrder();
}


// No open documents
function NoOpenDoc() {

    // Dialog
    var d_noDoc = new Window('dialog'); 
        d_noDoc.text = 'Randomize Object Order'; 
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
        noDoc_desc.add('statictext', undefined, 'Randomly change the order of objects ', {name: 'noDoc_desc'}); 
        noDoc_desc.add('statictext', undefined, 'in the Layers panel.', {name: 'noDoc_desc'}); 

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
        d_noSel.text = 'Randomize Object Order'; 
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
        noSel_desc.add('statictext', undefined, 'Randomly change the order of objects ', {name: 'noSel_desc'}); 
        noSel_desc.add('statictext', undefined, 'in the Layers panel.', {name: 'noSel_desc'}); 

    // Dialog text wrap
    var noSel_text = d_noSel.add('group'); 
        noSel_text.orientation = 'column'; 
        noSel_text.alignChildren = ['left','center']; 
        noSel_text.spacing = 10; 
        noSel_text.margins = [0,4,0,10]; 

    // Dialog text

    var noSel_text_01 = noSel_text.add('statictext', undefined, 'Objects remain at their current XY coordinates.');
    var noSel_text_02 = noSel_text.add('statictext', undefined, 'Objects remain on their current layer.');
    var noSel_text_03 = noSel_text.add('statictext', undefined, 'Only stacking order within each layer is randomized.');
    var noSel_text_04 = noSel_text.add('statictext', undefined, 'Select some objects to run this script.'); 

    // Dialog button
    // IMPORTANT must use name:'ok' proerty here
    var noSel_btn = d_noSel.add('button', undefined, 'Got it!', {name: 'ok'}); 
        noSel_btn.alignment = ['left','top']; 

    // Show dialog
    d_noSel.show();

}; // NoSelection


// Randomize order
function RandomizeOrder() {

    // Document variables  
    var iDoc = app.activeDocument;
    var aObj = iDoc.selection;
    var nObj = aObj.length;
    var aSwa = iDoc.swatches.getSelected();
    var nSwa = aSwa.length;

    // Dialog
    var d_main = new Window('dialog'); 
        d_main.text = 'Randomize Object Order'; 
        d_main.orientation = 'column'; 
        d_main.alignChildren = ['fill','top']; 
        d_main.spacing = 10; 
        d_main.margins = [8,12,8,16]; 

    // Dialog description
    var main_desc = d_main.add('group'); 
        main_desc.orientation = 'column'; 
        main_desc.alignChildren = ['left','center']; 
        main_desc.spacing = 0; 

        main_desc.add('statictext', undefined, 'Randomly change the order of objects ', {name: 'main_desc'}); 
        main_desc.add('statictext', undefined, 'in the Layers panel.', {name: 'main_desc'}); 

    // Dialog text
    var main_text = d_main.add('group'); 
        main_text.orientation = 'column'; 
        main_text.alignChildren = ['left','center']; 
        main_text.spacing = 6; 
        main_text.margins = [0,4,0,10]; 

    // Dialog text
    var main_text_01 = main_text.add('statictext', undefined, 'Objects remain at their current XY coordinates.'); 
    // Dialog text
    var main_text_02 = main_text.add('statictext', undefined, 'Objets remain on their current layer.'); 
    // Dialog text
    var main_text_03 = main_text.add('statictext', undefined, 'Only stacking order within each layer is randomized.'); 

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
        // alert('Randomize ran');            

        for (i = 0; i < nObj; i++) {
            var cIndex = Math.floor(Math.random()*(nObj - i));
            aObj[cIndex].zOrder(ZOrderMethod.SENDTOBACK);
            aObj = iDoc.selection;
        } 

        d_rand.exit();  

    }; // 

}; // RandomizeOrder

