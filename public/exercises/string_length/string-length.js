var stringLength = function (obj) {
  if(typeof obj === typeof '') {
    return [obj.length];
  }
  else if (typeof obj === typeof []) {
    var list = [];
    for(var i = 0; i < obj.length; i++) {
      list.push(obj[i].length);
    }
    return list;
  }
};