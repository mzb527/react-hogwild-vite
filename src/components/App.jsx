import React, { useState } from "react";
import HogList from "./components/HogList";
import FilterSortBar from "./components/FilterSortBar";
import HogForm from "./components/HogForm";
import porkerData from "./data/porker_data";

const App = () => {
  // State to manage the list of hogs
  const [hogs, setHogs] = useState(porkerData);

  // State for filtering and sorting
  const [isGreased, setIsGreased] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  // Function to add a new hog to the list
  const addNewHog = (hog) => {
    setHogs([...hogs, hog]);
  };

  // Functionality for filtering and sorting hogs
  const filteredHogs = hogs
    .filter((hog) => (isGreased ? hog.greased : true)) // Filters greased hogs if checkbox is checked
    .sort((a, b) =>
      sortBy === "name"
        ? a.name.localeCompare(b.name) // Sorts by name alphabetically
        : a.weight - b.weight // Sorts by weight numerically
    );

  // Rendering the application layout
  return (
    <div className="App" style={{ padding: "20px" }}>
      {/* Filter and Sort Bar */}
      <FilterSortBar
        isGreased={isGreased}
        setIsGreased={setIsGreased}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Form to add new hogs */}
      <HogForm addNewHog={addNewHog} />

      {/* List of hogs */}
      <HogList hogs={filteredHogs} />
    </div>
  );
};

export default App;