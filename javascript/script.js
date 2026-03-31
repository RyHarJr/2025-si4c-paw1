const warna = ["lightblue", "lightgreen", "lightyellow", "lightpink", "lightgray", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightseagreen", "lightsalmon"]

function gantiBackground() {
  document.body.style.backgroundColor = warna[Math.floor(Math.random() * warna.length)]
}

function gantiTextColor() {
  document.getElementById("demo").style.color = warna[Math.floor(Math.random() * warna.length)]
}

function kirimPesan() {
  const pesan = document.getElementById("nama").value
  const saran = document.getElementById("saran").value
  if (pesan === "" || saran === "") {
    alert("Pesan dan saran tidak boleh kosong!")
    return
  }
  document.getElementById("dataPesan").innerHTML += `<tr><td>${pesan}</td><td>${saran}</td></tr>`
}
