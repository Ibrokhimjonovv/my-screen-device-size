'use client'
import React, { useState } from "react";
import "./devices.scss";
import Link from "next/link"

const devices = [
  {
    "type": "Phone",
    "name": "iPhone X",
    "viewport": "375x812",
    "resolution": "1125x2436",
    "screen_size": "5.8\"",
    "pixel_ratio": 3,
    "density_ppi": 458,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone XS",
    "viewport": "375x812",
    "resolution": "1125x2436",
    "screen_size": "5.8\"",
    "pixel_ratio": 3,
    "density_ppi": 458,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone XS Max",
    "viewport": "414x896",
    "resolution": "1242x2688",
    "screen_size": "6.5\"",
    "pixel_ratio": 3,
    "density_ppi": 458,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone 11",
    "viewport": "414x896",
    "resolution": "828x1792",
    "screen_size": "6.1\"",
    "pixel_ratio": 2,
    "density_ppi": 326,
    "css_ppi": 163
  },
  {
    "type": "Phone",
    "name": "iPhone 11 Pro",
    "viewport": "375x812",
    "resolution": "1125x2436",
    "screen_size": "5.8\"",
    "pixel_ratio": 3,
    "density_ppi": 458,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone 11 Pro Max",
    "viewport": "414x896",
    "resolution": "1242x2688",
    "screen_size": "6.5\"",
    "pixel_ratio": 3,
    "density_ppi": 458,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone 12",
    "viewport": "390x844",
    "resolution": "1170x2532",
    "screen_size": "6.1\"",
    "pixel_ratio": 3,
    "density_ppi": 460,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone 12 Mini",
    "viewport": "375x812",
    "resolution": "1080x2340",
    "screen_size": "5.4\"",
    "pixel_ratio": 3,
    "density_ppi": 476,
    "css_ppi": 158
  },
  {
    "type": "Phone",
    "name": "iPhone 12 Pro",
    "viewport": "390x844",
    "resolution": "1170x2532",
    "screen_size": "6.1\"",
    "pixel_ratio": 3,
    "density_ppi": 460,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone 12 Pro Max",
    "viewport": "430x932",
    "resolution": "1284x2778",
    "screen_size": "6.7\"",
    "pixel_ratio": 3,
    "density_ppi": 458,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone 13",
    "viewport": "390x844",
    "resolution": "1170x2532",
    "screen_size": "6.1\"",
    "pixel_ratio": 3,
    "density_ppi": 460,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone 13 Mini",
    "viewport": "375x812",
    "resolution": "1080x2340",
    "screen_size": "5.4\"",
    "pixel_ratio": 3,
    "density_ppi": 476,
    "css_ppi": 158
  },
  {
    "type": "Phone",
    "name": "iPhone 13 Pro",
    "viewport": "390x844",
    "resolution": "1170x2532",
    "screen_size": "6.1\"",
    "pixel_ratio": 3,
    "density_ppi": 460,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone 13 Pro Max",
    "viewport": "430x932",
    "resolution": "1284x2778",
    "screen_size": "6.7\"",
    "pixel_ratio": 3,
    "density_ppi": 458,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone 14",
    "viewport": "390x844",
    "resolution": "1170x2532",
    "screen_size": "6.1\"",
    "pixel_ratio": 3,
    "density_ppi": 460,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone 14 Plus",
    "viewport": "428x926",
    "resolution": "1284x2778",
    "screen_size": "6.7\"",
    "pixel_ratio": 3,
    "density_ppi": 458,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone 14 Pro",
    "viewport": "430x932",
    "resolution": "1290x2796",
    "screen_size": "6.1\"",
    "pixel_ratio": 3,
    "density_ppi": 460,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone 14 Pro Max",
    "viewport": "430x932",
    "resolution": "1290x2796",
    "screen_size": "6.7\"",
    "pixel_ratio": 3,
    "density_ppi": 460,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone 15",
    "viewport": "390x844",
    "resolution": "1179x2556",
    "screen_size": "6.1\"",
    "pixel_ratio": 3,
    "density_ppi": 461,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone 15 Plus",
    "viewport": "430x932",
    "resolution": "1290x2796",
    "screen_size": "6.7\"",
    "pixel_ratio": 3,
    "density_ppi": 460,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone 15 Pro",
    "viewport": "390x844",
    "resolution": "1179x2556",
    "screen_size": "6.1\"",
    "pixel_ratio": 3,
    "density_ppi": 461,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone 15 Pro Max",
    "viewport": "430x932",
    "resolution": "1290x2796",
    "screen_size": "6.7\"",
    "pixel_ratio": 3,
    "density_ppi": 460,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone 16",
    "viewport": "390x844",
    "resolution": "1179x2556",
    "screen_size": "6.1\"",
    "pixel_ratio": 3,
    "density_ppi": 461,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone 16 Plus",
    "viewport": "430x932",
    "resolution": "1290x2796",
    "screen_size": "6.7\"",
    "pixel_ratio": 3,
    "density_ppi": 460,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone 16 Pro",
    "viewport": "390x844",
    "resolution": "1179x2556",
    "screen_size": "6.1\"",
    "pixel_ratio": 3,
    "density_ppi": 461,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "iPhone 16 Pro Max",
    "viewport": "430x932",
    "resolution": "1290x2796",
    "screen_size": "6.7\"",
    "pixel_ratio": 3,
    "density_ppi": 460,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "Samsung Galaxy S5",
    "viewport": "360x640",
    "resolution": "1080x1920",
    "screen_size": "5.1\"",
    "pixel_ratio": 3,
    "density_ppi": 432,
    "css_ppi": 144
  },
  {
    "type": "Phone",
    "name": "Samsung Galaxy S6",
    "viewport": "360x640",
    "resolution": "1440x2560",
    "screen_size": "5.1\"",
    "pixel_ratio": 4,
    "density_ppi": 577,
    "css_ppi": 144
  },
  {
    "type": "Phone",
    "name": "Samsung Galaxy S7",
    "viewport": "360x640",
    "resolution": "1440x2560",
    "screen_size": "5.1\"",
    "pixel_ratio": 4,
    "density_ppi": 577,
    "css_ppi": 144
  },
  {
    "type": "Phone",
    "name": "Samsung Galaxy S8",
    "viewport": "360x740",
    "resolution": "1440x2960",
    "screen_size": "5.8\"",
    "pixel_ratio": 4,
    "density_ppi": 570,
    "css_ppi": 142
  },
  {
    "type": "Phone",
    "name": "Samsung Galaxy S9",
    "viewport": "360x740",
    "resolution": "1440x2960",
    "screen_size": "5.8\"",
    "pixel_ratio": 4,
    "density_ppi": 570,
    "css_ppi": 142
  },
  {
    "type": "Phone",
    "name": "Samsung Galaxy S10",
    "viewport": "360x760",
    "resolution": "1440x3040",
    "screen_size": "6.1\"",
    "pixel_ratio": 4,
    "density_ppi": 550,
    "css_ppi": 137
  },
  {
    "type": "Phone",
    "name": "Samsung Galaxy S20",
    "viewport": "360x800",
    "resolution": "1440x3200",
    "screen_size": "6.2\"",
    "pixel_ratio": 4,
    "density_ppi": 563,
    "css_ppi": 141
  },
  {
    "type": "Phone",
    "name": "Samsung Galaxy S21",
    "viewport": "360x800",
    "resolution": "1080x2400",
    "screen_size": "6.2\"",
    "pixel_ratio": 3,
    "density_ppi": 421,
    "css_ppi": 140
  },
  {
    "type": "Phone",
    "name": "Samsung Galaxy S21 Ultra",
    "viewport": "412x915",
    "resolution": "1440x3200",
    "screen_size": "6.8\"",
    "pixel_ratio": 3.5,
    "density_ppi": 515,
    "css_ppi": 147
  },
  {
    "type": "Phone",
    "name": "Samsung Galaxy S22",
    "viewport": "360x780",
    "resolution": "1080x2340",
    "screen_size": "6.1\"",
    "pixel_ratio": 3,
    "density_ppi": 425,
    "css_ppi": 141
  },
  {
    "type": "Phone",
    "name": "Samsung Galaxy S23",
    "viewport": "412x915",
    "resolution": "1080x2340",
    "screen_size": "6.1\"",
    "pixel_ratio": 3,
    "density_ppi": 425,
    "css_ppi": 138
  },
  {
    "type": "Phone",
    "name": "Samsung Galaxy S23 Ultra",
    "viewport": "412x915",
    "resolution": "1440x3088",
    "screen_size": "6.8\"",
    "pixel_ratio": 3.5,
    "density_ppi": 500,
    "css_ppi": 143
  },
  {
    "type": "Phone",
    "name": "Samsung Galaxy S24",
    "viewport": "412x915",
    "resolution": "1080x2340",
    "screen_size": "6.2\"",
    "pixel_ratio": 3,
    "density_ppi": 416,
    "css_ppi": 138
  },
  {
    "type": "Phone",
    "name": "Samsung Galaxy S24+",
    "viewport": "430x932",
    "resolution": "1440x3120",
    "screen_size": "6.7\"",
    "pixel_ratio": 3,
    "density_ppi": 513,
    "css_ppi": 144
  },
  {
    "type": "Phone",
    "name": "Samsung Galaxy S24 Ultra",
    "viewport": "480x1066",
    "resolution": "1440x3120",
    "screen_size": "6.8\"",
    "pixel_ratio": 3,
    "density_ppi": 505,
    "css_ppi": 145
  },
  {
    "type": "Phone",
    "name": "Honor Magic6 Pro",
    "viewport": "1260x2800",
    "resolution": "2800x1260",
    "screen_size": "6.8\"",
    "pixel_ratio": 3,
    "density_ppi": 453,
    "css_ppi": 151
  },
  {
    "type": "Phone",
    "name": "Honor Magic6",
    "viewport": "1200x2664",
    "resolution": "2664x1200",
    "screen_size": "6.78\"",
    "pixel_ratio": 3,
    "density_ppi": 435,
    "css_ppi": 145
  },
  {
    "type": "Phone",
    "name": "Honor Magic V2",
    "viewport": "2344x2156",
    "resolution": "2344x2156",
    "screen_size": "7.92\" (foldable)",
    "pixel_ratio": 3,
    "density_ppi": 402,
    "css_ppi": 134
  },
  {
    "type": "Phone",
    "name": "Honor Magic5 Pro",
    "viewport": "1312x2848",
    "resolution": "2848x1312",
    "screen_size": "6.81\"",
    "pixel_ratio": 3,
    "density_ppi": 460,
    "css_ppi": 153
  },
  {
    "type": "Phone",
    "name": "Honor 90 Pro",
    "viewport": "1224x2700",
    "resolution": "2700x1224",
    "screen_size": "6.78\"",
    "pixel_ratio": 3,
    "density_ppi": 437,
    "css_ppi": 146
  },
  {
    "type": "Phone",
    "name": "Honor 90",
    "viewport": "1200x2664",
    "resolution": "2664x1200",
    "screen_size": "6.7\"",
    "pixel_ratio": 3,
    "density_ppi": 435,
    "css_ppi": 145
  },
  {
    "type": "Phone",
    "name": "Honor 80 Pro",
    "viewport": "1224x2700",
    "resolution": "2700x1224",
    "screen_size": "6.67\"",
    "pixel_ratio": 3,
    "density_ppi": 436,
    "css_ppi": 145
  },
  {
    "type": "Phone",
    "name": "Honor 70 Pro+",
    "viewport": "1200x2652",
    "resolution": "2652x1200",
    "screen_size": "6.78\"",
    "pixel_ratio": 3,
    "density_ppi": 429,
    "css_ppi": 143
  },
  {
    "type": "Phone",
    "name": "Honor 70 Pro",
    "viewport": "1200x2652",
    "resolution": "2652x1200",
    "screen_size": "6.67\"",
    "pixel_ratio": 3,
    "density_ppi": 429,
    "css_ppi": 143
  },
  {
    "type": "Phone",
    "name": "Honor X50",
    "viewport": "1224x2652",
    "resolution": "2652x1224",
    "screen_size": "6.78\"",
    "pixel_ratio": 3,
    "density_ppi": 431,
    "css_ppi": 144
  }
].map((device, index) => ({
  ...device,
  id: index + 1,
  slug: device.name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')
}));

