
/**
 * @title WET-BOEW Calc [ calc ]
 * @overview A basic calculate library for WET-BOEW
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author WET Community
 */

////******************************************/////////
///
( function( $ ) {
  "use strict";
  
  /*
   * Variable and function definitions.
   * These are global to the plugin - meaning that they will be initialized once per page,
   * not once per instance of plugin on the page. So, this is a good place to define
   * variables that are common to all instances of the plugin on a page.
   */
  
  //var selector = ".wb-calc";
  var tokens = [],
      position = 0,
      tokenize = function( sCalc ) {
        var results = [],
            tokenRegEx = /\s*([#.A-Za-z]+|[+-]?([0-9]*[.])?[0-9]+|\S)\s*/g,
            tok;

        while ( ( tok = tokenRegEx.exec( sCalc ) ) !== null ) {
          results.push( tok[ 1 ] );
        }
      
        return results;
      },
      isNumber = function( token ) {
        return token !== undefined && token.match( /^[+-]?([0-9]*[.])?[0-9]+$/ ) !== null;
      },
      isSelector = function( token ) {
        return token !== undefined && token.match( /^[#.A-Za-z]+$/ ) !== null;
      },
      isElement = function( token ) {
        return token !== undefined && token.match( /^[A-Za-z]+$/ ) !== null;
      },
      peek = function() {
        return tokens[ position ];
      },
      consume = function() {
        position++;
      },
      parsePrimaryExpr = function() {
        var tok = peek();
      
        if ( isNumber( tok ) ) {
          consume( tok );
          return { type: "number", value: tok };
        } else if ( isElement( tok ) ) {
          consume( tok );
          return { type: "name", id: tok };
        } else if ( isSelector( tok ) ) {
          if ( tok.startsWith( "#" ) || tok.startsWith( "." ) ) {
            var $elm = $( tok );
            tok = ( !$elm.is( "select" ) ) ? $( tok ).val() : $( tok + " option:selected" ).attr( "data-wb-calc-value" );
          }
          consume( tok );
          return { type: "number", value: tok };
        } else if ( tok === "(" ) {
          consume( tok );
          var expr = parseExpr();
          if ( peek() !== ")" ) {
            throw new SyntaxError( "expected )" );
          }
          consume( ")" );
          return expr;
        } else {
          throw new SyntaxError( "expected a number, a variable, or parentheses" );
        }
      },
      parseMulExpr = function() {
        var expr = parsePrimaryExpr();
        var t = peek();
        while ( t === "*" || t === "/" ) {
          consume( t );
          var rhs = parsePrimaryExpr();
          expr = { type: t, left: expr, right: rhs };
          t = peek();
        }
        return expr;
      },
      parseExpr = function() {
        var expr = parseMulExpr();
        var t = peek();
        while ( t === "+" || t === "-" ) {
          consume( t );
          var rhs = parseMulExpr();
          expr = { type: t, left: expr, right: rhs };
          t = peek();
        }
        return expr;
      },
      parse = function( equation ) {
        tokens = tokenize( equation );
        position = 0;
      
        var result = parseExpr();
        return result;
      },
      compute = function( evalObj ) {
        var retVal;
        switch ( evalObj.type ) {
        case "number": return parseFloat( evalObj.value );
        case "name": return evalObj.id;
        case "+":
          retVal = compute( evalObj.left ) + compute( evalObj.right );
          return retVal;
        case "-":
          retVal = compute( evalObj.left ) - compute( evalObj.right );
          return retVal;
        case "*":
          retVal = compute( evalObj.left ) * compute( evalObj.right );
          return retVal;
        case "/":
          retVal = compute( evalObj.left ) / compute( evalObj.right );
          return retVal;
        }
      },
      getEquation = function( jsonData ) {
        var equation = jsonData.equation,
            eqNum = jsonData.eqnum;
        if ( typeof eqNum !== "undefined" ) {
          var idxVal = $( "input:radio[name=" + eqNum + "]:checked" ).val();
          equation = jsonData.equation[ idxVal - 1 ];
        }
        return equation;
      };
  
  // Event binding
  $( "#calculate" ).submit( function( event ) {
    event.preventDefault();
  
    var $elm = $( this ),
        bind = $elm.attr( "data-wb-calc-bind" ),
        $calculations = $( bind );
  
    $calculations.each( function() {
      var $calcelm = $( this ),
          jsonData = JSON.parse( $calcelm.attr( "data-wb-calc" ) ),
          equation = getEquation( jsonData ),
          roundDigits = jsonData.rounded,
          value = compute( parse( equation ) );
  
      if ( typeof roundDigits !== "undefined" ) {
        value = value.toFixed( parseInt( roundDigits ) );
      }
      $calcelm.text( value );
    });
  
    return false;
  });
  
})( jQuery );