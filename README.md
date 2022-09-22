---
templateEngineOverride: md
---

# Erick Lundgren Portfolio Site

Hello Erick. This is me talking to you from the README file. Hello! All of what is to follow is not to discourage you from asking me to do or fix things down the line but as a courtesy to allow you to change things yourself **if** you want.

## Adding pages

If you want to add a page, you can just create a new markdown file in the pages folder and in the frontmatter give it a title, permalink, and a date. The dates are arbitrary and don't display anywhere but control the order in which the pages show up in the navigation. It's a little hacky but hey.

```markdown
---
title: New Page
date: to go last put a date after 2022-01-05
permalink: "/newpage/"
---
```

## Images

Images are being optimized for quick loading on small screens so instead of standard HTML like so:

```html
<img src="blahblahblah.jpg" alt="alternate text">
```

Images will look like:

```nunjucks
{% image "blahblahblah.jpg", "alternate text" %}
```

This is calling an 11ty shortcode to create the optimized images. In the off chance that this gives you any trouble down the line, you can just use normal HTML tags and as long as the image you are referencing is in the /assets/images/ folder it should work.

## Styles / CSS

You can edit styles in /css/style.css. Some obvious things you may want to tweak are right at the top, like fonts and colors.

```css
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

## Contact Page

To make changes to the headshot see /_includes/contact.njk

To make changes to the contact page text see /pages/contact.md
