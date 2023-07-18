import {
  json,
  redirect,
  useLoaderData,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  return <EventItem event={data.event} />;
};
export default EventDetailPage;

export async function loader({ request, params }) {
  //request.url <- to get query params
  const id = params.id;
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    throw json({ message: "fail to fetch event detail data" }, { status: 500 });
  } else {
    return response;
  }
}

export async function action({ request, params }) {
  //request.url <- to get query params
  const id = params.id;
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "Could no delete event" }, { status: 500 });
  }
  return redirect("/events");
}
