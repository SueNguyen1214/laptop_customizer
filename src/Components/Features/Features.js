import React from "react";
import FeatureOption from "../FeatureOption/FeatureOption";
import FEATURES from "../../FEATURES";
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from "slugify";

function Features(props) {
  const features = Object.keys(FEATURES).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const options = FEATURES[feature].map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <FeatureOption
          featureHash={featureHash}
          options={options}
          feature={feature}
          itemHash={itemHash}
          USCurrencyFormat={props.USCurrencyFormat}
          item={item}
          updateFeature={props.updateFeature}
          selected={props.selected}
        />
      );
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });

  return <>{features}</>;
}

export default Features;
