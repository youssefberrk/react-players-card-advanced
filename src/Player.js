import React from "react";
import { Card } from "react-bootstrap";
import "./Player.css";

const Player = ({
	name,
	team,
	nationality,
	jerseyNumber,
	age,
	image,
	situation,
	isSelected,
	onClick,
}) => {
	return (
		<Card
			onClick={onClick}
			className="player-card"
			style={{
				width: "18rem",
				border: isSelected ? "4px solid #FFD700" : "2px solid #007bff",
				borderRadius: "10px",
				boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
				cursor: "pointer",
			}}>
			<Card.Img
				variant="top"
				src={image}
				alt={name}
				style={{
					height: "200px",
					objectFit: "contain",
					borderTopLeftRadius: "10px",
					borderTopRightRadius: "10px",
				}}
			/>
			<Card.Body
				style={{
					textAlign: "center",
					backgroundColor: situation
						? "rgba(20, 82, 20, 0.8)" // field
						: "rgba(128, 0, 0, 0.8)", // bench
					color: "#fff",
					padding: "1rem",
					borderRadius: "0 0 10px 10px",
				}}>
				<Card.Title>{name}</Card.Title>
				<Card.Text>
					<strong>Team:</strong> {team} <br />
					<strong>Nationality:</strong> {nationality} <br />
					<strong>Jersey Number:</strong> {jerseyNumber} <br />
					<strong>Age:</strong> {age}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Player;
