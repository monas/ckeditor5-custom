# ckeditor5-custom build
A custom build of CKEditor V5, based on ckeditor5 decoupled editor. Adds additional buttons into toolbar.

## Purpose
This build adds two custom buttons into CKEditor toolbar. All that bottons do is emiting an events about clicks on them. 
That allows to build and assign custom handlers for those actions. 

## Custom events
You can set up an listener for one of these:

`on('custom-attach', () => { console.log('custom attach hit') } )`

`on('custom-inline-image', () => { console.log('custom inline image hit') } )`

## More information
More information about making Your own custom build: https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html
