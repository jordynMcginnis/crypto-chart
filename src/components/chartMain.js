import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down';
import FaArrowCircleODown from 'react-icons/lib/fa/arrow-circle-o-down'
import FaArrowCircleUp from 'react-icons/lib/fa/arrow-circle-up';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';
import FaGetPocket from 'react-icons/lib/fa/get-pocket';
import AOS from 'aos';

const chartMain = (props) => {
  const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Cryptocurrency',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
  return (
    <div className="chartmain">
    <div className="other-projects"><FaGetPocket data-aos="fade-down" className='top' onClick={ () => {props.toggleClick()}}/> </div>
    <Line
      data={data}
      className='line'
      />
      <div className="bottom-other-projects" data-aos="fade-up"><FaTwitterSquare className='down' data-aos="fade-up"/><FaLinkedinSquare className='down'/></div>
    </div>
  )
}

export default chartMain;
