import React from 'react'
import {Time,Detail} from '../components';
import kpit from '../ass/kpit.jpg';
import './ab.css';
const ev = () => {
  return (
    <div>
      <Time events={[
    { name: 'Olymπad', date: '2023-09-01T12:00:00' },
    { name: 'Treasure Hunt', date: '2023-09-15T18:30:00' },
  ]}/>


    <Detail count="4" hrenable="none" wordColors={[]}/>
    <Detail heading="<Past Events>" hfsize="64px" hrmarl="485px" hrmarr="485px" spcolor="#F8C43F" wordColors={[]} />
    <Detail count="4" hrenable="none" wordColors={[]}/>

    <Detail heading="KPIT SPARKLE" 
    description = "<br>We got an opportunity to collaborate with KPIT to market their Sparkle Event. This event’s last registration date is 30th of September. This event was supervised by Dr. Kishan Prasad Gunale sir and Dr. Pooja Gundewar ma’am from ECE Department.<br><br> The online orientation was conducted on 14th September by key speaker Mr. Sahil Joseph from KPIT. In the orientation he described about the flow of the event which consists of 4 phases namely <br>1.Idea submission <br>2.Canva projection <br>3.Simulation of your model <br>4.Prototype submission<br><br>" 
    marginLeft="150px" marginRight="150px"
    color="#fff"
    pos= "left" hfsize="54px" hrmarl="-1px" hrmarr="867px" spcolor="#94D443" fds="25px"
    wordColors={[{word:"14th September",scolor:"#B2E174"}]} />

    <div className='im'>
      <img src={kpit} alt='loo'/>
      </div>
      <Detail count="10" hrenable="none" wordColors={[]}/>
      <Detail heading="Webinars & Workshops" 
    description = "Over the period of two years, Numerates Club have conducted webinars in order to work on the Mathematical skills and spread the knowledge of Application of Mathematics in different fields of Engineering.<br><br>We hosted a webinar on “Vedic Mathematics” by “Prof. Chaitanya Patil” from Speed Academy. Over 100+ students were present for the seminar and was conducted on Zoom Meeting Room. The session covered different topics of Vedic Mathematics, their applications and the problem-solving session was also conducted. The entire session was conducted for 2.5 hours and was a success.<br><br>Brainstorming project ideas and Project implementation in various competitions on university as well as National level. Various webinars regarding<br> “Research paper analysis: How to read a Research paper” also have been organized in order to teach the students the method for understanding the Research paper." 
    color="#fff"
    marginLeft="150px" marginRight="150px"

    pos= "right" hfsize="54px" hrmarr="1px" hrmarl="850px" spcolor="#94D443" fds="25px"
    wordColors={[{word:"“Vedic Mathematics”",scolor:"#5BC4FF"},
    {word:"“Research paper analysis: How to read a Research paper”",scolor:"#5BC4FF"}]} />


    <Detail count="10" hrenable="none" wordColors={[]}/>
    <Detail heading="Competitions & Quizzes & Workshops" 
    description = "The club started with the weekly quizzes for competitive mathematics exam. The quiz was conducted offline before the pandemic and the was a success.<br>Along with that, every year, “Numerates Club” celebrate “Pi Day” on <br>“14th of March”.<br><br>In the year 2021, the Pi Day was celebrated online on <br> Cisco Webex. The program was conducted by School of Mathematics and Statistics and Numerates was the organizing committee of the event. A guest lecture on “Modern Portfolio Theory” which was facilitated by “Dr. Milind Kumar Das”.<br> Dr. Shubhlaxmi Joshi (Associate Dean), Dr. Veena Kshirsagar, Dr. Prashant Malavadkar, Prof. Uday Jagdale addressed students and expressed their gratitude towards Dr. Milind Kumar Das for sharing his profound knowledge with the students.<br><br>In the year 2022, Pi Day was celebrated on 14th of March across Maharashtra.<br> The Pi Day Quiz was conducted and organized by the Numerates Club under the guidance of School of Mathematics and Statistics. The quiz was conducted on Google Forms and was held in two categories of Higher Secondary and undergraduates. Total of 700 registrations were received for the Quiz. A guest lecture on” Financial Mathematics and Data Analysis” by the well-known professor from Indiana Wesleyan University “Prof. Joseph Snider”. A pool prize of Rs. 10000 was also announced for the winners in both the categories." 
    marginLeft="150px" marginRight="150px"
    color="#fff"
    pos= "left" hfsize="54px" hrmarl="-1px" hrmarr="867px" spcolor="#E78A8A" fds="25px"
    wordColors={[{word:"“Numerates Club”",scolor:"#F7E2AD"},
    {word:"“Pi Day”",scolor:"#F8C43F"},
    {word:"“14th of March”",scolor:"#F8C43F"},
    {word:"“Modern Portfolio Theory”",scolor:"#5BC4FF"},
    {word:"The Pi Day Quiz",scolor:"#5BC4FF"}]}/>
    <Detail count="10" hrenable="none" wordColors={[]}/>
    </div>
  )
}

export default ev
