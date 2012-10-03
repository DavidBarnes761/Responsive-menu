# Responsive menu (dropdown)

jQuery plugin that generates a 'select' menu from an 'unordered list' menu. Based on a [script](http://css-tricks.com/examples/ConvertMenuToDropdown/) made by Chris Coyier, but improved for menus with sublevel.

## Usage

Example markup:

```html
<ul id="menu">
	<li>some element</li>
	<li>some element
		<ul>
			<li>sublevel element</li>
			<li>sublevel element</li>
			<li>sublevel element</li>
		</ul>
	</li>
	<li>some element</li>
	<li>some element</li>
</ul>	
```

JavaScript

```js
$(document).ready(function() {
	    $('#menu').responsiveMenu();
	});

```