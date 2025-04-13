import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react";

const HogCard = ({ hog }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  if (isHidden) return null; // Hide the hog if "Hide Me" is clicked

  return (
    <Card aria-label="hog card">
      <Card.Content>
        <Card.Header>{hog.name}</Card.Header>
        <img src={hog.image} alt={hog.name} style={{ maxWidth: "100%" }} />
        <Button onClick={() => setIsHidden(true)}>Hide Me</Button>
      </Card.Content>
      {showDetails && (
        <Card.Content>
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
          <p>Highest Medal: {hog["highest medal achieved"]}</p>
        </Card.Content>
      )}
      <Button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </Button>
    </Card>
  );
};

export default HogCard;