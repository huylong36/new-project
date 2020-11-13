function goHome() {
    var href = window.location.href;
    if(href.endsWith("#")){
        window.location.href='/html'
    } else {
        var size = window.history.previous;
        if(size !== null && size !== undefined){
            window.history.back();
        } else {
            window.location.href='/html'
        }
    }
}