import React from 'react';

// import {Detail,Card,Time,Hero} from '../components';
import {Detail,Card,Time} from '../components';
import cover from '../ass/cover.jpg';
import "./ab.css";



const cardData = [
  [["1.Urinary Incontinence using machine learning", "2.Effect of Sanskrit verses and chants on the human brain and its healing capacities", "3.Brain signal collection and further refining method with the help of Neural Networks"], ["4.Medical Card","5.Solar tree classrooms", "6.EEG and EOG brain signal collection for concentration and anxiety level determination in soldiers during field work"," 7.Diagnosis of Scalp Disorders using Deep Learning Approach"],[" 8.Stock market determination with the help of MongoDB and Deep Learning and sentimental analysis"," 9.Movie recommendation software using Apache Spark framework and Databricks Community edition"," 10.Drive-eye"],[" 11.Conversion of natural language to SQL statements"," 12.Intelligent weed removal device with the help of image recognition"," 13.Depression detection with the help LLP and Twitter data"," 14.PHD tracking system"],[" 15.College inquiry chat bot"," 16.AI based lane detection system for automobiles"," 17.Gas-leakage and consumption detection in cylinders -IoT"," 18.Profanity-check on OTT platforms"," 19.Numerates Website"," 20.Peace Mate "]],
];
const Ome = () => {


 return(
  
  <div className="ome">
    
    <div className='keyboard'>
      {/* <Hero/> */}
    </div>
    <div className='container'>
      
    {<img className='cover' src={cover} alt='loo' /> }
    <div className="centered"><h1>INITIATE || IDEATE || INNOVATE</h1>
        <div><span className='snap l'>&lt;&lt;</span><p>we dont differentiate <br/>unless it’s <span style={{ color: '#F8C43F' }}>calculus</span></p><span className='snap r'>&gt;&gt;</span></div>
    </div>
    
    </div>
    <div class="ll">

    <Time events={[
      { name: 'Treasure Hunt', date: '2023-08-25T16:00:00' }]} />

  </div>

     <Detail count="6" hrenable="none" wordColors={[]}/>
      <Detail heading="<Notches on our belt>"  hrmarl="485px" hrmarr="485px" spcolor="#F8C43F" wordColors={[{word:"17 major projects",scolor:"#F7E2AD"},
      {word:"3 research papers",scolor:"#F7E2AD"}]} 

      description="<br><br>We at Numerates believe in skill-set building through experience and<br> hard work. This club brought in various project and research work, in<br> order to help its members in growing their understanding and<br> knowledge. In the last year, the club has undertaken 17 major projects<br> and 3 research papers have been published.
      <br><br>"
      color="#fff"/>

      <Card cardData={cardData}  />
      
      
       <Detail count="10" hrenable="none" wordColors={[]}/>
       
   </div>    
);};

export default Ome;