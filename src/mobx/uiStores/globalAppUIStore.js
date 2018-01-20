
import { observable } from 'mobx';

class GlobalAppUIStore {

  @observable
  isLoading = false;

  set isLoading(value) {
    this.isLoading = value;
  }

}

export default new GlobalAppUIStore();
