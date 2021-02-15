import React from 'react';
/** Reactstrap */
import { Col, Row } from 'reactstrap';

function ServiceCardList(props) {
  const { itemList } = props;
  return (
    itemList &&
    itemList.map((item, idx) => {
      const classBoxService =
        idx % 2 == 1 ? 'service-list__home-right' : 'service-list__home-left';
      // const classBoxOrder = (idx % 2 == 1) ? '' : 'order-md-2';
      const classBoxOrder = idx % 2 == 1 ? '' : '2';
      // const classBoxAlign = (idx % 2 == 1) ? 'text-right' : 'order-md-1';
      const classBoxAlign = idx % 2 == 1 ? '' : '1';
      return (
        <Row key={`s-${idx}`} className={`mb-5 pb-5 ${classBoxService}`}>
          <Col md={{ size: '8', order: classBoxOrder }}>
            <h4 className="mm-heading font-weight-bolder">
              {item.title.replace(/(<([^>]+)>)/gi, '')}
            </h4>
            <p className="text-muted">
              {item.description.replace(/(<([^>]+)>)/gi, '')}
            </p>
          </Col>
          <Col md={{ size: '4', order: classBoxAlign }}>
            <a href="service.html">
              <img
                alt={`${item.title.replace(/(<([^>]+)>)/gi, '')}`}
                className="img-thumbnail img-fluid mx-auto"
                src={`${item.image}`}
                data-src="holder.js/100px240/auto"
              />
            </a>
          </Col>
        </Row>
      );
    })
  );
}

export default ServiceCardList;
