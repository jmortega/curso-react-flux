import { Store } from 'flux/utils';
import Dispatcher from '../app_dispatcher';
import { CATALOG_RECEIVE } from '../action_types';

//keeps our catalog items
var __products = [];
//indicates if the catalog has products loaded
var __isLoaded = false;

export class CatalogStore extends Store {
  getProducts(){
    return __products;
  }

  getProductById(id){
    return __products.find(x => x.id === id);
  }


  __onDispatch(action){
    switch(action.type){
      case CATALOG_RECEIVE:
       __products = action.products;
       this.__emitChange();

      default:
        return;
    }
  }
}

export default new CatalogStore(Dispatcher);


