var React = require('react');
var Clock = require('Clock');
var TimerControls = require('TimerControls');


var Timer = React.createClass({
    getInitialState: function() {
        return {
            count: 0, 
            countupStatus: 'stopped'
        };   
    },
    componentDidUpdate: function (prevProps, prevState) {

        if (this.state.countupStatus !== prevState.countupStatus) {
            switch (this.state.countupStatus) {
                case 'started':
                    this.startTimer(); 
                    break; 
                case 'stopped': 
                    this.setState({count: 0}); 
                case 'paused': 
                    clearInterval(this.timer)
                    this.timer = undefined; 
                    break;
            }
        }
    },
    componentWillUnmount: function () {
        clearInterval(this.timer); 
        this.timer = undefined; 
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count +1; 
            this.setState({
                count: newCount
            });
        }, 1000); 
    },
    handleStatusChange: function (newStatus) {
        this.setState({countupStatus: newStatus})
    },
    render: function () {
        var {count, countupStatus} = this.state; 

        return (
            <div>
                <h1 className="page-title">Timer Component</h1>
                <Clock totalSeconds={count}/>
                <TimerControls countupStatus={countupStatus} onStatusChange={this.handleStatusChange}/>
            </div> 
        );
    }
});

module.exports = Timer; 