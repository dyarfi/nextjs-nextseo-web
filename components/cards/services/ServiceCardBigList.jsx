import React from 'react';

/** Reactstrap */
import { Col, Row } from 'reactstrap';

function ServiceCardBigList(props) {
  const { itemList } = props;

  return itemList.map((item, idx) => {
    const classBoxService =
      idx % 2 == 1 ? 'service-list__body_right' : 'service-list__body_left';
    return (
      <Row key={`k-${idx}`} className="no-gutters py-5 position-relative">
        <div className="service-list__image">
          <div data-filter="overlay-dark">
            <img
              src={`${item.image}`}
              className="img-fluid"
              alt={`${item.name}`}
              width="auto"
              height="auto"
            />
          </div>
        </div>
        <Col xs={9} lg={6} className={classBoxService}>
          <div className="service-list__content">
            <div className="service-list__overlay">
              <div className="service-list__caption">
                <h3 className="service-list__headline">{item.name}</h3>
                <p
                  className="text-justify"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></p>
                <a
                  href={`${item.image}`}
                  className="service-list__link btn btn-outline-secondary btn-lg"
                  data-fancybox="img-menus"
                  data-caption={`${item.name}`}
                >
                  <span className="h6 font-weight-bolder p-0 m-0 text-uppercase">
                    Read More <span>About {item.name}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  });
}

export default ServiceCardBigList;
