

var layer = {
  config : {
    height : '100',
    width : '400',
    speed : 'quick',
    title : '标题',
    content : ''
  },
  alert : function (config, confirm) {
    if(config) {
      layer.config['height'] = config['height'] ? config['height'] : layer.config['height'];
      layer.config['width']  = config['width'] ? config['width'] : layer.config['width'];
      layer.config['speed']  = config['speed'] ? config['speed'] : layer.config['speed'];
      layer.config['content']  = config['content'] ? config['content'] : layer.config['content'];
    }
    $('body').append('<div id="alert" class="popup-layer"></div>');
    $('#alert').append('<div id="dialog" class="dialog"></div>');
    $('#dialog').append('<div class="title">' + layer.config['title'] + '</div>');
    $('#dialog').append('<div class="content">' + layer.config['content'] + '</div>');
    $('#dialog').append('<div class="footer"><div class="col-6"><button id="dialog-confirm">确定</button></div><div class="col-6"><button id="dialog-cancel">取消</button></div></div>');
    var margin_top = (window.innerHeight - layer.config['height']) / 2; 
    $('.dialog').height(layer.config['height']);
    $('.dialog').width(layer.config['width']);
    $('.dialog').css('margin-top', margin_top + 'px');
    $('.popup-layer').fadeIn(layer.config['speed']);
    $('#dialog-confirm').click(function (e) { 
      e.preventDefault();
      $('.popup-layer').fadeOut(layer.config['speed']);
      setTimeout(function(){
        document.getElementById('alert').remove();
      },500);
      if (confirm) {
        confirm();
      }
    });
  },
  img : function (config, url, confirm) {
    if(config) {
      layer.config['height'] = config['height'] ? config['height'] : layer.config['height'];
      layer.config['width']  = config['width'] ? config['width'] : layer.config['width'];
      layer.config['speed']  = config['speed'] ? config['speed'] : layer.config['speed'];
      layer.config['content']  = config['content'] ? config['content'] : layer.config['content'];
    }
    $('body').append('<div id="alert" class="popup-layer"></div>');
    $('#alert').append('<div id="dialog" class="dialog container"></div>');
    $('#dialog').append('<img id="layer-img" width="20" height="40"/>');
    if (url) {
      $('#layer-img').attr('src', url);
    } else {
      console.error('layer.img(config, url, [config]) : url is not defined!');
      return 0;
    }
    var margin_top = (window.innerHeight - layer.config['height']) / 2; 
    $('.dialog').height('auto');
    // $('.dialog').width('auto');
    // setTimeout(function() {
    //   if ($('.dialog').height() >= window.innerHeight) {
    //     $('#layer-img').css('height', '80%');
    //   }
    // }, 300);

    $('.dialog').css('margin-top', 'auto');
    $('.popup-layer').fadeIn(layer.config['speed']);
    $('#dialog-confirm').click(function (e) { 
      e.preventDefault();
      $('.popup-layer').fadeOut(layer.config['speed'], function(){
        if (confirm) {
          confirm();
        }
        document.getElementById('alert').remove();
      });
      
    });
  }
};

$(document).ready(function () {
  $('#btn-alert').click(function (e) { 
    e.preventDefault();
    layer.alert({'height' : '200', 'content' : '测试的内容'}, function(){alert();});
  });
  $('#btn-img').click(function (e) { 
    e.preventDefault();
    layer.img({}, 'a.png');
  });
});