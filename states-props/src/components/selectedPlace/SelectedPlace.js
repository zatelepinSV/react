import { useState, useCallback } from "react";
import { DIFFERENT_PLACES } from "../data/Data";
import TabButton from "../tabContent/TabButton";
import TabContent from "../tabContent/TabContent";
import classes from "./SelectPlace.module.css";

const SelectedPlace = () => {

  const [selectedPlace, setSelectedPlace] = useState('');

  let tabContent = <p>Please select a place</p>;

  if (typeof selectedPlace === "number") {
    tabContent = <TabContent {...DIFFERENT_PLACES[selectedPlace]} />;
  }
  const onPlaceClick = useCallback(selectedButton => {
    setSelectedPlace(selectedButton);
  },[selectedPlace]);

  return (
    <section className={classes.selected}>
      <menu>
        <ul>
          {DIFFERENT_PLACES.map((place, index) => <TabButton
            key={place.id}
            isSelected={index === selectedPlace}
            onSelect={() => onPlaceClick(index)}
          >{place.title}</TabButton>)}
        </ul>
      </menu>
      {tabContent}
    </section>
  );
};

export default SelectedPlace;