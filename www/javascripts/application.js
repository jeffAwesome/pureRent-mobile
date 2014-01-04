
// steroids.view.navigationBar.show("Hello World");

steroids.view.navigationBar.show("Pure Rent");

function login() {
  var webView = new steroids.views.WebView("renter-dashboard.html");
  steroids.layers.push(webView);
}

function loginForm() {
  login();
  return false;
}

function settings() {
  var webView = new steroids.views.WebView("renter-settings.html");
  steroids.layers.push(webView);
}


function renterLogin() {
  var webView = new steroids.views.WebView("renter-login.html");
  steroids.layers.push(webView);
}

function landlordLogin() {
}

