function searchBTN() {
    let term = document.getElementById("search-box").value;
    if (term.trim() !== "") {
        window.location.href = "https://search.yahoo.com/search?p=" + encodeURIComponent(term);
    }
}
