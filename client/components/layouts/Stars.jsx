Stars = React.createClass({

  renderStars(star, index) {
    let circleAttr = {
      cx: star.position[0],
      cy: star.position[1],
      r: 2,
      className: 'star-circle'
    };

    let textAttr = {
      x: star.position[0] + 5,
      y: star.position[1] + 5,
      className: 'star-name' + ' ' + star.jurisdiction
    }

    return (
      <g key={ index }>
        <text { ...textAttr } >
          { star.name }
        </text>
        <circle { ...circleAttr }></circle>
      </g>
    );


  },

  render() {
    return (
      <g>
        { this.props.starData.map(this.renderStars) }
      </g>
    )
  }
})
  