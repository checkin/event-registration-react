import React, { useEffect } from 'react';
import { getEventRegistrationForm } from '@checkin.no/event-registration';

const EventRegistrationForm = ({eventId}) => {
    useEffect(() => {
        getEventRegistrationForm(eventId).initRegistrationForm();
    }, [])
    return <div id="checkin_registration"></div>
}

export default EventRegistrationForm;