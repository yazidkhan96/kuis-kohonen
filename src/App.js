import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './config/Route';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        {
          routes.map((url,i) => {
            return <Route key={i} path={url.path} component={url.component} exact/>
          })
        }
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
