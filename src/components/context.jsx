import React, { createContext, useState } from "react";
import { videos } from "./Video-files";
export const Context = createContext(null);

export function ContextProvider(props) {
  const [page, setPage] = useState("Video");
  const [currentIndex, setCurrentIndex] = useState(0); // Iteration of the videos array
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = () => {
    const itemsCopy = [...videos];
    const selectedItemsCopy = [];

    while (selectedItemsCopy.length < 10) {
      const randomIndex = Math.floor(Math.random() * itemsCopy.length);
      const randomItem = itemsCopy[randomIndex];

      selectedItemsCopy.push(randomItem);
      itemsCopy.splice(randomIndex, 1);
    }

    setSelectedItems(selectedItemsCopy);
  };

  const contextValue = {
    page,
    currentIndex,
    setCurrentIndex,
    setPage,
    selectedItems,
    handleSelect,
    name,
    setName,
    surName,
    setSurName,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
}
