
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import TemplateDefault from './template/Default'
import TemplatePage from './template/Page'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Router>
        <TemplateDefault>
          <Switch>
            <Route path="/">
              <TemplatePage title="Home"  Component={Home} />
            </Route>
          </Switch>
        </TemplateDefault>
      </Router>
    </>
  );
}

export default App;
