import React from "react";
import Home from "./components/home";
import BlogTable from "./components/blog-table";

export default class PostPreview extends React.Component {
  render() {
    const { entry, getAsset } = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return (
      <div>
        <Home image={image} heading={entry.getIn(["data", "heading"])} text={entry.getIn(["data", "text"])} />

        <div class="bg-black-2 tc white">
          <BlogTable heading={entry.getIn(["data", "OurWork.heading"])} moreLink={entry.getIn(["data", "OurWork.moreLink"])} content={entry.getIn(["data", "OurWork.content"])} />

          <svg aria-hidden="true" viewBox="0 0 1920 388">
            <path opacity="0.5"
              d="M1920 15.4326C1920 15.4326 1709.21 -47.2841 1543.66 80.1453C1378.1 207.575 1215.35 197.53 1088.6 176.819C961.858 156.109 757.697 111.99 457.5 305C291.5 355 101.663 386.455 0.0795509 369.337C-0.0994701 368.908 0.0795648 385.5 0.0795648 385.5H953H1920V15.4326Z"
              fill="white" />
            <path opacity="0.5"
              d="M1920 77.7982C1920 77.7982 1764.08 85.7591 1641.21 40.6252C1518.34 -4.50865 1148.64 165.136 1124.83 172.739C1101.02 180.342 939.621 221.907 739.738 211.479C539.854 201.051 45.5492 303.06 0 323C1.42976 323.535 0 385.5 0 385.5H1920V77.7982Z"
              fill="white" />
            <path
              d="M0 359.804C0 359.804 91.8627 349.446 239.399 288.623C325.944 254.974 468.987 239.187 570.998 253.966C698.485 267.539 760.203 284.068 904.983 253.966C1049.76 223.865 1635.73 131.902 1919.87 151.789C1920.16 152.726 1919.87 388 1919.87 388H963.5H0V359.804Z"
              fill="white" />
          </svg>
        </div>
        <div class="tc bg-white">
          <div class="mw9 center h-100 relative ph4">
            <div class="absolute absolute--center bl-m b--grey-2 h-75"></div>
            <div class="flex-m flex-row-m flex-wrap-m">
              <div class="flex-none w-50-m ph4-m mb4">
                <div class="w-100 h-85-m">
                  <h3 class="f2 fw9 mb2">{entry.getIn(["data", "WhoWeAre.heading"])}</h3>
                  <div class="blog b f5-m">{entry.getIn(["data", "WhoWeAre.text"])}</div>
                </div>
                <div class="mt4-m">
                  <button class="bg-primary f5-m b fs-normal white">
                    {entry.getIn(["data", "WhoWeAre.moreLink"])}
                  </button>
                </div>
              </div>
              <div class="flex-none w-50-m ph4-m mb4">
                <div class="w-100 h-85-m">
                  <h3 class="f2 fw9 mb2">{entry.getIn(["data", "HowWeWork.heading"])}</h3>
                  <div class="blog b f5-m">{entry.getIn(["data", "HowWeWork.text"])}</div>
                </div>
                <div class="mt4-m">
                  <button class="bg-primary f5-m b fs-normal white">
                    {entry.getIn(["data", "HowWeWork.moreLink"])}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <svg aria-hidden="true" viewBox="0 0 1920 395">
            <path opacity="0.5"
              d="M0.00012207 15.4326C0.00012207 15.4326 210.791 -47.2841 376.344 80.1453C541.897 207.575 704.652 197.53 831.397 176.819C958.142 156.109 1162.3 111.99 1462.5 305C1628.5 355 1818.34 386.455 1919.92 369.337C1920.1 368.908 1919.92 385.5 1919.92 385.5H967H0.00012207V15.4326Z"
              fill="#9E22E9" />
            <path opacity="0.5"
              d="M-0.000106812 75.6076C-0.000106812 75.6076 155.922 83.5346 278.789 38.5928C401.657 -6.34904 771.359 162.573 795.171 170.144C818.984 177.715 980.379 219.103 1180.26 208.719C1380.15 198.336 1874.45 299.911 1920 319.766C1918.57 320.299 1920 382 1920 382H-0.000106812V75.6076Z"
              fill="#9E22E9" />
            <path
              d="M1920 365.743C1920 365.743 1828.14 354.994 1680.6 291.881C1594.06 256.965 1451.01 240.583 1349 255.919C1221.52 270.003 1159.8 287.154 1015.02 255.919C870.238 224.684 284.266 129.259 0.127686 149.894C-0.15951 150.867 0.127686 395 0.127686 395H956.5H1920V365.743Z"
              fill="#25272E" />
          </svg>
        </div>
      </div>
    )
  }
}