import React, {useEffect, useState} from "react";

const format = date =>
  new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata"
  }).format(date);

/* Local time in Gurgaon (IST) — useful context for anyone scheduling a call. */
export default function Clock() {
  const [time, setTime] = useState(() => format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(format(new Date())), 15000);
    return () => clearInterval(id);
  }, []);

  return <time>{time} IST</time>;
}
