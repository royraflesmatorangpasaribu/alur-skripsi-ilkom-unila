function loadContent(fileName) {
    fetch('data/' + fileName)
      .then(response => response.text())
      .then(html => {
        document.getElementById('content-area').innerHTML = html;
      })
      .catch(error => {
        document.getElementById('content-area').innerHTML = "<p>Gagal memuat konten.</p>";
        console.error("Error loading content:", error);
      });
  }
  