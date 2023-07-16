import { json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useLoaderData();
  console.log(data);
  return <EventItem event={data.event} />;
};
export default EventDetailPage;

export async function loader({ request, params }) {
  //request.url <- to get query params
  console.log("LOADER!");
  const id = params.id;
  console.log(id);
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    throw json({ message: "fail to fetch event detail data" }, { status: 500 });
  } else {
    return response;
  }
}
