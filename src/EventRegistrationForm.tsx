import React, { useEffect, useMemo } from "react";
import { getEventRegistrationForm } from "@checkin.no/event-registration";

interface Props {
  eventId: number;
}

const EventRegistrationForm = ({ eventId }: Props) => {
  const eventRegistrationForm = useMemo(() => {
    return getEventRegistrationForm(eventId);
  }, []);

  useEffect(() => {
    document.event_id = eventId;
    if (document.event_id === eventId) {
      eventRegistrationForm.initRegistrationForm();
    } else {
      eventRegistrationForm.changeEvent(eventId);
    }
  }, [eventId]);

  return <div id="checkin_registration"></div>;
};

export default EventRegistrationForm;
