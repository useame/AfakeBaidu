function search_1() {
    document.searchform.action = "http://www.google.com/search";
    document.searchform.method = "get";
    document.searchform.submit();
}
