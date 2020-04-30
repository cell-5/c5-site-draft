import React from "react";
import Home from "./components/home";

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

        <section class="view-wrapper bg-black-2 tc white">

        </section>
      </div>
    )
  }
}