const Devices = () => {
  const [search, setSearch] = useState("");

  // filtering
  const filteredDevices = devices.filter((device) =>
    device.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="devices-container">
      <div className="text-cont">
        <div className="texts">
          <p className="small-colored">What is Viewport?</p>
          <h1>Viewport Size for Devices</h1>
          <p className="no-longer-text">
            Now a days Smart Phones have very High Display Resolution, A small
            6-inch device have same display dimensions which a 32-inch LCD have,
            How it is possible?
          </p>
          <p className="longer-text">
            Device Dimensions which is also known as resolution is based upon
            Pixel Per Inch. The devices which have higher resolution in small
            display, their ONE pixel contains many more pixels, thats why Retina
            Display or Device Dimensions got bigger. However device actual
            dimensions depends on actual Pixels Per Inch which is called
            "Viewport Size" of device or "device-width". Responsive Websites CSS
            styles are based upon Viewport sizes of devices. Below is a detailed
            comparison list of Viewport Size for devices, Phone Dimensions,
            Screen Sizes and Devices Resolution:
          </p>
        </div>
        <div className="devices-ad">
        </div>
      </div>
      <div className="long-ad">
      </div>
      <label htmlFor="ser">Find any device viewport size</label>
      <div className="search">
        <input
          type="text"
          id="ser"
          placeholder="Write the name of your device..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="table-scroller">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Viewport size</th>
              <th>Device Resolution</th>
              <th>Screen Size</th>
              <th>Pixel Ratio</th>
              <th>Density PPI</th>
              <th>CSS PPI</th>
            </tr>
          </thead>
          <tbody>
            {filteredDevices.length > 0 ? (
              filteredDevices.map((device, indx) => (
                <tr key={device.id}>
                  <td className="type">
                    <Link href={`/all-devices-size/${device.slug}`} className="type device-name-link">

                      {device.type === "Phone" ? (
                        <i className="bi bi-phone"></i>
                      ) : device.type === "Tablet" ? (
                        <i className="bi bi-tablet"></i>
                      ) : device.type === "Watch" ? (
                        <i className="bi bi-smartwatch"></i>
                      ) : (
                        ""
                      )}
                    </Link>
                  </td>
                  <td className="font-b">
                    <Link href={`/all-devices-size/${device.slug}`} className="font-b device-name-link">
                      {device.name}
                    </Link>
                  </td>
                  <td className="color-">
                    <Link href={`/all-devices-size/${device.slug}`} className="color device-name-link">
                      {device.viewport}
                    </Link>
                  </td>
                  <td>
                    <Link href={`/all-devices-size/${device.slug}`} className="device-name-link">
                      {device.resolution}
                    </Link>
                  </td>
                  <td>
                    <Link href={`/all-devices-size/${device.slug}`} className="device-name-link">
                      {device.screen_size}
                    </Link>
                  </td>
                  <td>
                    <Link href={`/all-devices-size/${device.slug}`} className="device-name-link">
                      {device.pixel_ratio}
                    </Link>
                  </td>
                  <td>
                    <Link href={`/all-devices-size/${device.slug}`} className="device-name-link">
                      {device.density_ppi}
                    </Link>
                  </td>
                  <td>
                    <Link href={`/all-devices-size/${device.slug}`} className="device-name-link">
                      {device.css_ppi}
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" style={{ textAlign: "center" }}>
                  Device not found 😕
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .device-name-link {
          color: inherit;
          text-decoration: none;
          font-weight: 500;
        }
        .device-name-link:hover {
          color: #0ea5e9;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Devices;