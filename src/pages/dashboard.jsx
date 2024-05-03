import { useState, useEffect } from "react";
import { getEvents } from "../api/getEvents";
import CardEvent from "../components/CardEvent";
import Header from "../components/Header";

function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getEventsData() {
      try {
        const eventsData = await getEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error(error);
        // Handle error state or show error message to the user
      }
    }
    getEventsData();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-wrap gap-5 p-5">
        {events.map((event) => (
          <CardEvent
            key={event.id}
            name={event.name}
            date={event.date}
            places={event.places}
            status={event.status}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
