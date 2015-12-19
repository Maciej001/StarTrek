Game = React.createClass({

  getInitialState() {
    return {
      ship: new Ship() 
    }
  }, 

  render() {
    let ship = this.state.ship;

    return  <StarChart starData = { StarData } ship = { ship } />
  }
})
  