import React, { useRef, useEffect, useState } from 'react';
import { PopupButton } from "react-calendly";

export default function Calendly({ selector }) {
    const ref = useRef();
    const [mount, setMount] = useState(false);
  
    useEffect(() => {
      ref.current = document.querySelector(selector);
      setMount(true);
    }, [selector]);
  
    return mount ? (
      <PopupButton
        url="https://calendly.com/myupself/consulting-session"
        rootElement={document.getElementById(selector)}
        text="Click here to schedule!"
      />
    ) : null;
  }