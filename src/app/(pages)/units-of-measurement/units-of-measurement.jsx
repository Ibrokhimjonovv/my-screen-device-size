'use client';

import { useState, useEffect } from "react";
import "./units-of-measurements.scss";

const sizes = [
  { id: 1, from: "1 px", to: "1 pixel (base unit)", equal: true },
  { id: 2, from: "1 em", to: 16, equal: true },
  { id: 3, from: "1 rem", to: 16, equal: true },
  { id: 4, from: "1 pt", to: 1.333, equal: true },
  { id: 5, from: "1 pc (pica)", to: 16, equal: true },
  { id: 6, from: "1 in (inch)", to: 96, equal: true },
  { id: 7, from: "1 cm", to: 37.8, equal: false },
  { id: 8, from: "1 mm", to: 3.78, equal: false },
  { id: 9, from: "1 %", to: "relative to the parent element's size", equal: true },
  { id: 10, from: "1 vw", to: "1% of the viewport's width", equal: true },
  { id: 11, from: "1 vh", to: "1% of the viewport's height", equal: true },
];

const UnitConverter = () => {
  const [fromValue, setFromValue] = useState("");
  const [fromUnit, setFromUnit] = useState("px");
  const [toUnit, setToUnit] = useState("em");
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Faqat client tomonda ishlaydi
    setViewportSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const unitToPx = {
    px: 1,
    em: 16,
    rem: 16,
    pt: 1.333,
    pc: 16,
    in: 96,
    cm: 37.8,
    mm: 3.78,
    vw: viewportSize.width > 0 ? viewportSize.width / 100 : 0,
    vh: viewportSize.height > 0 ? viewportSize.height / 100 : 0,
  };

  const units = Object.keys(unitToPx);

  const formatNumber = (num) => {
    if (isNaN(num)) return "";
    const fixed = num.toFixed(2);
    return fixed.endsWith(".00") ? fixed.split(".")[0] : fixed;
  };

  const convert = () => {
    if (fromValue === "") return "";
    
    const pxValue = parseFloat(fromValue) * unitToPx[fromUnit];
    
    if (unitToPx[toUnit] === 0) return "0";
    
    const result = pxValue / unitToPx[toUnit];
    return formatNumber(result);
  };

  return (
    <div id="converter-container">
      <div id="inpts">
        <div className="input-container">
          <input
            type="text"
            value={fromValue}
            placeholder="From"
            onChange={(e) => setFromValue(e.target.value)}
            inputMode="decimal"
          />
          <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
            {units.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>

        <span>
                    <ion-icon name="swap-horizontal-outline"></ion-icon>

        </span>

        <div className="input-container">
          <input 
            type="text" 
            value={convert()} 
            placeholder="To" 
            readOnly 
          />
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
            {units.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>
      </div>

      {fromValue ? (
        <p>
          {fromValue} {fromUnit} = {convert()} {toUnit}
        </p>
      ) : (
        <p>Write to input...</p>
      )}
    </div>
  );
};

const UnitsOfMeasurement = () => {
  return (
    <div id="units">
      <h2 id="tt">Units of Measurement</h2>
      <div className="table">
        <div className="measurement-ad measurement-ad-1">
        </div>
        <table>
          <thead>
            <tr>
              <th>Any sizes</th>
              <th>= / ≈</th>
              <th>...px</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((size, indx) => (
              <tr key={size.id}>
                <td>{size.from}</td>
                <td>{size.equal ? "=" : "≈"}</td>
                <td>
                  {typeof size.to === "number" ? `${size.to} px` : `${size.to}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="measurement-ad measurement-ad-2">
        </div>
      </div>
      <div className="multiplex">
      </div>
      <h2 id="top">Measurement converter</h2>
      <UnitConverter />
    </div>
  );
};

export default UnitsOfMeasurement;