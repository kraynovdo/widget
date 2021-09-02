import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import PageSelect from './PageSelect';
import {PAGES} from './Pages';

function App() {
  return (
     <BrowserRouter>
        <div className="demo-app">
           <PageSelect/>
           <Switch>
              {PAGES.map(({href, Сomponent}) => (
                 <Route key={href} path={href}>
                    <Сomponent></Сomponent>
                 </Route>
              ))}
              <Redirect to={PAGES[0].href}/>
           </Switch>
        </div>
     </BrowserRouter>
  );
}

export default App;
