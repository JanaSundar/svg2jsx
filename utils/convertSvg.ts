import SVGO from 'svgo';

let svgo: SVGO;

const convertSvgToJsx = async (svg: string) => {
  if (!svgo) {
    svgo = new SVGO();
  }

  const { data } = await svgo.optimize(svg);

  return data;
};

export default convertSvgToJsx;
