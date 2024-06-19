import { useState } from "react";
import ActiveButton from "../../Button/ActiveButton";
import DeleteButton from "../../Button/DeleteButton";

const ListItem = () => {
  const [animals, setAnimals] = useState([
    { type: "turtle", icon: "🐢", activated: false },
    { type: "octopus", icon: "🐙", activated: false },
    { type: "fish", icon: "🐠", activated: false },
    { type: "flamingo", icon: "🦩", activated: false },
    { type: "penguin", icon: "🐧", activated: false },
  ]);
  const handleActive = (index) => {
    setAnimals((prevState) =>
      prevState.map((animal, i) =>
        i === index ? { ...animal, activated: !animal.activated } : animal
      )
    );
  };

  const handleDelete = (index) => {
    setAnimals((prevState) => prevState.filter((_, i) => i !== index));
  };
  return (
    <>
      {animals.length ? (
        <ul className=" mt-8 flex text-left gap-5 flex-col items-center">
          {animals.map((item, index) => (
            <li
              className=" text-2xl flex items-center gap-5"
              key={item.type}
              style={{
                color: item.activated ? "green" : "",
                fontWeight: item.activated ? "bold" : "",
              }}
            >
              {item.icon} {item.type}
              <ActiveButton
                animal={item}
                handleActive={() => handleActive(index)}
              />
              <DeleteButton handleDelete={() => handleDelete(index)} />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default ListItem;
