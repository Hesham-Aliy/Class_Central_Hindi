

$(function () {
  // use plugins and options as needed, for options, detail see
  // https://www.i18next.com
  i18next
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(i18nextBrowserLanguageDetector)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      debug: true,
      fallbackLng: 'en',
      resources: {
        en: {
          translation: {
            intro: {
              title: 'class centeral',
              subTitle: 'Some subtitle'
            }
          }
        },
        de: {
          translation: {
            intro: {
              title: 'वर्ग केंद्रीय',
              subTitle: 'Some subtitle'
            }
          }
        }
      }
    }, (err, t) => {
      if (err) return console.error(err);

      // for options see
      // https://github.com/i18next/jquery-i18next#initialize-the-plugin
      jqueryI18next.init(i18next, $, { useOptionsAttr: true });

      // start localizing, details:
      // https://github.com/i18next/jquery-i18next#usage-of-selector-function
      $('body').localize();
    });
});

$(document).ready(function(){
  var mainUrl = 'https://www.classcentral.com';

  $('a[href^="/"]').each(function(){
    $(this).attr('href', mainUrl + $(this).attr('href'));
  });
});
z