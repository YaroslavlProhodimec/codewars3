var replaceDots = function(str) {
    let cut = str.split('');
    return cut.map(a => a.replace('.','-')).join('')

}
replaceDots("one.two.three")