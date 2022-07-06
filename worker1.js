var d = new Date();
console.log("[" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds() + "][worker1] worker1.js is called");

onmessage = function(e) {
  d = new Date();
  console.log("[" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds() + "][worker1] worker1 receive message: ", e);

  d = new Date();
  console.log("[" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds() + "][worker1] worker1 return response");
  postMessage(e.data, [e.data]);
  d = new Date();
  console.log("[" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds() + "][worker1] worker1 has returned response");
}