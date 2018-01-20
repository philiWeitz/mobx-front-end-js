
import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';


@inject('samples')
@observer
class SamplesView extends React.Component {

  static propTypes = {
    samples: PropTypes.object.isRequired,
  };

  renderSample = (sample) => {
    return (
      <div key={`${sample.name}-${sample.rand}`}>
        <div>{sample.name}</div>
        <div>{sample.rand}</div>
      </div>
    );
  };

  render() {
    const { samples } = this.props.samples;
    return (
      <div>
        <div>Samples</div>
        <div>
          { samples.map(this.renderSample)}
        </div>
      </div>
    );
  }
}

export default SamplesView;
