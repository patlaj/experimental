/**
 * @title WET-BOEW Hello world plugin
 * @overview Plugin contained to show an example of how to create your custom WET plugin
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 */
( function( $, window, wb ) {
  "use strict";
  /*
   * Variable and function definitions.
   * These are global to the plugin - meaning that they will be initialized once per page,
   * not once per instance of plugin on the page. So, this is a good place to define
   * variables that are common to all instances of the plugin on a page.
   */

  // function that should be moved as a helper class or something
  var componentName = "wb-calc",
      selector = "." + componentName,
      initEvent = "wb-init" + selector,
      $document = wb.doc,
      idCount = 0,
      defaults = {},

    /**
     * @method init
     * @param {jQuery Event} event Event that triggered the function call
     */
    init = function( event ) {
      // Start initialization
      // returns DOM object = proceed with init
      // returns undefined = do not proceed with init (e.g., already initialized)
      
      var elm = wb.init( event, componentName, selector ),
          elmId;

  		if ( elm ) {
    		elmId = eventTarget.id;

        Modernizr.load ({
          load: ["https://cdnjs.cloudflare.com/ajax/libs/mathjs/6.6.4/math.js"],
          testReady: function() {
            return ( window.Math );
          },
          complete: function() {
            var $elm = $( "#" + elmId ),
                $output = $elm.find( "output" ),
                settings = $.extend(
                  true,
                  {},
                  defaults,
                  window[ componentName ],
                  wb.getData( $elm, componentName )
                );
          }
        })
        // Call my custom event
        $elm.trigger( "change", settings );
        // Identify that initialization has completed
        wb.ready( $elm, componentName );
      }
    };

  // Add your plugin event handler
  $document.on( "change", selector, function ( event ) { // Can we have an array of selectors?
    var elm = event.currentTarget,
    $elm = $( elm ),
    $elmId = $elm.attr("id"),
    data = wb.getData( $("output[for='" + $elmId + "']"), componentName),
    value = $elm.val();

    console.log($("output[for='" + $elmId + "']").toArray());
    console.log("componentName: " + componentName);
    console.log("equation: " + data.equation);
    console.log("rounded to: " + data.rounded);
    console.log("Number format: " + data.format);
    console.log("value: " + value);

  });
 
  // Bind the init event of the plugin
  $document.on( "timerpoke.wb " + initEvent, selector, init );
  // Add the timer poke to initialize the plugin
  wb.add( selector );
  } )( jQuery, window, wb );