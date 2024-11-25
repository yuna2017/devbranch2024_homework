function searchBaidu() {
    var query = document.getElementById('search-query').value;
    if (query) {
        window.location.href = 'https://www.baidu.com/s?wd=' + encodeURIComponent(query);
    }
}
function searchByImage() {
    var query = document.getElementById('search-query').value;
    if (query) {
        window.location.href = 'https://www.baidu.com/s?wd=' + encodeURIComponent(query);
    }
}