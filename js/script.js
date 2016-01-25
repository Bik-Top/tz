window.onload =  function() {

   var btnL = document.querySelector('.btnL'),
       node = document.querySelector('.slider').children[0],
       navigate = document.querySelector('.navigate'),
       btnR = document.querySelector('.btnR');

  bind(btnL, 'click', scrolL);

  function scrolL(){
    if(node.className.slice(7)<3){
      node.className = 'rotator'+(+node.className.slice(7)+1);
    }
    else{
      removeClass(node, 'rotator'+(+node.className.slice(7)+1));
      addClass(node, 'rotator1');
    }

  }
  bind(btnR, 'click', scrolR);
  function scrolR(){
    if(node.className.slice(7) != 1){
      node.className = 'rotator'+(+node.className.slice(7)-1);
    }
    else{
      removeClass(node, 'rotator'+(+node.className.slice(7)-1));
      addClass(node, 'rotator3');
    }
  }


  function stealth() {
    var show = function() {
      scrolR()
    };
    window.setInterval(show, 3000);
  }
 stealth();
};
function removeClass(node, name) {
  var arr = node.className.split(' ');
  arr.splice(arr.indexOf(name) ,1);
  node.className = arr.join(' ');
}
function hasClass(node, className) {
  if ((node) && (className)) {
    var classArr = node.className.split(' ');

    if(Object.prototype.toString.call(className) !== '[object Array]') {
      className = className.split(' ');
    }

    return className.every(function(iarr) {
      if(classArr.indexOf(iarr) > -1) {
        return true;
      } else {
        return false;
      }
    });
  }
}
//хелпер
function addClass(o, c) {
  var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
  if (re.test(o.className)) return;
  o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
}

function bind(obj, event_name, handler) {
  var handler_wrapper = function(event) {
    event = event || window.event;
    if (!event.target && event.srcElement) {
      event.target = event.srcElement;
    }
    return handler.call(obj, event);
  };

  if (obj.addEventListener) {
    obj.addEventListener(event_name, handler_wrapper, false);
  } else if (obj.attachEvent) {
    obj.attachEvent('on' + event_name, handler_wrapper);
  }
  return handler_wrapper;
}






