var $dnHPu$reactjsxruntime = require("react/jsx-runtime");
var $dnHPu$react = require("react");
var $dnHPu$checkinnoeventregistration = require("@checkin.no/event-registration");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $f5bfd4ce37214f4f$export$2e2bcd8739ae039);



const $91d1d5d8a0528c9f$var$EventRegistrationForm = ({ eventId: eventId  })=>{
    const eventRegistrationForm = (0, $dnHPu$react.useMemo)(()=>{
        return (0, $dnHPu$checkinnoeventregistration.getEventRegistrationForm)(eventId);
    }, []);
    (0, $dnHPu$react.useEffect)(()=>{
        document.event_id = eventId;
        if (document.event_id === eventId) eventRegistrationForm.initRegistrationForm();
        else eventRegistrationForm.changeEvent(eventId);
    }, [
        eventId
    ]);
    return /*#__PURE__*/ (0, $dnHPu$reactjsxruntime.jsx)("div", {
        id: "checkin_registration"
    });
};
var $91d1d5d8a0528c9f$export$2e2bcd8739ae039 = $91d1d5d8a0528c9f$var$EventRegistrationForm;


var $f5bfd4ce37214f4f$export$2e2bcd8739ae039 = (0, $91d1d5d8a0528c9f$export$2e2bcd8739ae039);


