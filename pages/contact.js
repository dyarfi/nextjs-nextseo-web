/** components */
import LayoutDefault from "../layouts/Default";
import BlockMainTop from "../components/blocks/BlockMainTop";
import BlockMainBottom from "../components/blocks/BlockMainBottom";

/** seo */
import { DefaultSeo } from 'next-seo';

export default function Contact(props) {
  const {
    pathname,
    data: { title, description, header, slug, block_top = {} },
  } = props;

  return (
    <>
      <DefaultSeo title={title} description={description} />
      <LayoutDefault pathname={pathname}>
        <BlockMainTop {...{ data: block_top }} />
        <div className="container my-3 py-5 contact">
          <div className="col-lg-4 mx-auto pb-2">
            <h3 className="headline font-weight-bolder text-muted pb-2">Contact Us</h3>
            <div className="text-center text-muted py-3 mb-0">
              <p className="lead text-muted">Drop us an email or just say Hi!</p>
            </div>
          </div>
          <div className="container">
            <div className="row mt-3">
              <div className="col-lg-6">
                <form className="mx-auto form-contact needs-validation" id="form-contact" noValidate>
                  <div className="form-row">
                    <div className="form-group col-lg-6">
                      <label htmlFor="contact-name">Name</label>
                      <div className="input-group">
                        <input required name="contact-name" id="contact-name" className="form-control" placeholder="Name" type="text" />
                        <div className="invalid-feedback">
                          Insert email.
                                    </div>
                      </div>
                    </div>
                    <div className="form-group col-lg-6">
                      <label htmlFor="contact-email">Email</label>
                      <div className="input-group">
                        <input required name="contact-email" id="contact-email" className="form-control" placeholder="Email" type="email" />
                        <div className="invalid-feedback">
                          Insert email.
                                    </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-lg-6">
                      <label htmlFor="contact-phone">Phone</label>
                      <div className="input-group">
                        <input required name="contact-phone" id="contact-phone" className="form-control" placeholder="Phone" type="text" />
                        <div className="invalid-feedback">
                          Insert phone.
                                    </div>
                      </div>
                    </div>
                    <div className="form-group col-lg-6">
                      <label htmlFor="contact-subject">Subject</label>
                      <div className="input-group">
                        <input required name="contact-subject" id="contact-subject" className="form-control" placeholder="Subject" type="text" />
                        <div className="invalid-feedback">
                          Insert subject.
                                    </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-lg-12">
                      <label htmlFor="contact-message">Message</label>
                      <div className="input-group">
                        <textarea className="form-control" name="contact-message" id="contact-message" placeholder="Message" rows="3"></textarea>
                        <div className="invalid-feedback">
                          Insert message.
                                    </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-lg-12">
                      <button type="submit" name="submit" className="btn btn-warning btn-lg btn-block">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-6">
                <div className="container">
                  <div className="row bg-light p-5" style={{ height: '342px' }}>
                    <h4 className="font-weight-bold uppercase">Head Quarter</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, dolores! 42 Road</p>
                    <h4 className="font-weight-bold uppercase">Branch Office</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorum tenetur ab! 980 Road</p>
                  </div>
                </div>
              </div>
              <div className="mx-auto">
                <div className="col-lg-12 pt-4 mt-5">
                  <h3 className="text-center font-weight-bolder mb-5">Direct Call or Email</h3>
                  <div className="row">
                    <div className="col-lg-6">
                      <h3 className="headline font-weight-bolder"><small className="text-muted">Call us :</small>
                        <div className="direct-contact">+62999000-000</div>
                      </h3>
                    </div>
                    <div className="col-lg-6">
                      <h3 className="headline font-weight-bolder"><small className="text-muted">Email us :</small>
                        <div className="direct-contact">email@email.com</div>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BlockMainBottom />

      </LayoutDefault>
    </>
  );
}

Contact.getInitialProps = async ({ ctx }) => {
  const { pathname, err } = ctx;
  const res = await fetch(`${process.env.BASE_URL}/api/contact`);
  const json = await res.json();
  return { data: json, pathname, err };
};