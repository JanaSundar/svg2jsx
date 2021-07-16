import SVGO from 'svgo';
import svgtojsx from 'svg-to-jsx';

let svgo: SVGO;

const convertSvgToJsx = async (svg: string) => {
  if (!svgo) {
    svgo = new SVGO();
  }

  const { data } = await svgo.optimize(svg);
  const jsx = await svgtojsx(data);

  return jsx;
};

export default convertSvgToJsx;
