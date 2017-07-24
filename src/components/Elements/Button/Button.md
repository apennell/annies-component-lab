Pass the function for the action to be called by that button in the `onClick` prop. Alternatively, pass an `href` prop for `<a />` functionality instead.

```JS
<Button onClick={(e) => alert('Clicked!', e.target)}>Click me</Button>
```

### Button style

Use any of the available button style types to quickly create a styled button. Just modify the `buttonStyle` prop.

	const divStyle = {
		backgroundColor: "#2e2e2e",
		padding: "20px",
		marginTop: "20px"
	};

	<div>

		<Button onClick={(e) => alert('You clicked the default button!', e.target)}>
			Secondary button
		</Button>

		<Button
			onClick={(e) => alert('You clicked the primary button!', e.target)}
			buttonStyle="primary"
		>
			Primary button
		</Button>

		<Button
			onClick={(e) => alert('You clicked the link button!', e.target)}
			buttonStyle="textLink"
		>
			Link button
		</Button>

		<div style={divStyle}>
			<Button
				onClick={(e) => alert('You clicked an inverse button!', e.target)}
				buttonStyle="inverse"
			>
				 Inverse default button
			</Button>
		</div>

	</div>


### Size

Modify the `size` prop to select the button size, or make the button block level by adding the `isFullWidth` prop.

	const divStyle = {
		marginTop: "20px"
	};

	<div>

		<Button
			onClick={(e) => alert('You clicked the large button!', e.target)}
			size="large"
		>
			Large button
		</Button>

		<Button onClick={(e) => alert('You clicked the default size button!', e.target)}>
			Default button
		</Button>

		<div style={divStyle}>
			<Button
				onClick={(e) => alert('You clicked the large full-width size button!', e.target)}
				size="large"
				isFullWidth
			>
				Full-width large button
			</Button>
		</div>

		<div style={divStyle}>
			<Button
				onClick={(e) => alert('You clicked the full-width button!', e.target)}
				isFullWidth
			>
				Full-width default button
			</Button>
		</div>

	</div>


### Button tags

By default, the `<Button />` component generates a `<button />` DOM element tag. If you need a link that uses button styling, pass a link in the `href` prop and it will make a `<a />` element instead.

	<div>
		<Button href="#">Default link</Button>
		
		<Button 
			href="#"
			buttonStyle="primary"
		>
			Primary link
		</Button>

		<Button 
			href="#"
			buttonStyle="textLink"
		>
			Link
		</Button>
	</div>


### Button states

**Disabled**

The disabled state may be set by passing `disabled`. It is false by default and can be omitted.

	const divStyle = {
		backgroundColor: "#2e2e2e",
		padding: "20px",
		marginTop: "20px"
	};

	<div>
		<Button disabled>Disabled button</Button>
		
		<Button 
			buttonStyle="primary"
			disabled
		>
			Disabled primary button
		</Button>

		<Button
			buttonStyle="textLink"
			disabled
		>
			Disabled link button
		</Button>

		<div style={divStyle}>
			<Button
				onClick={(e) => alert('You clicked an inverse button!', e.target)}
				buttonStyle="inverse"
				disabled
			>
				 Disabled inverse button
			</Button>
		</div>
	</div>

**Loading**

The loading state may be set by passing `loading`. It is false by default and can be omitted.

	const divStyle = {
		backgroundColor: "#2e2e2e",
		padding: "20px",
		marginTop: "20px"
	};

	<div>
		<Button loading>Loading button</Button>
		
		<Button 
			buttonStyle="primary"
			loading
		>
			Loading button
		</Button>

		<div style={divStyle}>
			<Button
				onClick={(e) => alert('You clicked an inverse button!', e.target)}
				buttonStyle="inverse"
				loading
			>
				 Loading button
			</Button>
		</div>
	</div>

---
