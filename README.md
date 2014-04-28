This is my starting-point for most sites. It's fairly minimal and assumes no particular CMS or CSS framework.

#### HTML
- [index.php](https://github.com/jmuspratt/site-template/blob/master/index.php) contains a standard `<head>` with links to the CSS and JS below, plus basic containers for header, navigation and page contents.

#### CSS

[SASS](http://sass-lang.com) and [Compass](http://compass-style.org) are used to generate CSS.

- [screen.scss](https://github.com/jmuspratt/site-template/blob/master/sass/screen.scss) brings in some resets, all partials, and then the bulk of the layout SASS.
- [_vars.scss](https://github.com/jmuspratt/site-template/blob/master/sass/_vars.scss) contains global color, font, and breakpoint variables. 
- [_utilities.scss](https://github.com/jmuspratt/site-template/blob/master/sass/_utilities.scss) contains all my SASS mixins and specialty classes.
- [_customresets.scss](https://github.com/jmuspratt/site-template/blob/master/sass/_customresets.scss) attempts to force uniform styling on some more elements, mostly in forms.
- [_breakpointflags.scss](https://github.com/jmuspratt/site-template/blob/master/sass/_breakpointflags.scss) loops through the breakpoint variables and flags the body tag so that Javascript can detect the breakpoint. See [Jeremy Keith's article](http://adactio.com/journal/5429/) for the original idea.

#### Javascript

[jQuery](http://jquery.com) (still on 1.11.0 to support IE8), [Modernizr](http://modernizr.com), and [Respond.js](https://github.com/scottjehl/Respond) are standard. I also include [placeholders.js](http://jamesallardice.github.io/Placeholders.js/) to support the placeholder attribute in IE.

- [scripts.js](https://github.com/jmuspratt/site-template/blob/master/js/scripts.js) contains a few globally-useful interactions like animating scrolling, expanding/collapsing things, the above-mentioned breakpoint detection, etc. 
