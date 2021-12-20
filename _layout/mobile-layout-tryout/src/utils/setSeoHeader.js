export default ({ title, description, lang }) => {
  if (!document.querySelector('meta[name="description"]')) {
    // skip if rendering not ready
    return;
  }
  // basic SEO
  document.title = title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute('content', description);
  // document
  //   .querySelector('link[rel="canonical"]')
  //   .setAttribute('href', `https://hkbus.app${window.location.pathname}`);
  // // language related meta tag
  // document
  //   .querySelector('html')
  //   .setAttribute('lang', lang === 'zh' ? 'zh-Hant' : lang);
  // document
  //   .querySelector('link[rel="alternative"][hreflang="en"]')
  //   .setAttribute(
  //     'href',
  //     'https://hkbus.app' + window.location.pathname.replace(`/${lang}`, '/en')
  //   );
  // document
  //   .querySelector('link[rel="alternative"][hreflang="zh-Hant"]')
  //   .setAttribute(
  //     'href',
  //     'https://hkbus.app' + window.location.pathname.replace(`/${lang}`, '/zh')
  //   );
  // document
  //   .querySelector('link[rel="alternative"][hreflang="x-default"]')
  //   .setAttribute(
  //     'href',
  //     'https://hkbus.app' + window.location.pathname.replace(`/${lang}`, '/zh')
  //   );
  // // facebook
  // document
  //   .querySelector('meta[property="og:title"]')
  //   .setAttribute('content', title);
  // document
  //   .querySelector('meta[property="og:url"]')
  //   .setAttribute('content', `https://hkbus.app${window.location.pathname}`);
  // document
  //   .querySelector('meta[property="og:description"]')
  //   .setAttribute('content', description);
  // // twitter card
  // document
  //   .querySelector('meta[name="twitter:title"]')
  //   .setAttribute('content', title);
  // document
  //   .querySelector('meta[name="twitter:description"]')
  //   .setAttribute('content', description);
};
