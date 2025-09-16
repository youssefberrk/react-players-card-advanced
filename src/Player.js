import React, { useState } from "react";
import "./Player.css";
import { Card, Modal, Button } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const handleCardClick = () => {
		setShowModal(true);
	};

	const handleClose = () => setShowModal(false);
	return (
		<>
			<Card
				className="player-card"
				style={{
					width: "18rem",
					border: "2px solid #007bff",
					borderRadius: "10px",
					boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
				}}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onClick={handleCardClick}>
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
						backgroundColor: "rgba(20, 82, 20, 0.8)",
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
			<Modal show={showModal} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>{name}</Modal.Title>
				</Modal.Header>
				<Modal.Body className="text-center">
					<img
						src={image}
						alt={name}
						style={{ width: "100%", borderRadius: "10px" }}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

Player.defaultProps = {
	name: "Unknown Player",
	team: "Unknown Team",
	nationality: "Unknown",
	jerseyNumber: 0,
	age: "N/A",
	image: "https://via.placeholder.com/150",
};

export default Player;
