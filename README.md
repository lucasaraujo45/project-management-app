![](https://github.com/lucasaraujo45/project-management-app/blob/master/src/js/component/dashboard/sidebar/lightlogo.png)

Final project for 4Geeks Acedemy. Built with Reactjs⚛️, Flux, Python🐍, SQLAlchemy, Flask

JECTO.PRO is a project management progressive web app. Similiar to monday.com. 
-Allows you to create tasks, assign the task to different team members, set twilio text reminders when a task is close to due date, & more.

#Project Management App
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/react-hello-webapp.git)

#backend Located
https://github.com/EddyKudo/Flask-Tasks_and_Users_Database
backend Technology: Python + Flask + SQLAlchemy

### Requirements:
- Make sure you are using node version 8

##### Install the packages:
```
$ npm install
````````

Start the webpack server with live reload:
`$ npm run start` for windows, mac, linux or Gitpod.


### UI Library
build with material-Ui;
check material-ui's documentation at material-ui.com


**Note (New changes 01/02/20)**: Components have been converted into functions to support the use of hooks:
* Instead of a class component, we're using a `const` function.
* Class `constructor` and `state` have been replaced by `useState()` hooks.
* `componentDidMount()` was replaced by `useEffect({}, [])` - It runs at mount thanks to the second parameter (`[]`).
* `Actions` and `Store` still work the same way.

```jsx
// Previous "Class Oriented"
export class Demo extends React.Component {
	constructor(props) {
		super(props);

		this.state = getState('code here');
	}
}

// New "Functional Oriented"
export const Demo = () => (
	const [state, setState] = getState('code here'); //using the state (if needed)
  const { store, actions } = useContext(Context); // using the context (if needed)

);
```

### Context
Centralized general Context API @ `./src/js/store/flux.js` has a base structure for the store



```jsx
import { Context } from "../store/appContext";
const MyComponentSuper = () => {
  const { store, actions } = useContext(Context);
  return <div>{/* you can use your actions or store inside the html */}</div>
}

```sh
$ npm run deploy
```
Note: You will need to [configure github pages for the branch gh-pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages)
