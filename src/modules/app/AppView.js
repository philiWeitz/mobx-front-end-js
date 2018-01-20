
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router';
import { inject, observer } from 'mobx-react';

import SamplesView from '../samples/SamplesView';
import intervalUtil from '../../util/intervalUtil';

const REFRESH_INTERVAL = 5 * 1000;


@withRouter
@inject('routing')
@inject('samples')
@observer
class AppView extends React.Component {

  static propTypes = {
    samples: PropTypes.object.isRequired,
    routing: PropTypes.object.isRequired,
  };

  componentWillMount() {
    // add a refresh interval
    intervalUtil.addInterval(
      intervalUtil.FETCH_SAMPLES, this.props.samples.fetchSamples, REFRESH_INTERVAL);
  }

  componentWillUnmount() {
    // remove a refresh interval
    intervalUtil.cancelInterval(intervalUtil.FETCH_SAMPLES);
  }

  render() {
    const { location, push, goBack } = this.props.routing;

    return (
      <div>
        <div>HEADER</div>

        <div>
          <span>Current pathname: {location.pathname}</span>
          <button onClick={() => push('/test')}>Change url</button>
          <button onClick={() => goBack()}>Go Back</button>
        </div>

        <main>
          <Switch>
            <Route exact path="/test" component={SamplesView} />
          </Switch>
        </main>
      </div>
    );
  }
}


export default AppView;
