HelmControl = React.createClass({
  /*
    Props:
      ship - object
      updateShipInfo = function(info)
  */

  render() {

    return (
      <div className="helm">
        <div id="helm-header">
          <h1>Helm Control</h1>
        </div>
        <ShipInfo 
          info = { this.props.ship.info }
          updateShipInfo = { this.props.updateShipInfo }
        />
      </div>
    )
  }
})
  