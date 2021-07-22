const getImage = (dir, fileName, callback) => {
  return import(`../alpaca/${dir}/${fileName}.png`).then((image) =>
    callback(image.default)
  );
};

export default getImage;
