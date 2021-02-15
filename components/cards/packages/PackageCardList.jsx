import React from 'react';

/** reactstrap */
import { Col } from 'reactstrap';

function PackageCardList(props) {
  const { itemList } = props;
  const disc = 4;
  return itemList.map((item, idx) => {
    return (
      <Col
        xs="12"
        sm="6"
        md="6"
        lg="3"
        key={`p-${idx}`}
        className="position-relative mx-auto"
      >
        <div className="card mb-4">
          <div className="card-header">
            <h4 className="card-title m-0 p-0 font-weight-bolder text-secondary">
              {item.title}
            </h4>
          </div>
          <div className="card-body text-left">
            <p className="card-text">{item.description}</p>
            <span className="font-lead-base font-weight-bold text-muted">
              {disc}0% Off!
            </span>
            <div className="promotion-promo">$ {item.price}</div>
            <div className="promotion-price">
              <div className="promotion-price-desc">Now</div>
              <div className="promotion-price-text">
                $ {item.price - (disc % 100)}
              </div>
            </div>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-warning">
              Order
            </a>
          </div>
        </div>
      </Col>
    );
  });
}

export default PackageCardList;
