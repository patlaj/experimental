/**
 * @title WET-BOEW Checklist plugin
 * @overview Plugin contained to show an example of a custom WET checklist plugin
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @ux-tbs
 */
( function( $, window, wb ) {
  "use strict";
  /*
   * Variable and function definitions.
   * These are global to the plugin - meaning that they will be initialized once per page,
   * not once per instance of plugin on the page. So, this is a good place to define
   * variables that are common to all instances of the plugin on a page.
   */
  var componentName = "wb-checklist",
    selector = "." + componentName,
    initEvent = "wb-init" + selector,
    $document = wb.doc,
    /**
     * @method init
     * @param {jQuery Event} event Event that triggered the function call
     */
    init = function( event ) {
      // Start initialization
      // returns DOM object = proceed with init
      // returns undefined = do not proceed with init (e.g., already initialized)
      var elm = wb.init( event, componentName, selector ),
        $elm;
      if ( elm ) {
        $elm = $( elm );
        // ... Do the plugin initialisation
        // Call my custom event
        $elm.trigger( "name.of.your.event" );
        // Identify that initialization has completed
        wb.ready( $elm, componentName );
      }
    };
  // Add your plugin event handler
  $document.on( "name.of.your.event", selector, function( event ) {
    var elm = event.currentTarget,
      $elm = $( elm );
    $elm.append( "Checklist" );
  } );
  // Bind the init event of the plugin
  $document.on( "timerpoke.wb " + initEvent, selector, init );
  // Add the timer poke to initialize the plugin
  wb.add( selector );
  } )( jQuery, window, wb );