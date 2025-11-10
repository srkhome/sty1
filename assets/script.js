
const CONFIG = {
  adminEmail: "ueue31@gmail.com",
  adminPass: "12345678",
  sheetWebhook: "",
  lineUrl: "https://line.me/ti/p/40LmfznrLG"
};

async function saveSignup(data){
  const key = "signups";
  const list = JSON.parse(localStorage.getItem(key) || "[]");
  list.push({...data, ts: new Date().toISOString()});
  localStorage.setItem(key, JSON.stringify(list));
  if (CONFIG.sheetWebhook){
    try{
      await fetch(CONFIG.sheetWebhook, {method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(data)});
    }catch(e){ console.warn("sheet webhook failed", e); }
  }
}
function getSignups(){ try{return JSON.parse(localStorage.getItem("signups")||"[]");}catch(e){return [];} }
function downloadCSV(rows){
  const headers=["name","email","ts"];
  const lines=[headers.join(",")].concat(rows.map(r=>[r.name,r.email,r.ts].map(x=>`"${(x||'').replace(/"/g,'"')}"`).join(",")));
  const blob=new Blob([lines.join("\n")],{type:"text/csv;charset=utf-8;"});
  const url=URL.createObjectURL(blob); const a=document.createElement("a");
  a.href=url; a.download="signups.csv"; a.click(); URL.revokeObjectURL(url);
}
