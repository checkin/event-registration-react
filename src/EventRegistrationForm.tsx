import React, { useEffect, useMemo } from 'react';
import { getEventRegistrationForm } from '@checkin.no/event-registration';
import cleanupScripts from './utils/cleanupScripts';

const EventRegistrationForm = ({eventId}) => {
    const eventRegistrationForm = useMemo(() => {
        return getEventRegistrationForm(eventId);
    }, []);

    useEffect(() => {
        return () => {
            cleanupScripts();
        }
    }, [])

    useEffect(() => {
        document.event_id = eventId;
        if(document.event_id === eventId) {
            eventRegistrationForm.initRegistrationForm();
        } else {
            eventRegistrationForm.changeEvent(eventId);
        }
    }, [eventId]);


    return <div id="checkin_registration"></div>
}

export default EventRegistrationForm;