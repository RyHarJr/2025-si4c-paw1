let npm = document.getElementById("npm")
let nama = document.getElementById("nama")

let mahasiswa = JSON.parse(localStorage.getItem("mahasiswa")) || []

function save() {
  mahasiswa.push({
    npm: npm.value,
    nama: nama.value,
  })

  localStorage.setItem("mahasiswa", JSON.stringify(mahasiswa))

  document.getElementById("table-body").innerHTML += `
    <tr>
      <td>${npm.value}</td>
      <td>${nama.value}</td>
    </tr>
    `.trim()

  npm.value = ""
  nama.value = ""

  alert("Data berhasil disimpan!")
}

mahasiswa.forEach((mhs) => {
  document.getElementById("table-body").innerHTML += `
    <tr>
      <td>${mhs.npm}</td>
      <td>${mhs.nama}</td>
    </tr>
    `.trim()
})
