(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.AppComponent, ng.http.HTTP_PROVIDERS);
  });
})(window.app || (window.app = {}));
 