# The Coolest Thing I have done so far

This web app displays and has functionality coded with React, and uses the Spotify API to allow a user to search for songs and make playlists. You can find a live version of this at evancanintoreact.surge.sh .

This project makes my previous ones look like console.log("Hello world!") in comparison. I am so goddamn proud of it.

I used things like:
- React, to make a bunch of components (Some functional, some class) and have them pass info between each other
- Promises
- fetch requests
- The Spotify API, to get user data and post data acquired through interactions with the app
- surge, to deploy it
- npm 

Many console.logs were harmed in the debugging of this project.

Stuff that is here which I did not make:
- The CSS
- The images
- The name
- I made the JSX components, but their original iterations were based off of HTML provided by Codecademy. Their instructions are usually just commented out, you can probably see where their stuff ends and mine begins.

## Note

The first time you search for something during a session it might bug out and reload the page, but the subsequent times will work. This is due to how the app needs to pester the Spotify API for your access token even if you've already authenticated on their end, meaning that it will redirect you to Spotify which will immediately feed it the access token and redirect you back. This makes it look like the page reloads. I do not yet know enough to fix this issue.

## The default values (explanation)

The default values for the playlist and song are jokes (most of them related to my book, Humanity Endures) that won't actually work if you try to do stuff with them. 

This is the end of my notes, the rest is react boilerplate that I left intact because I *think* it's convention to do that. 

Even if it isn't, it's helpful for me to have a list of commands that I can easily refer to while updating this, so I'm leaving it!





### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
