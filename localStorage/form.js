let npm = document.getElementById("npm")
let nama = document.getElementById("nama")
let image = document.getElementById("image")

let mahasiswa = JSON.parse(localStorage.getItem("mahasiswa")) || []

function save() {
  mahasiswa.push({
    npm: npm.value,
    nama: nama.value,
    image: image.value,
  })

  localStorage.setItem("mahasiswa", JSON.stringify(mahasiswa))

  document.getElementById("list-mahasiswa").innerHTML += `
    <div class="container card mb-3 col-12 col-md-6 col-lg-4">
      <div class="card-body">
        <img src="${image.value}" alt="Image" class="img-fluid" />
        <h5 class="card-title">${npm.value}</h5>
        <p class="card-text">${nama.value}</p>
      </div>
    </div>
    `.trim()

  npm.value = ""
  nama.value = ""
  image.value = ""

  alert("Data berhasil disimpan!")
}

mahasiswa.forEach((mhs) => {
  document.getElementById("list-mahasiswa").innerHTML += `
    <div class="container card mb-3 shadow col-12 col-md-6 col-lg-4">
      <div class="card-body">
        <img src="${mhs.image}" alt="Image" class="img-fluid" />
        <h5 class="card-title">${mhs.npm}</h5>
        <p class="card-text">${mhs.nama}</p>
      </div>
    </div>
    `.trim()
})
