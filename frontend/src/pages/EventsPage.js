import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  {
    return data.isError && <p>Error Occurs</p>;
  }
  const events = data.events;
  return <EventsList events={events} />;
}
export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/eventsx");

  if (!response.ok) {
    return { isError: true, message: "could not fetch events." };
  } else {
    //const resData = await response.json();
    return response;
  }
}
