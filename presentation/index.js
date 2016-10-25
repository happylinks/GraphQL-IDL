// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  cat: require("../assets/cat.gif"),
  redux: require("../assets/redux.png")
};

preloader(images);

const theme = createTheme({
  primary: "#00AAFF"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              React, Redux &amp; Backbone
            </Heading>
            <Heading size={1} fit caps>
              Basic introduction and discussion
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps textColor="primary" textFont="primary">
              Talking points
            </Heading>
            <List textColor="tertiary">
              <Appear><ListItem>Basic React</ListItem></Appear>
              <Appear><ListItem>Basic Redux</ListItem></Appear>
              <Appear><ListItem>React and Backbone</ListItem></Appear>
              <Appear><ListItem>Read more...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps textColor="black" textFont="primary">
              Basic React
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/react/component/class.example")}
            ranges={[
              { loc: [0, 36], title: "Basic React View" },
              { loc: [2, 3], note: "Compare with Backbone.View.extend({" },
              { loc: [3, 6], note: "Define the props and their types. React will warn you when wrong types are used." },
              { loc: [8, 9], note: "Return JSX, compare with EJS templates" },
            ]}/>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/react/component/function.example")}
            ranges={[
              { loc: [0, 36], title: "Arrow Function React View" },
              { loc: [2, 3], note: "When your component is 'dumb', use this instead of class. It's cleaner and forces you to keep components simple." },
              { loc: [6, 9], note: "Define the props on the function." },
            ]}/>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/react/component/function_deconstruct.example")}
            ranges={[
              { loc: [0, 36], title: "Arrow Function React View" },
              { loc: [2, 3], note: "Small trick, you can use es6 deconstructoring to directly get the object properties." },
            ]}/>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/react/jsx.example")}
            ranges={[
              { loc: [0, 36], title: "JSX" },
              { loc: [4, 5], note: "You can define a style object, provide a basic string, or use a variable as attribute." },
              { loc: [5, 7], note: "Within {} you can execute normal javascript." },
              { loc: [7, 12], note: "Use .map to loop through a list. Set unique 'key' for children." },
              { loc: [13, 18], note: "Use ternary operators to create if-statements. This is the recommended practice. Too bad John!" },
              { loc: [19, 22], note: "No else statement? Just use null." },
            ]}/>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/react/props.example")}
            ranges={[
              { loc: [0, 36], title: "Props" },
              { loc: [2, 5], note: "We have our dumb component." },
              { loc: [10, 12], note: "Include it with the prop 'name'. You can compare this to Backbone 'options' object." },
            ]}/>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/react/state.example")}
            ranges={[
              { loc: [0, 0], title: "State" },
              { loc: [7, 13], note: "Set the initial state in the constructor." },
              { loc: [17, 27] },
              { loc: [30, 33] },
            ]}/>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/react/lifecycle.example")}
            ranges={[
              { loc: [0, 0], title: "View Lifecycle" },
              { loc: [3, 15] },
              { loc: [15, 24] },
              { loc: [24, 28] },
            ]}/>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps textColor="primary" textFont="primary">
              Questions about React?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps textColor="black" textFont="primary">
              Basic Redux
            </Heading>
            <Image src={images.redux.replace("/", "")} height="400px" />
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/redux/action.example")}
            ranges={[
              { loc: [0, 0], title: "Actions" },
              { loc: [0, 2], note: "Create constants for your action names." },
              { loc: [3, 12], note: "Create a function that returns your action as an object." },
              { loc: [13, 21] },
            ]}/>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} caps textColor="white" textFont="primary">
              Actions are "dispatched". This means that the action is send to all reducers.
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/redux/reducer.example")}
            ranges={[
              { loc: [0, 0], title: "Reducers" },
              { loc: [0, 4], note: "Reducers use the action constants to check if they should respond to an action." },
              { loc: [5, 9], note: "You can set the initial state of the reducer." },
              { loc: [10, 11], note: "A reducer decides the data in a part of the global state object. In this case the 'modal' property." },
              { loc: [10, 11], note: "Every time any action is dispatched, every reducer-function will fire." },
              { loc: [11, 17], note: "A reducer checks if the action is one of its own action types and mutates its part of the global state." },
              { loc: [18, 23] },
            ]}/>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/redux/store.example")}
            ranges={[
              { loc: [0, 0], title: "Store" },
              { loc: [2, 6], note: "Import all reducers." },
              { loc: [7, 13], note: "Create the global store with all reducers." },
            ]}/>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} caps textColor="white" textFont="primary">
              Redux Store consists of Reducers. These Reducers update the Store using dispatched Actions.
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/redux/container.example")}
            ranges={[
              { loc: [0, 0], title: "State & UI" },
              { loc: [7, 15], note: "Connect this component to the global store." },
              { loc: [9, 12], note: "Put the 'session' object in the global store in this.props.session." },
              { loc: [13, 14], note: "Create a dispatch-function for the showModal action, put it in this.props.showModal." },
              { loc: [20, 26], note: "Call the showModal function to dispatch the action." },
              { loc: [26, 34], note: "Show data from global state, create button to show modal." },
            ]}/>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} caps textColor="white" textFont="primary">
              Connect React Components to the global Store with @connect. Component rerenders when Store is changed.
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps textColor="black" textFont="primary">
              React and Backbone
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/react-backbone/react-in-backbone.example")}
            ranges={[
              { loc: [0, 0], title: "React in Backbone :)" },
              { loc: [2, 5], note: "Beautiful React View." },
              { loc: [6, 25], note: "Beautiful Backbone View." },
              { loc: [6, 25] },
            ]}/>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} caps textColor="white" textFont="primary">
              Start building your views in React on top of your old Backbone views!
              Keep components re-usable for later, when you want to go all-in React.
            </Heading>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/react-backbone/backbone-in-react.example")}
            ranges={[
              { loc: [0, 0], title: "Backbone in React :(" },
              { loc: [2, 5], note: "Beautiful Backbone View." },
              { loc: [14, 19], note: "Create div with a reference on the component." },
              { loc: [7, 13], note: "Create new backbone view and attach it to the div" },
            ]}/>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} caps textColor="white" textFont="primary">
              Attaching Backbone Views in React is hard and kinda ugly. Would not suggest.
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} caps textColor="white" textFont="primary">
              Read more
            </Heading>
            <Text textSize="1.5em" margin="20px" bold>
              React, Redux and all plugins are updated each day. Read as much tutorials, guides and twitter feeds as you can.
            </Text>
            <Heading size={5} caps textColor="white" textFont="primary">
              Homework:
            </Heading>
            <List textColor="white">
              <Link textColor="white" href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.6nr8e2ilh"><ListItem>Smart vs Dumb Components</ListItem></Link>
              <Link textColor="white" href="https://github.com/yelouafi/redux-saga"><ListItem>Redux Saga (API calls done right)</ListItem></Link>
              <Link textColor="white" href="https://github.com/ReactTraining/react-router"><ListItem>React Router (The Router for React)</ListItem></Link>
              <Link textColor="white" href="https://github.com/gaearon/react-hot-loader"><ListItem>React Hot Loader (Fast development)</ListItem></Link>
              <Link textColor="white" href="https://facebook.github.io/draft-js/"><ListItem>Draft.JS (Awesome wysiwyg in React)</ListItem></Link>
              <Link textColor="white" href="https://twitter.com/dan_abramov"><ListItem>Twitter of Dan Abramov (Redux Creator)</ListItem></Link>
            </List>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={6} caps fit lineHeight={1.5} textColor="black">
              Made with ❤️ by Birdy &amp; Label A
            </Heading>
            <Image width="100%" src={images.cat}/>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
