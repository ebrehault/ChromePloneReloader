var query = { active: true, currentWindow: true };
function callback(tabs) {
  var currentTab = tabs[0];
  var parser = document.createElement('a');
  parser.href = currentTab.url;
  var url = parser.protocol + '//' + parser.host + '/@@reload';
  document.write('<iframe src="'+url+'" width="100%" height="100%" style="border: 0;"></iframe>');
}
chrome.tabs.query(query, callback);