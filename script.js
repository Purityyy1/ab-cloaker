function run(){
  var url = document.getElementById('url-input').value;
  if (url.length > 7){
    var w = window.open(url); // remove the `_blank` option
    w.document.write(`<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none;" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="${url}"></iframe>`);
  }
}
