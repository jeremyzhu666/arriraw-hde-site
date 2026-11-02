/* 省多少计算器 */
const tbSlider = document.getElementById("tb");
const daysSlider = document.getElementById("days");

function fmt(tb) {
  return tb >= 10 ? tb.toFixed(0) + " TB" : tb.toFixed(1) + " TB";
}

function update() {
  const perDay = parseFloat(tbSlider.value);
  const days = parseInt(daysSlider.value, 10);
  const raw = perDay * days;
  const hde = raw * 0.6;
  const save = raw - hde;

  document.getElementById("tb-val").textContent = perDay.toFixed(1) + " TB";
  document.getElementById("days-val").textContent = days + " 天";
  document.getElementById("r-raw").textContent = fmt(raw);
  document.getElementById("r-hde").textContent = fmt(hde);
  document.getElementById("r-save").textContent = fmt(save);
}

tbSlider.addEventListener("input", update);
daysSlider.addEventListener("input", update);
update();
