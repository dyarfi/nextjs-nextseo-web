import React from "react";


function BlockMainBottom(props) {
  const block_bottom = { title : "Bottom", body: 'Body'};
  return (
    <section className="subscriber">
      <div className="container">
        <div className="row">
          <div className="my-4 mx-auto">
            <form className="form-inline">
              <div className="form-row">          
                <div className="col-12">
                  <input type="text" name="subscribe" placeholder="your@email.com" className="form-control" />
                  <button type="submit" name="submit" placeholder="youremail" className="btn btn-dark">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

};

export default BlockMainBottom;