import React, { useEffect, useRef } from "react";

// import {Detail,Card,Time,Hero} from '../components';
import { Detail, Card } from "../components";
import cover from "../ass/cover.jpg";
import "./ab.css";
import {gsap, ScrollTrigger} from "gsap/all";
import TextPlugin from "gsap/TextPlugin";
import SplitType from "split-type";




const cardData = [
  [
    [
      "1.Urinary Incontinence using machine learning",
      "2.Effect of Sanskrit verses and chants on the human brain and its healing capacities",
      "3.Brain signal collection and further refining method with the help of Neural Networks",
    ],
    [
      "4.Medical Card",
      "5.Solar tree classrooms",
      "6.EEG and EOG brain signal collection for concentration and anxiety level determination in soldiers during field work",
      " 7.Diagnosis of Scalp Disorders using Deep Learning Approach",
    ],
    [
      " 8.Stock market determination with the help of MongoDB and Deep Learning and sentimental analysis",
      " 9.Movie recommendation software using Apache Spark framework and Databricks Community edition",
      " 10.Drive-eye",
    ],
    [
      " 11.Conversion of natural language to SQL statements",
      " 12.Intelligent weed removal device with the help of image recognition",
      " 13.Depression detection with the help LLP and Twitter data",
      " 14.PHD tracking system",
    ],
    [
      " 15.College inquiry chat bot",
      " 16.AI based lane detection system for automobiles",
      " 17.Gas-leakage and consumption detection in cylinders -IoT",
      " 18.Profanity-check on OTT platforms",
      " 19.Numerates Website",
      " 20.Peace Mate ",
    ],
  ],
];
const Ome = () => {

  const descriptionRef = useRef(null);
  const headingRef = useRef(null);


  useEffect(()=>{


    const animTextDescription = new SplitType(descriptionRef.current, {types: "words, chars"});
    const animTextHeading = new SplitType(headingRef.current, {types: "words, chars"});

    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".heading", {
      duration: 3,
      text: {
        value: "INITIATE || IDEATE || INNOVATE",
      },
      scrollTrigger:{
        trigger: ".heading"
      }
    });
    

    gsap.set(animTextDescription.chars, {
      opacity: 0.1
    });

    gsap.to(animTextDescription.chars, {
      opacity: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: descriptionRef.current,
        scrub: true,
        start: "top 50%",
        end: "bottom 65%"
      }
    });

    gsap.set(animTextHeading.chars, {
      y:100,
    });

    gsap.to(animTextHeading.chars, {
      y: 0,
      stagger: 0.05,
      delay: 0.1,
      duration: 0.5,
      scrollTrigger: {
        trigger: headingRef.current
      }
    });

  });

  return (
    <div className="ome">
      <div className="keyboard">{/* <Hero/> */}</div>
      <div className="container">
        {<img className="cover" src={cover} alt="loo" />}
        <div className="centered">
          <h1 className="heading anim">Welcome to Numerates</h1>
          <div className="intro-wrapper">
            <span className="snap l">&lt;&lt;</span>
            <p>
              we dont differentiate <br />
              unless it’s <span style={{ color: "#F8C43F" }}>calculus</span>
            </p>
            <span className="snap r">&gt;&gt;</span>
          </div>
        </div>
      </div>
      <div className="ll">
        {/* <Th events={[ { name: 'Treasure Hunt',id:1} ]} /> */}
      </div>

      <Detail count="6" hrenable="none" wordColors={[]} />
      <Detail
        descriptionRef={descriptionRef}
        headingRef={headingRef}
        clipPath="polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
        hfsize="50px"
        heading="<Notches on our belt>"
        hrmarl="485px"
        hrmarr="485px"
        spcolor="#F8C43F"
        wordColors={[
          { word: "17 major projects", scolor: "#F7E2AD" },
          { word: "3 research papers", scolor: "#F7E2AD" },
        ]}
        description="<br><br>We at Numerates believe in skill-set building through experience and<br> hard work.<br> This club brought in various project and research work, in<br> order to help its members in growing their understanding and<br> knowledge.<br> In the last year, the club has undertaken 17 major projects<br> and 3 research papers have been published.
      <br><br>"
        color="#fff"
      />

      <Card cardData={cardData} />

      <Detail count="10" hrenable="none" wordColors={[]} />
    </div>
  );
};

export default Ome;
