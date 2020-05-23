# Adobe Illustrator Scripting Resources

Two of my biggest hurdles learning ExtendScript & ScriptUI have been the broken resource links everywhere, and Adobe's maze of un-documentation. I hope this page helps you in some way :)


## Essentials

* Peter Kahrel: [ScriptUI for Dummies](https://creativepro.com/files/kahrel/indesign/scriptui.html) (InDesign, but plenty realavent)
* Joonas Pääkkö: [ScriptUI Dialog Builder](https://scriptui.joonas.me/)
* Adobe: [Javascript Tools Guide CC](https://estk.aenhancers.com/index.html)
* Adobe: [Adobe Illustrator Scripting Guide](https://illustrator-scripting-guide.readthedocs.io/)
* fabiantheblind: [ExtendScript Wiki](https://github.com/ExtendScript/wiki/wiki)


## Editors / Debugging Tools

In many cases, JavaScript is tested in a browser using developer tools which include a console. With Illustrator, you'll need either ESTK or the ExtendScript Debugger for VS Code. 

Both provide ways to run scripts and view a console from the editor itself. 

### ExtendScript Toolkit (ESTK)

[Download Adobe ESTK](https://github.com/Adobe-CEP/CEP-Resources/tree/master/ExtendScript-Toolkit) 

You won't find this link via Google, the CC app, or Adobe support because Adobe is pushing developers towards their Extend Script Debugger extension for VS Code.

### Visual Studio Code

In 2019, Adobe released the ExtendScript Debugger extenstion for VS Code. Debugger is meant to replace ETSK.

* [Visual Studio Code](https://code.visualstudio.com/)
* [ExtendScript Syntax Highlighting](https://marketplace.visualstudio.com/items?itemName=hennamann.jsx)
* [Adobe ExtendScript Debugger](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug)

I haven't tried ESTK. I have tried Debugger and it made me cry - I got it working for 2 hours before it went hinky. I still haven't gotten it to work again. 

### Sublime Text

[ExtendScript Package](https://packagecontrol.io/packages/ExtendScript) - Intended to be used in conjunction with ESTK. 


## Older Illustrator Scripting Resources

If links are broken, PDFs are avialable in this folder. 

* Adobe: [Adobe Illustrator CC 2017 Scripting Guide](https://www.adobe.com/content/dam/acom/en/devnet/illustrator/pdf/AI_ScriptGd_2017.pdf)
* Adobe: [Adobe Illustrator CC 2017 Scripting Reference: JavaScript](https://www.adobe.com/content/dam/acom/en/devnet/illustrator/pdf/Illustrator_JavaScript_Scripting_Reference_2017.pdf)
* Adobe [Adobe Illustrator CC 2013 Scripting Guide](https://www.adobe.com/content/dam/acom/en/devnet/illustrator/pdf/Illustrator_Scripting_Guide_cc.pdf)
* Adobe: [Adobe Illustrator CC 2013 Scripting Reference: JavaScript](https://www.adobe.com/content/dam/acom/en/devnet/illustrator/pdf/Illustrator_Scriptin_Reference_JavaScript_cc.pdf)


## Other Adobe CC Applications

* Brett Dixon: [Photoshop Scripting & Extension Reference](https://theiviaxx.github.io/photoshop-docs/index.html#)


## ECMAScript 3 - JavaScript ES3

Adobe ExtendScript extends ES3 - an older version of JavaScript that is significantly different from the ES5 and ES6 wersions most common right now. These are ES3 resources:

* MDN: [ECMAScript Launguage Specification: Edition 3 Final](https://www-archive.mozilla.org/js/language/E262-3.pdf)
* MDN: [JavaScript Language Resources](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources)
* Christian Salvado: [List of ES3 Incompatibilities introduced by ES5](https://gist.github.com/cms/649702)



