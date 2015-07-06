/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/

CKEDITOR.addTemplates('default', {imagesPath: CKEDITOR.getUrl(CKEDITOR.plugins.getPath('templates') + 'templates/images/'), templates: [
    {
        title: 'Image and Title',
        image: 'template1.gif',
        description: 'One main image with a title and text that surround the image.',
        html: '<h3><img style="margin-right: 10px" height="100" width="100" align="left"/>Type the title here</h3><p>Type the text here</p>'
    },
    {
        title: 'Text and Table',
        image: 'template3.gif',
        description: 'A title with some text and a table.',
        html: '<div style="width: 80%"><h3>Title goes here</h3><table style="width:150px;float: right" cellspacing="0" cellpadding="0" border="1"><caption style="border:solid 1px black"><strong>Table title</strong></caption></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table><p>Type the text here</p></div>'
    },
    {
        title: 'Two-column',
        image: '2-col.gif',
        description: 'A two-column text layout.',
        html: '<div align="left" style="width: 30em; float: left; margin: 0 10px 20px 0"> <h3> First column title</h3> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div> <div align="left" style="width: 30em; float: left; margin: 0 10px 20px 0; clear: right;"> <h3> Second column title</h3> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div> <div style="clear: both;"> &nbsp;</div>'
    },
    {
        title: 'Three-column',
        image: '3-col.gif',
        description: 'A three-column text layout.',
        html: '<div align="left" style="width: 20em; float: left; margin: 0 10px 20px 0"> <h3> First column title</h3> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div> <div align="left" style="width: 20em; float: left; margin: 0 10px 20px 0;"> <h3> Second column title</h3> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div> <div align="left" style="width: 20em; float: left; margin: 0 10px 20px 0; clear: right;"> <h3> Third column title</h3> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div> <div style="clear: both;"> &nbsp;</div>'
    },
    {
        title: 'Two by two',
        image: '2x2.gif',
        description: 'A two-by-two grid with text and images.',
        html: '<div align="left" style="width: 30em; float: left; margin: 0 10px 20px 0;"> <div style="float: left;"> <img style="width: 100px; height: 100px;" /></div> <div style="float: left; margin-right: 5px;"> <h3> First title</h3> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> </div> </div> <div align="left" style="width: 30em; float: left; margin: 0 10px 20px 0; clear: right;"> <div style="float: left; margin-right: 5px;"> <img style="width: 100px; height: 100px;" /></div> <div style="float: left; margin-right: 5px;"> <h3> Second title</h3> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> </div> </div> <div align="left" style="width: 30em; float: left; margin: 0 10px 20px 0; clear: left;"> <div style="float: left; margin-right: 5px;"> <img style="width: 100px; height: 100px;" /></div> <div style="float: left;"> <h3> Third title</h3> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> </div> </div> <div align="left" style="width: 30em; float: left; margin: 0 10px 20px 0; clear: right;"> <div style="float: left;"> <img style="width: 100px; height: 100px;" /></div> <div style="float: left;"> <h3> Fourth title</h3> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> </div> </div> <div style="clear: both;"> &nbsp;</div>'
    }
]});
