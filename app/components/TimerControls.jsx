var React = require('react');

var TimerControls = React.createClass({
  propTypes: {
    countupStatus: React.PropTypes.string.isRequired, 
    onStatusChange: React.PropTypes.func.isRequired
  }, 
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus)
    }
  },
  render: function () {
    var {countupStatus} = this.props; 
    var renderStartStopButton = () => {
      if (countupStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      } else if (countupStatus === 'paused' || countupStatus === 'stopped') {
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
});

module.exports = TimerControls; 