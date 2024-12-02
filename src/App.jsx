import React from "react";
import HelloMessage from "./Components/OnComponentsQ/HelloMessage";
import CurrentDate from "./Components/OnComponentsQ/CurrentDate";
import Buttons from "./Components/OnComponentsQ/Buttons";
import Hobbies from "./Components/OnComponentsQ/Hobbies";
import ProfileCard from "./Components/OnComponentsQ/ProfileCard";
import ListOfItemsUsingMap from "./Components/OnComponentsQ/ListOfItemsUsingMap";
import HobbiesList from "./Components/OnComponentsQ/HobbiesList";
import ButtonToggle from "./Components/Events/ButtonToggle";
import Counting from "./Components/Events/Counting";
import ChangeBgByHovering from "./Components/Events/ChangeBgByHovering";
import UserForm from "./Components/Events/UserForm";
import DropdownMenu from "./Components/Events/DropdownMenu";
import LoginForm from "./Components/FormsHandling/LoginForm";
import MultiStepForm from "./Components/FormsHandling/Mult-StepForm/MultStep";
import CheckboxForm from "./Components/FormsHandling/CheckboxForm";

import { BrowserRouter, Link } from "react-router-dom";
import Routes from "./Components/Router/Routess";
import Routess from "./Components/Router/Routess";
import ProductLouter from "./Components/Router/ProductList/ProductLouter";
import { AppNAv } from "./Components/Router/NavigationBar/NavigationBar";
import AppNested from "./Components/Router/NestedRouter/NestedRouter";
import Parent from "./Components/Part5/Q1";
import Counter from "./Components/Part5/Q2";
import AppHeavy from "./Components/Part5/Q3";
import AppToDo from "./Components/Part5/Q4";
import AppClock from "./Components/Part5/Q5";
import LecturerRegistrationForm from "./Components/Part6/LecturerRegistrationForm";
import StudentRegistrationForm from "./Components/Part6/StudentRegistrationForm";
import DriverRegistrationForm from "./Components/Part6/DriverRegistrationForm";
import BookRegistrationForm from "./Components/Part6/BookRegistrationForm";
import ModuleRegistrationForm from "./Components/Part6/ModuleRegistrationForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1>Part 1: Components</h1>
          <HelloMessage />
          <CurrentDate />
          <Buttons color="black" text=" Black button" />
          <Buttons color="green" text=" Green button" />
          <HobbiesList />
          <div className="profile-card">
            <ProfileCard
              name="Dusengimana Jean Bosco"
              age={24}
              email="dusengimana06@example.com"
            />
            <ProfileCard
              name="Byukusenge Immacule"
              age={23}
              email="immacule@example.com"
            />
            <ProfileCard
              name="sangano Bruce Principle"
              age={30}
              email="sangano@example.com"
            />
          </div>
          <ListOfItemsUsingMap />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1>Part 2: Events</h1>
          <ButtonToggle />
          <Counting />
          <ChangeBgByHovering />
          <UserForm />
          <DropdownMenu />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1>Part 3: Forms Handling</h1>
          <LoginForm />
          <h1>MultistepForm</h1>
          <MultiStepForm />
          <h1>CheckboxForm</h1>
          <CheckboxForm />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1>Part 4 React Routers</h1>
          <div className="routers">
            <div>
              <Link to="/">
                {" "}
                <h3>Home</h3>
              </Link>
            </div>
            <div>
              <Link to="/about">
                {" "}
                <h3>About</h3>
              </Link>
            </div>
            <div>
              <Link to="/contact">
                {" "}
                <h3>Contacts</h3>
              </Link>
            </div>
          </div>
          <Routess />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1>Product List</h1>
          <Link to="/product">Go To product</Link>
          <ProductLouter />
          <h1>Create Navigation Bar</h1>
          <AppNAv />
          <h1>Nested Router</h1>
          <AppNested/>
          <Link to='/blog'>Blogs</Link>
        </div>
      </BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <h1>Part 5 React Memo</h1>
        <Parent/>
        <h1>Counter using react memo</h1>
        <Counter/>
        <h1>Heavy Culculation</h1>
        <AppHeavy/>
        <h1>To Do Use Mome</h1>
        <AppToDo/>
        <h1>Clock</h1>
        <AppClock/>
      </div>
      <div>
        <h1>Lecturer Registration Form</h1>
        <LecturerRegistrationForm/>
        <h1>Student Registration Form</h1>
        <StudentRegistrationForm/>
        <h1>Driver Registration Form</h1>
        <DriverRegistrationForm/>
        <h1>Book Registration Form</h1>
        <BookRegistrationForm/>
        <h1>Module Registration Form</h1>
        <ModuleRegistrationForm/>
      </div>
    </>
  );
};

export default App;
