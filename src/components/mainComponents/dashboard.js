import React from 'react';
import Clock from './time';
import Quote from './quote';
import Calendar from './date';
import Countdown from './days_left';

function Dash() {
  return (
    <div className="dash-wrapper">
      <div className="top">
        <section className="date"><Calendar/></section>
        <section className="days-left"><Countdown timeTillDate="09 02 2077, 12:00 am" timeFormat="MM DD YYYY, h:mm a" />
</section>
      </div>
      <div className="mainInfo">
	      <section className="time"><Clock/>
        </section>
	      <section className="hello-caoimhe"> Hello, Caoimhe </section>
	      <section className="quote"> <Quote/> </section>
      </div>
    </div>
  );
}


export default Dash;
