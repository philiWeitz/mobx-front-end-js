
import { Record } from 'immutable';

const SampleModel = Record({
  name: '',
  rand: 0,
});

SampleModel.build = (data) => new SampleModel(data).set('rand', Math.random(100));

export default SampleModel;
