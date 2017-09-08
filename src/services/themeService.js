const loadTheme = function(fileName){
    return customRequire(`views/${fileName}`)
}

const loadStyle = function(){
    return customRequire("css/style.scss");
}

const customRequire = function(path){
    return require(`@/themes/${appOptions.theme}/${path}`);
}

export { loadTheme, loadStyle }