import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
  return <EventsList events={events} />;
}
export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // METHOD 01 => return { isError: true, message: "could not fetch events." };
    // METHOD 02 => throw { message: "Could not fetch events!" };
    // METHOD 03 =>throw new Response(JSON.stringify({ message: "Could not fetch events!" }), {
    //   status: 500,
    // });
    throw json({ message: "Could not fetch events!" }, { status: 500 });
  } else {
    //const resData = await response.json();
    return response;
  }
}
