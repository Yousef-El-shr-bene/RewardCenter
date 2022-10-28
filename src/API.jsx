async function git(a) {
  let id 
 await fetch(a).then((data)=>  data.json()).then( d => {id = d})
 return await id
}  
async function POST (OBGECT,URL) {
  await fetch(URL,{method:"POST",body:OBGECT,headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
}
async function allid() {
  return await fetch("http://localhost:3000/users").then((e)=>e.json()).then((e)=> { return e } )
}
async function patchBYid(OBGECT,URL) {
  await fetch(URL,{method:"PATCH",body: JSON.stringify(OBGECT),headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
}


export {git,POST,allid,patchBYid}