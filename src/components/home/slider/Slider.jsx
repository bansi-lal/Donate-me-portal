import React from "react";
import { Carousel, Card, Button } from "react-bootstrap";

export default function Slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://www.takshilalearning.com/wp-content/uploads/2021/08/World-Organ-Donation-Day.jpg.webp"
            alt="First slide"
            width="100px"
            height="20%"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.takshilalearning.com/wp-content/uploads/2021/08/World-Organ-Donation-Day.jpg.webp"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.takshilalearning.com/wp-content/uploads/2021/08/World-Organ-Donation-Day.jpg.webp"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
