import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import EventRegistrationForm from "./EventRegistrationForm";

function App() {
  const [eventId, setEventId] = useState(49815);
  useEffect(() => {
    document.checkinRegistrationData = {
      ticketBuyer: {
        name: "Test testen",
        phone: "+47 123 45 678",
        countryCode: "NO",
        email: "test@example.com",
      },
      crmPropertyValues: [
        {
          propertyKey: "",
          propertyValue: "",
          context: "orderContactParticipant",
        },
      ],
    };
  }, []);
  return (
    <div>
      <EventRegistrationForm eventId={eventId} />
    </div>
  );
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
