import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  goToStore(event){
    event.preventDefault();
    //first grab the text from the box
    const storeId = this.storeInput.value;
    //second were going to transition from / to /store/:storeid
    this.context.router.transitionTo(`/store/${storeId}`);
  }
  render(){
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
        <button type="submit">Visit Store &#x2192;</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
