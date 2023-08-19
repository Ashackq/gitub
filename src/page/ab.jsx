import React from 'react';
import {Detail} from '../components';
import dec from '../ass/dec.png';
import dec1 from '../ass/dec1.png';
import "./ab.css";
const ab = () => (
  <div className="ab">
    <div className='im'>
      <img src={dec} alt='loo'/>
      <img src={dec1} alt='loo'/>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Detail 
      count="3"
      heading="<Special Note>"
      hfsize = "64px"
      wordColors={[
        { word: 'pandemic', scolor: '#CE1F1F' },
        { word: 'coronavirus', scolor: '#CE1F1F' }
      ]}
      hrmarl='270px' hrmarr='270px'
      description="The year from 2020 to 2022 was entirely under pandemic situation. With the help and support of the members, the club have survived and uplifted from the pandemic. Various activities were conducted despite of the outbreak of coronavirus. "
      spcolor="#F8C43F"
      marginLeft="310px" marginRight="310px"
      color = "#fff"
      /> 
      
      <Detail description="The club is thankful for all the support and guidance received from the University and hope for further contributions to the community as whole."
      hrenable = "none"
      color="#F7E2AD"
      marginLeft="310px" marginRight="310px"
      wordColors={[]}
    />

    <Detail marginLeft="310px" marginRight="310px" hrmarl='10px' hrmarr='10px' spcolor="#F7E2AD" wordColors={[]}/>
    <Detail marginLeft="310px" marginRight="310px" hrmarl='100px' hrmarr='100px' spcolor="#F7E2AD" wordColors={[]}/>

    <Detail count="4" hrenable="none" wordColors={[]}/>

    <Detail heading="Individual Achievements" spcolor ="#9C62F9" hfsize = "54px" wordColors={[]} />
    <Detail
    hrenable="none"
      description ="
      1.LIMIT 2020 - An Olympiad by ISI’s club
      
      "
      color="#fff" 
        hrmarl='275px' hrmarr='275px'  wordColors={[
        { word: '1.LIMIT 2020 - An Olympiad by ISI’s club', scolor: '#F7E2AD' }]}
        count="2"
          marginLeft="400px"
          marginRight="400px"
    />
    <Detail
    hrenable="none"
      description ="
      Participants: Tarush Pandey, Tanmay Das, Sanskar Garodia, Faiz Ansari"
      color="#fff" 
        hrmarl='275px' hrmarr='275px'  wordColors={[
        { }]}
          count="0"
    />
<Detail
     
      description ="2. Albert Einstein international scholarship test 2021 - A mathematical scholarship test by AICTSD
      "
      color="#fff" 
      hrenable="none"
      spcolor ="#9C62F9"  hrmarl='275px' hrmarr='275px'  wordColors={[
        
        { word: '2. Albert Einstein international scholarship test 2021 - A mathematical scholarship test by AICTSD', scolor: '#F7E2AD'}
        ]}
        count="0"/>

  <Detail
    hrenable="none"
      description ="
      Participants: Tarush Pandey, Ambika Patidar, Aniruddha Shende, Maahi Chouhan, Ritu Karnawat, Tanmay Das
    "
      color="#fff" 
        hrmarl='275px' hrmarr='275px'  wordColors={[
        { }]}
          count="0"
    />

    <Detail
    hrenable="none"
      description ="
      Two of the participants score 90% score in the exam."
      color="#fff" 
        hrmarl='275px' hrmarr='275px'  wordColors={[
        { }]}
          count="0"
    />
  <Detail
      description ="3.Aryabhatta National Maths Competition 2020: A Mathematical Olympiad by “AICTSD”
     "
      color="#fff" 
      hrenable="none"
      spcolor ="#9C62F9"  hrmarl='275px' hrmarr='275px' wordColors={[
        
        { word: '3.Aryabhatta National Maths Competition 2020: A Mathematical Olympiad by “AICTSD”', scolor: '#F7E2AD'},
        ]}
        count="0"/>
      <Detail
    hrenable="none"
      description ="
      Participants: Kishita Pakhrani, Tarush Pandey, Faiz Ansari, Stuti Jajodia, Anit Agrawal"
      color="#fff" 
        hrmarl='275px' hrmarr='275px'  wordColors={[
        { }]}
          count="0"
    />
  </div>    
);

export default ab;