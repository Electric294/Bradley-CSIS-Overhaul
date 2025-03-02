const page_friendly_url = window && window.location.pathname;
const params = Object.fromEntries(new URLSearchParams(window.location.search));

(function () {
  if (apolloEventsConfig?.profile) {
    (function (a, b, c, d) {
      a = `https://tags.tiqcdn.com/utag/rvaed/${apolloEventsConfig.profile}/prod/utag.js`;
      b = document;
      c = "script";
      d = b.createElement(c);
      d.src = a;
      d.type = "text/java" + c;
      d.async = true;
      a = b.getElementsByTagName(c)[0];
      a.parentNode.insertBefore(d, a);

      // Once the tealium script is loaded call our function
      d.onload = function () {
        if (!d.onloadDone) {
          d.onloadDone = true;
          // No longer needed as there is a native tealium view event
          // utag.track("page_view", { url: page_friendly_url, ...params });
        }
      };
    })();
  }
})();
