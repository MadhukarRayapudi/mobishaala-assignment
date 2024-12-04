import React from "react";
import Header from "./Components/Header";
import NewReleases from "./Components/NewReleases";
import CategoriesPage from "./Components/CategoriesPage";
import BlogPage from "./Components/BlogPage";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import { Routes, Route } from "react-router-dom";  // Only import Routes and Route

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<NewReleases />} />
      <Route path = "/categories" element = {<CategoriesPage />} />
      <Route path = "/blog" element = {<BlogPage />} />
      <Route path = "/login" element = {<LoginPage />} />
      <Route path = "/signup" element = {<SignupPage />} />
    </Routes>
  </div>
  )

export default App;
