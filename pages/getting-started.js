/** components */
import LayoutDefault from '@layouts/Default';
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

function GettingStarted(props) {
  const SEOS = {
    title,
    description: metaDescription,
    canonical: `${BASE_URL}${pathname}`,
    openGraph: [
      {
        url: BASE_URL,
        images: { url: `${BASE_URL}${STATIC_DIR}xconnect.jpg` },
        site_name: AUTHOR,
      },
    ],
    ...BASE_SEO,
  };

  return (
    <>
      <NextSeo {...SEOS} />
      <LayoutDefault>
        {/* <BlockMainTop /> */}
        <div className="container my-3 py-5 contact">
          <h1 className="headline font-weight-bold uppercase">
            Getting Started
          </h1>
          <p>
            Page of documentation Cillum occaecat ut laborum id. Pariatur amet
            sint dolor id ea consectetur Lorem quis enim ipsum cupidatat velit
            excepteur. Eiusmod enim est ex commodo laboris adipisicing. Enim
            aute voluptate commodo pariatur est magna sit. Do est est cupidatat
            dolore. Deserunt aliquip pariatur tempor Lorem aliqua voluptate
            anim. Velit cillum enim minim Lorem cillum ipsum cillum do labore
            excepteur fugiat.
            <br />
            <br />
            Consequat nostrud officia do consequat consectetur ut est eiusmod
            commodo cupidatat. Sit ullamco magna proident est aute. Ex eu sint
            incididunt adipisicing laboris amet quis ad cupidatat laboris
            adipisicing aliquip pariatur.
            <br />
            <br />
            Pariatur adipisicing elit incididunt officia velit elit ut ad
            incididunt nisi velit. Excepteur aute id ipsum minim. Incididunt et
            aliqua aute occaecat in cillum proident adipisicing ea eiusmod
            Lorem. Laboris laboris culpa duis pariatur reprehenderit occaecat
            consequat cupidatat ullamco magna mollit sunt laboris officia.
            <br />
            <br />
            Cupidatat ipsum in minim anim sit ad consequat duis. Id nulla esse
            irure elit fugiat duis esse irure incididunt ut. Aliqua incididunt
            incididunt in exercitation aliqua.
            <br />
            <br />
            Tempor consequat labore pariatur eu et ipsum. Excepteur
            reprehenderit id qui amet minim labore aliqua pariatur veniam
            eiusmod duis id duis occaecat. Deserunt do fugiat consectetur veniam
            consectetur non Lorem qui labore laborum anim voluptate. Cupidatat
            in fugiat laborum ex laboris reprehenderit Lorem. Cupidatat fugiat
            ad id dolore irure. Est tempor irure duis aliquip reprehenderit.
            Aliqua anim duis quis Lorem consequat veniam anim mollit nulla id in
            minim nostrud enim.
            <br />
            <br />
            Anim tempor minim occaecat non non. Aute reprehenderit quis ex
            laboris. Adipisicing dolor excepteur anim aliqua aliqua exercitation
            proident laborum. Nisi quis ea ipsum cupidatat sint cillum quis
            laborum deserunt. Esse aliquip officia magna do ex ad officia enim
            irure ullamco pariatur mollit nulla.
            <br />
            <br />
            Aute consequat commodo sint tempor minim veniam quis quis nulla
            dolore culpa. Qui non ullamco incididunt amet dolore velit. Proident
            laborum id ipsum sint laborum in et qui dolore minim in anim aute.
            <br />
            <br />
            Nulla deserunt enim non eu non. Aliquip adipisicing occaecat
            cupidatat deserunt ex do mollit ut sit. Aliquip dolor ullamco
            ullamco dolor proident deserunt esse exercitation elit. Labore
            labore exercitation id sit cillum irure consequat enim. Excepteur
            amet magna qui ad ea dolore dolore labore aliquip non. Est aute esse
            nostrud consequat sint aliqua sunt aute non commodo fugiat voluptate
            duis.
            <br />
            <br />
            Anim cupidatat sunt cupidatat nisi adipisicing tempor labore veniam
            aliquip non reprehenderit irure dolore. Quis ullamco pariatur
            laboris velit magna culpa elit veniam dolor anim officia ut veniam
            qui. Duis amet ullamco velit in nisi minim anim cupidatat sint non.
            Velit sit pariatur pariatur magna minim dolor ipsum dolor nisi
            mollit. Laborum dolor sit anim quis qui cillum culpa proident
            adipisicing laborum mollit irure deserunt sint. Culpa reprehenderit
            sint laborum mollit pariatur ex nulla aliqua ipsum irure deserunt
            ullamco.
          </p>
        </div>
        <BlockMainBottom />
      </LayoutDefault>
    </>
  );
}

GettingStarted.getServerSideProps = async ({ ctx }) => {
  const { pathname, err } = ctx;
  const res = await fetch(`${BASE_API_URL}/api/global`);
  const json = await res.json();
  return { data: json, pathname, err };
};

export default GettingStarted;
