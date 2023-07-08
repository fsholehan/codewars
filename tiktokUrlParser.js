const tiktokUrlParser = (url) => {
  const link = url.split("@");
  return link[1];
};

console.log(tiktokUrlParser("https://www.tiktok.com/@fuadsholehan"));
