
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import TemplateDefault from './template/Default'
import TemplatePage from './template/Page'
import ListProducts from './pages/List'
import RegisterProducts from './pages/Register'

const App = () => {
  return (
    <>
      <Router>
        <TemplateDefault>
          <Switch>
            <Route path="/products/add">
              <TemplatePage title="Add New Product"  Component={RegisterProducts} />
            </Route>
            <Route path="/">
              <TemplatePage title="Product List"  Component={ListProducts} />
            </Route>
          </Switch>
        </TemplateDefault>
      </Router>
    </>
  );
}

export default App;
