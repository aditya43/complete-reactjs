## About This Project
ReactJS - Lifecycle Hooks

## Author
Aditya Hajare ([Linkedin](https://in.linkedin.com/in/aditya-hajare)).

## React lifecycle cheatsheet

| Method | Side effects<sup>1</sup> | State updates<sup>2</sup> | Example uses |
| :--- | :---: | :---: | :--- |
| <big>**Mounting**</big> |
| `componentWillMount` |  | ✓ | Constructor equivalent for `createClass ` |
| `render` |  |  | Create and return element(s) |
| `componentDidMount` | ✓ | ✓ | DOM manipulations, network requests, etc. |
| <big>**Updating**</big> |
| `componentWillReceiveProps` |  | ✓ | Update `state` based on changed `props` |
| `shouldComponentUpdate` |  |  | Compare inputs and determine if render needed |
| `componentWillUpdate` |  |  | Set/reset things (eg cached values) before next render |
| `render` |  |  | Create and return element(s) |
| `componentDidUpdate` | ✓ | ✓ | DOM manipulations, network requests, etc. |
| <big>**Unmounting**</big> |
| `componentWillUnmount` | ✓ |  | DOM manipulations, network requests, etc. |

For more information [see here](https://facebook.github.io/react/docs/react-component.html).

1. "Side effects" refer to modifying variables outside of the instance, async operations, etc.
2. "State updates" refer to the current instance only (eg `this.setState`).


React Component Lifecycle

- getInitialState
- getDefaultProps
- componentWillMount
- componentDidMount
- shouldComponentUpdate (Update only)
- componentWillUpdate (Update only)
- componentWillReceiveProps (Update only)
- render
- componentDidUpdate (Update only)
- componentWillUnmount/constructor
- componentDidUnmount

TIPS

- Keep state immutable
- Use React.Children to work with `this.props.children` https://facebook.github.io/react/docs/top-level-api.html#react.children
- Behaviour duplication in components can be refactored with mixins: https://facebook.github.io/react/docs/reusable-components.html#mixins
- BUT prefer higher order components to mixins https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750

### getDefaultProps

The result of getDefaultProps() will be cached and used to ensure that this.props.value will have a value if it was not specified by the parent component.

### componentWillMount()

Triggered before render().


### componentDidMount

Called after render. Can access refs.
The componentDidMount() method of child components is invoked before that of parent components.
This is the place to call external libraries, use setTimeout, make ajax requests

### shouldComponentUpdate(nextProps, nextState) - Update only

called when there are new props or state changes. return false to prevent a render. good for performance.

### componentWillReceiveProps(nextProps)  - Update only

Called before render when props change. Access to old props.
It is not triggered after the component is mounted.

### componentWillUpdate(nextProps, nextState)

Invoked immediately before rendering when new props or state are being received.
Not called for the initial render.
Cannot use setState in this method. Use componentWillReceiveProps instead.
Use this as an opportunity to perform preparation before an update occurs.

### render

Triggered when the state changes.

### componentDidUpdate(prevState, prevProps) - Update only

Access to prevState, prevProps
Use this as an opportunity to operate on the DOM when the component has been updated.


### componentWillUnmount

Clean up event bindings, etc.