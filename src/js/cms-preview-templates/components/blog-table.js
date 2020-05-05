import React from "react";

export default class Jumbotron extends React.Component {
    render() {
        const { heading, moreLink, content } = this.props;

        <div class="mw7 center f4-m white ph1">
            <div class="fw9 mb3">{heading}</div>
            {/* {
                content.map( (row, index) => {
                    index%2 === 0 ?
                        <div class="flex-m flex-row-m flex-wrap-m fw9 lh-copy ">
                            <div class="bt br-m b--grey-1 w-50-m pa3 w-80 center">
                                <h3 class={ index%4 === 0 ?"purple" : "cyan" + "f3 mb2"}>{row.heading}</h3>
                                <p>{row.text}</p>
                            </div>
                    :
                    <div class="bt b--grey-1 w-50-m pa3 w-80 center">
                                <h3 class={(index + 1) % 4 === 0 ? "purple" : "cyan" + "f3 mb2"}>{row.heading}</h3>
                                <p>{row.text}</p>
                            </div>
                        </div>

                })
            }
            */}
            <div class="mt4-m">
                <button class="bg-primary f5-m b fs-normal white">
                    {moreLink}
                </button>
            </div>
            {{ end }}
        </div>

    }
}
