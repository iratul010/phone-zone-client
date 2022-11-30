import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="text-accent p-10 min-h-screen">
      <h2 className="p-5 mb-4 text-3xl text-primary underline">Education can be acquired at different times of life.</h2>
      <div>
        <div className="collapse rounded ">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-stone-50  text-warn peer-checked:bg-secondary peer-checked:text-secondary-content  ">
            #1 What are the different ways to manage a state in a React application?
          </div>
          <div className="collapse-content   text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              The Four Kinds of React State to Manage When we talk about state in our applications, it’s important to be clear
              about what types of state actually matter. <br /> There are four main types of state you need to properly manage in
              your React apps: <br />
              1. Local state <br /> 2. Global state <br /> 3. Server state <br /> 4. URL state <br /> Let's cover each of these in
              detail: Local (UI) state – Local state is data we manage in one or another component. Local state is most often
              managed in React using the useState hook. For example, local state would be needed to show or hide a modal component
              or to track values for a form component, such as form submission, when the form is disabled and the values of a
              form’s inputs. Global (UI) state – Global state is data we manage across multiple components. Global state is
              necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common
              example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and
              change their data throughout our application. Sometimes state we think should be local might become global. Server
              state – Data that comes from an external server that must be integrated with our UI state. Server state is a simple
              concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state
              that must be managed every time you fetch or update data from an external server, including loading and error state.
              Fortunately there are tools such as SWR and React Query that make managing server state much easier. URL state –
              Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category
              of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL
              state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located
              in the URL! There are undoubtedly more pieces of state that we could identify, but these are the major categories
              worth focusing on for most applications you build.
            </p>
          </div>
        </div>
        <div className="collapse rounded ">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-stone-50  text-warn peer-checked:bg-secondary peer-checked:text-secondary-content  ">
            #2 How does prototypical inheritance work?
          </div>
          <div className="collapse-content   text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              In JavaScript, an object can inherit properties of another object. The object from where the properties are
              inherited is called the prototype. In short, objects can inherit properties from other objects — the prototypes.
              <br />
              Easy way to say - <br />
              Prototype inheritance in javascript is the linking of prototypes of a parent object to a child object to share and
              utilize the properties of a parent class using a child class. Prototypes are hidden objects that are used to share
              the properties and methods of a parent class to child classes.
            </p>
          </div>
        </div>
        <div className="collapse rounded ">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-stone-50  text-warn peer-checked:bg-secondary peer-checked:text-secondary-content  ">
            #3 What is a unit test? Why should we write unit tests?
          </div>
          <div className="collapse-content   text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              * What is a Unit Test ? <br />
              A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In
              most programming languages, that is a function, a subroutine, a method or property. The isolated part of the
              definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that
              such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the
              network, it touches the file system, it requires system configuration, or it can't be run at the same time as any
              other test." <br />
              * Why should we write unit tests? <br />
              Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and
              protect against bugs in the future. Sometimes developers write unit tests first, then write the code. This approach
              is also known as test-driven development (TDD).
            </p>
          </div>
        </div>
        <div className="collapse rounded ">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-stone-50  text-warn peer-checked:bg-secondary peer-checked:text-secondary-content  ">
            #4 React vs. Angular vs. Vue?
          </div>
          <div className="collapse-content   text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              {" "}
              <br />
              *React-
              <br />
              React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why
              it’s not strictly a framework. React Elements are the smallest building blocks of React apps. They are more powerful
              than DOM elements because the React DOM makes sure to update them efficiently whenever something changes. Components
              are larger building blocks that define independent and reusable pieces to be used throughout the application. They
              accept inputs called props and produce elements that are then displayed to the user. React is based on JavaScript,
              but it’s mostly combined with JSX (JavaScript XML), a syntax extension that allows you to create elements that
              contain HTML and JavaScript at the same time. Anything you create with JSX could also be created with the React
              JavaScript API, but most developers prefer JSX because it’s more intuitive.
              <br />
              *Angular- <br />
              AngularJS, the original framework, is an MVC (Model-View-Controller)) framework. But in Angular 2, there’s no strict
              association with MV*-patterns as it is also component-based. Projects in Angular are structured into Modules,
              Components, and Services. Each Angular application has at least one root component and one root module. Each
              component in Angular contains a Template, a Class that defines the application logic, and MetaData (Decorators). The
              metadata for a component tells Angular where to find the building blocks that it needs to create and present its
              view. Angular templates are written in HTML but can also include Angular template syntax with special directives to
              output reactive data and render multiple elements, among other things. Services in Angular are used by Components to
              delegate business-logic tasks such as fetching data or validating input. They are a distinct part of Angular
              applications. While Angular doesn’t enforce their use, it’s highly suggested to structure apps as a set of distinct
              services that can be reused. Angular is built in TypeScript, so its use is recommended to get the most seamless
              experience, but plain JavaScript is also supported.
              <br />
              *Vue- <br />
              The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend
              its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual
              framework. Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was
              partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application
              data is processed in a way that allows the framework to render an up-to-date View. Vue’s templating syntax lets you
              create View components, and it combines familiar HTML with special directives and features. This templating syntax
              is preferred, even though raw JavaScript and JSX are also supported. Components in Vue are small, self-contained,
              and can be reused throughout the application. Single File Components (SFCs) with the .vue extension contain HTML,
              CSS, and JavaScript so that all relevant code resides in one file. SFCs are the recommended way to organize code in
              Vue.js projects, especially larger ones. Tools such as Webpack or Browserify are required to transpile SFCs into
              working JavaScript code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
