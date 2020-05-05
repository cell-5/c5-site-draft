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

        <div class="view-wrapper bg-black-2 tc white">
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
      </div>
    )
  }
}