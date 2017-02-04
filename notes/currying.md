`var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  }, 
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus)
    }
  },
  render: function () {
    var {countdownStatus} = this.props; 
    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Paused</button>
      } else if (countdownStatus === 'paused') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
  }; 

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
      
    )
  }
});`

1. The onlick handlers call the onStatusChange function (not just trigger it)
2. This allows us to use the same handler but pass in 3 different values
3. This is called currying - passing a function to another function (or dividing the functionality across functions)