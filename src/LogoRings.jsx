import React from "react";
import Styles from "./Vbg.module.css";

const LogoRings = ({ color = "#333333", width = 200, height = 200 }) => {
  return (
    <svg className={Styles.logoRings}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="420 0 1080 1080"
      width={width}
      
      style={{
      

      }}
    >
      <path
        fill={color} // Aplica a cor dinâmica
        d="m 943.73293,10.304743 c -11.93558,0.114618 -23.81432,0.710577 -35.60158,1.810752 -2.65643,0.24784 1.64407,3.566968 1.64407,3.566968 l 49.22494,46.581477 c -180.17634,0.375854 -346.57273,96.61036 -436.68755,252.69415 -90.29176,156.38967 -90.29176,349.07126 0,505.46084 88.8066,153.81786 300.95924,265.06647 489.55579,247.46497 2.6564,-0.2478 -1.6441,-3.567 -1.6441,-3.567 l -49.22497,-46.5814 c 180.17637,-0.3759 346.57277,-96.61039 436.68767,-252.69425 90.2918,-156.38958 90.2918,-349.07116 0,-505.46083 C 1314.4309,115.37623 1122.7647,8.5869312 943.73293,10.304743 Z m 16.43001,60.864032 A 468.50408,468.9146 0 0 1 1428.6679,540.083 468.50408,468.9146 0 0 1 960.16294,1008.9972 468.50408,468.9146 0 0 1 491.65789,540.083 468.50408,468.9146 0 0 1 960.16294,71.168775 Z"
      />
    </svg>
  );
};

export default LogoRings;