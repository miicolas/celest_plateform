import { useState, useEffect } from "react";
import { getEvents } from "../api/getEvents";
import CardEvent from "../components/CardEvent";
import Header from "../components/Header";
import { isAuthentificated } from "../lib/AuthCheck";

function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    isAuthentificated();

    async function getEventsData() {
      try {
        const eventsData = await getEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error(error);
      }
    }
    getEventsData();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header title={"Dashboard"} />
      <div className="flex flex-wrap gap-5 p-5">
        {events.map((event) => (
          <CardEvent
            key={event.id}
            name={event.name}
            date={event.date}
            places={event.places}
            status={event.status}
            id_name={event.id_name}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
