function Documentation() {
  return (
    <>
      <h1>Documentation</h1>
      <p></p>
    </>
  );
}

Documentation.getInitialProps = async ({ ctx }) => {
  const { pathname, err } = ctx;
  // const res = await fetch(`${process.env.BASE_URL}/api`);
  // const json = await res.json();
  const json = { test: 'hallo' };
  return { data: json, pathname, err };
};

export default Documentation;
