const Echart = () => {
  return (
    <div>
      <h1>echart</h1>
      <iframe
        src="https://echarts.apache.org/examples/zh/editor.html?c=bar-simple"
        width="100%"
        height="1000px"
      ></iframe>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  return {
    props: {
      layout: true,
    }, // will be passed to the page component as props
  };
}

export default Echart;
