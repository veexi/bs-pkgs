// http://api.qingyunke.com
chrome.permissions.request({
  origins: ['http://api.qingyunke.com/*'],
}, (ok) => drrr.log("request: " + ok));

chunkString = (size, str) => {
  pos = 0; chunks = []
  while pos < str.length {
    chunks.push(str.substr(pos, size))
    pos += size
  }
  chunks
}

batch_print = msg => {
  buffer = ""; msgs = []
  msg.split("。").forEach(ctx => {
    if ctx.length then
      chunkString(120, ctx + "。").forEach(chk => {
        if (buffer.length + chk.length) > 120
        then { msgs.push(buffer); buffer = chk }
        else { buffer = buffer + chk; }
      })
  })
  if(buffer.length) then msgs.push(buffer)
  msgs.reverse();
  msgs.forEach(m => drrr.print("/me" + m))
}

event [msg,me] (user, cont:'^#') => {
  msg = cont.substr(1)
  drrr.log(msg)
  url='http://api.qingyunke.com/api.php?key=free&appid=0&msg='
     + encodeURI(msg)
  fetch(url)
    .then(r=>r.json())
    .then(r=>batch_print(("@" + user + " " + r.content).replaceAll('{br}', '\n')));
}
