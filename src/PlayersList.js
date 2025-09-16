import React from "react";
import players from "./players";
import Player from "./Player";
import { Container, Row, Col } from "react-bootstrap";

const PlayersList = () => {
	return (
		<Container
			style={{
				marginTop: "-12px",
				padding: "10px",
				gap: "10px",
			}}>
			<Row className="d-flex justify-content-center gap-3 ">
				{players.map((player, index) => (
					<Col
						key={index}
						xs={12}
						sm={6}
						md={4}
						lg={3}
						className="d-flex justify-content-center  p-3"
						style={{
							marginTop: "-22px",
						}}>
						<Player {...player} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default PlayersList;
