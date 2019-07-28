---
title: "Find all elements with attribute on page"
description: "How to list all elements that have your chosen attribute in the browser console"
publishDate: 2019-05-20
tags:
- javascript
source:
  title: Get elements by attribute when querySelectorAll is not available without using libraries?
  url: https://stackoverflow.com/questions/9496427/get-elements-by-attribute-when-queryselectorall-is-not-available-without-using-l
---

You can list all elements on the page that have your selected attribute in the console.
Inject the following code into the inspector console:

{{< highlight javascript "linenos=inline">}}
function getAllElementsWithAttribute(attribute) {
var matchingElements = [];
var allElements = document.getElementsByTagName('*')
for (var i = 0, n = allElements.length; i < n; i++) {
  if (allElements[i].getAttribute(attribute) !== null) {
    matchingElements.push(allElements[i]);
  }
}
return matchingElements;
}
getAllElementsWithAttribute('data-foo'); // Your value here
{{</ highlight >}}
