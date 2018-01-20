
import { List } from 'immutable';
import { observable, action } from 'mobx';

import apiAction from '../../api/apiAction';
import SampleModel from '../../model/SampleModel';


class SamplesStore {

  @observable
  samples = List();

  @action
  fetchSamples = () => {
    apiAction.fetchSamples().then(({ data: samples }) => {
      this.samples = samples.map(SampleModel.build);
    });
  }

}

export default new SamplesStore();
