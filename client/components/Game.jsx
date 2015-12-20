Game = React.createClass({

  getInitialState() {
    return {
      ship: {
        info: {
          shipName:         "Falcon",
          captain:          "Sacha Greif",
          firstOfficer:     "Josh Owens",
          chiefEngineer:    "Ryan Glover",
          tacticalOfficer:  "Maciej Nowakowski",
          helmsman:         "Thomas"
        },

        position: {
          x: 500,
          y: 300
        },

        destination: {
          name: 'Sol',
          position: [500, 300],
          jurisdiction: 'Federation'
        },

        speed: 0
      }
    }
  },

  updateShipInfo(info) {
    let ship = this.state.ship;

    ship.info = info;
    this.setState({ ship: ship });

  },

  render() {

    return  (
      <div>
        <StarChart starData = { StarData } ship = { this.state.ship } />
        <HelmControl ship = { this.state.ship } updateShipInfo = { this.updateShipInfo } />
      </div>
    )
    
  }
})
  