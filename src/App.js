import './App.css';
import {Books} from "./components/Books/Books";
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'
import {CreateBook} from "./components/Books/CreateBook";
import Header from "./components/Header/Header";
import {Authors} from "./components/Auhtor/Authors";
import {Countries} from "./components/Countries/Countries";
import {Categories} from "./components/Categories/Categories";

function App() {
    return (
        <Router>
            <Header/>
            <div className="container p-0">
                <Switch>
                    <Route path="/" exact component={Books}/>
                    <Route path="/books" exact component={Books}/>
                    <Route path="/book/create" exact component={CreateBook}/>
                    <Route path="/book/edit/:id" exact component={CreateBook}/>
                    <Route path="/author" exact component={Authors}/>
                    <Route path="/country" exact component={Countries}/>
                    <Route path="/categories" exact component={Categories}/>
                    {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
