export default async function getLocales() {
  let localesList = [];
  fetch('http://192.168.1.66:1337/api/i18n/locales')
  .then((response) => response.json())
  .then((data) =>{
    localesList = data;
    console.log(data)
    console.log('lista locales' + localesList)
  });

}
