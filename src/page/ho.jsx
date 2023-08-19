import React from 'react';
import {Detail,Time,Card} from '../components';

const activeProjects = [
  // {
  //   name: 'Project A',
  //   description: 'This is a description of Project A.',
  //   startDate: '2023-09-01',
  //   endDate: '2023-10-15',
  // },
  // {
  //   name: 'Project A',
  //   description: 'This is a description of Project A.',
  //   startDate: '2023-09-01',
  //   endDate: '2023-10-15',
  // },
  // {
  //   name: 'Project A',
  //   description: 'This is a description of Project A.',
  //   startDate: '2023-09-01',
  //   endDate: '2023-10-15',
  // },
  // {
  //   name: 'Project A',
  //   description: 'This is a description of Project A.',
  //   startDate: '2023-09-01',
  //   endDate: '2023-10-15',
  // },
  // {
  //   name: 'Project A',
  //   description: 'This is a description of Project A.',
  //   startDate: '2023-09-01',
  //   endDate: '2023-10-15',
  // },
  // {
  //   name: 'Project A',
  //   description: 'This is a description of Project A.',
  //   startDate: '2023-09-01',
  //   endDate: '2023-10-15',
  // },
  // {
  //   name: 'Project B',
  //   description: 'This is a description of Project B.',
  //   startDate: '2023-09-15',
  //   endDate: '2023-11-30',
  // },

    {name: 'Project B'},
    {name: 'Project B'},
];
const ome = () => (
  <div className="ome">
      <Time events={[
    { name: 'Olymπad', date: '2023-09-01T12:00:00' },
    { name: 'Treasure Hunt', date: '2023-09-15T18:30:00' },
  ]}/>
    <Detail count="10" hrenable="none" wordColors={[]}/>
      <Detail heading="<Notches on our belt>" hfsize="64px" hrmarl="485px" hrmarr="485px" spcolor="#F8C43F" wordColors={[{word:"17 major projects",scolor:"#F7E2AD"},
      {word:"3 research papers",scolor:"#F7E2AD"}]} 

      description="<br><br>Numerates club believe in skill-set building through experience and<br> hard work. This club brought in various project and research works in<br> order to help its members in growing their understanding and<br> knowledge. In past one year, the club have undertaken 17 major projects<br> and 3 research papers have been published.
      <br><br>"
      color="#fff"/>

      <Card activeProjects={activeProjects}  />
      <Detail count="10" hrenable="none" wordColors={[]}/>
  </div>    
);

export default ome;
