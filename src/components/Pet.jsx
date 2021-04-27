import { useState } from "react";

export default function Pet(props) {
  const pet = props.pet;
  const vacc = pet.isVaccinated;
  const [vaccText, setVaccText] = useState(vacc);
  console.log(vaccText);

  function toggle() {
    fetch("api/pets/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: pet.name, isVaccinated: vacc }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          vaccText === true ? setVaccText(false) : setVaccText(true);
        } else {
          setVaccText("...");
        }
      });
  }

  const showText = vaccText === false ? "false" : "true";

  return (
    <div>
      {pet.name} - Vaccinated: <button onClick={toggle}>{showText}</button>
    </div>
  );
}
