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
  axios.get('https://my-json-server.typicode.com/cenkberry/AxiosDB/posts')
       .then(res => showPosts(res))
       .catch(err => console.log(err));
}

function postIt(){
  axios.post('https://my-json-server.typicode.com/cenkberry/AxiosDB/posts' , 
   {
    user: "cenkberry",
    number: "905319231902",
    location : "Istanbul/Turkey"
   })
    .then(res => showPosts(res))
    .catch(err => console.log(err));
}

function putIt(){
  axios.put('https://my-json-server.typicode.com/cenkberry/AxiosDB/posts/1', 
   {
    user: "cenkberry",
    number: "905319231902",
    location : "Istanbul/Turkey",
    Reservation : "New"
   })
    .then(res => showPosts(res))
    .catch(err => console.log(err));
}

function deleteIt(){
  axios.delete('https://my-json-server.typicode.com/cenkberry/AxiosDB/posts/1')
    .then(res => showPosts(res))
    .catch(err => console.log(err));
}

function simReq(){
  axios.all([
    axios.get('https://my-json-server.typicode.com/cenkberry/AxiosDB/posts'),
    axios.get('https://my-json-server.typicode.com/cenkberry/AxiosDB/comments'),
  ])
    .then(axios.spread( (posts , comments) => showPosts(comments)))
    .catch(err => console.log(err));
}

function customHeaders(){
  console.log("sim request")
}

function showPosts(res){
  result.innerHTML = `
  <pre class="text-sm p-1 bg-yellow-400">  <p>Status:</p>  ${JSON.stringify(res.status,  null , 2 )}</pre>
  <pre class="text-sm p-1 bg-green-400">   <p>Headers:</p> ${JSON.stringify(res.headers, null , 2 )}</pre>
  <pre class="text-sm p-1 bg-red-400">     <p>Data:</p>    ${JSON.stringify(res.data,    null , 2 )}</pre>
  <pre class="text-sm p-1 bg-yellow-400">  <p>Config:</p>  ${JSON.stringify(res.config,  null , 2 )}</pre>
  <pre class="text-sm p-1 bg-indigo-400">  <p>SimReq:</p>  ${JSON.stringify(res.data,    null , 2 )}</pre>
  `
}