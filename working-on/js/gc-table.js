( function( $, window, wb ) {
  "use strict";
  
  var componentName = "gc-table",
    selector = "." + componentName,
    initEvent = "wb-init" + selector,
    $document = wb.doc,
  
    init = function( event ) {
      var elm = wb.init( event, componentName, selector ),
        $elm,
        number_columns;

        if ( elm ) {
        $elm = $( elm );
        number_columns = $elm.find( "th" ).length;

        for (var i = 0; i < number_columns; i++ ) {
            var $label = $elm.find( "th:eq(" + i + ")").text();
            for (var j = 0; j < $elm.find( "tr" ).length; j++) {
                $elm.find( "tr:eq(" + j +")" ).find( "td:eq(" + i + ")" ).attr("data-label", $label);
            }
        };

        // Identify that initialization has completed
        wb.ready( $elm, componentName );
      }
    };

  $document.on( "timerpoke.wb " + initEvent, selector, init );
  wb.add( selector );
  } )( jQuery, window, wb );