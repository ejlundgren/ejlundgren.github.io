# Erick Lundgren Portfolio Site

## Images

Images are being optimized for fast loading so instead of:

`<img src="blahblahblah.jpg" alt="alternate text">`

Images will look like:

`"{% image "blahblahblah.jpg", "alternate text" %}"`

You can edit styles in /css/style.css:

```
:root {
    /* edit colors here */
    --font-color: #515151;
    --subtitle-color: #c0c0c0;
    --link-color: #268bd2;
    --current-page-color: #bb5e32;

    /* set font */
    font-family: Arial, Helvetica, sans-serif;
}
```
