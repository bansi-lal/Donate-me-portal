import React from "react";
import { Card, Button } from "react-bootstrap";
import "../features/features.css";

export default function Features() {
  return (
    <>
      <div className="mainCard">
        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://pngimg.com/uploads/doctor/doctor_PNG15988.png"
          />
          <Card.Body>
            <Card.Title>Doctor Change</Card.Title>

            <Button variant="primary">View</Button>
          </Card.Body>
        </Card>

        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://static.vecteezy.com/system/resources/previews/002/976/607/original/project-manager-and-admin-vector.jpg"
          />
          <Card.Body>
            <Card.Title>Super Admin</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
