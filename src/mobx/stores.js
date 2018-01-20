
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import SamplesStore from './domainStores/samplesStore';


// create router
const RoutingStore = new RouterStore();

// create history
const browserHistory = createBrowserHistory();
export const history = syncHistoryWithStore(browserHistory, RoutingStore);

// combine stores
const stores = {
  samples: SamplesStore,
  routing: RoutingStore,
};

export default stores;
