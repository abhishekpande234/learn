
import './App.css';
import StateTut from './pages/StateTut.js';
import StateTut2 from './pages/StateTut2.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import Popper from 'popper.js';
import ReducerTutorial from './pages/ReducerTutorial.js';
import EffectTutorial from './pages/EffectTutorial.js';
import LayoutEffectTutorial from './pages/LayoutEffectTutorial';
import ImperativeHandleTutorial from './pages/ImperativeHandleTutorial';
import RefTutorial from './pages/RefTutorial';
import NaviBar from './layout/Navibar.js';
import Todo from './component/Todo';
import Questions from './pages/Questions';
import ContextTutorial from './pages/ContextTutorial';
import AddQuestions from './pages/AddQuestions';
import EditQuestions from './pages/EditQuestions';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'



function App() {
  return (
    <Router>
    <div className="App">
    <NaviBar />
      <Switch>
      <Route exact path="/" component={StateTut} />
      <Route exact path="/StateTut2" component={StateTut2} />
      <Route exact path="/ReducerTutorial" component={ReducerTutorial}/>
      <Route exact path="/EffectTutorial" component={EffectTutorial}/>
      <Route exact path="/RefTutorial" component={RefTutorial}/>
      <Route exact path="/LayoutEffectTutorial" component={LayoutEffectTutorial}/>
      <Route exact path="/ImperativeHandleTutorial" component={ImperativeHandleTutorial}/>
      <Route exact path="/ContextTutorial" component={ContextTutorial}/>
      <Route exact path="/ImperativeHandleTutorial" component={ImperativeHandleTutorial}/>
      <Route exact path="/Todo" component={Todo}/>
      <Route exact path="/Questions" component={Questions}/>
      <Route exact path="/Questions/AddQuestions" component={AddQuestions}/>
      <Route exact path="/Questions/EditQuestions/:id" component={EditQuestions}/>
      
      </Switch>
    </div>
    </Router>
  );
};

export default App;
