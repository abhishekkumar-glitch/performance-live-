const sampleData = [
  {rank:1,name:'Alice Tan',team:'Team Orion',score:1820,category:'dev'},
  {rank:2,name:'Brandon Lee',team:'Nova',score:1685,category:'data'},
  {rank:3,name:'Chen Wei',team:'Aurora',score:1570,category:'dev'},
  {rank:4,name:'Diana Cruz',team:'Pixel',score:1490,category:'design'},
  {rank:5,name:'Esha Kapoor',team:'Nova',score:1425,category:'data'},
  {rank:6,name:'Farhan Idris',team:'Orion',score:1310,category:'dev'},
  {rank:7,name:'Gabriela',team:'Aurora',score:1250,category:'design'},
  {rank:8,name:'Hiro Tanaka',team:'Nova',score:1195,category:'dev'}
];

const tbody = document.querySelector('#leaderboard tbody');
const periodEl = document.getElementById('period');
const categoryEl = document.getElementById('category');
const searchEl = document.getElementById('search');
const resetBtn = document.getElementById('resetBtn');

function renderList(data){
  tbody.innerHTML = '';
  data.forEach(item =>{
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="col-rank">${item.rank}</td>
      <td class="col-name">${item.name}</td>
      <td class="col-team">${item.team}</td>
      <td class="col-score">${item.score.toLocaleString()}</td>
    `;
    tbody.appendChild(tr);
  });
}

function filterAndRender(){
  const cat = categoryEl.value;
  const q = (searchEl.value||'').toLowerCase().trim();
  let out = sampleData.slice();
  if(cat !== 'all') out = out.filter(r=> r.category === cat);
  if(q) out = out.filter(r => r.name.toLowerCase().includes(q) || r.team.toLowerCase().includes(q));
  renderList(out);
}

categoryEl.addEventListener('change', filterAndRender);
searchEl.addEventListener('input', debounce(filterAndRender, 250));
resetBtn.addEventListener('click', ()=>{ categoryEl.value='all'; searchEl.value=''; filterAndRender(); });

function debounce(fn, ms){let t;return (...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),ms);};}

// initial
renderList(sampleData);
