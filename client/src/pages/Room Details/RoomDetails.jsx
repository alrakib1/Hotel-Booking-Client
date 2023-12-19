import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import { useParams } from "react-router-dom";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";

const RoomDetails = () => {
  const { id } = useParams();

  const [room, setRoom] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "/rooms.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const singleRoom = data.find((room) => (room._id = id));
        setRoom(singleRoom);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  console.log("🚀 ~ file: RoomDetails.jsx:5 ~ RoomDetails ~ id:", id, room);
  return <Container>


    <Helmet>
      <title>{room?.title}</title>
    </Helmet>
  </Container>;
};

export default RoomDetails;
