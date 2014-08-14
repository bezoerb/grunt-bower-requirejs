require.config({
  shim: {

  },
  packages: [
    {
      name: 'node-module-type-stub',
      main: 'myMain.js',
      location: '../bower_components/node-module-type-stub/src'
    }
  ],
  paths: {
    hm: 'vendor/hm',
    esprima: 'vendor/esprima',
    anima: '../bower_components/anima/anima',
    'backbone-amd': '../bower_components/backbone-amd/backbone',
    backbone: '../bower_components/backbone/backbone',
    'backbone.marionette': '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
    'jquery-ui-touch-punch-amd': '../bower_components/jquery-ui-touch-punch-amd/jquery.ui.touch-punch',
    jquery: '../bower_components/jquery/jquery',
    requirejs: '../bower_components/requirejs/require',
    respond: '../bower_components/respond/respond.src',
    konamicode: '../bower_components/konamicode.js/build/konamicode.min',
    typeahead: '../bower_components/typeahead.js/dist/typeahead',
    mout: '../bower_components/mout/src',
    handlebars: '../bower_components/handlebars/handlebars',
    'handlebars.runtime': '../bower_components/handlebars/handlebars.runtime'
  }
});
