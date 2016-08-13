'use strict';
if (this.<%= jsAppName %> === undefined) this.<%= jsAppName %> = {};

(function(context) {

  function start() {

    //Call your code here
    console.log('starting!', context);

  }

  context.start = start;

})(window.<%= jsAppName %>);
