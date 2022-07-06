window.onload = function() {
  console.log("window loaded");

  if (!window.Worker) {
    console.error("web worker is not available");
    return;
  }

  console.log("web worker is available");

  var d = new Date();
  console.log("[" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds() + "] start worker1");
  var worker1 = new Worker("worker1.js");

  worker1.onmessage = function(e) {
    var d = new Date();
    console.log("[" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds() + "] response received from worker1", e);
  }

  d = new Date();
  console.log("[" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds() + "] post test message to worker1");
  worker1.postMessage("test message");
  d = new Date();
  console.log("[" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds() + "] test message to worker1 has posted");

}