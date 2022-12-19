import {jsx as $jfIsG$jsx} from "react/jsx-runtime";
import {useMemo as $jfIsG$useMemo, useEffect as $jfIsG$useEffect} from "react";
import {getEventRegistrationForm as $jfIsG$getEventRegistrationForm} from "@checkin.no/event-registration";




var $03e110a58a2ad238$export$2e2bcd8739ae039 = ()=>{
    const headScripts = document.head.getElementsByTagName("script");
    const headLinks = document.head.getElementsByTagName("link");
    const scripts = [];
    const links = [];
    for (const script of headScripts)if (script.src.includes("registration.checkin.no")) scripts.push(script);
    for (const link of headLinks)if (link.href.includes("registration.checkin.no")) links.push(link);
    scripts.forEach((script)=>{
        document.head.removeChild(script);
    });
    links.forEach((link)=>{
        document.head.removeChild(link);
    });
};


const $3adeb65f111af5a9$var$EventRegistrationForm = ({ eventId: eventId  })=>{
    const eventRegistrationForm = (0, $jfIsG$useMemo)(()=>{
        return (0, $jfIsG$getEventRegistrationForm)(eventId);
    }, []);
    (0, $jfIsG$useEffect)(()=>{
        return ()=>{
            (0, $03e110a58a2ad238$export$2e2bcd8739ae039)();
        };
    }, []);
    (0, $jfIsG$useEffect)(()=>{
        document.event_id = eventId;
        if (document.event_id === eventId) eventRegistrationForm.initRegistrationForm();
        else eventRegistrationForm.changeEvent(eventId);
    }, [
        eventId
    ]);
    return /*#__PURE__*/ (0, $jfIsG$jsx)("div", {
        id: "checkin_registration"
    });
};
var $3adeb65f111af5a9$export$2e2bcd8739ae039 = $3adeb65f111af5a9$var$EventRegistrationForm;


var $d415641d0cfd8c85$export$2e2bcd8739ae039 = (0, $3adeb65f111af5a9$export$2e2bcd8739ae039);


export {$d415641d0cfd8c85$export$2e2bcd8739ae039 as default};
