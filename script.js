function switchCity(name, btn) {
  document.querySelectorAll('.city-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.city-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('city-' + name).classList.add('active');
}

function switchTab(name, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('panel-' + name).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
