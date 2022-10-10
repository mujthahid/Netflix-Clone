import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {Originals} from './Urls'
import {Action} from './Urls'
import {Comedy} from './Urls'
import {Romance} from './Urls'
import {Horror} from './Urls'
import {Adventure} from './Urls'
import {Animation} from './Urls'
import {Crime} from './Urls'
import {Drama} from './Urls'
import {Family} from './Urls'
import {Fantasy} from './Urls'
import {Mystery} from './Urls'
import {Science_Fiction} from './Urls'
import {Tv_Movie} from './Urls'
import {Thriller} from './Urls'
import {War} from './Urls'
import {Western} from './Urls'
import Contact from "./Components/Contact/Contact";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Originals' URL={Originals} />
      <RowPost title='Action' URL={Action} isSmall />
      <RowPost title='Adventure' URL={Adventure} isSmall />
      <RowPost title='Animation' URL={Animation} isSmall />
      <RowPost title='Comedy' URL={Comedy} isSmall />
      <RowPost title='Crime' URL={Crime} isSmall />
      <RowPost title='Drama' URL={Drama} isSmall />
      <RowPost title='Family' URL={Family} isSmall />
      <RowPost title='Fantasy' URL={Fantasy} isSmall />
      <RowPost title='Horror' URL={Horror} isSmall />
      <RowPost title='Mystery' URL={Mystery} isSmall />
      <RowPost title='Romance' URL={Romance} isSmall />
      <RowPost title='Science Fiction' URL={Science_Fiction} isSmall />
      <RowPost title='Thriller' URL={Thriller} isSmall />
      <RowPost title='Tv Movie' URL={Tv_Movie} isSmall />
      <RowPost title='War' URL={War} isSmall />
      <RowPost title='Western' URL={Western} isSmall />
    <Contact/>
    </div>
  );
}

export default App;
