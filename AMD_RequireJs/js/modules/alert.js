define(['dataService', ], function (dataService) {
  let msg = "alert.js";

  function showMsg() {
    console.log(msg, dataService.getName());
  }

  return {
    showMsg
  }
});