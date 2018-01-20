
import mockyApi from './api';

const ApiAction = {

  fetchSamples: () => {
    return mockyApi.get('/v2/5a561fe62f00002a2ebeeca0');
  },

};

export default ApiAction;
