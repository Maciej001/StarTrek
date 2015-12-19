Home = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },

  signup(e) {
    e.preventDefault();
    FlowRouter.go('/signup');
  },

  render() {
    return (
      <div className="home-page">
        <div className="container">

          <Game />

        </div>
      </div>
    )
  }
})
