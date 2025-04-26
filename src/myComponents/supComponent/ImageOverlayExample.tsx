import Card from 'react-bootstrap/Card';
import React from 'react'

function ImgOverlayExample() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img style={{width: "200px", height: "auto"}} src="src/image/hi3BG/AponiaBG.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;