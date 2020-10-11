# Annie's Component Lab :art: :curly_loop: :computer: :curly_loop: :information_desk_person:

### [Annie](http://anniepennell.com/)'s new and improved ✨ example component lab.

This is a living style guide and component lab that provides a toolbox of UI components for reuse within React apps.

## Contents

- [Implementing the Lab Components](#implementing-the-lab-components)
- [Lab Component Development](#lab-component-development)
  - [Code style](#code-style)
  - [Scripts](#scripts)
  - [Adding components](#adding-components)
  - [Documenting components](#documenting-components)
  - [Styling components](#styling-components)
  - [Running tests](#running-tests)
- [Lab Skeleton](#lab-skeleton) (packages and dependencies)
  - [React Styleguidist](#react-styleguidist)
  - [styled-components](#styled-components)

## Implementing the Lab Components

To include the component lab's components into your project, you must manually add this git repository's address into your project's `package.json` dependencies, as follows:

```
  "dependencies": {
    "annies-component-lab": "git@github.com:apennell/annies-component-lab.git#main"
  }
```

This will pull from the `main` branch of the `annies-component` repository, although you can replace `main` in the link with a version number, a tag name, or a commit hash.

Note: If you are using a branch name, new commits will **not** be automatically pulled into your project when you perform npm install / updates. Instead, you will need to manually remove the `annies-component-lab` package from your project component(s)'s `node_modules` and then run `npm install` again.

Once you have the dependency installed, you'll need to import the specific individual components into your project's component. For example, to add the `<Button />` component from the lab to a React component in the app, add at the top of your `.jsx` file:

```js
import { Button } from 'annies-component-lab';
```

You will now be able to use `<Button />` like any other jsx component.

## Lab Component Development

### Code style

Follow the code standards of Airbnb's language style guides, so please consult them as you code and ensure that anything you write adheres to the code style defined there.

- [JavaScript guide](http://airbnb.io/projects/javascript/)
- [React/JSX guide](https://github.com/airbnb/javascript/tree/master/react)
- [CSS/Sass guide](https://github.com/airbnb/css)

### Scripts

#### `npm install`

Install dependencies; run first before getting started!

#### `npm start`

Starts a styleguide dev server then watches for and compiles changes.

Open [http://localhost:6060](http://localhost:6060) to view the styleguide in the browser.

#### `npm run styleguide:build`

Builds a static version of the component lab.

#### `npm test`

Runs latest tests since last commit. `npm test -- --coverage` will show overall test coverage.

Although being able to see all green passes, "Chasing 100% coverage is usually a misleading goal, and" [they don't want](https://github.com/facebookincubator/create-react-app/issues/2507) to give people the feeling that [they] encourage that." So, suppress your inner A+ student.

<!-- TODO: update with rollup added -->
<!-- #### `npm run dist`

Bundles components into a library that can be redistributed externallly via npm.

To [include the component lab's components](#implementing-the-lab-components) into your project, you must manually add this git repository's address into your project's `package.json` dependencies, as follows:

```
  "dependencies": {
    "annies-component-lab": "https://github.com/apennell/annies-component-lab.git#master"
  }
```

Replace `<VERSION_NUMBER>` with one of the following:

- a branch name
- a version number
- a tag name
- a commit hash

If you are using a branch name, new commits will **not** be automatically pulled into your project when you perform npm install / updates. Instead, you will need to manually remove the `annies-component-lab` package from your project component(s)'s `node_modules` and then run `npm install` again. [Read more about version numbers](https://stackoverflow.com/a/22345808). -->

### Adding components

1. **Create a directory** for the component within `src/components` in the proper section, e.g. a button component is in the Element section, so `src/components/Elements/Button`.

   - If you're making a new section within `/components` (like if `Elements` didn't already exist in the previous example), add the new section to `styleguide.config.js` to have it included. Give it a `name` and assign the `components` key to the location where the components can be found. You can also direct it to a content path to include a markdown file at the top of the section.
     ```js
     module.exports = {
       title: "Annie's Component Lab",
       sections: [
         {
           name: 'Elements',
           content: './docs/Elements.md',
           components: './src/components/Elements/**/[A-Z]*.jsx'
         }
       ]
     };
     ```

2. **Add a `.jsx` file** for your component in that directory, e.g. `/Button/Button.jsx`. You will build your component here.

   - Include `import React from 'react';` and `import PropTypes from 'prop-types';` at the top of your file.
   - You can add a description (using the syntax noted [below](#documenting*components)) at the top of the component, just below the `import` statements.
   - Construct your component, making sure to include `propTypes` and `defaultProps`.
   - Add comments above each propType to give it a [description for the style guide output](#documenting-components).

   Basic structure of `.jsx` component file:

   ```js
   /** src/components/Elements/Button/Button.jsx */
   import React from 'react';
   import PropTypes from 'prop-types';

   /** Construct stateless functional Button component */
   const Button = ({ children, onClick, buttonStyle, size }) => {
     /**
      * Get buttonStyle and size css CSS Modules styles object
      * Combine them into one class using classnames package
      */
     let className = cx(styles[buttonStyle], styles[`${size}Size`]);

     return (
       <button onClick={onClick} className={className}>
         {children}
       </button>
     );
   };

   /** Define all available proptypes with description */
   Button.propTypes = {
     /** Button label */
     children: PropTypes.string.isRequired,
     /** Function to call when button is clicked */
     onClick: PropTypes.func,
     /** Button's style type */
     buttonStyle: PropTypes.oneOf(['normal', 'primary', 'inverse', 'textLink']),
     /** Size of the button */
     size: PropTypes.oneOf(['normal', 'large']),
     /** Set true if button should be full-width, else leave blank */
     isFullWidth: PropTypes.bool
   };

   /** Set all default props for non-required props */
   Button.defaultProps = {
     buttonStyle: 'normal',
     size: 'normal',
     isFullWidth: false
   };

   export default Button;
   ```

3. **Add a component `README.md`** titled after the component in its directory, e.g. `/Button/Button.md`. _This is where you will [document the component](https://github.com/apennell/annies-component-lab#documenting-components) and display examples of it to render in the component lab_. Any code block without a language tag will be rendered as a React component (the examples) with a live preview and its code. The code block in the component lab is editable in the browser!

   - Using markdown, start with any necessary notes or descriptions provided by Design.
   - Provide code examples showing the use of available props, options and variations.
   - For example, for `<Button />`, there is a section with an example of each of the following: options (button style), size, tags, and states. In the size example, there are default, large, and full-width buttons shown.
   - Add any additional instructions, descriptions, or notes from Design along with each of these examples so their purpose and implementation can be clearly understood without further explanation.

[Styleguidist](https://react-styleguidist.js.org/docs/components.html) searches and parses components following the global structure of `src/components/**/*.{js, jsx}`. It ignores test files (`__tests__` directory and files names containing .`test.js, .test.jsx, .spec.js and .spec.jsx`).

The general file structure should be as follows:

```
styleguide-1.0
  |__docs // additional md docs that can be included as a component but are necessary for the style guide
     |__{Identity}.md
  |__src
     |__components
        |__Elements
           |__Button
              |__Button.jsx
              |__Button.md
           |__Modal
              |__Modal.jsx
              |__Modal.md
         |__Pages
            |__SomePage
  |__styleguide // style guide build files--gitignore these
     |__build
  |__styleguide.config.js // configuration for styleguidist
```

The style guide components build into `styleguide/build`, however the `styleguide` directory should be included in the `.gitignore` file.

### Documenting components

Format for documentation to be parsed and appear in component lab:

```
/**
* Documentation text here. Markdown is *supported*.
*/
```

- By default, any methods your components have are considered to be private and are not published. Mark your public methods with JSDoc `@public` tag to get them published in the docs.
- By default, all props in components are considered public and published in component lab docs. If you need to remove a prop from the documentation but keep in code, mark with JSDoc `@ignore` tag in the comment/description are directly above that prop.
- Available JSDocs tags for documenting components, props, and methods: [@deprecated](http://usejsdoc.org/tags-deprecated.html), [@see, @link](http://usejsdoc.org/tags-see.html), [@author](http://usejsdoc.org/tags-author.html), [@since](http://usejsdoc.org/tags-since.html), and [@version](http://usejsdoc.org/tags-version.html). You can also use [@param, @arg, @argument](http://usejsdoc.org/tags-param.html) for documenting props.
- Code examples in Markdown files use ES6+JSX syntax and can access all components in the component lab using global variables (although ES6 `import` syntax isn't supported within these files), e.g.:

  ```
  <Panel>
    <p>Using the Button component in the example of the Panel component:</p>
    <Button>Push Me</Button>
  </Panel>
  ```

- Each example (in the `ComponentName.md` file) has its own state, accessible with the `state` variable and changed with the `setState` function:

  ```
  initialState = { isOpen: false };
  <div>
    <button onClick={() => setState({ isOpen: true })}>Open</button>
    <Modal isOpen={state.isOpen}>
      <h1>Hallo!</h1>
      <button onClick={() => setState({ isOpen: false })}>Close</button>
    </Modal>
  </div>
  ```

**View more documentation in [Styleguidist's Cookbook](https://react-styleguidist.js.org/docs/cookbook.html).**

### Styling components

To modularize our styles and classes and reduce the risk of global namespacing and clashing, we are using **[styled-components](https://styled-components.com/)**.

Todo :)

#### Configuration

Todo! :)

### Running Tests

We are using [Jest](https://facebook.github.io/jest/) as the test runner with React Testing Library.

1. Create a file `*.test.js` within the directory of the component to test, i.e. `src/components/Elements/Button/Button.test.js` for a `<Button />` test.
2. Start with a simple [smoke test](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components) to make sure the component simply mounts and doesn't throw during rendering.
3. Write more tests, focusing on the user's perspective. Example of testing a button's `onClick` event:

```jsx
import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen } from 'test-utils';
import Button from './Button';

describe('Button', () => {
  test('should render button with text', () => {
    render(<Button>Click Me!</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  test('should handle click event', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click Me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    userEvent.click(button);
    expect(onClickMock).toBeCalled();
  });
});
```

4. Run `npm test` to run the latest tests since the last commit. `npm test -- --coverage` will show overall test coverage. Run `npm run jest --watch` to run the tests in watch mode as you develop.

**Testing Resources and Docs**

- [Jest](http://facebook.github.io/jest/docs/getting-started.html)
- [Jest Mock Functions API](http://facebook.github.io/jest/docs/mock-function-api.html)
<!-- TODO! Add mawr resources -->

## Lab Skeleton

### React Styleguidist

The component lab/style guide was built using **[React Styleguidist](https://react-styleguidist.js.org/)**. Usage of this package in our component lab is pretty well-documented here, but checkout their documents and [cookbook](https://react-styleguidist.js.org/docs/cookbook.html) for more information.

### styled-components

To modularize our styles and classes and reduce the risk of global namespacing and clashing, we are using **[styled-components](https://styled-components.com/)**. See the section on [styling components](#styling-components) for more on our implementation.

#### Updating to New Releases

TODO :)

<!-- TODO! -->
<!-- #### Folder Structure

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.

You can, however, create more top-level directories. They will not be included in the production build so you can use them for things like documentation. -->
