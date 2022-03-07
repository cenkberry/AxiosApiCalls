const btnGet = document.querySelector('.btnGet');
const btnPos = document.querySelector('.btnPos');
const btnPut = document.querySelector('.btnPut');
const btnDel = document.querySelector('.btnDel');
const btnSim = document.querySelector('.btnSim');
const btnCus = document.querySelector('.btnCus');
const btnTrn = document.querySelector('.btnTrn');
const btnErr = document.querySelector('.btnErr');
const btnCan = document.querySelector('.btnCan');
const result = document.querySelector('.result');

btnGet.addEventListener("click" , getPosts);
btnPos.addEventListener("click" , postIt);
btnPut.addEventListener("click" , putIt);
btnDel.addEventListener("click" , deleteIt);
btnSim.addEventListener("click" , simReq);
btnCus.addEventListener("click" , customHeaders);

function getPosts(){
  axios
    .get('https://my-json-server.typicode.com/cenkberry/AxiosDB/posts')
    .then(res => showPosts(res))
    .catch(err => console.log(err));
}

function postIt(){
  console.log("Post it")
}

function putIt(){
  console.log("Put it")
}

function deleteIt(){
  console.log("delete it")
}

function simReq(){
  console.log("sim request")
}

function customHeaders(){
  console.log("sim request")
}

function showPosts(res){
  result.innerHTML = `
  <h1 class="text-2xl">${JSON.stringify(res.data, null , 2 )}</h1 class="text-2xl"><br> 
  <h1 class="text-2xl">${JSON.stringify(res.data, null , 2 )}</h1 class="text-2xl"><br> 
  <h1 class="text-2xl">${JSON.stringify(res.data, null , 2 )}</h1><br> 
  `
}