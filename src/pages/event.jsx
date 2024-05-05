import { getEvent } from "../api/getEvent";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function Event() {
  const { id_name } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    async function getEventData() {
      try {
        const eventData = await getEvent(id_name);
        setEvent(eventData);
      } catch (error) {
        console.error(error);
      }
    }

    getEventData();
  }, [id_name]);

  return (
    <div className="bg-gray-50 h-screen">
      <Header title={"Event"} />

      <p>{event.name}</p>
    </div>
  );
}

export default Event;
