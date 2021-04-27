import Pet from "./Pet";

export default function Client(props) {
  const owner = props.name;
  const pets = props.pets;

  const renderedPets = pets.map((pet) => {
    return <Pet pet={pet} />;
  });

  return (
    <div>
      <h6>{owner}</h6>
      {renderedPets}
    </div>
  );
}
