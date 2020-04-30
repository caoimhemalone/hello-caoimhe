import React, { Component } from 'react'
import DateCountdown from 'react-date-countdown-timer';

class Countdown extends Component {

    render() {
        return (
            <div className="days-left">
                <div className="text heading">make every day count</div>
                <DateCountdown dateTo='September 02, 2077' callback={()=>alert('Congrats you`re not dead')}  />
                <div className="text">left on earth</div>
            </div>
        );
    }
}

export default Countdown