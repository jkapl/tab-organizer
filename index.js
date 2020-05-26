let tabsArr = [];
let listNode = document.getElementById("myTabs")

chrome.tabs.query({}, (tabs)=>{
  for (i=0; i < tabs.length; i++) {
    let elem = document.createElement("li")
    // tabsA.push({title, favIconUrl, url});
    elem.textContent = tabs[i].title;
    document.body.insertBefore(elem, listNode);
  }
  
});

