
import { Provider } from '../react-redux/index';

import store from './store';
import Page from './Page';

const App = () => (
  <Provider store={store}>
    <Page />
  </Provider>
);
export default App;


