 /**
 * @file Randomize Scale
 * @decription Randomly scale objects using a range. Scale object to a height or width
 * @version  1.0.0  
 * @link https://github.com/wcDogg/Illustrator-CC-ScriptUI-for-Dummies/tree/master/Randomizing-Scripts/RandomizeScale.jsx
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
    RandomizeScale();
}


// No open documents
function NoOpenDoc() {

    // Dialog
    var d_noDoc = new Window('dialog'); 
        d_noDoc.text = 'Randomize Scale'; 
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
        noDoc_desc.add('statictext', undefined, 'Randomly scale objects using a range. Also lets you ', {name: 'noDoc_desc'}); 
        noDoc_desc.add('statictext', undefined, 'scale objects to a width, height, or percentage.', {name: 'noDoc_desc'}); 

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


// No selection
function NoSelection() {

    // Dialog
    var d_noSel = new Window('dialog'); 
        d_noSel.text = 'Randomize Scale'; 
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
        noSel_desc.add('statictext', undefined, 'Randomly scale objects using a range. Also lets you ', {name: 'noSel_desc'}); 
        noSel_desc.add('statictext', undefined, 'scale objects to a width, height, or percent.', {name: 'noSel_desc'}); 

    // Dialog text wrap
    var noSel_text = d_noSel.add('group'); 
        noSel_text.orientation = 'column'; 
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


// Main function
function RandomizeScale() {

    // Document variables  
    var iDoc = app.activeDocument;
    var aObj = iDoc.selection;
    var nObj = aObj.length;

    // Dialog
    var d_main = new Window('dialog'); 
        d_main.text = 'Randomize Scale'; 
        d_main.orientation = 'column'; 
        d_main.alignChildren = ['fill','top']; 
        d_main.spacing = 10; 
        d_main.margins = [8,12,8,16]; 

    // To Panel
    var to_panel = d_main.add('panel'); 
        to_panel.text = 'Scale Proportionately'; 
        to_panel.orientation = 'column'; 
        to_panel.alignChildren = ['fill','top']; 
        to_panel.spacing = 16; 
        to_panel.margins = [10,16,10,16]; 

    // Width Group
    var to_width_group = to_panel.add('group'); 
        to_width_group.orientation = 'row'; 
        to_width_group.alignChildren = ['left',"center"]; 
        to_width_group.spacing = 10; 
        to_width_group.margins = 0; 

    // Width Label
    var to_width_label = to_width_group.add('statictext', undefined, 'Scale to Wdith'); 
        to_width_label.preferredSize.width = 108; 

    // Width Value
    var to_width_value = to_width_group.add('edittext {justify: "center", properties: {enterKeySignalsOnChange: true}}'); 
        to_width_value.text = '200'; 
        to_width_value.preferredSize.width = 50;
        to_width_value.helpTip = 'Width in points - 72 pt = 1 inch'; 

    // Width Button
    var btn_to_width = to_width_group.add('button', undefined, 'To Width'); 
        btn_to_width.preferredSize.width = 100; 

    // Height Group
    var to_height_group = to_panel.add('group'); 
        to_height_group.orientation = 'row'; 
        to_height_group.alignChildren = ['left',"center"]; 
        to_height_group.spacing = 10; 
        to_height_group.margins = 0; 

    // Height Label
    var to_height_label = to_height_group.add('statictext', undefined, 'Scale to Height'); 
        to_height_label.preferredSize.width = 108; 

    // Height Value
    var to_height_value = to_height_group.add('edittext {justify: "center", properties: {enterKeySignalsOnChange: true}}'); 
        to_height_value.text = '200'; 
        to_height_value.preferredSize.width = 50; 
        to_height_value.helpTip = 'Height in points - 72 pt = 1 inch'; 
    

    // Height Button
    var btn_to_height = to_height_group.add('button', undefined, 'To Height'); 
        btn_to_height.preferredSize.width = 100; 

    // Percent Group
    var to_percent_group = to_panel.add('group'); 
        to_percent_group.orientation = 'row'; 
        to_percent_group.alignChildren = ['left',"center"]; 
        to_percent_group.spacing = 10; 
        to_percent_group.margins = 0; 

    // Percent Label
    var to_percent_label = to_percent_group.add('statictext', undefined, 'Scale to Percent'); 
        to_percent_label.preferredSize.width = 108; 

    // Percent Value
    var to_percent_value = to_percent_group.add('edittext {justify: "center", properties: {enterKeySignalsOnChange: true}}'); 
        to_percent_value.text = '200'; 
        to_percent_value.preferredSize.width = 50; 
        to_percent_value.helpTip = 'Percent - 150 = 150%.'; 

    // Percent Button
    var btn_to_percent = to_percent_group.add('button', undefined, 'To Percent'); 
        btn_to_percent.preferredSize.width = 100; 

    // Randomize Panel
    var rand_panel = d_main.add('panel', undefined, 'Randomize Scale'); 
        rand_panel.text = 'Randomize Scale'; 
        rand_panel.orientation = 'column'; 
        rand_panel.alignChildren = ['fill','top']; 
        rand_panel.spacing = 10; 
        rand_panel.margins = [10,16,10,16]; 

    // Randomize checkbox
    var rand_cb = rand_panel.add('checkbox', undefined, 'Randomize Proportionately'); 
        rand_cb.value = true;

    // Randomize X Group
    var rand_x_group = rand_panel.add('group'); 
        rand_x_group.orientation = 'row'; 
        rand_x_group.alignChildren = ['left',"center"]; 
        rand_x_group.spacing = 10; 
        rand_x_group.margins = [0,10,0,0]; 

    // Randomize X Min Label
    var rand_x_min_label = rand_x_group.add('statictext', undefined, 'X Min %'); 

    // Randomize X Min Value
    var rand_x_min_value = rand_x_group.add('edittext {justify: "center", properties: {enterKeySignalsOnChange: true}}'); 
        rand_x_min_value.text = '50'; 
        rand_x_min_value.preferredSize.width = 50;     
        rand_x_min_value.helpTip = 'Width scaling factor - 150 = 150%.'; 

    // Randomize X Max Label
    var rand_x_max_label = rand_x_group.add('statictext', undefined, 'X Max %'); 

    // Rand X Max Value
    var rand_x_max_value = rand_x_group.add('edittext {justify: "center", properties: {enterKeySignalsOnChange: true}}'); 
        rand_x_max_value.text = '150'; 
        rand_x_max_value.preferredSize.width = 50; 
        rand_x_max_value.helpTip = 'Width scaling factor - 150 = 150%.';

    // Divider
    var divider = rand_panel.add('panel'); 
        divider.alignment = 'fill'; 

    // Rand Y Group
    var rand_y_group = rand_panel.add('group'); 
        rand_y_group.orientation = 'row'; 
        rand_y_group.alignChildren = ['left',"center"]; 
        rand_y_group.spacing = 10; 
        rand_y_group.margins = [0,0,0,10]; 

    // Rand Y Min Label
    var rand_y_min_label = rand_y_group.add('statictext', undefined, 'Y Min %'); 
        rand_y_min_label.text = 'Y Min %'; 

    // Rand Y Min Value
    var rand_y_min_value = rand_y_group.add('edittext {justify: "center", properties: {enterKeySignalsOnChange: true}}'); 
        rand_y_min_value.enabled = false; 
        rand_y_min_value.text = '50'; 
        rand_y_min_value.preferredSize.width = 50; 
        rand_y_min_value.helpTip = 'Height scaling factor - 150 = 150%.';

    // Rand Y Max Label
    var rand_y_max_label = rand_y_group.add('statictext', undefined, 'Y Max %'); 

    // Rand Y Max Value
    var rand_y_max_value = rand_y_group.add('edittext {justify: "center", properties: {enterKeySignalsOnChange: true}}'); 
        rand_y_max_value.enabled = false; 
        rand_y_max_value.text = '150'; 
        rand_y_max_value.preferredSize.width = 50; 
        rand_y_max_value.helpTip = 'Height scaling factor - 150 = 150%.';

    // Randomize Buuton
    var btn_rand = rand_panel.add('button', undefined, 'Randomize Scale'); 
        btn_rand.alignment = ['left','top']; 

    // Cancel Button
    var btn_cancel = d_main.add('button', undefined, 'Cancel', {name: 'cancel'}); 
        btn_cancel.alignment = ['right','top']; 


    //
    // Values
    //
    rand_cb.onClick = function () { 
            if (rand_cb.value == true) {
                rand_y_min_value.enabled = false;
                rand_y_max_value.enabled = false;
            } else {
                rand_y_min_value.enabled = true;
                rand_y_max_value.enabled = true;
            }
        };    

    to_width_value.onChanging = function () { 
            if (isNaN(to_width_value.text)) { to_width_value.text = 50; } 
            if (to_width_value.text < 0) { to_width_value.text = 0; }
        };    

    to_height_value.onChanging = function () { 
            if (isNaN(to_height_value.text)) { to_height_value.text = 50; } 
            if (to_height_value.text < 0) { to_height_value.text = 0; }
        };    

    to_percent_value.onChanging = function () { 
            if (isNaN(to_percent_value.text)) { to_percent_value.text = 50; } 
            if (to_percent_value.text < 0) { to_percent_value.text = 0; }
        };    

    rand_x_min_value.onChanging = function () { 
            if (isNaN(rand_x_min_value.text)) { rand_x_min_value.text = 50; } 
            if (rand_x_min_value.text < 0) { rand_x_min_value.text = 0; }
        };    

    rand_x_max_value.onChanging = function () { 
            if (isNaN(rand_x_max_value.text)) { rand_x_max_value.text = 50; } 
            if (rand_x_max_value.text < 0) { rand_x_max_value.text = 0; }
        };    

    rand_y_min_value.onChanging = function () { 
            if (isNaN(rand_y_min_value.text)) { rand_y_min_value.text = 50; } 
            if (rand_y_min_value.text < 0) { rand_y_min_value.text = 0; }
        };    

    rand_y_max_value.onChanging = function () { 
            if (isNaN(rand_y_max_value.text)) { rand_y_max_value.text = 50; } 
            if (rand_y_max_value.text < 0) { rand_y_max_value.text = 0; }
        };    


    //
    // onClick
    // 
    btn_to_width.onClick = ScaleToWidth;
    btn_to_height.onClick = ScaleToHeight;
    btn_to_percent.onClick = ScaleToPercent;
    btn_rand.onClick = RandomizeValues;

    // Display Dialog
    d_main.show();

    
    // Scale to width in points
    function ScaleToWidth() {
        // alert('ScaleToWidth ran.');

        // Iterate and set
        for(i = 0; i < nObj; i++) {

            // There is an object.
            var obj = aObj[i];
            // It has a current width (20)
            var curr_width = obj.width;
            // It has a current height (80)
            var curr_height = obj.height;

            // The user has supplied a new width (50)
            var new_width = to_width_value.text;
            // Scale factor = relative change in width (250%)
            var width_factor = (new_width * 100) / curr_width; 

            // Resize object
            obj.resize(width_factor, width_factor); 

        } // for

        // Close dialog
        d_main.close();       

    }; // ScaleToWidth


    // Scale to height in points
    function ScaleToHeight() {
        // alert('ScaleToHeight ran');

        // Iterate and set
        for(i = 0; i < nObj; i++) {

            // There is an object.
            var obj = aObj[i];
            // It has a current width (20)
            var curr_width = obj.width;
            // It has a current height (80)
            var curr_height = obj.height;

            // The user has supplied a new height (240)
            var new_height = to_height_value.text;
            // Scale factor = relative change in height (300%)
            var height_factor = (new_height * 100) / curr_height; 

            // Resize object
            obj.resize(height_factor, height_factor);     
     
        } // for

        // Close dialog
        d_main.close();       

    }; // Scale to height


    // Scale using a percentage
    function ScaleToPercent() {
        // alert('ScaleToPercent ran');

        // Iterate and set
        for(i = 0; i < nObj; i++) {

            // There is an object.
            var obj = aObj[i];
            // It has a current width in points (20)
            var curr_width = obj.width;
            // It has a current height in point (80)
            var curr_height = obj.height;

            // The user has supplied a scale factor / percent (50 = 50%)
            var new_factor = to_percent_value.text;

            // Resize object
            obj.resize(new_factor, new_factor); 
        
        } // for

        // Close dialog
        d_main.close();       

    }; // ScaleToPercent


    // Randomize values
    function RandomizeValues() {
        // alert('RandomizeValues ran');

        // Radio buttons determine which calculation to make
        if (rand_cb.value == true) {
            RandomizeProport();
        } else {
            RandomizeDisProport();
        }


        function RandomizeProport() {
            // alert('Randomize Proportionate ran');

            // Iterate and set
            for(i = 0; i < nObj; i++) {

                // There is an object.
                var obj = aObj[i];
                // It has a current width in points (20)
                var curr_width = obj.width;
                // It has a current height in point (80)
                var curr_height = obj.height;

                // The user has supplied Min and Max a scale factor 
                var p_min = Math.ceil(rand_x_min_value.text);
                var p_max = Math.floor(rand_x_max_value.text);

                if (p_min > p_max) {
                    var temp = p_min;
                    p_min = p_max;
                    p_max = temp;
                }

                // Randomize
                var p_rand = Math.floor(Math.random() * (p_max - p_min + 1)) + p_min;

                // Resize object
                obj.resize(p_rand, p_rand); 
            
            } // for

            // Close dialog
            d_main.close();  

        }; // RandomizeProport


        function RandomizeDisProport() {
            // alert('Randomize Disproportionate ran.');

            // Iterate and set
            for(i = 0; i < nObj; i++) {

                // There is an object.
                var obj = aObj[i];
                // It has a current width in points (20)
                var curr_width = obj.width;
                // It has a current height in point (80)
                var curr_height = obj.height;

                // The user has supplied a Min and Max width factor 
                var x_min = Math.ceil(rand_x_min_value.text);
                var x_max = Math.floor(rand_x_max_value.text);
            
                if (x_min > x_max) {
                    var temp = x_min;
                    x_min = x_max;
                    x_max = temp;
                }

                // The user has supplied a Min and Max height factor
                var y_min = Math.ceil(rand_y_min_value.text);
                var y_max = Math.floor(rand_y_max_value.text);

                if (y_min > y_max) {
                    var temp = y_min;
                    y_min = y_max;
                    y_max = temp;
                }

                // Randomize
                var x_rand = Math.floor(Math.random() * (x_max - x_min + 1)) + x_min;
                var y_rand = Math.floor(Math.random() * (y_max - y_min + 1)) + y_min;

                // Resize object
                obj.resize(x_rand, y_rand); 
            
            } // for

            // Close dialog
            d_main.close();   

        }; // RandomizeDisProport
    
    }; // RandomizeValues

}; // RandomieScale

