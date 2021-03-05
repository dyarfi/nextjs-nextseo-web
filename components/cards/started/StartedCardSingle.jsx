import React from 'react';

/** Reactstrap */
import { Col, Row } from 'reactstrap';

export default function StartedCardSingle(props) {
  const { itemList } = props;
  return (
    <div className="boxed-bottom">
      <Col xs={12} md={6} lg={4} className="boxed-bottom-left">
        <div className="boxed-bottom-content">
          <h4 className="font-weight-bolder text-uppercase headline text-muted">
            Lorem ipsum dolor sit amet.
          </h4>
          <h4>Learn More About IOTA Connect</h4>
          <p className="text-justify">
            IOTA Connect is an IoT analytics platform service that allows you to
            aggregate, visualize and analyze live data streams in the cloud.
            IOTA Connect provides instant visualizations of data posted by your
            devices to IOTA Connect. With the ability to execute MATLAB® code in
            IOTA Connect you can perform online analysis and processing of the
            data as it comes in. IOTA Connect is often used for prototyping and
            proof of concept IoT systems that require analytics.
          </p>
        </div>
      </Col>
      <Col xs={12} md={6} lg={4} className="boxed-bottom-right">
        <div className="boxed-bottom-content">
          <h4 className="font-weight-bolder text-uppercase headline text-muted">
            Lorem ipsum dolor sit amet.
          </h4>
          <h4>What is IoT?</h4>
          <p className="text-justify">
            Internet of Things (IoT) describes an emerging trend where a large
            number of embedded devices (things) are connected to the Internet.
            <br />
            <br />
            IoT solutions are built for many vertical applications such as
            environmental monitoring and control, health monitoring, vehicle
            fleet monitoring, industrial monitoring and control, and various
            home automation.
          </p>
        </div>
      </Col>
      <Col xs={12} md={6} lg={4} className="boxed-bottom-left">
        <div className="boxed-bottom-content">
          <h4 className="font-weight-bolder text-uppercase headline text-muted">
            Lorem ipsum dolor sit amet.
          </h4>
          <h4>Learn More About IOTA Connect</h4>
          <p className="text-justify">
            IOTA Connect is an IoT analytics platform service that allows you to
            aggregate, visualize and analyze live data streams in the cloud.
            IOTA Connect provides instant visualizations of data posted by your
            devices to IOTA Connect. With the ability to execute MATLAB® code in
            IOTA Connect you can perform online analysis and processing of the
            data as it comes in. IOTA Connect is often used for prototyping and
            proof of concept IoT systems that require analytics.
          </p>
        </div>
      </Col>
    </div>
  );
}
