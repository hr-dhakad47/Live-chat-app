import React, { useState } from "react";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";

export const  AnimatedTooltip = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const items = [
    {
      id: 1,
      name: "Rahul Choudhary",
      designation: "Web developer",
      image: "https://github.com/RandomFirstOrg/Photos/blob/main/Cipher-modified.png?raw=true",
      visit : "https://rahul4u.vercel.app/",
    }
  ];
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
    <div className="d-flex">
      {items.map((item, idx) => (
        <a className="navbar-brand" href={item.visit}>
        <div
          className="mr-4 relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === item.id && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className="absolute -top-16 -left-1/2 translate-x-1/2 d-flex text-xs flex-column align-items-center justify-content-center rounded-md bg-dark text-white shadow p-2"
            >
              <div className="w-20 h-1 bg-gradient"></div>
              <div className="w-40 h-1 bg-gradient"></div>
              <div className="font-bold text-base">{item.name}</div>
              <div className="text-xs">{item.designation}</div>
            </motion.div>
          )}
          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="object-cover m-0 p-0 object-top rounded-circle h-14 w-14 border-2 border-white relative transition duration-500"
          />
        </div>
        </a>
      ))}
      </div>
    </>
  );
};

