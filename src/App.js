import './App.css';
import DataFetching from "./Components/DataFetching";
import Form from "./Components/Form"
import Page from "./Components/StaticPage"
import Home from "./Components/index"
import { BrowserRouter, Route, Switch } from "react-router-dom";
 


function App() {
  
  return (
    <BrowserRouter>
      
        
        <Switch>
        <Route path="/api" component={DataFetching} />
        
        <Route  path="/form" component={Form} />
        <Route  path="/static" component={Page} />
        
        
        <Route path="/" component={Home} />

        </Switch>
        
        
     
      
        
      </BrowserRouter>
  );
}

export default App;
