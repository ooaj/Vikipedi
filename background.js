chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
  	var actualUrl = details.url;
    var actualUrlParts = actualUrl.split("/");
    var stub = actualUrlParts[2];
    var stubParts = stub.split("\.");
    var domainIndex = stubParts.length - 2;
    if (stubParts[domainIndex] == "wikipedia") {
    	stubParts.splice(domainIndex, 1, "vikipedi");
    	stub = stubParts.join(".");
    	actualUrlParts.splice(2, 1, stub);
    	var newUrl = actualUrlParts.join("/");
    	var actualUrl2 = newUrl
	var actualUrlParts2 = actualUrl2.split("/");
	var stub2 = actualUrlParts2[2];
	var stubParts2 = stub2.split("\.");
	stubParts2.splice(domainIndex+1, 1, "pw");
	stub2 = stubParts2.join(".");
	actualUrlParts2.splice(2, 1, stub2);    
	var newUrl2 = actualUrlParts2.join("/");	
    	return { redirectUrl: newUrl2 };
    }
  },
  {urls: ["*://*.wikipedia.org/*"]},
  ["blocking"]
);
