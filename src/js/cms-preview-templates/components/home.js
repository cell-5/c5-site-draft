import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const { image, heading, text } = this.props;

    return <section class="home bg-gradient-1 white">
      <div class="mw9 center relative z-1 pt3 pt5-m ph4 lh-solid">
        <div class="flex-m flex-row-m flex-wrap-m">
          <div class="flex-none w-50-l">
            {heading}
            <div class="mt3 mt4-m">
              {text}
            </div>
          </div>
          <div class="flex-none w-50-l">
            <img src={image} class="dn db-l" />
          </div>
        </div>
      </div>
      <svg viewBox="0 0 1920 395" aria-hidden="true" class="absolute-l bottom-0-l">
        <path opacity="0.123"
          d="M1920 15.4326C1920 15.4326 1709.21 -47.2841 1543.66 80.1453C1378.1 207.575 1215.35 197.53 1088.6 176.819C961.858 156.109 757.697 111.99 457.5 305C432.217 322.299 101.663 386.455 0.0795509 369.337C-0.0994701 368.908 0.0795648 385.5 0.0795648 385.5H953H1920V15.4326Z"
          fill="white" />
        <path opacity="0.24"
          d="M1920 77.7982C1920 77.7982 1764.08 85.7591 1641.21 40.6252C1518.34 -4.50865 1148.64 165.136 1124.83 172.739C1101.02 180.342 939.621 221.907 739.738 211.479C539.854 201.051 45.5492 303.06 0 323C1.42976 323.535 0 385.5 0 385.5H1920V77.7982Z"
          fill="white" />
        <path
          d="M0 366.804C0 366.804 91.8627 356.446 239.399 295.623C325.944 261.974 468.987 246.187 570.998 260.966C698.485 274.539 760.203 291.068 904.983 260.966C1049.76 230.865 1635.73 138.902 1919.87 158.789C1920.16 159.726 1919.87 395 1919.87 395H963.5H0V366.804Z"
          fill="#25272E" />
        <path
          d="M0 366.804C0 366.804 91.8627 356.446 239.399 295.623C325.944 261.974 468.987 246.187 570.998 260.966C698.485 274.539 760.203 291.068 904.983 260.966C1049.76 230.865 1635.73 138.902 1919.87 158.789C1920.16 159.726 1919.87 395 1919.87 395H963.5H0V366.804Z"
          fill="#25272E" />
      </svg>
    </section >

  }
}
