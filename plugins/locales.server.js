let strapiLocales = {
  locales: [],
  defaultLocale : ''
};
export default async function getLocales() {
  fetch('http://localhost:1337/api/i18n/locales')
  .then((response) => response.json())
  .then((data) => {
    data.forEach(item => {
      strapiLocales.locales.push(
        {
          code: item.code,
          file: `${item.code}.json`
        }
      )
      if(item.isDefault) strapiLocales.defaultLocale = item.code;
    });
  });

  // console.log(strapiLocales)
  return strapiLocales;
}
