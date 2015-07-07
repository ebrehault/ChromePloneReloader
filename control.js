var query = { active: true, currentWindow: true };

function openLink(href) {
    return function() {
        chrome.tabs.query(query, function(tabs) {
            var tab = tabs[0];
            chrome.tabs.update(tab.id, {url: href});
        });
    }
}

function callback(tabs) {
  var currentTab = tabs[0];
  var url = currentTab.url;
  var parser = document.createElement('a');
  parser.href = url;
  var diazo_off_url = url.indexOf('?') > 0  ? url + '&diazo.off=1' : url + '?diazo.off=1';
  document.getElementById('diazo-off').addEventListener('click', openLink(diazo_off_url));
  var diazo_debug_url = url.indexOf('?') > 0  ? url + '&diazo.debug=1' : url + '?diazo.debug=1';
  document.getElementById('diazo-debug').addEventListener('click', openLink(diazo_debug_url));
  var reload_url = parser.protocol + '//' + parser.host + '/@@reload';
  document.getElementById('reload-iframe').src = reload_url;
  //document.write('<iframe src="'+reload_url+'" width="100%" height="90%" style="border: 0;"></iframe>');
}
chrome.tabs.query(query, callback);