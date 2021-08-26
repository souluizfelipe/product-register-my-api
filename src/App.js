
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import TemplateDefault from './template/Default'
import TemplatePage from './template/Page'
import List from './pages/List'

const App = () => {
  return (
    <>
      <Router>
        <TemplateDefault>
          <Switch>
            <Route path="/">
              <TemplatePage title="Product List"  Component={List} />
            </Route>
          </Switch>
        </TemplateDefault>
      </Router>
    </>
  );
}

export default App;
