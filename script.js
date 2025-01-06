function validateForm() {
    // Ambil nilai input
    const customerName = document.getElementById("customerName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const carModel = document.getElementById("carModel").value;
    const rentalDuration = document.getElementById("rentalDuration").value;
    const pickupDate = document.getElementById("pickupDate").value;
    const returnDate = document.getElementById("returnDate").value;

    // Validasi input
    if (!customerName || !phone || !email || !carModel || !rentalDuration || !pickupDate || !returnDate) {
        alert("Semua kolom harus diisi!");
        return false; // Menghentikan form untuk disubmit
    }

    // Periksa apakah tanggal pengembalian lebih besar dari tanggal pengambilan
    const pickup = new Date(pickupDate);
    const returnDay = new Date(returnDate);
    
    if (returnDay <= pickup) {
        alert("Tanggal pengembalian harus setelah tanggal pengambilan!");
        return false; // Menghentikan form untuk disubmit
    }

    // Hitung biaya total (misal harga mobil per hari 300,000)
    const costPerDay = 300000;
    const totalCost = costPerDay * rentalDuration;
    document.getElementById("totalCost").value = totalCost.toLocaleString(); // Format angka ke format rupiah

    alert("Transaksi berhasil disimpan!");
    return true; // Form bisa disubmit
}

// Validasi form login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Username dan Password harus diisi!');
        e.preventDefault();
    }
});

function showAlert() {
    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation check
    if (username === "" || password === "") {
        alert("Username and password cannot be empty!");
        return false; // Prevent form submission
    }

    // Show a success alert
    alert("Login successful!");
    return true; // Allow form submission
}
