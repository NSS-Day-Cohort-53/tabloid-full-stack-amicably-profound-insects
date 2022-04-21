import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import PostList from "./PostList";
import TagList from "./TagList";
import UserProfilesList from "./userProfiles/UserProfilesList";
import UserProfilesListDeactivated from "./userProfiles/UserProfilesListDeactivated";
import UserProfileDetails from "./userProfiles/UserProfileDetails";
import {CategoryList} from "./CategoryList"
import {CategoryForm} from "./CategoryForm"
import {CategoryEditForm} from "./CategoryEditForm"
import {AddReaction} from "./Reactions/AddReaction"
import { ReactionList } from "./Reactions/ReactionList";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Switch>
        <Route path="/posts" exact>
          {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/" exact>
          {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
        </Route>

        <Route path="/tag" exact>
          {isLoggedIn ? <TagList /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/userprofiles">
          {isLoggedIn ? <UserProfilesList /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/userprofiles/deactivated">
          {isLoggedIn ? (
            <UserProfilesListDeactivated />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>

        <Route path="/userprofiles/details/:id(\d+)">
          {isLoggedIn ? <UserProfileDetails /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/category">
          {isLoggedIn ? <CategoryList /> : <Redirect to="/login" />}
        </Route>
        <Route path="/category/add">
          {isLoggedIn ? <CategoryForm /> : <Redirect to="/login" />}
        </Route>
        <Route path="/category/:categoryId(\d+)">
          {isLoggedIn ? <CategoryEditForm /> : <Redirect to="/login" />}
        </Route>
        
        <Route path="/reaction/add">
          {isLoggedIn ? <AddReaction /> : <Redirect to="/login" />}
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
