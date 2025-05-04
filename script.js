function login() {
  const nis = document.getElementById('nis').value.trim();
  const dob = document.getElementById('dob').value.trim(); // Sudah format YYYY-MM-DD

  // Cocokkan langsung tanpa konversi karena data dan input sudah sama format
  const siswa = data.find(d => d.nis == nis && d.tanggal_lahir === dob);

  if (siswa) {
    localStorage.setItem('user', JSON.stringify({
      nis: nis,
      tanggal_lahir: siswa.tanggal_lahir
    }));
    window.location.href = 'result.html';
  } else {
    document.getElementById('error').innerText = 'NIS atau Tanggal Lahir salah';
  }
}


function formatInputDate(d) {
  // Misalkan d adalah dalam format YYYY-MM-DD
  const [y, m, d2] = d.split('-');
  
  // Mengembalikan tanggal dalam format DD-MM-YYYY
  return `${d2.padStart(2, '0')}-${m.padStart(2, '0')}-${y}`;
}
