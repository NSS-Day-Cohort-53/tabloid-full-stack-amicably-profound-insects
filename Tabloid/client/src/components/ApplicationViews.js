import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import TagList from "./tags/TagList";
import { TagAddForm } from "./tags/TagAddForm";
import UserProfilesList from "./userProfiles/UserProfilesList";
import UserProfileDetails from "./userProfiles/UserProfileDetails";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
        </Route>

        <Route path="/tag" exact>
          {isLoggedIn ? <TagList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/tag/add" exact>
          {isLoggedIn ? <TagAddForm /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/userprofiles">
          {isLoggedIn ? <UserProfilesList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/userprofiles/details/:id(\d+)">
          {isLoggedIn ? <UserProfileDetails /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route>404 Not Found</Route>
      </Switch>
    </main>
  );
}
