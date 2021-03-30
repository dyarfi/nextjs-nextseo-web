/** reactstrap */
import {
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Button,
} from 'reactstrap';

/** components */
import LayoutDefault from '@layouts/Default';
import BlockMainTop from '@components/blocks/BlockMainTop';
import BlockMainBottom from '@components/blocks/BlockMainBottom';

/** seo */
import { NextSeo } from 'next-seo';
/** env */
import ENV from '@config/env';
/** vars */
const {
  BASE_URL = '',
  BASE_API_URL = '',
  BASE_SEO = '',
  STATIC_DIR = '',
  AUTHOR,
} = ENV;

function Contact(props) {
  const {
    pathname,
    data: {
      title,
      metaTitle,
      description,
      metaDescription,
      header,
      slug,
      block_top = {},
    },
  } = props;

  const SEOS = {
    title,
    description: metaDescription,
    canonical: `${BASE_URL}${pathname}`,
    openGraph: [
      {
        url: BASE_URL,
        images: { url: `${BASE_URL}${STATIC_DIR}logo-share.jpg` },
        site_name: AUTHOR,
      },
    ],
    ...BASE_SEO,
  };

  return (
    <>
      <NextSeo {...SEOS} />
      <LayoutDefault pathname={pathname}>
        <BlockMainTop items={block_top} />
        <Container tag="section" className="my-3 py-5 contact">
          <Col lg={4} className="mx-auto pb-2">
            <h3 className="headline font-weight-bolder text-muted pb-2">
              Contact Us
            </h3>
            <div className="text-center text-muted py-3 mb-0">
              <p className="lead text-muted">
                Drop us an email or just say Hi!
              </p>
            </div>
          </Col>
          <Container>
            <Row className="mt-3">
              <Col lg={6}>
                <Form
                  className="mx-auto form-contact needs-validation"
                  id="form-contact"
                  noValidate
                >
                  <FormGroup row>
                    <Col lg={6}>
                      <Label for="contact-name">Name</Label>
                      <div className="input-group">
                        <Input
                          required
                          name="contact-name"
                          id="contact-name"
                          placeholder="Name"
                          type="text"
                        />
                        <FormText className="invalid-feedback">
                          Insert name.
                        </FormText>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <Label for="contact-email">Email</Label>
                      <div className="input-group">
                        <Input
                          required
                          name="contact-email"
                          id="contact-email"
                          placeholder="Email"
                          type="email"
                        />
                        <FormText className="invalid-feedback">
                          Insert email.
                        </FormText>
                      </div>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col lg={6}>
                      <Label for="contact-phone">Phone</Label>
                      <div className="input-group">
                        <Input
                          required
                          name="contact-phone"
                          id="contact-phone"
                          placeholder="Phone"
                          type="text"
                        />
                        <FormText className="invalid-feedback">
                          Insert phone.
                        </FormText>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <Label for="contact-subject">Subject</Label>
                      <div className="input-group">
                        <Input
                          required
                          name="contact-subject"
                          id="contact-subject"
                          placeholder="Subject"
                          type="text"
                        />
                        <FormText className="invalid-feedback">
                          Insert subject.
                        </FormText>
                      </div>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col lg={12}>
                      <Label for="contact-message">Message</Label>
                      <div className="input-group">
                        <Input
                          type="textarea"
                          name="contact-message"
                          id="contact-message"
                          placeholder="Message"
                          rows="3"
                        />
                        <FormText className="invalid-feedback">
                          Insert message.
                        </FormText>
                      </div>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col lg={12}>
                      <Button
                        type="submit"
                        name="submit"
                        color="warning"
                        size="lg"
                        block
                      >
                        Submit
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </Col>
              <Col lg={6}>
                <Container>
                  <Row className="bg-light p-5" style={{ height: '342px' }}>
                    <h4 className="font-weight-bold uppercase">Head Quarter</h4>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consequuntur, dolores! 42 Road
                    </p>
                    <h4 className="font-weight-bold uppercase">
                      Branch Office
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Expedita dolorum tenetur ab! 980 Road
                    </p>
                  </Row>
                </Container>
              </Col>
              <div className="mx-auto">
                <Col lg={12} className="pt-4 mt-5">
                  <h3 className="text-center font-weight-bolder mb-5">
                    Direct Call or Email
                  </h3>
                  <Row>
                    <Col lg={6}>
                      <h3 className="headline font-weight-bolder">
                        <small className="text-muted">Call us :</small>
                        <div className="direct-contact">+62999000-000</div>
                      </h3>
                    </Col>
                    <Col lg={6}>
                      <h3 className="headline font-weight-bolder">
                        <small className="text-muted">Email us :</small>
                        <div className="direct-contact">email@email.com</div>
                      </h3>
                    </Col>
                  </Row>
                </Col>
              </div>
            </Row>
          </Container>
        </Container>
        <BlockMainBottom />
      </LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { resolvedUrl } = ctx;
  const res = await fetch(`${BASE_API_URL}/api/contact`);
  const json = await res.json();
  return { props: { data: json, pathname: resolvedUrl } };
}

export default Contact;
