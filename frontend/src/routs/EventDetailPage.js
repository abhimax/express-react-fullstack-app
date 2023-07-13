import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const { id } = useParams();
  return (
    <>
      <h1>EventDetailPage </h1>
      <h2>{id}</h2>
    </>
  );
};
export default EventDetailPage;
