import styled from "styled-components";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";
import { AiFillCalendar } from "react-icons/ai";
import { FaCalendarCheck } from "react-icons/fa";

const Title = styled.h2`
  color: black;
`;
const Text = styled.p`
  color: grey;
  font-weight: 500;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: black;
  
`;


const EventContainer = styled.div`
  background-color: rgba(255, 251, 142, 0.8);
  border: 2px solid rgba(166, 183, 43, 0.53);
  width: 300px;
  border-radius: 15px;
`;

export default function Event({ name, location, speaker, type, start, end }) {
  return (
    <EventContainer className="event-container">
      <TitleContainer className="title-container">
        <Title className="event-name"> <MdOutlineDriveFileRenameOutline />{name}</Title>
      </TitleContainer>
      <Text className="event-location"> <FaMapLocationDot />Location: {location}</Text>
      <Text className="event-speaker"> <MdPeopleAlt />Speaker: {speaker}</Text>
      <Text className="event-type"> <AiFillAppstore />Type: {type}</Text>
      <Text className="event-start"> <AiFillCalendar />Start: {start}</Text>
      <Text className="event-end"> <FaCalendarCheck />End: {end}</Text>
    </EventContainer>
  );
}