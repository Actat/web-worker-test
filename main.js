window.onload = async function() {
  console.log("window loaded");

  if (!window.Worker) {
    console.error("web worker is not available");
    return;
  }

  console.log("web worker is available");

  var d = new Date();
  console.log("[" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds() + "][main] start worker1");
  var worker1 = new Worker("worker1.js");

  worker1.onmessage = function(e) {
    var d = new Date();
    console.log("[" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds() + "][main] response received from worker1", e);
  }

  var ui8a = new Uint8Array(1024 * 1024 * 32);
  for (var i = 0; i < ui8a.length; i++ ) {
    ui8a[i] = 0;
  }

  var d = new Date();
  console.log("[" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds() + "][main] sleep 1 sec");
  await new Promise(s => {setTimeout(s, 1000)})
  var d = new Date();
  console.log("[" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds() + "][main] wake up");

  d = new Date();
  console.log("[" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds() + "][main] post test message to worker1");
  worker1.postMessage(ui8a.buffer);
  d = new Date();
  console.log("[" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds() + "][main] test message to worker1 has posted");

}