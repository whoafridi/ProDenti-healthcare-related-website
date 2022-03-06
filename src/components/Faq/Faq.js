import React from "react";
import './Faq.css';
import { Accordion, Button, FormControl, InputGroup } from "react-bootstrap";

const Faq = () => {
  return (
    <>
      <div className="container">
        <h2 className="text-center fw-bold mb-3 mt-4">
          Frequently Asked Questions
        </h2>
        <div className="mt-5 mb-5 row d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img
              style={{ width: "100%" }}
              src="https://cdni.iconscout.com/illustration/premium/thumb/faq-customer-support-concept-2885213-2399531.png"
              alt="dentist"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Accordion defaultActiveKey="0" flush className="according-item">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Why choose us?</Accordion.Header>
                <Accordion.Body>
                  We have the most powerful and enthusiast dental doctors in our
                  team. So don't forget to reach out.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>How we works?</Accordion.Header>
                <Accordion.Body>
                  Visit our services and then place an order that you want.
                  Later we will review and let you know the futher update.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>What do you get from us?</Accordion.Header>
                <Accordion.Body>
                  Better quality, better support. Life easy website for us to
                  grow with us.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
      <div
        style={{ height: "450px;" }}
        class="container faq mt-5 d-flex justify-content-center align-items-center rounded-3"
      >
        <div>
          <h1 className="mt-5 faq-text">LET'S STAY IN TOUCH</h1>
          <p className="faq-text text-center">
            Get updates on sales, specials and more
          </p>
          <InputGroup className="mb-5">
            <FormControl
              className="rounded-pill"
              placeholder="Your email address"
              aria-label="Your email"
              aria-describedby="basic-addon2"
            />
            <Button
              variant="secondary"
              id="button-addon2"
              className="rounded-pill ms-2"
            >
              Subscribe
            </Button>
          </InputGroup>
        </div>
      </div>
    </>
  );
};

export default Faq;
