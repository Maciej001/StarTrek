StarChart = React.createClass({
  render() {
    let props = this.props;

    return (
      <div className="star-chart">
        <svg width="1000" height="600">
          <Stars starData={ props.starData } />
        </svg>
        
      </div>
    )
  }
})
  