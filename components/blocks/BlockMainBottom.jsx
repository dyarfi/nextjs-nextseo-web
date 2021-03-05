import React from 'react';

/** reactstrap */
import { Container, Col, Row } from 'reactstrap';

function BlockMainBottom(props) {
  const block_bottom = { title: 'Bottom', body: 'Body' };
  return (
    <section className="subscriber">
      <Container>
        <Row>
          <div className="my-4 mx-auto">
            <form className="form-inline">
              <div className="form-row">
                <Col lg={12}>
                  <label htmlFor="subscribe" className="sr-only">
                    Subscribe
                  </label>
                  <input
                    type="text"
                    name="subscribe"
                    id="subscribe"
                    placeholder="your@email.com"
                    className="form-control"
                  />
                  <button
                    type="submit"
                    name="submit"
                    placeholder="youremail"
                    className="btn btn-dark"
                  >
                    Subscribe
                  </button>
                </Col>
              </div>
            </form>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default BlockMainBottom;
