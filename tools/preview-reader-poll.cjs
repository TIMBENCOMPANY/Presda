// Local browser-test fixture only. Never uses production credentials or data.
const http = require('node:http');
const { spawn } = require('node:child_process');
const { existsSync } = require('node:fs');
const votes = new Map(), events = new Set();
const server = http.createServer(async (req,res) => {
  if (existsSync('test-results/poll-failure')) { res.writeHead(503); res.end(); return; }
  let raw=''; for await (const chunk of req) raw+=chunk;
  const body=JSON.parse(raw);
  const {p_voter:voter,p_action:action}=body;
  let accepted=false;
  if(req.url.endsWith('presda_poll_submit')) {
    if(action==='view') events.add(voter+':poll_view');
    else if(!votes.has(voter)) {votes.set(voter,action);accepted=true;events.add(voter+':vote_'+action);events.add(voter+':poll_completed');}
  }
  const casablanca=[...votes.values()].filter(v=>v==='casablanca').length;
  res.writeHead(200,{'Content-Type':'application/json'});
  res.end(JSON.stringify({casablanca,madrid:votes.size-casablanca,total:votes.size,choice:votes.get(voter)??null,accepted}));
  console.log(JSON.stringify({rpc:req.url,action,total:votes.size,events:events.size}));
});
server.listen(3101,'127.0.0.1',()=>{
  const child=spawn(process.execPath,['node_modules/next/dist/bin/next','start','--port','3100'],{
    stdio:'inherit',env:{...process.env,VERCEL:'',SUPABASE_URL:'http://127.0.0.1:3101',SUPABASE_SERVICE_ROLE_KEY:'local-fixture-only-never-production'}
  });
  process.on('SIGINT',()=>{child.kill();server.close();});
  child.on('exit',()=>server.close());
});
