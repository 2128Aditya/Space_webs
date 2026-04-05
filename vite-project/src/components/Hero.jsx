import React, { useState, useEffect } from "react";
import "./Hero.css";
import Navbar from "./Navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const planets = [
  {
    name: "Sun",
    desc:
      "The blazing star at the center of our solar system — source of all light and energy. " +
      "A colossal nuclear furnace where hydrogen fuses into helium, powering life across the cosmos. " +
      "Its magnetic storms ripple through space, shaping planets, orbits, and even our technology.",
    img: "./images/one.png",
    bg: "./images/bg1.png",
    stats: [
      { label: "Radius", value: "696,340 km" },
      { label: "Distance from Earth", value: "149.6 million km" },
      { label: "Temperature", value: "5,500°C" },
      { label: "Type", value: "G-Type Main-Sequence Star" },
    ],
    style: { width: "660px", top: "30px", left: "-150px" },
  },
  {
    name: "Earth",
    desc:
      "Our home planet, rich with life, water, and endless beauty. " +
      "A perfect balance of oceans, atmosphere, and sunlight that sustains millions of species. " +
      "From forests to deserts, it remains the only known world to cradle life as we know it.",
    img: "./images/two.png",
    bg: "./images/bg2.png",
    stats: [
      { label: "Radius", value: "6,371 km" },
      { label: "Distance from Sun", value: "149.6 million km" },
      { label: "Orbital Period", value: "365 days" },
      { label: "Surface Gravity", value: "9.8 m/s²" },
    ],
    style: { width: "660px", marginLeft: "30px", left: "-150px" },
  },
  {
    name: "Mars",
    desc:
      "The red planet — a dusty, cold world with a thin atmosphere and giant volcanoes. " +
      "Home to ancient riverbeds and frozen water, it whispers secrets of a wetter past. " +
      "A future destination for human exploration and perhaps, one day, colonization.",
    img: "./images/three.png",
    bg: "./images/bg3.png",
    stats: [
      { label: "Radius", value: "3,389 km" },
      { label: "Distance from Sun", value: "227.9 million km" },
      { label: "Orbital Period", value: "687 days" },
      { label: "Surface Gravity", value: "3.7 m/s²" },
    ],
    style: { width: "640px", top: "30px", marginLeft: "50px" },
  },
  {
    name: "Moon",
    desc:
      "Earth’s only natural satellite — calm, cratered, and a mirror of sunlight. " +
      "Its gravitational pull choreographs our tides and stabilizes Earth’s tilt. " +
      "A silent witness to 4.5 billion years of cosmic history and humanity’s first steps beyond Earth.",
    img: "./images/four.png",
    bg: "./images/bg4.png",
    stats: [
      { label: "Radius", value: "1,737 km" },
      { label: "Distance from Earth", value: "384,400 km" },
      { label: "Orbital Period", value: "27.3 days" },
      { label: "Surface Gravity", value: "1.62 m/s²" },
    ],
    style: { width: "640px", top: "30px", marginTop: "50px" },
  },
  {
    name: "Saturn",
    desc:
      "The ringed giant — majestic with icy rings and swirling storms. " +
      "Its atmosphere glows in pale gold hues, sculpted by powerful winds and magnetic fields. " +
      "The rings, billions of icy fragments, create one of the most mesmerizing sights in space.",
    img: "./images/five.png",
    bg: "./images/bg5.png",
    stats: [
      { label: "Radius", value: "58,232 km" },
      { label: "Distance from Sun", value: "1.4 billion km" },
      { label: "Orbital Period", value: "29 years" },
      { label: "Surface Gravity", value: "10.4 m/s²" },
    ],
    style: { width: "600px", top: "30px", left: "-150px" },
  },
  {
    name: "Jupiter",
    desc:
      "The gas giant — massive, stormy, and home to the Great Red Spot. " +
      "Its immense gravity protects inner planets by capturing rogue asteroids and comets. " +
      "Beneath its clouds may lie a metallic ocean of hydrogen, conducting electricity like a star.",
    img: "./images/six.png",
    bg: "./images/bg6.png",
    stats: [
      { label: "Radius", value: "69,911 km" },
      { label: "Distance from Sun", value: "778 million km" },
      { label: "Orbital Period", value: "12 years" },
      { label: "Surface Gravity", value: "24.8 m/s²" },
    ],
    style: { width: "600px", top: "30px", left: "-150px" },
  },
];


const Hero = () => {
  const [index, setIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const current = planets[index];
  useEffect(() => {
    const back = document.querySelector(".bg-back");
    const front = document.querySelector(".bg-front");
      front.style.backgroundImage = `url(${current.bg})`;
      front.classList.remove("fade-in");
      void front.offsetWidth;
      front.classList.add("fade-in");
      const timeout = setTimeout(() => {
      back.style.backgroundImage = front.style.backgroundImage;
      front.classList.remove("fade-in");
    }, 900);
  
    return () => clearTimeout(timeout);
  }, [index]);
  
    useEffect(() => {
    planets.forEach((p) => {
      const img = new Image();
      img.src = p.bg;
    });
  }, []);

  const prevIndex = (index - 1 + planets.length) % planets.length;

  const nextPlanet = () => {
    setRotation((r) => r + 90);
    setIndex((i) => (i + 1) % planets.length);
  };

  const prevPlanet = () => {
    setRotation((r) => r - 90);
    setIndex((i) => (i - 1 + planets.length) % planets.length);
  };

  return (
    <div className="hero-container">
      
      <div className="hero-bg-wrapper">
  <div className="hero-bg bg-back" />
  <div className="hero-bg bg-front" />
</div>

      <div className="hero-content">
        <Navbar />

        <div className="hero-left">
  <AnimatePresence mode="wait">
    <motion.h1
      key={current.name}
      className="plant-name"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {current.name}
    </motion.h1>
  </AnimatePresence>

  <AnimatePresence mode="wait">
    <motion.p
      key={current.desc}
      className="plant-desc"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {current.desc}
    </motion.p>
  </AnimatePresence>
</div>
        <div className="hero-center">
          <AnimatePresence mode="wait">
            <motion.div
              className="planet-rotate-wrapper"
              animate={{ rotate: rotation }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <motion.img
                key={current.name}
                src={current.img}
                alt={current.name}
                style={current.style} 
                className="plant-img"
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="hero-nav">
          <button onClick={prevPlanet} className="nav-btn">
            <ChevronLeft size={30} />
          </button>
          <button onClick={nextPlanet} className="nav-btn">
            <ChevronRight size={30} />
          </button>
        </div>

        <div className="hero-right">
          {current.stats.map((s, i) => (
            <div className="stat" key={i}>
              <span className="label">{s.label}</span>
              <span className="value">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
