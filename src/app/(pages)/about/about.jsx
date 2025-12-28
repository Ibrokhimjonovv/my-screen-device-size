import './about.scss';

export default function About() {
  return (
    <div className="about-page">
      <div className="content">
        <h1>About My Device Size</h1>
        <p className="description">
          My Device Size is a modern tool to help you discover your device's screen dimensions, pixel density, and CSS unit information quickly and easily.
        </p>

        <section className="features">
          <h2>What You Can Do</h2>
          <ul>
            <li>View exact width and height of any device screen</li>
            <li>Check pixel count, DPI, and screen density</li>
            <li>Learn about CSS measurement units (px, em, rem, %, vh, vw, etc.)</li>
            <li>Access screen size info for all popular devices</li>
          </ul>
        </section>

        <section className="vision">
          <h2>Our Vision</h2>
          <p>
            Our goal is to provide developers and designers with accurate data to create perfect responsive designs for any device. Find the information you need in a fast and user-friendly way.
          </p>
        </section>

        <section className="note">
          <p className="small-text">
            Note: All information is continuously updated to include new devices.
          </p>
        </section>
      </div>
    </div>
  );
}
