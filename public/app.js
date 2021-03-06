const PLAYERS = [{
  name: "Jim Blunt",
  score: 34,
  id: 1
}, {
  name: "Sarah Blunt",
  score: 54,
  id: 2
}];

function Header(props) {
  return React.createElement(
    "div",
    { className: "header" },
    React.createElement(
      "h1",
      null,
      props.title
    )
  );
  Header.propTypes = {
    title: React.PropTypes.string.isRequired
  };
}

const Counter = React.createClass({
  displayName: "Counter",

  propTypes: {
    initialScore: React.PropTypes.number.isRequired
  },
  getInitialState: function () {
    return {
      score: this.props.initialScore
    };
  },

  incrementScore: function () {
    this.setState({
      score: this.state.score + 1
    });
  },

  decrementScore: function () {
    this.setState({
      score: this.state.score - 1
    });
  },

  render() {
    return React.createElement(
      "div",
      { className: "counter" },
      React.createElement(
        "button",
        { className: "counter-action decrement", onClick: this.decrementScore },
        " - "
      ),
      React.createElement(
        "div",
        { className: "counter-score" },
        this.state.score,
        " "
      ),
      React.createElement(
        "button",
        { className: "counter-action increment", onClick: this.incrementScore },
        " + "
      )
    );
  }
});

function Player(props) {
  return React.createElement(
    "div",
    { className: "player" },
    React.createElement(
      "div",
      { className: "player-name" },
      props.name
    ),
    React.createElement(
      "div",
      { className: "player-scrore" },
      React.createElement(Counter, { initialScore: props.score })
    )
  );
  Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired
  };
}
function Application(props) {
  return React.createElement(
    "div",
    { className: "scoreboard" },
    React.createElement(Header, { title: props.title }),
    React.createElement(
      "div",
      { className: "players" },
      props.players.map(player => {
        return React.createElement(Player, { name: player.name, score: player.score, key: player.id });
      })
    )
  );
  Application.propTypes = {
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired,
      id: React.PropTypes.number.isRequired
    })).isRequired
  };
}

ReactDOM.render(React.createElement(Application, { title: "My scoreboard", players: PLAYERS }), document.getElementById("container"));
