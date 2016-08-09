# form-fields-js
add custom animated form fields

## Usage
- Include jQuery & jquery.gForms.js
- Call gForms function

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<script src="jquery.gForms.js"></script>
<script type="text/javascript" >
$(document).ready( function() {
    $('#loginForm').gForms({
		themeColor: '#f00',
		parent: '.fields'
	});
});
</script>
```

## Default Options
	themeColor	: 'inherit',
	parent : false,		
