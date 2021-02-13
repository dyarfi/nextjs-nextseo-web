import React from "react";


function BlockMainTop(props) {
  const { data: block_top = {} } = props;
  
  return (
    <section data-filter="overlay-mute" className="block-top" style={{backgroundImage:`url(${block_top.image})`}}>
        <div className="row">
            <div className="col-12 col-lg-9 text-center mx-auto border border-warning py-5 px-4 my-5">
                <span dangerouslySetInnerHTML={{__html: block_top.title}}></span>
                <div className="mx-auto text-white">
                    <span dangerouslySetInnerHTML={{__html: block_top.body}}></span>
                </div>
            </div>
        </div>
    </section>
  );

};

export default BlockMainTop;