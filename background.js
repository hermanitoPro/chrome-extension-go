chrome.webNavigation.onBeforeNavigate.addListener(
  function (details) {
    let prefix = "go.";
    let url = new URL(details.url);
    if (url.searchParams.get("q").startsWith(prefix)) {
      let path = url.searchParams.get("q").substring(prefix.length);
      let redirectTo = "https://neon.go/" + path;
      chrome.tabs.update(details.tabId, { url: redirectTo });
    }
  },
  {
    url: [{ urlContains: "q=go." }]
  }
);