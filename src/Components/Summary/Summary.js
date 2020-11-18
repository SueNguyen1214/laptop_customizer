import React from "react";
import SummaryOption from "../SummaryOption/SummaryOption";

function Summary(props) {
  const summary = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const selectedOption = props.selected[feature];

    return (
      <SummaryOption
        featureHash={featureHash}
        selectedOption={selectedOption}
        feature={feature}
        USCurrencyFormat={props.USCurrencyFormat}
      />
    );
  });

  return <>{summary}</>;
}

export default Summary;
