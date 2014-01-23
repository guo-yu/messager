exports.wash = function(list) {
    if (!list) return false;
    if (list.length === 0) return false;
    var l = [];
    var maxLength = 14;
    list.forEach(function(item){
        if (item.text && item.text.length >= maxLength ) item.text = item.text.substr(0, maxLength) + '...';
        l.push(item);
    });
    return l;
}