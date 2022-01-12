(function() {
  requirejs.config({
    patchs: {
      dataService: "./modules/dataService",
      alert: "C:/Users/dell/Desktop/modularization/AMD_RequireJs/js/modules/alert"
    }
  })

  requirejs(["alert"], function(alert) {
    alert.showMsg();
  })
})()
