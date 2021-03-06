import React from 'react';

/** reactstrap */
import { Row, Col } from 'reactstrap';

function PackageCardList(props) {
  const { itemList } = props;
  const disc = 4;
  return (
    <div className="card-portrait">
      <div className="card-portrait-row">
        {itemList.map((item, idx) => {
          return (
            <Col
              key={`p-${idx}`}
              xs={12}
              md={6}
              lg={4}
              className="card-portrait-col"
            >
              <div className="card-portrait-content ilist-c h-100">
                <Col xs={12} className="card-portrait-image align-self-center">
                  <div className="text-center">
                    <img
                      alt={item.title}
                      src="https://source.unsplash.com/random/800x800"
                      width="auto"
                      height="auto"
                      className="img-thumbnail rounded-circle img-fluid w-50"
                    />
                    <h3 className="mt-2 text-muted">
                      <a href="employee-single.html">{item.title}</a>
                    </h3>
                  </div>
                </Col>
                <Col xs={12} className="align-self-center text-center">
                  <h4>{disc}0% Off!</h4>
                  <p className="border-bottom border-top text-secondary p-3">
                    {item.description}
                  </p>
                  <Col className="d-flex justify-content-between">
                    <a href="#" className="btn btn-md btn-warning">
                      <span className="font-weight-bold h4 text-dark">
                        $ <s>{item.price}</s>{' '}
                      </span>
                    </a>
                    <a href="#" className="btn btn-md btn-outline-success">
                      <span className="font-weight-bold h4">
                        $ {item.price - (disc % 100)}
                      </span>
                    </a>
                  </Col>
                </Col>
              </div>
            </Col>
          );
        })}
      </div>
    </div>
  );
}

export default PackageCardList;
