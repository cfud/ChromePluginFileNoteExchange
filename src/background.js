
function opentab() {
  var newURL = "https://cfud.biz/cryptosharing/";
        chrome.tabs.create({ url: newURL });
}

chrome.browserAction.onClicked.addListener(opentab);
