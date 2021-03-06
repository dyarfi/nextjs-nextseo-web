import React from 'react';

/** reactstrap */
import { Col, Row } from 'reactstrap';

function BlockMainTop(props) {
  const { items: block_top = {} } = props;

  return (
    <section
      data-filter="overlay-mute"
      className="block-top"
      style={{ backgroundImage: `url(${block_top.image})` }}
    >
      <Row className="row">
        <Col
          xs={12}
          lg={9}
          className="text-center mx-auto border border-warning py-5 px-4 my-5"
        >
          <span dangerouslySetInnerHTML={{ __html: block_top.title }}></span>
          <div className="mx-auto text-white">
            <span dangerouslySetInnerHTML={{ __html: block_top.body }}></span>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default BlockMainTop;
