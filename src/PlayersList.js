import React, { useState } from "react";
import playersData from "./players";
import Player from "./Player";
import { Container, Row, Col } from "react-bootstrap";

const PlayersList = () => {
	const [players, setPlayers] = useState(playersData);
	const [selectedIndex, setSelectedIndex] = useState(null);

	const handlePlayerClick = (index) => {
		if (selectedIndex === null) {
			setSelectedIndex(index);
		} else if (selectedIndex === index) {
			setSelectedIndex(null);
		} else {
			const firstPlayer = players[selectedIndex];
			const secondPlayer = players[index];

			if (firstPlayer.situation !== secondPlayer.situation) {
				let fieldCount = players.filter((p) => p.situation).length;

				if (fieldCount > 5) {
					alert("Cannot have more than 5 players on the field!");
					setSelectedIndex(null);
					return;
				}

				const newPlayers = [...players];

				[newPlayers[selectedIndex], newPlayers[index]] = [
					{ ...secondPlayer, situation: firstPlayer.situation },
					{ ...firstPlayer, situation: secondPlayer.situation },
				];

				setPlayers(newPlayers);
				setSelectedIndex(null);
			} else {
				alert(
					"Please select one player from the field and one from the bench to swap them."
				);
				setSelectedIndex(null);
			}
		}
	};

	const fieldPlayers = [];
	const benchPlayers = [];

	players.forEach((player, index) => {
		if (player.situation) {
			fieldPlayers.push({ player, originalIndex: index });
		} else {
			benchPlayers.push({ player, originalIndex: index });
		}
	});

	return (
		<Container style={{ marginBottom: "42px", padding: "10px", gap: "10px" }}>
			<h2
				style={{
					width: " 400px",
					padding: "10px",
				}}
				className="mt-4 bg-primary text-white">
				Players on the field: ({fieldPlayers.length}/5)
			</h2>
			<br />
			<Row className="d-flex justify-content-center gap-3">
				{fieldPlayers.map(({ player, originalIndex }) => (
					<Col
						key={`field-${originalIndex}`}
						xs={12}
						sm={6}
						md={4}
						lg={3}
						className="d-flex justify-content-center p-3">
						<Player
							{...player}
							isSelected={selectedIndex === originalIndex}
							onClick={() => handlePlayerClick(originalIndex)}
						/>
					</Col>
				))}
			</Row>

			<h2
				style={{
					width: " 400px",
					padding: "10px",
				}}
				className="mt-4 bg-primary  text-warning">
				Players on the bench: ({benchPlayers.length})
			</h2>
			<br />
			<Row className="d-flex justify-content-center gap-3">
				{benchPlayers.map(({ player, originalIndex }) => (
					<Col
						key={`bench-${originalIndex}`}
						xs={12}
						sm={6}
						md={4}
						lg={3}
						className="d-flex justify-content-center p-3">
						<Player
							{...player}
							isSelected={selectedIndex === originalIndex}
							onClick={() => handlePlayerClick(originalIndex)}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default PlayersList;
