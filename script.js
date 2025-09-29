
document.querySelector('.nav-toggle')?.addEventListener('click', (e)=>{
  const btn = e.currentTarget
  const list = document.querySelector('.nav-list')
  const open = list.style.display === 'block'
  list.style.display = open ? 'none' : 'block'
  btn.setAttribute('aria-expanded', String(!open))
})
