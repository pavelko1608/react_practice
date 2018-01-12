const PLAYERS = [
  {
    name: "Jim Blunt",
    score: 34,
    id: 1
  },
  {
    name: "Sarah Blunt",
    score: 54,
    id: 2
  }
]

function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  )
  Header.propTypes = {
    title: React.PropTypes.string.isRequired
  }
}

const Counter = React.createClass({
  propTypes: {
    initialScore: React.PropTypes.number.isRequired
  },
  getInitialState: function() {
    return {
        score: this.props.initialScore
    }
  },

  incrementScore: function() {
    this.setState({
      score: (this.state.score + 1)
    })
  },

  decrementScore: function() {
    this.setState({
      score: (this.state.score - 1)
    })
  },

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <div className="counter-score">{this.state.score} </div>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    )
  }
})

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-scrore">
        <Counter initialScore={props.score} />
      </div>
    </div>
  )
  Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired
  }
}
function Application(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title} />
      <div className="players">
        {props.players.map((player) => {
            return <Player name={player.name} score={player.score} key={player.id} />
          })
        }
      </div>
    </div>
  )
  Application.propTypes = {
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired,
      id: React.PropTypes.number.isRequired
    })).isRequired
  }
}

ReactDOM.render(<Application title="My scoreboard" players={PLAYERS}/>, document.getElementById("container"))
