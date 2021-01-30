import SVGO from 'svgo';

const svgo = new SVGO();

const convertSvgToJsx = async (svg: string) => {
  const { data } = await svgo.optimize(svg);

  return data;
};

export default convertSvgToJsx;
