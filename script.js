// FSSAI table search
const searchInput = document.getElementById("searchInput");
const rows = document.querySelectorAll("#fssaiTable tbody tr");

searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();
    rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(filter) ? "" : "none";
    });
});
