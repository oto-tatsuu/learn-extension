
// chrome.runtime.onInstalled.addListener(() => {
//     // Page actions are disabled by default and enabled on select tabs
//     chrome.action.disable();
  
//     // Clear all rules to ensure only our expected rules are set
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
//       // Declare a rule to enable the action on example.com pages
//       let exampleRule = {
//         conditions: [
//           new chrome.declarativeContent.PageStateMatcher({
//             pageUrl: {hostSuffix: '.bilibili.com'},
//           })
//         ],
//         actions: [new chrome.declarativeContent.ShowAction()],
//       };
  
//       // Finally, apply our new array of rules
//       let rules = [exampleRule];
//       chrome.declarativeContent.onPageChanged.addRules(rules);
//     });
//   });

 chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(request);
  console.log(sender);
  console.log(sendResponse);
 });