ShipInfo = React.createClass({
  /*
    Props:
      info - object ship.info
      updateShipInfo = function(info)
  */

  updateInfo(key, newValue) {
    let info = this.props.info;
    info[key] = newValue;
    this.props.updateShipInfo(info);
  },

  render() {
    let index = 0;
    let self = this;

    return (
      <div className="ship-info">
        <h2>Ship Info</h2>

        <table>
          <tbody>
            { _.map( this.props.info, function(value, name) {
                index += 1;
                return ( 
                  <tr key={ index }>
                    <td>{ name }</td>
                    <EditableElement
                      name = { name }
                      value = { value }
                      updateInfo={ self.updateInfo }
                    />
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
})

/*


*/
  