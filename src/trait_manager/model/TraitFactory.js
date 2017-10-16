var Backbone = require('backbone');

module.exports = (() => ({
  /**
   * Build props object by their name
   * @param  {Array<string>|string} props Array of properties name
   * @return {Array<Object>}
   */
  build(props) {
    var objs = [];

    if(typeof props === 'string')
      props = [props];

    for (var i = 0; i < props.length; i++) {
      var obj = {};
      var prop = props[i];
      obj.name = prop;

      // Define type
      switch (prop) {
        case 'target':
          obj.type = 'select';
          break;
      }

      // Define placeholder
      switch (prop) {
        case 'title': case 'alt': case 'id':
          obj.placeholder = 'ex. Texto aqui';
          break;
        case 'href':
          obj.placeholder = 'ex. https://google.com';
          break;
      }


      // Define options
      switch (prop) {
        case 'target':
          obj.options = [
            {value: '', name: 'Esta Janela'},
            {value: '_blank', name: 'Nova Janela'}
          ];
          break;
      }

      objs.push(obj);
    }

    return objs;
  }
}))();
