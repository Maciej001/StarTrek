EditableElement = React.createClass({
  /*
    Props:
      updateInfo
      name - name of the field in info
      value - value of the field
  */

  getInitialState() {
    return {
      editing: false
    }
  },

  enterEditState() {
    this.setState({ editing: true });
  },

  checkEnter(e) {
    if ( e.charCode === 13 ) {
      this.finishEdit(e);
    }
  }, 

  finishEdit(e) {
    let newValue = e.target.value;
    this.props.updateInfo(this.props.name, newValue);
    this.setState({ editing: false })
  },

  render() {
    let isEditing = this.state.editing;

    return (
      isEditing ? 
        <td>
          <input
            type = "text"
            autoFocus = "true"
            onBlur = { this.finishEdit }
            onKeyPress = { this.checkEnter }
          />
        </td>
      :
        <td onClick={ this.enterEditState }>
          { this.props.value }
        </td>
    )
  }
})
  