StarShip = React.createClass({

  /* Props: 

  ship: {
        info: {
          shipName:         null,
          captain:          null,
          firstOfficer:     null,
          chiefEngineer:    null,
          tacticalOfficer:  null,
          helmsman:         null
        },

        position: {
          x: 500,
          y: 500
        },

        destination: {
          name: 'Sol',
          position: [500, 300],
          jurisdiction: 'Federation'
        },

        speed: 0
      }
    */

  render() {
    let state = this.state;
    let ship = this.props.ship;

    return (
      <image 
        xlinkHref="/images/starship.png"
        x = { ship.position.x }
        y = { ship.position.y }
        height = "20px"
        width = "20px" 
      />
    )
  }
})
