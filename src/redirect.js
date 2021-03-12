var contextMenuButton = {
  "id":"wdim",
  "title":"What does it mean?",
  "contexts": ["selection"]
};
chrome.contextMenus.create(contextMenuButton);
chrome.contextMenus.onClicked.addListener(function(clickData, tab){
  if (clickData.menuItemId == "wdim" && clickData.selectionText){
    word = clickData.selectionText;
    if (word.length < 24) {
      chrome.tabs.create({url:"https://wikipedia.org/wiki/" + word});
    } else {
      console.error("Text length > 24 characters !")
    }
  }
});
