import EventsList from "../components/EventsList";

const eventList = [
  {
    id: "evt01",
    image:
      "https://w0.peakpx.com/wallpaper/235/27/HD-wallpaper-nature-landscape-landscape-nature.jpg",
    title: "Event 01",
    date: "September 01",
  },
  {
    id: "evt02",
    image:
      "https://w0.peakpx.com/wallpaper/983/204/HD-wallpaper-nature-landscape.jpg",
    title: "Event 02",
    date: "03-03-2024",
  },
  {
    id: "evt03",
    image:
      "https://w0.peakpx.com/wallpaper/615/949/HD-wallpaper-fall-autumn-beautiful-red-nature-beauty-landscapes-scenery.jpg",
    title: "Event 03",
    date: "03-03-2024",
  },
];
const EventsPage = () => {
  return (
    <>
      <h1>EventsPage</h1>
      <EventsList events={eventList} />
    </>
  );
};
export default EventsPage;
