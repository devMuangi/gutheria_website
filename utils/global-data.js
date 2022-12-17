export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'gutheria';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'For a better ,greener environment.';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';
  const aboutGutheria = process.env.BLOG_ABOUT
    ? decodeURI(process.env.BLOG_ABOUT)
    :'We are dedicated to making a better environment for future generations by reusing recycling and reducing waste materials in our immediate environment.We are dedicated to making a better environment for future generations by reusing recycling and reducing waste materials in our immediate environment.We are dedicated to making a better environment for future generations by reusing recycling and reducing waste materials in our immediate environment.We are dedicated to making a better environment for future generations by reusing recycling and reducing waste materials in our immediate environment.';
  const missionGutheria = process.env.BLOG_MISSION
    ? decodeURI(process.env.BLOG_MISSION)
    : 'Our mission is to provide a clean environment for prosperity.Our mission is to provide a clean environment for prosperity.';

  return {
    name,
    blogTitle,
    footerText,
    aboutGutheria,
    missionGutheria
  };
};
