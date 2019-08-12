# ckeditor5-custom build
A custom build of CKEditor V5, based on ckeditor5 decoupled editor. Adds additional buttons into toolbar.

## Purpose
This build adds two custom buttons into CKEditor toolbar. All that bottons do is emiting an events about clicks on them. 
That allows to build and assign custom handlers for those actions. 

## Custom events
You can set up an listener for one of these:

```
on('custom-attach', () => { console.log('custom attach hit') } )
```

By default custom image upload action icon is not included into toolbar. But You can add it by using this name ``customInlineImage``. Then You will get additional icon which on click will emit this custom event:

```
on('custom-inline-image', () => { console.log('custom inline image hit') } )
```

## Changelog

#### 1.0.2
* Added base64 image upload adapter
* Removing custom image-inline-upload icon from default toolbar
* Updated dependencies

#### 1.0.1
* Updated dependencies
* Added LT and RU language files

#### 1.0.0
* Initial release

## More information
More information about making Your own custom build: https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html
