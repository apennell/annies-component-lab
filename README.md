
# Annie's Component Lab :art: :curly_loop: :computer: :curly_loop: :information_desk_person:

### [Annie](http://anniepennell.com/)'s example component lab/design language system. The base was originally developed for [The History Project](https://www.thehistoryproject.com/).

This is a living style guide and component lab that provides a toolbox of components for reuse within React apps. Components are built and styled within this repo and this repo only! View the style guide/component lab in the browser for examples and the code you need to implement that exact component in the main app without re-writing new code.

## Contents

* [Component Development](#component-development)
    * [Code style](#code-style)
    * [Scripts](#scripts)
    * [Adding components](#adding-components)
    * [Documenting components](#documenting-components)
    * [Styling components](#styling-components)
    * [Running tests](#running-tests)
* [Implementing the Components](#implementing-the-components)
* [Lab Skeleton](#lab-skeleton) (packages and dependencies)
    * [React Styleguidist](#react-styleguidist)
    * [CSS Modules](#css-modules)
    * [Classnames](#classnames)
    * [Create React App](#create-react-app)


## Component Development

### Code style

Follow the code standards of Airbnb's language style guides, so please consult them as you code and ensure that anything you write adheres to the code style defined there.
* [JavaScript guide](http://airbnb.io/projects/javascript/)
* [React/JSX guide](https://github.com/airbnb/javascript/tree/master/react)
* [CSS/Sass guide](https://github.com/airbnb/css)


### Scripts

#### `npm install` 

Install dependencies

#### `npm run styleguide`

Starts a styleguide dev server then watches for and compiles changes.<br>
Open [http://0.0.0.0:6060](http://0.0.0.0:6060) to view the styleguide in the browser.

#### `npm run styleguide:build`
Builds a static version of the component lab.

#### `npm start`

Runs the app (create-react-app, not component lab) in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm run build`

Builds the app (create-react-app, not component lab) for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

#### `npm test`

Runs latest tests since last commit. `npm test -- --coverage` will show overall test coverage. 

Note that `src/index.js` and `src/registerServiceWorker.js` are not user generated and will show as not being covered. Although being able to see all green passes, "Chasing 100% coverage is usually a misleading goal, and" [they don't want](https://github.com/facebookincubator/create-react-app/issues/2507) to give people the feeling that [they] encourage that." So, suppress your inner A+ student.

#### `npm run dist`

Bundles components into a library that can be redistributed externallly via npm.

To [include the component lab's components](##implementing-the-components) into your project, you must manually add this git repository's address into your project's `package.json` dependencies, as follows:

```
  "dependencies": {
    "annies-component-lab": "git@github.com:apennell/annies-component-lab.git#<VERSION_NUMBER>"
  }
```

Replace `<VERSION_NUMBER>` with one of the following:

- a branch name
- a version number
- a tag name
- a commit hash

If you are using a branch name, new commits will **not** be automatically pulled into your project when you perform npm install / updates. Instead, you will need to manually remove the `annies-component-lab` package from your project component(s)'s `node_modules` and then run `npm install` again. [Read more about version numbers](https://stackoverflow.com/a/22345808). 


### Adding components

1. **Create a directory** for the component within  `src/components` in the proper section, e.g. a button component is in the Element section, so `src/components/Elements/Button`.
    * If you're making a new section within `/components` (like if `Elements` didn't already exist in the previous example), add the new section to `styleguide.config.js` to have it included. Give it a `name` and assign the `components` key to the location where the components can be found. You can also direct it to a content path to include a markdown file at the top of the section.
        ```js
        module.exports = {
          title: 'Annie\'s Component Lab',
          sections: [
            {
              name: 'Elements',
              content: './docs/Elements.md',
              components: './src/components/Elements/**/[A-Z]*.jsx',
            },
          ],
        }
        ```

2. **Add a `.jsx` file** for your component in that directory, e.g. `/Button/Button.jsx`. You will build your component here. 
    * Include `import React from 'react';` and `import PropTypes from 'prop-types';` at the top of your file.
    * If you'll need to combine classes that use CSS Modules, you'll need the [Classnames](https://github.com/JedWatson/classnames) package to add multiple class to your component by adding `import cx from 'classnames';`. See more about that [here](#classnames).
    * You can add a description (using the syntax noted [below](#documenting*components)) at the top of the component, just below the `import` statements.
    * Before building your component, decide if a [stateless functional component](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html) is a [better approach](http://frontendinsights.com/stateless-functional-components/) here than declaring a class. If the component is merely presentational, rendering props but not needing to access states or lifecycle hooks within itself, then you should probably go with the [performance optimized stateless functional component](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc) instead.
    * Construct your component, making sure to include `propTypes` and `defaultProps`.
    * Add comments above each propType to give it a [description for the style guide output](#documenting-components).

    Basic structure of `.jsx` component file:
    ```js
    /** src/components/Elements/Button/Button.jsx */
    import React from 'react';
    import PropTypes from 'prop-types';
    import cx from 'classnames';
    import styles from './Button.css';

    /** Construct stateless functional Button component */
    const Button = ({children, onClick, buttonStyle, size}) => {

      /** 
      * Get buttonStyle and size css CSS Modules styles object
      * Combine them into one class using classnames package
      */
      let className = cx(
        styles[buttonStyle],
        styles[`${size}Size`]
      );

      return (
        <button 
          onClick={onClick} 
          className={className}
        >
          {children}
        </button>
      );
    }

    /** Define all available proptypes with description */
    Button.propTypes = {
      /** Button label */
      children: PropTypes.string.isRequired,
      /** Function to call when button is clicked */
      onClick: PropTypes.func,
      /** Button's style type */
      buttonStyle: PropTypes.oneOf([
        'normal', 
        'primary', 
        'inverse', 
        'textLink'
      ]),
      /** Size of the button */
      size: PropTypes.oneOf([
        'normal', 
        'large'
      ]),
      /** Set true if button should be full-width, else leave blank */
      isFullWidth: PropTypes.bool,
    }

    /** Set all default props for non-required props */
    Button.defaultProps = {
      buttonStyle: 'normal',
      size: 'normal',
      isFullWidth: false,
    }

    export default Button;
    ```

3. **Add a component `README.md`** titled after the component in its directory, e.g. `/Button/Button.md`. *This is where you will [document the component](https://github.com/apennell/annies-component-lab#documenting-components) and display examples of it to render in the component lab*. Any code block without a language tag will be rendered as a React component (the examples) with a live preview and its code. The code block in the component lab is editable in the browser!
    * Using markdown, start with any necessary notes or descriptions provided by Design.
    * Provide code examples showing the use of available props, options and variations. 
    * For example, for `<Button />`, there is a section with an example of each of the following: options (button style), size, tags, and states. In the size example, there are default, large, and full-width buttons shown. 
    * Add any additional instructions, descriptions, or notes from Design along with each of these examples so their purpose and implementation can be clearly understood without further explanation. 

4. **Add a `.css` file** for that component within its directory, e.g. ` /Button/Button.css`, and `import` it in the .jsx file, e.g. in `/Button/Button.jsx`, add `import styles from './Button.css';`. 
    * To keep our styles localized and modularized, we use [CSS Modules](https://github.com/css-modules/css-modules).
    * With CSS Modules, you can't access anything outside of its own css file. This is great and intentional! However, we don't want to have to redefine variables like colors in ever file, so we use [postcss-modules-values](https://github.com/css-modules/postcss-icss-values) to pass values from stylesheets in `src/style_vars` wherever you need them.
    * Read more about how to style your components [here](#styling-components).

5. If you want to test the component outside of the component library, **add the component to the create-react-app**.
    * In `src/App.js`, `import` the component, e.g. `import Button from './components/Elements/Button/Button.jsx';`.
    * Add the desired DLS component as specified in the App component.
    * View the component in your browser at `http://localhost:3000/`.

[Styleguidist](https://react-styleguidist.js.org/docs/components.html) searches and parses components following the global structure of `src/components/**/*.{js, jsx}`. It ignores test files (`__tests__` directory and files names containing .`test.js, .test.jsx, .spec.js and .spec.jsx`). 

The general file structure should be as follows:
```
styleguide-1.0
  |__config #create-react-app's config files
     |__webpack.config.dev.js
     |__webpack.config.prod.js
  |__docs #additional md docs that can be included in style guide
     |__{Identity}.md
  |__src
     |__components
        |__Elements
           |__Button 
              |__Button.css
              |__Button.jsx 
              |__Button.md 
           |__Modal
              |__Modal.css
              |__Modal.jsx
              |__Modal.md
         |__Pages
            |__SomePage
  |__styleguide #style guide build files--gitignore these
     |__build
  |__styleguide.config.js #configuration for styleguidist
```

The style guide components build into `styleguide/build`, however the `styleguide` directory should be included in the `.gitignore` file.



### Documenting components

Format for documentation to be parsed and appear in component lab:
```
/**
* Documentation text here. Markdown is *supported*.
*/
```

* By default, any methods your components have are considered to be private and are not published. Mark your public methods with JSDoc `@public` tag to get them published in the docs.
*  By default, all props in components are considered public and published in component lab docs. If you need to remove a prop from the documentation but keep in code, mark with JSDoc `@ignore` tag in the comment/description are directly above that prop.
* Available JSDocs tags for documenting components, props, and methods: [@deprecated](http://usejsdoc.org/tags-deprecated.html), [@see, @link](http://usejsdoc.org/tags-see.html), [@author](http://usejsdoc.org/tags-author.html), [@since](http://usejsdoc.org/tags-since.html), and [@version](http://usejsdoc.org/tags-version.html). You can also use [@param, @arg, @argument](http://usejsdoc.org/tags-param.html) for documenting props.
* Code examples in Markdown files use ES6+JSX syntax and can access all components in the component lab using global variables (although ES6 `import` syntax isn't supported within these files), e.g.: 
    ```
    <Panel>
      <p>Using the Button component in the example of the Panel component:</p>
      <Button>Push Me</Button>
    </Panel>
    ```

* Each example (in the `ComponentName.md` file) has its own state, accessible with the `state` variable and changed with the `setState` function:
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

* You can also create `React.Component`s in your code examples:
    ```
    class SortTable extends React.Component {
      constructor() {
        super();
        this.state = { /* ... */ };
      }
      render() {
        const { columns, rows } = this.state;
        const sortedRows = require('sortabular').sorter({ /* ... */ })(rows);
        return (
          <TableProvider columns={columns}>
            <Table.Header />
            <Table.Body rows={sortedRows} rowKey="id" />
          </TableProvider>
        );
      }
    }
    <SortTable />
    ```

**View more documentation in [Styleguidist's Cookbook](https://react-styleguidist.js.org/docs/cookbook.html).**



### Styling components

To modularize our styles and classes and reduce the risk of global namespacing and clashing, we are using **[CSS Modules](https://github.com/css-modules)**. 

> A **CSS Module** is a CSS file in which all class names and animation names are scoped locally by default.
> CSS Modules compile to a low-level interchange format called ICSS or Interoperable CSS, but are written like normal CSS files.
> When importing the CSS Module from a JS Module, it exports an object with all mappings from local names to global names.

This means we get to forgo a crazy naming system and allow descriptions to remain simple because they remain isolated in their own context! For instance, we can give a `<Button />` componant a class as generic as `.normal` to indicate the default button style without worrying about a modal being defined as normal somewhere else because it will be exported with `Button__` appended to it. 

#### Configuration 

[Configuration](https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2) is already setup for using Webpack and PostCSS, but just for reference, this was done by ejecting the create-react-app to get access to the `webpack-config` files and adding the following to `webpack-config.dev.js` and `webpack-config.prod.js`:
```js
...
{
  loader: require.resolve('css-loader'),
    options: {
      importLoaders: 1,
      modules: true,
      localIdentName: 
        '[name]__[local]___[hash:base64:5]&sourceMap&-minimize',
    },
},
...
```

#### Create a CSS Module

1. Create a `css` sheet within the component's unique directory: `src/components/Elements/Button/Button.css`.
2. `import` it in your `jsx` file (`src/components/Elements/Button/Button.jsx`) as `styles`: `import styles from './Button.css';`
3. Pass `className` to your component as `styles.class`, which will access the defined class' styles from the defined stylesheet. For example: 
  `className={styles.large}` looks for the `style` variable, which is `./Button.css`, so it goes into `./Button.css` and looks for the class `large`. The properties defined by `.large` within `./Button.css` are passed back to that component. 

CSS Modules isn't into using multiple class names, so we use **[Classnames](https://github.com/JedWatson/classnames)** to combine them. Read how to use that in our component lab [here](#classnames). 

*Note:* We tried [React CSS Modules](https://github.com/gajus/react-css-modules), which didn't work with Jest and [isn't recommended](https://github.com/gajus/react-css-modules/issues/196) by the creator anymore. Then tried newer [babel-plugin-react-css-modules](https://github.com/gajus/babel-plugin-react-css-modules) but couldn't get that running. Back to CSS Modules it was!


#### Passing values to modules

"But Annie!" you cry. "We don't want to redefine global variables like brand colors and typography in every CSS file! There goes the whole purpose of all this!"
Don't worry! That's why we use **[postcss-icss-values](https://github.com/css-modules/postcss-icss-values)**! This is a **[PostCSS](https://github.com/postcss/postcss)** plugin to allowing passing values to individual CSS modules.

`src/style_vars` has stylesheets containing identity values defined in our style guide, including `colors.css` and `typography.css`. To use one of the variables in your css module, `import` that sheet and the specific variables you want to access at the top of your stylesheet. For example, to get our primary color and grey into the `<Button />` component:
```
// style_vars/colors.css
@value primary-color: #64a0e8;
@value grey: #a5a5a5;

// components/Elements/Button/Button.css
@value colors: "../../style_vars/colors.css";
@value primary-color, grey from colors;

.button {
  color: grey;
  border-color: primary-color;
}
```

Additionally, selectors *can* be set to global scope, but you want make sure you really need it. To do so, add `:global` in front of the identifier. For example:
```
:global(h1) {
  font-size: 42px;
}
```

In this example, the font size set above would be applied on all `h1`s that aren't overridden by a more specific rule. The general typography outlined in the style guide, including `h1` - `h6`, `p`, `a`, and lists, is globally defined in `src/style_vars/typography.css` so that standard HTML tags can be used throughout coding without ever needing to redefine basic type. There are also a few utility classes, such as `.weight-bold` and `.italic-text`.

Those are the basics that should get you up and running, but read more [here](https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2) and [here](https://github.com/gajus/react-css-modules/tree/master/src) and [here](http://lmgtfy.com/?q=css+modules). 



### Running Tests

We are using [Jest](https://facebook.github.io/jest/) as the test runner with [Enzyme](http://airbnb.io/enzyme/index.html) to make it easier to assert, manipulate, and traverse the components' output and [jest-enzyme](https://github.com/blainekasten/enzyme-matchers/blob/master/packages/jest-enzyme/README.md) for assertion helpers.

1. Create a file `*.test.js` within the directory of the component to test, i.e. `src/components/Elements/Button/Button.test.js` for a `<Button />` test.
2. If you'll need to find a node in your test, give it a `data-spec` attribute in your `js` file and use the `getSpecWrapper` helper to find nodes with a named `data-spec` attribute from your test. Read more on this [from Eventbrite here](https://github.com/eventbrite/javascript/blob/master/react/testing.md#finding-nodes).
3. Start with a simple [smoke test](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components) to make sure the component simply mounts doesn't throw during rendering. You can use Enzyme's [Shallow Api](http://airbnb.io/enzyme/docs/api/shallow.html) to test components in isolation from the children components they render so your tests aren't indirectly asserting on behavior of child components.
4. [Test events](https://github.com/eventbrite/javascript/blob/master/react/testing.md#testing-events). Example of testing a button's `onClick` event:
  ```js
  import React from 'react';
  import { shallow } from 'enzyme';
  import Button from './Button.jsx';

  it('calls the onClick prop when button click is simulated', () => {
    const mockOnClick = jest.fn();

    // pass mock function to component as `onClick` prop
    const wrapper = shallow(<button onClick={mockOnClick} />);
    const buttonWrapper = wrapper.find('button');

    // simulate `onClick` event on button
    buttonWrapper.simulate('click');

    // assert that stubbed function was called 
    expect(mockOnClick).toHaveBeenCalled();
  });
  ```
5. Run `npm test` to run the latest tests since the last commit. `npm test -- --coverage` will show overall test coverage. 


**Testing Resources and Docs**

* [Jest](http://facebook.github.io/jest/docs/getting-started.html)
* [Jest Mock Functions API](http://facebook.github.io/jest/docs/mock-function-api.html)
* [Enzyme](http://airbnb.io/enzyme/index.html)
* [jest-enzyme](https://github.com/blainekasten/enzyme-matchers/blob/master/packages/jest-enzyme/README.md)
* [Create React App testing docs](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)
* [Eventbrite's React testing best practices guide](https://github.com/eventbrite/javascript/blob/master/react/testing.md)
* [Jest/Enzyme testing tutorial](https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f) by the creator of React Styleguidist



## Implementing the Components

To include the component lab's components into your project, you must manually add this git repository's address into your project's `package.json` dependencies, as follows:

```
  "dependencies": {
    "annies-component-lab": "git@github.com:apennell/annies-component-lab.git#master"
  }
```

This will pull from the `master` branch of the `annies-component` repository, although you can replace `master` in the link with a version number, a tag name, or a commit hash.

Note: If you are using a branch name, new commits will **not** be automatically pulled into your project when you perform npm install / updates. Instead, you will need to manually remove the `annies-component-lab` package from your project component(s)'s `node_modules` and then run `npm install` again. 

Once you have the dependency installed, you'll need to import the specific individual components into your project's component. For example, to add the `<Button />` component from the lab to a React component in the app, add at the top of your `.js(x)` file:
```js
// ES6
import { Button } from 'annies-component-lab';

// ES5
var Button = require('annies-component-lab').Button;
```
You will now be able to use `<Button />` like any other component.



## Lab Skeleton

### React Styleguidist
The component lab/style guide was built using **[React Styleguidist](https://react-styleguidist.js.org/)**. Usage of this package in our component lab is pretty well-documented here, but checkout their documents and [cookbook](https://react-styleguidist.js.org/docs/cookbook.html) for more information.

### CSS Modules
To modularize our styles and classes and reduce the risk of global namespacing and clashing, we are using **[CSS Modules](https://github.com/css-modules)**. See the section on [styling components](#styling-components) for more on our implementation.

### Classnames
The **[Classnames](https://github.com/JedWatson/classnames)** package can be used for applying multiple classes on a component. It's a "simple JavaScript utility for conditionally joining classNames together." 

1. Add `import cx from 'classnames';` to the top of your component `.jsx` file.
2. Add a variable that will hold and respresent all the class names.
3. Pass the class names to the variable using `cx()`, where `cx` is the `classnames` utility, as defined on import.
    * Join the variables with commas inside the parentheses.
    * The function takes any number of arguments and can be a string or object.
    * Falsy values given to a key aren't included in output.
4. Pass that variable to the `className` prop on the component: `className={className}`, where the second className in braces is the variable you created earlier.

```js
/** src/components/Elements/Button/Button.jsx */
import cx from 'classnames';

const Button = ({children, buttonStyle, size, isFullWidth, disabled, loading}) => {
  let className = cx(
    styles[buttonStyle],
    /** appends text to the string from the 'size' prop */
    styles[`${size}Size`],
    {
      /** only includes the classes if the prop is true */
      [styles.block]: isFullWidth,
      [styles.disabled]: disabled,
      [styles.loading]: loading
    }
  );

  return (
    <button 
      className={className}
    >
      {children}
    </button>
  );
}
```

In the example above, we're only have one `className` variable, but what if we have many different instances of `className` with various values? Additionally, maybe some of the classes pull from the local CSS Module but a few are global styles. You can pass the classes you want to use to a helper function, which will then return them with `classNames`:
```js
setClass = (classes) => {
  let classNames = [];
  classes.map((thisClass) => 
    classNames.push(thisClass)
  );
  return cx(classNames)
}

render() {
  return(
    <div className={
      this.setClass([
        styles.typographyTitle, 
        styles.colorSwatch, 
        'weight-normal', 
        'text-primary'
      ])
    } >
      Brand
    </div>
  );
}
```

### Create React App
The component lab's skeleton was bootstrapped with **[Create React App](https://github.com/facebookincubator/create-react-app)**. The following is some information from Create React App's README about how to perform common tasks.<br>
You can find the most recent version of the full guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

#### Updating to New Releases

...SIKE! You cant. We had to [run eject](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html#no-lock-in) on the create-react-app in order to customize the configuration and add CSS Modules (and more in the future?!). This effectively forked the app into our own version, so we can't pull their updates.

Create React App is divided into two packages:

* `create-react-app` is a global command-line utility that you use to create new projects.
* `react-scripts` is a development dependency in the generated projects (including this one).


#### Folder Structure

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.
