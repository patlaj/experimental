(function($) {
  $( document ).ready(function() {
    if ($('#jobs').attr('aria-expanded') === "true") {
      $('.test-gcweb-menu').attr('style', 'min-height: 900px;');
    } else if ($('#immigration').attr('aria-expanded') === "true") {
      $('#canada-sign-in').attr('href', '/landing/sign-your-ircc-secure-account');
      $('.test-gcweb-menu').attr('style', 'min-height: 1100px;');
    } else if ($('#travel').attr('aria-expanded') === "true") {
       $('.test-gcweb-menu').attr('style', 'min-height: 1000px;');
    } else if ($('#business').attr('aria-expanded') === "true") {
       $('.test-gcweb-menu').attr('style', 'min-height: 1200px;');
    } else if ($('#health').attr('aria-expanded') === "true") {
       $('.test-gcweb-menu').attr('style', 'min-height: 1000px;');
    } else if ($('#veterans').attr('aria-expanded') === "true") {
      $('#canada-sign-in').attr('href', '/landing/my-vac-account');
    } else if ($('#taxes').attr('aria-expanded') === "true") {
      $('#canada-sign-in').attr('href', 'https://www.canada.ca/en/revenue-agency/services/e-services/cra-login-services.html');
    } else {
      $('#canada-sign-in').attr('href', '/landing/sign-government-canada-online-account');
    }
});

  $( ".parent-list li" ).click(function() {
     if ($('#jobs').attr('aria-expanded') === "true") {
      $('.test-gcweb-menu').attr('style', 'min-height: 900px;');
    } else if ($('#immigration').attr('aria-expanded') === "true") {
      $('#canada-sign-in').attr('href', '/landing/sign-your-ircc-secure-account');
      $('.test-gcweb-menu').attr('style', 'min-height: 1100px;');
    } else if ($('#travel').attr('aria-expanded') === "true") {
       $('.test-gcweb-menu').attr('style', 'min-height: 1000px;');
    } else if ($('#business').attr('aria-expanded') === "true") {
       $('.test-gcweb-menu').attr('style', 'min-height: 1200px;');
    } else if ($('#health').attr('aria-expanded') === "true") {
       $('.test-gcweb-menu').attr('style', 'min-height: 1000px;');
    } else if ($('#veterans').attr('aria-expanded') === "true") {
      $('#canada-sign-in').attr('href', '/landing/my-vac-account');
      $('.test-gcweb-menu').removeAttr('style', 'height');
    } else if ($('#taxes').attr('aria-expanded') === "true") {
      $('#canada-sign-in').attr('href', 'https://www.canada.ca/en/revenue-agency/services/e-services/cra-login-services.html');
      $('.test-gcweb-menu').removeAttr('style', 'height');
    } else {
      $('#canada-sign-in').attr('href', '/landing/sign-government-canada-online-account');
      $('.test-gcweb-menu').removeAttr('style', 'height');
    }
  });
  
  console.log( "swap has run" );
})(jQuery);;
(function($) {
  var a = $(".breadcrumb > li:nth-child(2) > a");
  if (a.text() === "Statistics Canada") {
    a.attr("href", "/landing/statistics-canada-ilp");
  } else if (a.text() === "Agriculture and Agri-Food Canada") {
    a.attr("href", "/landing/agriculture-and-agri-food-canada");
  } else if (a.text() === "Health Canada") {
    a.attr("href", "/landing/health-canada-ilp");
  } else if (a.length > 0) {
    a.attr("href","/landing/layered-navigation-master-file?t="+a.text());
  }
  //console.log(a);
})(jQuery);;
$=jQuery;
$(document).on("ready",function (event) {
        let searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has('t')) {
            let a = $('a').filter(function(index) { return jQuery(this).text() === searchParams.get("t"); });
            a.click();
        }
});


$(".parent-list > li > a").on("click",function (e) {
  e.preventDefault();
  $(".parent-list ul").hide();
  $(".parent-list > li > a").attr("aria-expanded","false");
  $(this).parent().find("ul").show();
  $(this).attr("aria-expanded","true");
});



;
/* ========================================================================
 * Bootstrap: alert.js v3.3.6
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.6'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);
;
/* ========================================================================
 * Bootstrap: collapse.js v3.3.6
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.6'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);
;
/* ========================================================================
 * Bootstrap: dropdown.js v3.3.6
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.6'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);
;
/* ========================================================================
 * Bootstrap: modal.js v3.3.6
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.6'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);
;
/* ========================================================================
 * Bootstrap: tooltip.js v3.3.6
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.6'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);
;
/* ========================================================================
 * Bootstrap: popover.js v3.3.6
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.6'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);
;
/**
 * @file
 * Drupal WxT Bootstrap object.
 */

/**
 * All Drupal WxT Bootstrap JavaScript APIs are contained in this namespace.
 *
 * @namespace
 */
(function($, Drupal) {
    'use strict';

    Drupal.wxt_bootstrap = {
        settings: drupalSettings.wxt_bootstrap || {},
    };

    /**
     * Returns the version of WxT being used.
     *
     * @return {string}
     *   The version of WxT being used.
     */
    Drupal.wxt_bootstrap.version = 'WxT v4.0.29';

})(window.jQuery, window.Drupal, window.drupalSettings);

//CAUSES CONFLICT WITH DEFAULT WXT COMPONENTS E.G: FIELDFLOW
// (function($) {
//     ! function(a, b) {
//         "use strict";
//         var c = b.doc,
//             d = "wb-actionmng",
//             e = "." + d,
//             f = "[data-" + d + "]",
//             g = d + "Rn",
//             h = "wb-init." + d,
//             i = d + e,
//             j = {},
//             k = {},
//             l = {},
//             m = ["patch", "ajax", "addClass", "removeClass", "tblfilter", "run"].join("." + i + " ") + "." + i,
//             n = function(c) {
//                 var f, g, h, i, j, k, m = b.init(c, d, e);
//                 if (m) {
//                     if (f = a(m), g = b.getData(f, d))
//                         for (a.isArray(g) || (g = [g]), i = g.length, h = 0; h !== i; h += 1) j = g[h], (k = j.trggroup) && j.action && o(k, l, j);
//                     b.ready(f, d)
//                 }
//             },
//             o = function(a, b, c) {
//                 b[a] || (b[a] = []), b[a].push(c)
//             },
//             p = function(a, b, c) {
//                 var d, e, f;
//                 for (d = c[b]; e = d.shift();)(f = e.action) && (a.trigger(f + "." + i, e), delete e.action)
//             },
//             q = function(b, c) {
//                 var d = c.source,
//                     e = c.patches,
//                     f = !!c.cumulative;
//                 e && (a.isArray(e) || (e = [e]), a(d).trigger({
//                     type: "patches.wb-jsonmanager",
//                     patches: e,
//                     fpath: c.fpath,
//                     filter: c.filter || [],
//                     filternot: c.filternot || [],
//                     cumulative: f
//                 }))
//             },
//             r = function(c, d) {
//                 var e, f, g;
//                 d.container ? e = a(d.container) : (f = b.getId(), e = a("<div id='" + f + "'></div>"), a(c.target).after(e)), d.trigger && e.attr("data-trigger-wet", "true"), g = d.type ? d.type : "replace", e.attr("data-ajax-" + g, d.url), e.one("wb-contentupdated", function(c, d) {
//                     var e = c.currentTarget,
//                         f = e.getAttribute("data-trigger-wet");
//                     e.removeAttribute("data-ajax-" + d["ajax-type"]), f && (a(e).find(b.allSelectors).addClass("wb-init").filter(":not(#" + e.id + " .wb-init .wb-init)").trigger("timerpoke.wb"), e.removeAttribute("data-trigger-wet"))
//                 }), e.trigger("wb-update.wb-data-ajax")
//             },
//             s = function(b, c) {
//                 var d = a(c.source || b.target);
//                 c.class && d.addClass(c.class)
//             },
//             t = function(b, c) {
//                 var d = a(c.source || b.target);
//                 c.class && d.removeClass(c.class)
//             },
//             u = function(b, c) {
//                 var d, e = b.target,
//                     f = a(c.source || e),
//                     g = c.column,
//                     h = parseInt(g, 10),
//                     i = !!c.regex,
//                     j = !c.smart || !!c.smart,
//                     k = !c.caseinsen || !!c.caseinsen;
//                 if ("TABLE" !== f.get(0).nodeName) throw "Table filtering can only applied on table";
//                 d = f.dataTable({
//                     retrieve: !0
//                 }).api(), g = !0 === h ? h : g, d.column(g).search(c.value, i, j, k).draw()
//             },
//             v = function(b, c) {
//                 var d, e, f, h, j = b.target,
//                     k = a(j),
//                     m = l[c.trggroup];
//                 if (m && !k.hasClass(g)) {
//                     for (k.addClass(g), e = m.length, d = 0; d !== e; d += 1) f = m[d], (h = f.action) && k.trigger(h + "." + i, f);
//                     k.removeClass(g)
//                 }
//             };
//         c.on("do." + i, function(b) {
//             var c, e, f, g, h, m, n, q = b.element || b.target,
//                 r = q.id,
//                 s = b.actions || [];
//             if ((q === b.target || b.currentTarget === b.target) && -1 === q.className.indexOf(d)) {
//                 for (a.isArray(s) || (s = [s]), f = s.length, f && (c = a(q), c.addClass(d)), r && j[r] && p(c, r, j), e = 0; e !== f; e += 1) g = s[e], (h = g.action) && (m = g.target, m ? (g.trgbefore ? o(m, j, g) : o(m, k, g), (n = g.trggroup) && o(n, l, g)) : c.trigger(h + "." + i, g));
//                 r && k[r] && p(c, r, k), a(b.target).removeClass(d)
//             }
//         }), c.on("clean." + i, function(a) {
//             var b, c, d = a.element || a.target,
//                 e = a.trggroup;
//             if ((d === a.target || a.currentTarget === a.target) && e && l[e])
//                 for (b = l[e]; c = b.shift();) delete c.action
//         }), c.on(m, e, function(a, b) {
//             var c = a.type;
//             if (i === a.namespace) switch (c) {
//                 case "run":
//                     v(a, b);
//                     break;
//                 case "tblfilter":
//                     u(a, b);
//                     break;
//                 case "addClass":
//                     s(a, b);
//                     break;
//                 case "removeClass":
//                     t(a, b);
//                     break;
//                 case "ajax":
//                     r(a, b);
//                     break;
//                 case "patch":
//                     q(a, b)
//             }
//         }), c.on("timerpoke.wb " + h, f, n), b.add(f)
//     }(jQuery, wb),
//     function(a, b, c) {
//         "use strict";
//         var d, e = "wb-data-json",
//             f = "wb-json",
//             g = ["[data-json-after]", "[data-json-append]", "[data-json-before]", "[data-json-prepend]", "[data-json-replace]", "[data-json-replacewith]", "[data-" + f + "]"],
//             h = ["after", "append", "before", "prepend", "val"],
//             i = /(href|src|data-*|pattern|min|max|step|low|high)/,
//             j = /(checked|selected|disabled|required|readonly|multiple)/,
//             k = g.length,
//             l = g.join(","),
//             m = "wb-init." + e,
//             n = "wb-update." + e,
//             o = "wb-contentupdated",
//             p = e + "-queue",
//             q = c.doc,
//             r = function(b) {
//                 var d, g = c.init(b, e, l);
//                 if (g) {
//                     var h, i, j, k, m, n = ["before", "replace", "replacewith", "after", "append", "prepend"],
//                         o = n.length,
//                         q = [];
//                     for (d = a(g), j = 0; j !== o; j += 1) h = n[j], null !== (m = g.getAttribute("data-json-" + h)) && q.push({
//                         type: h,
//                         url: m
//                     });
//                     if (c.ready(d, e), (i = c.getData(d, f)) && i.url) q.push(i);
//                     else if (i && a.isArray(i))
//                         for (o = i.length, j = 0; j !== o; j += 1) q.push(i[j]);
//                     for (d.data(p, q), o = q.length, j = 0; j !== o; j += 1) k = q[j], s(g, k.url, j, k.nocache, k.nocachekey)
//                 }
//             },
//             s = function(d, f, g, h, i) {
//                 var j, k = a(d),
//                     l = {
//                         url: f,
//                         refId: g,
//                         nocache: h,
//                         nocachekey: i
//                     },
//                     m = b[e];
//                 !m || "http" !== f.substr(0, 4) && "//" !== f.substr(0, 2) || (j = c.getUrlParts(f), c.pageUrlParts.protocol === j.protocol && c.pageUrlParts.host === j.host || Modernizr.cors && !m.forceCorsFallback || "function" == typeof m.corsFallback && (l.dataType = "jsonp", l.jsonp = "callback", l = m.corsFallback(l))), k.trigger({
//                     type: "json-fetch.wb",
//                     fetch: l
//                 })
//             },
//             t = function(b) {
//                 var d, f = b.target,
//                     g = a(f),
//                     k = g.data(p),
//                     l = b.fetch,
//                     m = k[l.refId],
//                     n = m.type,
//                     q = m.prop || m.attr,
//                     r = m.showempty,
//                     s = l.response,
//                     t = typeof s;
//                 if (r || "undefined" !== t) {
//                     if (r && "undefined" === t && (s = ""), d = jQuery.ajaxSettings.cache, jQuery.ajaxSettings.cache = !0, n)
//                         if ("replace" === n) g.html(s);
//                         else if ("replacewith" === n) g.replaceWith(s);
//                     else if ("addclass" === n) g.addClass(s);
//                     else if ("removeclass" === n) g.removeClass(s);
//                     else if ("prop" === n && q && j.test(q)) g.prop(q, s);
//                     else if ("attr" === n && q && i.test(q)) g.attr(q, s);
//                     else {
//                         if ("function" != typeof g[n] || -1 === h.indexOf(n)) throw e + " do not support type: " + n;
//                         g[n](s)
//                     } else n = "template", u(f, m, s), m.trigger && g.find(c.allSelectors).addClass("wb-init").filter(":not(#" + f.id + " .wb-init .wb-init)").trigger("timerpoke.wb");
//                     jQuery.ajaxSettings.cache = d, g.trigger(o, {
//                         "json-type": n,
//                         content: s
//                     })
//                 }
//             },
//             u = function(b, d, e) {
//                 var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t = d.mapping || [{}],
//                     w = d.filter || [],
//                     x = d.filternot || [],
//                     y = d.queryall,
//                     z = d.tobeclone,
//                     A = b.className,
//                     B = b,
//                     C = d.source ? document.querySelector(d.source) : b.querySelector("template");
//                 if (a.isArray(e) || (e = "object" != typeof e ? [e] : a.map(e, function(b, c) {
//                         return "object" != typeof b || a.isArray(b) ? b = {
//                             "@id": c,
//                             "@value": b
//                         } : b["@id"] || (b["@id"] = c), [b]
//                     })), h = e.length, a.isArray(t) || (t = [t]), f = t.length, "TABLE" === b.tagName && t && -1 !== A.indexOf("wb-tables-inited") && "string" == typeof t[0]) {
//                     for (s = a(b).dataTable({
//                             retrieve: !0
//                         }).api(), g = 0; g < h; g += 1)
//                         if (i = e[g], v(i, w, x)) {
//                             for (m = "/" + g, r = [], j = 0; j < f; j += 1) r.push(jsonpointer.get(e, m + t[j]));
//                             s.row.add(r)
//                         }
//                     return void s.draw()
//                 }
//                 if (C)
//                     for (C.content || c.tmplPolyfill(C), d.appendto && (B = a(d.appendto).get(0)), g = 0; g < h; g += 1)
//                         if (i = e[g], v(i, w, x)) {
//                             for (m = "/" + g, n = z ? C.content.querySelector(z).cloneNode(!0) : C.content.cloneNode(!0), y && (o = n.querySelectorAll(y)), j = 0; j < f || 0 === j; j += 1) k = t[j], p = o ? o[j] : k.selector ? n.querySelector(k.selector) : n, l = k.attr, l && (p.hasAttribute(l) || p.setAttribute(l, ""), p = p.getAttributeNode(l)), r = "string" == typeof i ? i : "string" == typeof k ? jsonpointer.get(e, m + k) : jsonpointer.get(e, m + k.value), k.placeholder && (q = p.textContent || "", r = q.replace(k.placeholder, r)), a.isArray(r) ? u(p, k, r) : k.isHTML ? p.innerHTML = r : p.textContent = r;
//                             B.appendChild(n)
//                         }
//             },
//             v = function(a, b, c) {
//                 var d, e, f, g = b.length,
//                     h = c.length,
//                     i = !1;
//                 if (g || h) {
//                     for (d = 0; d < g; d += 1)
//                         if (e = b[d], f = w(jsonpointer.get(a, e.path), e.value), e.optional) i = i || f;
//                         else {
//                             if (!f) return !1;
//                             i = !0
//                         }
//                     if (g && !i) return !1;
//                     for (d = 0; d < h; d += 1)
//                         if (e = c[d], (f = w(jsonpointer.get(a, e.path), e.value)) && !e.optional || f && e.optional) return !1
//                 }
//                 return !0
//             },
//             w = function(b, c) {
//                 switch (typeof b) {
//                     case "undefined":
//                         return !1;
//                     case "boolean":
//                     case "string":
//                     case "number":
//                         return b === c;
//                     case "object":
//                         if (null === b) return null === c;
//                         if (a.isArray(b)) {
//                             if (a.isArray(c) || b.length !== c.length) return !1;
//                             for (var d = 0, e = b.length; d < e; d++)
//                                 if (!w(b[d], c[d])) return !1;
//                             return !0
//                         }
//                         var f = x(c),
//                             g = f.length;
//                         if (x(b).length !== g) return !1;
//                         for (var d = 0; d < g; d++)
//                             if (!w(b[d], c[d])) return !1;
//                         return !0;
//                     default:
//                         return !1
//                 }
//             },
//             x = function(b) {
//                 if (a.isArray(b)) {
//                     for (var c = new Array(b.length), d = 0; d < c.length; d++) c[d] = "" + d;
//                     return c
//                 }
//                 if (Object.keys) return Object.keys(b);
//                 var c = [];
//                 for (var e in b) b.hasOwnProperty(e) && c.push(e);
//                 return c
//             },
//             y = function(b) {
//                 var c = b.target,
//                     d = a(c),
//                     e = d.data(p),
//                     f = e.length,
//                     g = b["wb-json"];
//                 if (!g.url || !g.type && !g.source) throw "Data JSON update not configured properly";
//                 e.push(g), d.data(p, e), s(c, g.url, f)
//             };
//         q.on("json-failed.wb", l, function() {
//             throw "Bad JSON Fetched from url in " + e
//         }), Modernizr.load({
//             test: "content" in document.createElement("template"),
//             nope: "site!deps/template" + c.getMode() + ".js"
//         }), q.on("timerpoke.wb " + m + " " + n + " json-fetched.wb", l, function(a) {
//             if (a.currentTarget === a.target) switch (a.type) {
//                 case "timerpoke":
//                 case "wb-init":
//                     r(a);
//                     break;
//                 case "wb-update":
//                     y(a);
//                     break;
//                 default:
//                     t(a)
//             }
//             return !0
//         });
//         for (d = 0; d !== k; d += 1) c.add(g[d])
//     }(jQuery, window, wb),
//     function(a, b, c) {
//         "use strict";
//         var d = "wb-template",
//             e = "template",
//             f = "wb-init." + d,
//             g = c.doc,
//             h = function(a) {
//                 if (!a.content) {
//                     var c, d, e = a;
//                     for (c = e.childNodes, d = b.createDocumentFragment(); c[0];) d.appendChild(c[0]);
//                     e.content = d
//                 }
//             },
//             i = function(b) {
//                 var f = c.init(b, d, e);
//                 f && (h(f), c.ready(a(f), d))
//             };
//         c.tmplPolyfill = h, g.on("timerpoke.wb " + f, e, i), c.add(e)
//     }(jQuery, document, wb),
//     function(a, b, c) {
//         "use strict";
//         var d = "wb-doaction",
//             e = "a[data-" + d + "],button[data-" + d + "]",
//             f = "do.wb-actionmng",
//             g = c.doc;
//         g.on("click", e, function(b) {
//             var h = b.target,
//                 i = a(h);
//             if (b.currentTarget !== b.target && (i = i.parentsUntil("main", e), h = i[0]), "BUTTON" === h.nodeName || "A" === h.nodeName) return c.isReady ? i.trigger({
//                 type: f,
//                 actions: c.getData(i, d)
//             }) : g.one("wb-ready.wb", function() {
//                 i.trigger({
//                     type: f,
//                     actions: c.getData(i, d)
//                 })
//             }), !1
//         })












//     }(jQuery, window, wb),
//     function(a, b, c) {
//         "use strict";
//         var componentName = "wb-fieldflow",
//             selector = "." + componentName,
//             formComponent = componentName + "-form",
//             subComponentName = componentName + "-sub",
//             crtlSelectClass = componentName + "-init",
//             crtlSelectSelector = "." + crtlSelectClass,
//             basenameInput = componentName + wb.getId(),
//             basenameInputSelector = "[name^=" + basenameInput + "]",
//             labelClass = componentName + "-label",
//             headerClass = componentName + "-header",
//             selectorForm = "." + formComponent,
//             initEvent = "wb-init" + selector,
//             drawEvent = "draw" + selector,
//             actionEvent = "action" + selector,
//             submitEvent = "submit" + selector,
//             submitedEvent = "submited" + selector,
//             readyEvent = "ready" + selector,
//             cleanEvent = "clean" + selector,
//             resetActionEvent = "reset" + selector,
//             createCtrlEvent = "createctrl" + selector,
//             registerJQData = componentName + "-register", // Data that contain all the component registered (to the form element and component), used for executing action upon submit
//             registerHdnFld = componentName + "-hdnfld",
//             configData = componentName + "-config",
//             pushJQData = componentName + "-push",
//             submitJQData = componentName + "-submit", // List of action to perform upon form submission
//             actionData = componentName + "-action", // temp for code transition
//             originData = componentName + "-origin", // To carry the plugin origin ID, any implementation of "createCtrlEvent" must set that option.
//             sourceDataAttr = "data-" + componentName + "-source",
//             flagOptValueData = componentName + "-flagoptvalue",
//             $document = wb.doc,
//             defaults = {
//                 toggle: {
//                     stateOn: "visible", // For toggle plugin
//                     stateOff: "hidden" // For toggle plugin
//                 },
//                 i18n: {
//                     "en": {
//                         btn: "Continue", // Action button
//                         defaultsel: "Make your selection...", // text use for the first empty select
//                         required: "required" // text for the required label
//                     },
//                     "fr": {
//                         btn: "Allez",
//                         defaultsel: "SÃ©lectionnez dans la liste...", // text use for the first empty select
//                         required: "obligatoire" // text for the required label
//                     }
//                 },
//                 action: "ajax",
//                 prop: "url"
//             },
//             fieldflowActionsEvents = [
//                 [
//                     "redir",
//                     "query",
//                     "ajax",
//                     "addClass",
//                     "removeClass",
//                     "removeClass",
//                     "append",
//                     "tblfilter",
//                     "toggle"
//                 ].join("." + actionEvent + " ") + "." + actionEvent, [
//                     "ajax",
//                     "toggle",
//                     "redir",
//                     "addClass",
//                     "removeClass"
//                 ].join("." + submitEvent + " ") + "." + submitEvent, [
//                     "tblfilter",
//                     componentName
//                 ].join("." + drawEvent + " ") + "." + drawEvent, [
//                     "select",
//                     "checkbox",
//                     "radio"
//                 ].join("." + createCtrlEvent + " ") + "." + createCtrlEvent
//             ].join(" "),

//             /**
//              * @method init
//              * @param {jQuery Event} event Event that triggered the function call
//              */
//             init = function(event) {
//                 var elm = wb.init(event, componentName, selector),
//                     $elm, elmId,
//                     wbDataElm,
//                     config,
//                     i18n;

//                 if (elm) {
//                     $elm = $(elm);
//                     elmId = elm.id;

//                     // Set default i18n information
//                     if (defaults.i18n[wb.lang]) {
//                         defaults.i18n = defaults.i18n[wb.lang];
//                     }

//                     // Extend this data with the contextual default
//                     wbDataElm = wb.getData($elm, componentName);
//                     if (wbDataElm && wbDataElm.i18n) {
//                         wbDataElm.i18n = $.extend({}, defaults.i18n, wbDataElm.i18n);
//                     }
//                     config = $.extend({}, defaults, wbDataElm);

//                     if (config.defaultIfNone && !$.isArray(config.defaultIfNone)) {
//                         config.defaultIfNone = [config.defaultIfNone];
//                     }

//                     // Set the data to the component, if other event need to have access to it.
//                     $elm.data(configData, config);
//                     i18n = config.i18n;

//                     // Add startWith function (ref: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/startsWith)
//                     if (!String.prototype.startsWith) {
//                         String.prototype.startsWith = function(searchString, position) {
//                             position = position || 0;
//                             return this.substr(position, searchString.length) === searchString;
//                         };
//                     }

//                     // Transform the list into a select, use the first paragrap content for the label, and extract for i18n the name of the button action.
//                     var bodyID = wb.getId(),
//                         stdOut,
//                         formElm, $form;

//                     if (config.noForm) {
//                         stdOut = "<div class='mrgn-tp-md'><div id='" + bodyID + "'></div></div>";

//                         // Need to add the class="formComponent" to the div that wrap the form element.
//                         formElm = elm.parentElement;
//                         while (formElm.nodeName !== "FORM") {
//                             formElm = formElm.parentElement;
//                         }
//                         $(formElm.parentElement).addClass(formComponent);
//                     } else {
//                         stdOut = "<div class='wb-frmvld " + formComponent + "'><form><div id='" + bodyID + "'>";
//                         stdOut = stdOut + "</div><input type=\"submit\" value=\"" + i18n.btn + "\" class=\"btn btn-primary mrgn-bttm-md\" /> </form></div>";
//                     }
//                     $elm.addClass("hidden");
//                     stdOut = $(stdOut);
//                     $elm.after(stdOut);

//                     if (!config.noForm) {
//                         formElm = stdOut.find("form");
//                         stdOut.trigger("wb-init.wb-frmvld");
//                     }

//                     $form = $(formElm);

//                     // Register this plugin within the form, this is to manage form submission
//                     pushData($form, registerJQData, elmId);

//                     if (!config.outputctnrid) { // Output container ID
//                         config.outputctnrid = bodyID;
//                     }

//                     if (!config.source) {
//                         config.source = elm; // We assume th container have the source
//                     }

//                     if (!config.srctype) {
//                         config.srctype = componentName;
//                     }

//                     config.inline = !!config.inline;

//                     // Trigger the drop down loading
//                     $elm.trigger(config.srctype + "." + drawEvent, config);

//                     // Do requested DOM manipulation
//                     if (config.unhideelm) {
//                         $(config.unhideelm).removeClass("hidden");
//                     }
//                     if (config.hideelm) {
//                         $(config.hideelm).addClass("hidden");
//                     }

//                     // Identify that initialization has completed
//                     wb.ready($elm, componentName);

//                     if (config.ext) {
//                         config.form = $form.get(0);
//                         $elm.trigger(config.ext + "." + readyEvent, config);
//                     }
//                 }
//             },
//             pushData = function($elm, prop, data, reset) {
//                 var dtCache = $elm.data(prop);
//                 if (!dtCache || reset) {
//                     dtCache = [];
//                 }
//                 dtCache.push(data);
//                 return $elm.data(prop, dtCache);
//             },
//             subRedir = function(event, data) {

//                 var form = data.form,
//                     url = data.url;

//                 if (url) {
//                     form.setAttribute("action", url);
//                 }
//             },
//             actQuery = function(event, data) {
//                 var $selectElm = data.$selElm,
//                     fieldName = data.name,
//                     fieldValue = data.value;

//                 if (fieldName) {
//                     data.provEvt.setAttribute("name", fieldName);
//                 }
//                 if (fieldValue) {
//                     $selectElm.val(fieldValue);
//                 }

//                 // Add a flag to know the option value was inserted
//                 $selectElm.attr("data-" + flagOptValueData, flagOptValueData);
//             },
//             actAjax = function(event, data) {
//                 var provEvt = data.provEvt,
//                     $container;

//                 if (!data.live) {
//                     data.preventSubmit = true;
//                     pushData($(provEvt), submitJQData, data);
//                 } else {
//                     if (!data.container) {

//                         // Create the container next to component
//                         $container = $("<div></div>");
//                         $(provEvt.parentNode).append($container);
//                         data.container = $container.get(0);
//                     }
//                     $(event.target).trigger("ajax." + submitEvent, data);
//                 }
//             },
//             subAjax = function(event, data) {
//                 var $container, containerID, ajxType,
//                     cleanSelector = data.clean;

//                 if (!data.container) {
//                     containerID = wb.getId();
//                     $container = $("<div id='" + containerID + "'></div>");
//                     $(data.form).append($container);
//                     cleanSelector = "#" + containerID;
//                 } else {
//                     $container = $(data.container);
//                 }

//                 if (cleanSelector) {
//                     $(data.origin).one(cleanEvent, function() {
//                         $(cleanSelector).empty();
//                     });
//                 }

//                 if (data.trigger) {
//                     $container.attr("data-trigger-wet", "true");
//                 }

//                 ajxType = data.type ? data.type : "replace";
//                 $container.attr("data-ajax-" + ajxType, data.url);

//                 $container.one("wb-contentupdated", function(event, data) {
//                     var updtElm = event.currentTarget,
//                         trigger = updtElm.getAttribute("data-trigger-wet");

//                     updtElm.removeAttribute("data-ajax-" + data["ajax-type"]);
//                     if (trigger) {
//                         $(updtElm)
//                             .find(wb.allSelectors)
//                             .addClass("wb-init")
//                             .filter(":not(#" + updtElm.id + " .wb-init .wb-init)")
//                             .trigger("timerpoke.wb");
//                         updtElm.removeAttribute("data-trigger-wet");
//                     }
//                 });
//                 $container.trigger("wb-update.wb-data-ajax");
//             },
//             subToggle = function(event, data) {
//                 var $origin = $(data.origin),
//                     config = $(event.target).data(configData),
//                     toggleOpts = data.toggle;


//                 // For simple toggle call syntax
//                 if (toggleOpts && typeof toggleOpts === "string") {
//                     toggleOpts = { selector: toggleOpts };
//                 }
//                 toggleOpts = $.extend({}, toggleOpts, config.toggle);

//                 // Doing an add and remove "wb-toggle" class in order to avoid the click event added by toggle plugin
//                 $origin.addClass("wb-toggle");
//                 $origin.trigger("toggle.wb-toggle", toggleOpts);

//                 // Set the cleaning task
//                 toggleOpts.type = "off";
//                 $origin.one(cleanEvent, function() {
//                     $origin.addClass("wb-toggle");
//                     $origin.trigger("toggle.wb-toggle", toggleOpts);
//                     $origin.removeClass("wb-toggle");
//                 });
//             },
//             actAppend = function(event, data) {
//                 if (event.namespace === actionEvent) {
//                     var srctype = data.srctype ? data.srctype : componentName;
//                     data.container = data.provEvt.parentNode.id;
//                     if (!data.source) {
//                         throw "A source is required to append a field flow control.";
//                     }
//                     $(event.currentTarget).trigger(srctype + "." + drawEvent, data);
//                 }
//             },
//             actTblFilter = function(event, data) {
//                 if (event.namespace === actionEvent) {
//                     var sourceSelector = data.source,
//                         $datatable = $(sourceSelector).dataTable({ "retrieve": true }).api(),
//                         $dtSelectedColumn,
//                         column = data.column,
//                         colInt = parseInt(column, 10),
//                         regex = !!data.regex,
//                         smart = (!data.smart) ? true : !!data.smart,
//                         caseinsen = (!data.caseinsen) ? true : !!data.caseinsen;

//                     column = (colInt === true) ? colInt : column;

//                     $dtSelectedColumn = $datatable.column(column);

//                     $dtSelectedColumn.search(data.value, regex, smart, caseinsen).draw();

//                     // Add a clean up task
//                     $(data.provEvt).one(cleanEvent, function() {
//                         $dtSelectedColumn.search("").draw();
//                     });

//                 }
//             },
//             drwTblFilter = function(event, data) {
//                 if (event.namespace === drawEvent) {
//                     var selColumn = data.column, // (integer/datatable column selector)
//                         csvExtract = data.csvextract, // (true|false) assume items are in CSV format instead of being inside "li" elements
//                         $column,
//                         sourceSelector = data.source,
//                         $source = $(sourceSelector),
//                         $datatable,
//                         arrData, $listItem,
//                         i, i_len,
//                         j, j_len,
//                         items = [],
//                         cur_itm,
//                         prefLabel = data.label,
//                         defaultSelectedLabel = data.defaultselectedlabel,
//                         lblselector = data.lblselector,
//                         filterSequence = data.fltrseq ? data.fltrseq : [],
//                         limit = data.limit ? data.limit : 10,
//                         firstFilterSeq,
//                         actionItm, filterItm,
//                         renderas;

//                     // Check if the datatable has been loaded, if not we will wait until it is.
//                     if (!$source.hasClass("wb-tables-inited")) {
//                         $source.one("wb-ready.wb-tables", function() {
//                             $(event.target).trigger("tblfilter." + drawEvent, data);
//                         });
//                         return false;
//                     }
//                     $datatable = $source.dataTable({ "retrieve": true }).api();

//                     if ($datatable.rows({ "search": "applied" }).data().length <= limit) {
//                         return true;
//                     }

//                     renderas = data.renderas ? data.renderas : "select"; // Default it will render as select

//                     if (!selColumn && filterSequence.length) {
//                         cur_itm = filterSequence.shift();
//                         if (!cur_itm.column) {
//                             throw "Column is undefined in the filter sequence";
//                         }
//                         selColumn = cur_itm.column;
//                         csvExtract = cur_itm.csvextract;
//                         defaultSelectedLabel = cur_itm.defaultselectedlabel;
//                         prefLabel = cur_itm.label;
//                         lblselector = cur_itm.lblselector;
//                     }

//                     $column = $datatable.column(selColumn, { "search": "applied" });

//                     // Get the items
//                     if (csvExtract) {
//                         arrData = $column.data();
//                         for (i = 0, i_len = arrData.length; i !== i_len; i += 1) {
//                             items = items.concat(arrData[i].split(","));
//                         }
//                     } else {
//                         arrData = $column.nodes();
//                         for (i = 0, i_len = arrData.length; i !== i_len; i += 1) {
//                             $listItem = $(arrData[i]).find("li");
//                             for (j = 0, j_len = $listItem.length; j !== j_len; j += 1) {
//                                 items.push($($listItem[j]).text());
//                             }
//                         }
//                     }

//                     items = items.sort().filter(function(item, pos, ary) {
//                         return !pos || item !== ary[pos - 1];
//                     });

//                     var elm = event.target,
//                         $elm = $(elm),
//                         itemsToCreate = [],
//                         pushAction = data.actions ? data.actions : [];

//                     if (filterSequence.length) {
//                         firstFilterSeq = filterSequence[0];
//                         filterItm = {
//                             action: "append",
//                             srctype: "tblfilter",
//                             source: sourceSelector,
//                             renderas: firstFilterSeq.renderas ? firstFilterSeq.renderas : renderas,
//                             fltrseq: filterSequence,
//                             limit: limit
//                         };
//                     }
//                     for (i = 0, i_len = items.length; i !== i_len; i += 1) {
//                         cur_itm = items[i];
//                         actionItm = {
//                             label: cur_itm,
//                             actions: [{ // Set an action upon item selection
//                                 action: "tblfilter",
//                                 source: sourceSelector,
//                                 column: selColumn,
//                                 value: cur_itm
//                             }]
//                         };
//                         if (filterItm) {
//                             actionItm.actions.push(filterItm);
//                         }
//                         itemsToCreate.push(actionItm);
//                     }

//                     if (!prefLabel) {
//                         prefLabel = $column.header().textContent;
//                     }

//                     if (!data.outputctnrid) {
//                         data.outputctnrid = data.provEvt.parentElement.id;
//                     }

//                     $elm.trigger(renderas + "." + createCtrlEvent, {
//                         actions: pushAction,
//                         source: $source.get(0),
//                         outputctnrid: data.outputctnrid,
//                         label: prefLabel,
//                         defaultselectedlabel: defaultSelectedLabel,
//                         lblselector: lblselector,
//                         items: itemsToCreate,
//                         inline: data.inline
//                     });

//                 }
//             },
//             drwFieldflow = function(event, data) {
//                 if (event.namespace === drawEvent) {
//                     var elm = event.target,
//                         $elm = $(elm),
//                         wbDataElm,
//                         $source = $(data.source),
//                         source = $source.get(0),
//                         $labelExplicit, $firstChild,
//                         labelSelector = data.lblselector || "." + labelClass,
//                         labelTxt,
//                         itmSelector = data.itmselector || "ul:first() > li",
//                         $items,
//                         actions,
//                         renderas;

//                     // Extend if it is a sub-component
//                     if ($source.hasClass(subComponentName)) {
//                         wbDataElm = wb.getData($source, componentName);
//                         $source.data(configData, wbDataElm);
//                         data = $.extend({}, data, wbDataElm);
//                     }

//                     actions = data.actions || [];
//                     renderas = data.renderas ? data.renderas : "select"; // Default it will render as select

//                     // Check if the first node is a div and contain the label.
//                     if (!source.id) {
//                         source.id = wb.getId();
//                     }
//                     $firstChild = $source.children().first();

//                     if (!$firstChild.hasClass(headerClass)) {

//                         // Only use what defined as the label, nothing else
//                         $labelExplicit = $firstChild.find(labelSelector);
//                         if ($labelExplicit.length) {
//                             labelTxt = $labelExplicit.html();
//                         } else {
//                             labelTxt = $source.find("> p").html();
//                         }
//                         labelSelector = null; // unset the label selector because it not needed for the control creation
//                     } else {
//                         labelTxt = $firstChild.html();
//                         itmSelector = "." + headerClass + " + " + itmSelector;
//                     }

//                     $items = getItemsData($source.find(itmSelector));

//                     if (!data.outputctnrid) {
//                         data.outputctnrid = data.provEvt.parentElement.id;
//                     }

//                     $elm.trigger(renderas + "." + createCtrlEvent, {
//                         actions: actions,
//                         source: source,
//                         attributes: data.attributes,
//                         outputctnrid: data.outputctnrid,
//                         label: labelTxt,
//                         lblselector: labelSelector,
//                         defaultselectedlabel: data.defaultselectedlabel,
//                         required: !!!data.isoptional,
//                         noreqlabel: data.noreqlabel,
//                         items: $items,
//                         inline: data.inline
//                     });
//                 }
//             },
//             ctrlSelect = function(event, data) {
//                 var bodyId = data.outputctnrid,
//                     $body = $("#" + bodyId),
//                     actions = data.actions,
//                     lblselector = data.lblselector,
//                     isReq = !!data.required,
//                     useReqLabel = !!!data.noreqlabel,
//                     items = data.items,
//                     elm = event.target,
//                     $elm = $(elm),
//                     source = data.source,
//                     attributes = data.attributes,
//                     i18n = $elm.data(configData).i18n,
//                     autoID = wb.getId(),
//                     labelPrefix = "<label for='" + autoID + "'",
//                     labelSuffix = "</span>",
//                     $out, $tmpLabel,
//                     selectOut, $selectOut,
//                     defaultSelectedLabel = data.defaultselectedlabel ? data.defaultselectedlabel : i18n.defaultsel,
//                     i, i_len, j, j_len, cur_itm;

//                 // Create the label
//                 if (isReq && useReqLabel) {
//                     labelPrefix += " class='required'";
//                     labelSuffix += " <strong class='required'>(" + i18n.required + ")</strong>";
//                 }
//                 labelPrefix += "><span class='field-name'>";
//                 labelSuffix += "</label>";

//                 if (!lblselector) {
//                     $out = $(labelPrefix + data.label + labelSuffix);
//                 } else {
//                     $out = $("<div>" + data.label + "</div>");
//                     $tmpLabel = $out.find(lblselector);
//                     $tmpLabel.html(labelPrefix + $tmpLabel.html() + labelSuffix);
//                 }

//                 // Create the select
//                 selectOut = "<select id='" + autoID + "' name='" + basenameInput + autoID + "' class='full-width form-control mrgn-bttm-md " + crtlSelectClass + "' data-" + originData + "='" + elm.id + "' " + sourceDataAttr + "='" + source.id + "'";
//                 if (isReq) {
//                     selectOut += " required";
//                 }
//                 if (attributes && typeof attributes === "object") {
//                     for (i in attributes) {
//                         if (attributes.hasOwnProperty(i)) {
//                             selectOut += " " + i + "='" + attributes[i] + "'";
//                         }
//                     }
//                 }
//                 selectOut += "><option value=''>" + defaultSelectedLabel + "</option>";
//                 for (i = 0, i_len = items.length; i !== i_len; i += 1) {
//                     cur_itm = items[i];

//                     if (!cur_itm.group) {
//                         selectOut += buildSelectOption(cur_itm);
//                     } else {

//                         // We have a group of sub-items, the cur_itm are a group
//                         selectOut += "<optgroup label='" + cur_itm.label + "'>";
//                         j_len = cur_itm.group.length;
//                         for (j = 0; j !== j_len; j += 1) {
//                             selectOut += buildSelectOption(cur_itm.group[j]);
//                         }
//                         selectOut += "</optgroup>";
//                     }
//                 }
//                 selectOut += "</select>";
//                 $selectOut = $(selectOut);

//                 $body.append($out).append($selectOut);

//                 // Set post action if any
//                 if (actions && actions.length > 0) {
//                     $selectOut.data(pushJQData, actions);
//                 }

//                 // Register this control
//                 pushData($elm, registerJQData, autoID);
//             },
//             ctrlChkbxRad = function(event, data) {
//                 var bodyId = data.outputctnrid,
//                     actions = data.actions,
//                     lblselector = data.lblselector,
//                     isReq = !!data.required,
//                     useReqLabel = !!!data.noreqlabel,
//                     items = data.items,
//                     elm = event.target,
//                     $elm = $(elm),
//                     source = data.source,
//                     i18n = $elm.data(configData).i18n,
//                     attributes = data.attributes,
//                     ctrlID = wb.getId(),
//                     fieldsetPrefix = "<legend class='h5 ",
//                     fieldsetSuffix = "</span>",
//                     fieldsetHTML = "<fieldset id='" + ctrlID + "' data-" + originData + "='" + elm.id + "' " + sourceDataAttr + "='" + source.id + "' class='" + crtlSelectClass + " mrgn-bttm-md'",
//                     $out,
//                     $tmpLabel, $cloneLbl, $prevContent,
//                     radCheckOut = "",
//                     typeRadCheck = data.typeRadCheck,
//                     isInline = data.inline,
//                     fieldName = basenameInput + ctrlID,
//                     i, i_len, j, j_len, cur_itm;

//                 if (attributes && typeof attributes === "object") {
//                     for (i in attributes) {
//                         if (attributes.hasOwnProperty(i)) {
//                             fieldsetHTML += " " + i + "='" + attributes[i] + "'";
//                         }
//                     }
//                 }
//                 $out = $(fieldsetHTML + "></fieldset>");

//                 // Create the legend
//                 if (isReq && useReqLabel) {
//                     fieldsetPrefix += " required";
//                     fieldsetSuffix += " <strong class='required'>(" + i18n.required + ")</strong>";
//                 }
//                 fieldsetPrefix += "'>";
//                 fieldsetSuffix += "</legend>";
//                 if (!lblselector) {
//                     $out.append($(fieldsetPrefix + data.label + fieldsetSuffix));
//                 } else {
//                     $cloneLbl = $("<div>" + data.label + "</div>");
//                     $tmpLabel = $cloneLbl.find(lblselector);
//                     $out.append((fieldsetPrefix + $tmpLabel.html() + fieldsetSuffix))
//                         .append($tmpLabel.nextAll());
//                     $prevContent = $tmpLabel.prevAll();
//                 }

//                 // Create radio
//                 for (i = 0, i_len = items.length; i !== i_len; i += 1) {
//                     cur_itm = items[i];

//                     if (!cur_itm.group) {
//                         radCheckOut += buildCheckboxRadio(cur_itm, fieldName, typeRadCheck, isInline, isReq, i + 1);
//                     } else {

//                         // We have a group of sub-items, the cur_itm are a group
//                         radCheckOut += "<p>" + cur_itm.label + "</p>";
//                         j_len = cur_itm.group.length;
//                         for (j = 0; j !== j_len; j += 1) {
//                             radCheckOut += buildCheckboxRadio(cur_itm.group[j], fieldName, typeRadCheck, isInline, isReq);
//                         }
//                     }
//                 }
//                 if (isInline) {
//                     radCheckOut = "<div class='clearfix'></div><div class='cst-inputs'>" + radCheckOut;
//                 } else {
//                     radCheckOut = "<div class='clearfix'></div><ul class='list-unstyled cst-inputs'>" + radCheckOut;
//                 }
//                 $out.append(radCheckOut);
//                 $("#" + bodyId).append($out);
//                 if ($prevContent) {
//                     $out.before($prevContent);
//                 }

//                 // Set post action if any
//                 if (actions && actions.length > 0) {
//                     $out.data(pushJQData, actions);
//                 }

//                 // Register this control
//                 pushData($elm, registerJQData, ctrlID);
//             },
//             getItemsData = function($items, preventRecusive) {
//                 var arrItems = $items.get(),
//                     i, i_len = arrItems.length,
//                     itmCached,
//                     itmLabel, itmValue, grpItem,
//                     j, j_len, childNodes, firstNode, childNode, $childNode, childNodeID,
//                     parsedItms = [],
//                     actions;

//                 for (i = 0; i !== i_len; i += 1) {
//                     itmCached = arrItems[i];

//                     itmValue = "";
//                     grpItem = null;
//                     itmLabel = "";

//                     firstNode = itmCached.firstChild;
//                     childNodes = itmCached.childNodes;
//                     j_len = childNodes.length;

//                     if (!firstNode) {
//                         throw "You have a markup error, There may be an empyt <li> elements in your list.";
//                     }

//                     actions = [];

//                     // Is firstNode an anchor?
//                     if (firstNode.nodeName === "A") {
//                         itmValue = firstNode.getAttribute("href");
//                         itmLabel = $(firstNode).html();
//                         j_len = 1; // Force following elements to be ignored

//                         actions.push({
//                             action: "redir",
//                             url: itmValue
//                         });
//                     }

//                     // Iterate until we have found the labelClass or <ul> or element with subSelector or end of the array
//                     for (j = 1; j !== j_len; j += 1) {
//                         childNode = childNodes[j];
//                         $childNode = $(childNode);

//                         // Sub plugin
//                         if ($childNode.hasClass(subComponentName)) {
//                             childNodeID = childNode.id || wb.getId();
//                             childNode.id = childNodeID;
//                             itmValue = componentName + "-" + childNodeID;

//                             actions.push({
//                                 action: "append",
//                                 srctype: componentName,
//                                 source: "#" + childNodeID
//                             });
//                             break;
//                         }

//                         // Grouping
//                         if (childNode.nodeName === "UL") {
//                             if (preventRecusive) {
//                                 throw "Recursive error, please check your code";
//                             }
//                             grpItem = getItemsData($childNode.children(), true);
//                         }

//                         // Explicit label to use
//                         if ($childNode.hasClass(labelClass)) {
//                             itmLabel = $childNode.html();
//                         }
//                     }

//                     if (!itmLabel) {
//                         itmLabel = firstNode.nodeValue;
//                     }

//                     // Set an id on the element
//                     if (!itmCached.id) {
//                         itmCached.id = wb.getId();
//                     }

//                     // Return the item parsed
//                     parsedItms.push({
//                         "bind": itmCached.id,
//                         "label": itmLabel,
//                         "actions": actions,
//                         "group": grpItem
//                     });
//                 }
//                 return parsedItms;
//             },
//             buildSelectOption = function(data) {
//                 var label = data.label,
//                     out = "<option value='" + label + "'";

//                 out += buildDataAttribute(data);

//                 out += ">" + label + "</option>";

//                 return out;
//             },
//             buildDataAttribute = function(data) {
//                 var out = "",
//                     dataFieldflow = {};

//                 dataFieldflow.bind = data.bind || "";
//                 dataFieldflow.actions = data.actions || [];

//                 out += " data-" + componentName + "='" + JSON.stringify(dataFieldflow) + "'";

//                 return out;
//             },

//             buildCheckboxRadio = function(data, fieldName, inputType, isInline, isReq, iLoopBuilder) {
//                 var label = data.label,
//                     fieldID = wb.getId(),
//                     inline = isInline ? "-inline" : "",
//                     out = "<"
//                 if (isInline) {
//                     out += "span class='form-" + inputType + "'><input id='" + fieldID + "' type='" + inputType + "' name='" + fieldName + "' value='" + label + "'"; //used to have + out - what is this inline thing?
//                 } else {
//                     out += "li class='" + inputType + "'><input id='" + fieldID + "' type='" + inputType + "' name='" + fieldName + "' value='" + label + "'";
//                 }
//                 out += buildDataAttribute(data);

//                 if (isReq) {
//                     out += " required='required'";
//                 }

//                 if (isInline) {
//                     out += "/><label class='form-" + inputType + " " + "form-" + inputType + "-inline'" + "for='" + fieldID + "'";
//                     out += " >" + label + "</label></span>";


//                 } else {
//                     out += "/><label for='" + fieldID + "'";
//                     out += " >" + label + "</label></li>";
//                 }



//                 console.log(out);
//                 return out;
//             };

//         $document.on(resetActionEvent, selector + ", ." + subComponentName, function(event) {
//             var elm = event.target,
//                 $elm,
//                 settings,
//                 settingsReset,
//                 resetAction = [],
//                 i, i_len, i_cache, action, isLive;

//             if (elm === event.currentTarget) {
//                 $elm = $(elm);
//                 settings = $elm.data(configData);

//                 if (settings && settings.reset) {
//                     settingsReset = settings.reset;

//                     if ($.isArray(settingsReset)) {
//                         resetAction = settingsReset;
//                     } else {
//                         resetAction.push(settingsReset);
//                     }

//                     i_len = resetAction.length;
//                     for (i = 0; i !== i_len; i += 1) {
//                         i_cache = resetAction[i];
//                         action = i_cache.action;
//                         if (action) {
//                             isLive = i_cache.live;
//                             if (isLive !== false) {
//                                 i_cache.live = true;
//                             }
//                             $elm.trigger(action + "." + actionEvent, i_cache);
//                         }
//                     }
//                 }
//             }
//         });

//         // Load content after the user have choosen an option
//         $document.on("change", selectorForm + " " + crtlSelectSelector, function(event) {

//             var elm = event.currentTarget,
//                 $elm = $(elm),
//                 selCurrentElm, cacheAction,
//                 i, i_len, dtCached, dtCachedTarget,
//                 itmToClean = $elm.nextAll(),
//                 itm, idxItem,
//                 $orgin = $("#" + elm.getAttribute("data-" + originData)),
//                 $source = $("#" + elm.getAttribute(sourceDataAttr)),
//                 lstIdRegistered = $orgin.data(registerJQData),
//                 $optSel = $elm.find(":checked", $elm),
//                 form = $elm.get(0).form;

//             //
//             // 1. Cleaning
//             //
//             i_len = itmToClean.length;
//             if (i_len) {
//                 for (i = i_len; i !== 0; i -= 1) {
//                     itm = itmToClean[i];
//                     if (itm) {
//                         idxItem = lstIdRegistered.indexOf(itm.id);
//                         if (idxItem > -1) {
//                             lstIdRegistered.splice(idxItem, 1);
//                         }
//                         $("#" + itm.getAttribute(sourceDataAttr)).trigger(resetActionEvent).trigger(cleanEvent);
//                         $(itm).trigger(cleanEvent);
//                     }
//                 }
//                 $orgin.data(registerJQData, lstIdRegistered);
//                 itmToClean.remove();
//             }
//             $source.trigger(resetActionEvent).trigger(cleanEvent);
//             $elm.trigger(cleanEvent);

//             // Remove any action that is pending for form submission
//             $elm.data(submitJQData, []);

//             //
//             // 2. Get defined actions
//             //

//             var actions = [],
//                 settings, settingsSrc, selFieldFlowData,
//                 actionAttr,
//                 defaultAction,
//                 defaultProp,
//                 baseAction,
//                 nowActions = [],
//                 postActions = [],
//                 postAction_len,
//                 bindTo,
//                 bindToElm;

//             // From the component, default action
//             settings = $orgin.data(configData);
//             settingsSrc = $source.data(configData);
//             if (settingsSrc && settings) {
//                 settings = $.extend({}, settings, settingsSrc);
//             }
//             if ($optSel.length && $optSel.val() && settings && settings.default) {
//                 cacheAction = settings.default;
//                 if ($.isArray(cacheAction)) {
//                     actions = cacheAction;
//                 } else {
//                     actions.push(cacheAction);
//                 }
//             }

//             defaultAction = settings.action;
//             defaultProp = settings.prop;
//             actionData = settings.actionData || {};

//             // From the component, action pushed for later
//             cacheAction = $elm.data(pushJQData);
//             if (cacheAction) {
//                 actions = actions.concat(cacheAction);
//             }

//             // For each the binded elements that are selected
//             for (i = 0, i_len = $optSel.length; i !== i_len; i += 1) {
//                 selCurrentElm = $optSel.get(i);
//                 selFieldFlowData = wb.getData(selCurrentElm, componentName);
//                 if (selFieldFlowData) {
//                     bindTo = selFieldFlowData.bind;
//                     actions = actions.concat(selFieldFlowData.actions);

//                     if (bindTo) {

//                         // Retreive action set on the binded element
//                         bindToElm = document.getElementById(bindTo);
//                         actionAttr = bindToElm.getAttribute("data-" + componentName);
//                         if (actionAttr) {
//                             if (actionAttr.startsWith("{") || actionAttr.startsWith("[")) {
//                                 try {
//                                     cacheAction = JSON.parse(actionAttr);
//                                 } catch (error) {
//                                     $.error("Bad JSON object " + actionAttr);
//                                 }
//                                 if (!$.isArray(cacheAction)) {
//                                     cacheAction = [cacheAction];
//                                 }
//                             } else {
//                                 cacheAction = {};
//                                 cacheAction.action = defaultAction;
//                                 cacheAction[defaultProp] = actionAttr;
//                                 cacheAction = $.extend(true, {}, actionData, cacheAction);
//                                 cacheAction = [cacheAction];
//                             }
//                             actions = actions.concat(cacheAction);
//                         }
//                     }
//                 }
//             }

//             // If there is no action, do nothing
//             if (!actions.length) {
//                 return true;
//             }

//             //
//             // 3. Sort action
//             // 			array1 = Action to be executed now
//             //			array2 = Action to be postponed for later use
//             for (i = 0, i_len = actions.length; i !== i_len; i += 1) {
//                 dtCached = actions[i];
//                 dtCachedTarget = dtCached.target;
//                 if (!dtCachedTarget || dtCachedTarget === bindTo) {
//                     nowActions.push(dtCached);
//                 } else {
//                     postActions.push(dtCached);
//                 }
//             }

//             //
//             // 4. Execute action for the current item
//             //
//             baseAction = settings.base || {};
//             postAction_len = postActions.length;
//             for (i = 0, i_len = nowActions.length; i !== i_len; i += 1) {
//                 dtCached = $.extend({}, baseAction, nowActions[i]);
//                 dtCached.origin = $source.get(0);
//                 dtCached.provEvt = elm;
//                 dtCached.$selElm = $optSel;
//                 dtCached.form = form;
//                 if (postAction_len) {
//                     dtCached.actions = postActions;
//                 }
//                 $orgin.trigger(dtCached.action + "." + actionEvent, dtCached);
//             }
//             return true;
//         });


//         // Load content after the user have choosen an option
//         $document.on("submit", selectorForm + " form", function(event) {

//             var elm = event.currentTarget,
//                 $elm = $(elm),
//                 wbFieldFlowRegistered = $elm.data(registerJQData),
//                 wbRegisteredHidden = $elm.data(registerHdnFld) || [],
//                 $hdnField,
//                 i, i_len = wbFieldFlowRegistered ? wbFieldFlowRegistered.length : 0,
//                 $wbFieldFlow, fieldOrigin,
//                 lstFieldFlowPostEvent = [],
//                 componentRegistered, $componentRegistered, $origin, lstOrigin = [],
//                 settings,
//                 j, j_len,
//                 m, m_len, m_cache,
//                 actions,
//                 preventSubmit = false,
//                 lastProvEvt;

//             // Run the cleaning on the current items
//             if (i_len) {
//                 $wbFieldFlow = $("#" + wbFieldFlowRegistered[i_len - 1]);
//                 fieldOrigin = $wbFieldFlow.data(registerJQData);
//                 $("#" + fieldOrigin[fieldOrigin.length - 1]).trigger(cleanEvent);
//                 $wbFieldFlow.trigger(cleanEvent);
//             }

//             // For each wb-fieldflow component, execute submiting task.
//             for (i = 0; i !== i_len; i += 1) {
//                 $wbFieldFlow = $("#" + wbFieldFlowRegistered[i]);
//                 componentRegistered = $wbFieldFlow.data(registerJQData);
//                 j_len = componentRegistered.length;
//                 for (j = 0; j !== j_len; j += 1) {
//                     $componentRegistered = $("#" + componentRegistered[j]);
//                     $origin = $("#" + $componentRegistered.data(originData));
//                     lstOrigin.push($origin);
//                     settings = $origin.data(configData);
//                     actions = $componentRegistered.data(submitJQData);

//                     // If there is If None setting
//                     if (!actions && settings.defaultIfNone) {
//                         actions = settings.defaultIfNone;
//                         for (m = 0, m_len = actions.length; m !== m_len; m += 1) {
//                             m_cache = actions[m];
//                             m_cache.origin = $origin.get(0);
//                             m_cache.$selElm = $origin.prev().find("input, select").eq(0);
//                             m_cache.provEvt = m_cache.$selElm.get(0);
//                             m_cache.form = elm;
//                             $origin.trigger(m_cache.action + "." + actionEvent, m_cache);
//                         }
//                         actions = $componentRegistered.data(submitJQData);
//                     }
//                     if (actions) {
//                         for (m = 0, m_len = actions.length; m !== m_len; m += 1) {
//                             m_cache = actions[m];
//                             m_cache.form = elm;
//                             $wbFieldFlow.trigger(m_cache.action + "." + submitEvent, m_cache);
//                             lstFieldFlowPostEvent.push({
//                                 $elm: $wbFieldFlow,
//                                 data: m_cache
//                             });
//                             preventSubmit = preventSubmit || m_cache.preventSubmit;
//                             lastProvEvt = m_cache.provEvt;
//                         }
//                     }
//                 }
//             }

//             // Before to submit, remove jj-down accessesory control
//             if (!preventSubmit) {
//                 $elm.find(basenameInputSelector).removeAttr("name");

//                 // Fix an issue when clicking back with the mouse
//                 i_len = wbRegisteredHidden.length;
//                 for (i = 0; i !== i_len; i += 1) {
//                     $(wbRegisteredHidden[i]).remove();
//                 }
//                 wbRegisteredHidden = [];

//                 // Check the form action, if there is query string, do split it and create hidden field for submission
//                 // The following is may be simply caused by a cross-server security issue generated by the browser itself
//                 var frmAction, idxQueryDelimiter,
//                     queryString, cacheParam, cacheName,
//                     items, params;

//                 frmAction = $elm.attr("action");
//                 if (frmAction) {
//                     idxQueryDelimiter = frmAction.indexOf("?");
//                     if (idxQueryDelimiter > 0) {

//                         // Split the query string and create hidden input.
//                         queryString = frmAction.substring(idxQueryDelimiter + 1);
//                         params = queryString.split("&");

//                         i_len = params.length;
//                         for (i = 0; i !== i_len; i += 1) {
//                             cacheParam = params[i];
//                             cacheName = cacheParam;
//                             if (cacheParam.indexOf("=") > 0) {
//                                 items = cacheParam.split("=", 2);
//                                 cacheName = items[0];
//                                 cacheParam = items[1];
//                             }
//                             $hdnField = $("<input type='hidden' name='" + cacheName + "' value='" + cacheParam + "' />");
//                             $elm.append($hdnField);
//                             wbRegisteredHidden.push($hdnField.get(0));
//                         }
//                         $elm.data(registerHdnFld, wbRegisteredHidden);
//                     }
//                 }
//             }

//             // Add global action
//             i_len = lstOrigin.length;
//             for (i = 0; i !== i_len; i += 1) {
//                 $origin = lstOrigin[i];
//                 settings = $origin.data(configData);
//                 if (settings.action) {
//                     lstFieldFlowPostEvent.push({
//                         $elm: $origin,
//                         data: settings
//                     });
//                 }
//             }

//             i_len = lstFieldFlowPostEvent.length;
//             for (i = 0; i !== i_len; i += 1) {
//                 m_cache = lstFieldFlowPostEvent[i];
//                 m_cache.data.lastProvEvt = lastProvEvt;
//                 m_cache.$elm.trigger(m_cache.data.action + "." + submitedEvent, m_cache.data);
//             }
//             if (preventSubmit) {
//                 event.preventDefault();
//                 if (event.stopPropagation) {
//                     event.stopImmediatePropagation();
//                 } else {
//                     event.cancelBubble = true;
//                 }
//                 return false;
//             }
//         });

//         $document.on("keyup", selectorForm + " select", function(Ev) {

//             // Add the fix for the on change event - https://bugzilla.mozilla.org/show_bug.cgi?id=126379
//             if (navigator.userAgent.indexOf("Gecko") !== -1) {

//                 // prevent tab, alt, ctrl keys from fireing the event
//                 if (Ev.keyCode && (Ev.keyCode === 1 || Ev.keyCode === 9 || Ev.keyCode === 16 || Ev.altKey || Ev.ctrlKey)) {
//                     return true;
//                 }
//                 $(Ev.target).trigger("change");
//                 return true;
//             }
//         });

//         $document.on(fieldflowActionsEvents, selector, function(event, data) {

//             var eventType = event.type;

//             switch (event.namespace) {
//                 case drawEvent:
//                     switch (eventType) {
//                         case componentName:
//                             drwFieldflow(event, data);
//                             break;
//                         case "tblfilter":
//                             drwTblFilter(event, data);
//                             break;
//                     }
//                     break;

//                 case createCtrlEvent:
//                     switch (eventType) {
//                         case "select":
//                             ctrlSelect(event, data);
//                             break;
//                         case "checkbox":
//                             data.typeRadCheck = "checkbox";
//                             ctrlChkbxRad(event, data);
//                             break;
//                         case "radio":
//                             data.typeRadCheck = "radio";
//                             ctrlChkbxRad(event, data);
//                             break;
//                     }
//                     break;

//                 case actionEvent:
//                     switch (eventType) {
//                         case "append":
//                             actAppend(event, data);
//                             break;
//                         case "redir":
//                             pushData($(data.provEvt), submitJQData, data, true);
//                             break;
//                         case "ajax":
//                             actAjax(event, data);
//                             break;
//                         case "tblfilter":
//                             actTblFilter(event, data);
//                             break;
//                         case "toggle":
//                             if (data.live) {
//                                 subToggle(event, data);
//                             } else {
//                                 data.preventSubmit = true;
//                                 pushData($(data.provEvt), submitJQData, data);
//                             }
//                             break;
//                         case "addClass":
//                             if (!data.source || !data.class) {
//                                 return;
//                             }
//                             if (data.live) {
//                                 $(data.source).addClass(data.class);
//                             } else {
//                                 data.preventSubmit = true;
//                                 pushData($(data.provEvt), submitJQData, data);
//                             }
//                             break;
//                         case "removeClass":
//                             if (!data.source || !data.class) {
//                                 return;
//                             }
//                             if (data.live) {
//                                 $(data.source).removeClass(data.class);
//                             } else {
//                                 data.preventSubmit = true;
//                                 pushData($(data.provEvt), submitJQData, data);
//                             }
//                             break;
//                         case "query":
//                             actQuery(event, data);
//                             break;
//                     }
//                     break;

//                 case submitEvent:
//                     switch (eventType) {
//                         case "redir":
//                             subRedir(event, data);
//                             break;
//                         case "ajax":
//                             subAjax(event, data);
//                             break;
//                         case "toggle":
//                             subToggle(event, data);
//                             break;
//                         case "addClass":
//                             $(data.source).addClass(data.class);
//                             break;
//                         case "removeClass":
//                             $(data.source).removeClass(data.class);
//                             break;
//                         case "query":
//                             actQuery(event, data);
//                             break;
//                     }
//                     break;
//             }
//         });

//         // Bind the init event of the plugin
//         $document.on("timerpoke.wb " + initEvent, selector, function(event) {
//             switch (event.type) {
//                 case "timerpoke":
//                 case "wb-init":
//                     init(event);
//                     break;
//             }

//             /*
//              * Since we are working with events we want to ensure that we are being passive about our control,
//              * so returning true allows for events to always continue
//              */
//             return true;
//         });

//         // Add the timer poke to initialize the plugin
//         wb.add(selector);
//     }(jQuery, document, wb);

// })(jQuery);;
/**
 * @file
 * Drupal Bootstrap object.
 */

/**
 * All Drupal Bootstrap JavaScript APIs are contained in this namespace.
 *
 * @namespace
 */
(function (_, $, Drupal, drupalSettings) {
  'use strict';

  var Bootstrap = {
    processedOnce: {},
    settings: drupalSettings.bootstrap || {}
  };

  /**
   * Wraps Drupal.checkPlain() to ensure value passed isn't empty.
   *
   * Encodes special characters in a plain-text string for display as HTML.
   *
   * @param {string} str
   *   The string to be encoded.
   *
   * @return {string}
   *   The encoded string.
   *
   * @ingroup sanitization
   */
  Bootstrap.checkPlain = function (str) {
    return str && Drupal.checkPlain(str) || '';
  };

  /**
   * Creates a jQuery plugin.
   *
   * @param {String} id
   *   A jQuery plugin identifier located in $.fn.
   * @param {Function} plugin
   *   A constructor function used to initialize the for the jQuery plugin.
   * @param {Boolean} [noConflict]
   *   Flag indicating whether or not to create a ".noConflict()" helper method
   *   for the plugin.
   */
  Bootstrap.createPlugin = function (id, plugin, noConflict) {
    // Immediately return if plugin doesn't exist.
    if ($.fn[id] !== void 0) {
      return this.fatal('Specified jQuery plugin identifier already exists: @id. Use Drupal.bootstrap.replacePlugin() instead.', {'@id': id});
    }

    // Immediately return if plugin isn't a function.
    if (typeof plugin !== 'function') {
      return this.fatal('You must provide a constructor function to create a jQuery plugin "@id": @plugin', {'@id': id, '@plugin':  plugin});
    }

    // Add a ".noConflict()" helper method.
    this.pluginNoConflict(id, plugin, noConflict);

    $.fn[id] = plugin;
  };

  /**
   * Diff object properties.
   *
   * @param {...Object} objects
   *   Two or more objects. The first object will be used to return properties
   *   values.
   *
   * @return {Object}
   *   Returns the properties of the first passed object that are not present
   *   in all other passed objects.
   */
  Bootstrap.diffObjects = function (objects) {
    var args = Array.prototype.slice.call(arguments);
    return _.pick(args[0], _.difference.apply(_, _.map(args, function (obj) {
      return Object.keys(obj);
    })));
  };

  /**
   * Map of supported events by regular expression.
   *
   * @type {Object<Event|MouseEvent|KeyboardEvent|TouchEvent,RegExp>}
   */
  Bootstrap.eventMap = {
    Event: /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    MouseEvent: /^(?:click|dblclick|mouse(?:down|enter|leave|up|over|move|out))$/,
    KeyboardEvent: /^(?:key(?:down|press|up))$/,
    TouchEvent: /^(?:touch(?:start|end|move|cancel))$/
  };

  /**
   * Extends a jQuery Plugin.
   *
   * @param {String} id
   *   A jQuery plugin identifier located in $.fn.
   * @param {Function} callback
   *   A constructor function used to initialize the for the jQuery plugin.
   *
   * @return {Function|Boolean}
   *   The jQuery plugin constructor or FALSE if the plugin does not exist.
   */
  Bootstrap.extendPlugin = function (id, callback) {
    // Immediately return if plugin doesn't exist.
    if (typeof $.fn[id] !== 'function') {
      return this.fatal('Specified jQuery plugin identifier does not exist: @id', {'@id':  id});
    }

    // Immediately return if callback isn't a function.
    if (typeof callback !== 'function') {
      return this.fatal('You must provide a callback function to extend the jQuery plugin "@id": @callback', {'@id': id, '@callback':  callback});
    }

    // Determine existing plugin constructor.
    var constructor = $.fn[id] && $.fn[id].Constructor || $.fn[id];
    var plugin = callback.apply(constructor, [this.settings]);
    if (!$.isPlainObject(plugin)) {
      return this.fatal('Returned value from callback is not a plain object that can be used to extend the jQuery plugin "@id": @obj', {'@obj':  plugin});
    }

    this.wrapPluginConstructor(constructor, plugin, true);

    return $.fn[id];
  };

  Bootstrap.superWrapper = function (parent, fn) {
    return function () {
      var previousSuper = this.super;
      this.super = parent;
      var ret = fn.apply(this, arguments);
      if (previousSuper) {
        this.super = previousSuper;
      }
      else {
        delete this.super;
      }
      return ret;
    };
  };

  /**
   * Provide a helper method for displaying when something is went wrong.
   *
   * @param {String} message
   *   The message to display.
   * @param {Object} [args]
   *   An arguments to use in message.
   *
   * @return {Boolean}
   *   Always returns FALSE.
   */
  Bootstrap.fatal = function (message, args) {
    if (this.settings.dev && console.warn) {
      for (var name in args) {
        if (args.hasOwnProperty(name) && typeof args[name] === 'object') {
          args[name] = JSON.stringify(args[name]);
        }
      }
      Drupal.throwError(new Error(Drupal.formatString(message, args)));
    }
    return false;
  };

  /**
   * Intersects object properties.
   *
   * @param {...Object} objects
   *   Two or more objects. The first object will be used to return properties
   *   values.
   *
   * @return {Object}
   *   Returns the properties of first passed object that intersects with all
   *   other passed objects.
   */
  Bootstrap.intersectObjects = function (objects) {
    var args = Array.prototype.slice.call(arguments);
    return _.pick(args[0], _.intersection.apply(_, _.map(args, function (obj) {
      return Object.keys(obj);
    })));
  };

  /**
   * Normalizes an object's values.
   *
   * @param {Object} obj
   *   The object to normalize.
   *
   * @return {Object}
   *   The normalized object.
   */
  Bootstrap.normalizeObject = function (obj) {
    if (!$.isPlainObject(obj)) {
      return obj;
    }

    for (var k in obj) {
      if (typeof obj[k] === 'string') {
        if (obj[k] === 'true') {
          obj[k] = true;
        }
        else if (obj[k] === 'false') {
          obj[k] = false;
        }
        else if (obj[k].match(/^[\d-.]$/)) {
          obj[k] = parseFloat(obj[k]);
        }
      }
      else if ($.isPlainObject(obj[k])) {
        obj[k] = Bootstrap.normalizeObject(obj[k]);
      }
    }

    return obj;
  };

  /**
   * An object based once plugin (similar to jquery.once, but without the DOM).
   *
   * @param {String} id
   *   A unique identifier.
   * @param {Function} callback
   *   The callback to invoke if the identifier has not yet been seen.
   *
   * @return {Bootstrap}
   */
  Bootstrap.once = function (id, callback) {
    // Immediately return if identifier has already been processed.
    if (this.processedOnce[id]) {
      return this;
    }
    callback.call(this, this.settings);
    this.processedOnce[id] = true;
    return this;
  };

  /**
   * Provide jQuery UI like ability to get/set options for Bootstrap plugins.
   *
   * @param {string|object} key
   *   A string value of the option to set, can be dot like to a nested key.
   *   An object of key/value pairs.
   * @param {*} [value]
   *   (optional) A value to set for key.
   *
   * @returns {*}
   *   - Returns nothing if key is an object or both key and value parameters
   *   were provided to set an option.
   *   - Returns the a value for a specific setting if key was provided.
   *   - Returns an object of key/value pairs of all the options if no key or
   *   value parameter was provided.
   *
   * @see https://github.com/jquery/jquery-ui/blob/master/ui/widget.js
   */
  Bootstrap.option = function (key, value) {
    var options = $.isPlainObject(key) ? $.extend({}, key) : {};

    // Get all options (clone so it doesn't reference the internal object).
    if (arguments.length === 0) {
      return $.extend({}, this.options);
    }

    // Get/set single option.
    if (typeof key === "string") {
      // Handle nested keys in dot notation.
      // e.g., "foo.bar" => { foo: { bar: true } }
      var parts = key.split('.');
      key = parts.shift();
      var obj = options;
      if (parts.length) {
        for (var i = 0; i < parts.length - 1; i++) {
          obj[parts[i]] = obj[parts[i]] || {};
          obj = obj[parts[i]];
        }
        key = parts.pop();
      }

      // Get.
      if (arguments.length === 1) {
        return obj[key] === void 0 ? null : obj[key];
      }

      // Set.
      obj[key] = value;
    }

    // Set multiple options.
    $.extend(true, this.options, options);
  };

  /**
   * Adds a ".noConflict()" helper method if needed.
   *
   * @param {String} id
   *   A jQuery plugin identifier located in $.fn.
   * @param {Function} plugin
   * @param {Function} plugin
   *   A constructor function used to initialize the for the jQuery plugin.
   * @param {Boolean} [noConflict]
   *   Flag indicating whether or not to create a ".noConflict()" helper method
   *   for the plugin.
   */
  Bootstrap.pluginNoConflict = function (id, plugin, noConflict) {
    if (plugin.noConflict === void 0 && (noConflict === void 0 || noConflict)) {
      var old = $.fn[id];
      plugin.noConflict = function () {
        $.fn[id] = old;
        return this;
      };
    }
  };

  /**
   * Replaces a Bootstrap jQuery plugin definition.
   *
   * @param {String} id
   *   A jQuery plugin identifier located in $.fn.
   * @param {Function} callback
   *   A callback function that is immediately invoked and must return a
   *   function that will be used as the plugin constructor.
   * @param {Boolean} [noConflict]
   *   Flag indicating whether or not to create a ".noConflict()" helper method
   *   for the plugin.
   */
  Bootstrap.replacePlugin = function (id, callback, noConflict) {
    // Immediately return if plugin doesn't exist.
    if (typeof $.fn[id] !== 'function') {
      return this.fatal('Specified jQuery plugin identifier does not exist: @id', {'@id':  id});
    }

    // Immediately return if callback isn't a function.
    if (typeof callback !== 'function') {
      return this.fatal('You must provide a valid callback function to replace a jQuery plugin: @callback', {'@callback': callback});
    }

    // Determine existing plugin constructor.
    var constructor = $.fn[id] && $.fn[id].Constructor || $.fn[id];
    var plugin = callback.apply(constructor, [this.settings]);

    // Immediately return if plugin isn't a function.
    if (typeof plugin !== 'function') {
      return this.fatal('Returned value from callback is not a usable function to replace a jQuery plugin "@id": @plugin', {'@id': id, '@plugin': plugin});
    }

    this.wrapPluginConstructor(constructor, plugin);

    // Add a ".noConflict()" helper method.
    this.pluginNoConflict(id, plugin, noConflict);

    $.fn[id] = plugin;
  };

  /**
   * Simulates a native event on an element in the browser.
   *
   * Note: This is a fairly complete modern implementation. If things aren't
   * working quite the way you intend (in older browsers), you may wish to use
   * the jQuery.simulate plugin. If it's available, this method will defer to
   * that plugin.
   *
   * @see https://github.com/jquery/jquery-simulate
   *
   * @param {HTMLElement|jQuery} element
   *   A DOM element to dispatch event on. Note: this may be a jQuery object,
   *   however be aware that this will trigger the same event for each element
   *   inside the jQuery collection; use with caution.
   * @param {String|String[]} type
   *   The type(s) of event to simulate.
   * @param {Object} [options]
   *   An object of options to pass to the event constructor. Typically, if
   *   an event is being proxied, you should just pass the original event
   *   object here. This allows, if the browser supports it, to be a truly
   *   simulated event.
   *
   * @return {Boolean}
   *   The return value is false if event is cancelable and at least one of the
   *   event handlers which handled this event called Event.preventDefault().
   *   Otherwise it returns true.
   */
  Bootstrap.simulate = function (element, type, options) {
    // Handle jQuery object wrappers so it triggers on each element.
    var ret = true;
    if (element instanceof $) {
      element.each(function () {
        if (!Bootstrap.simulate(this, type, options)) {
          ret = false;
        }
      });
      return ret;
    }

    if (!(element instanceof HTMLElement)) {
      this.fatal('Passed element must be an instance of HTMLElement, got "@type" instead.', {
        '@type': typeof element,
      });
    }

    // Defer to the jQuery.simulate plugin, if it's available.
    if (typeof $.simulate === 'function') {
      new $.simulate(element, type, options);
      return true;
    }

    var event;
    var ctor;
    var types = [].concat(type);
    for (var i = 0, l = types.length; i < l; i++) {
      type = types[i];
      for (var name in this.eventMap) {
        if (this.eventMap[name].test(type)) {
          ctor = name;
          break;
        }
      }
      if (!ctor) {
        throw new SyntaxError('Only rudimentary HTMLEvents, KeyboardEvents and MouseEvents are supported: ' + type);
      }
      var opts = {bubbles: true, cancelable: true};
      if (ctor === 'KeyboardEvent' || ctor === 'MouseEvent') {
        $.extend(opts, {ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1});
      }
      if (ctor === 'MouseEvent') {
        $.extend(opts, {button: 0, pointerX: 0, pointerY: 0, view: window});
      }
      if (options) {
        $.extend(opts, options);
      }
      if (typeof window[ctor] === 'function') {
        event = new window[ctor](type, opts);
        if (!element.dispatchEvent(event)) {
          ret = false;
        }
      }
      else if (document.createEvent) {
        event = document.createEvent(ctor);
        event.initEvent(type, opts.bubbles, opts.cancelable);
        if (!element.dispatchEvent(event)) {
          ret = false;
        }
      }
      else if (typeof element.fireEvent === 'function') {
        event = $.extend(document.createEventObject(), opts);
        if (!element.fireEvent('on' + type, event)) {
          ret = false;
        }
      }
      else if (typeof element[type]) {
        element[type]();
      }
    }
    return ret;
  };

  /**
   * Strips HTML and returns just text.
   *
   * @param {String|Element|jQuery} html
   *   A string of HTML content, an Element DOM object or a jQuery object.
   *
   * @return {String}
   *   The text without HTML tags.
   *
   * @todo Replace with http://locutus.io/php/strings/strip_tags/
   */
  Bootstrap.stripHtml = function (html) {
    if (html instanceof $) {
      html = html.html();
    }
    else if (html instanceof Element) {
      html = html.innerHTML;
    }
    var tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return (tmp.textContent || tmp.innerText || '').replace(/^[\s\n\t]*|[\s\n\t]*$/, '');
  };

  /**
   * Provide a helper method for displaying when something is unsupported.
   *
   * @param {String} type
   *   The type of unsupported object, e.g. method or option.
   * @param {String} name
   *   The name of the unsupported object.
   * @param {*} [value]
   *   The value of the unsupported object.
   */
  Bootstrap.unsupported = function (type, name, value) {
    Bootstrap.warn('Unsupported by Drupal Bootstrap: (@type) @name -> @value', {
      '@type': type,
      '@name': name,
      '@value': typeof value === 'object' ? JSON.stringify(value) : value
    });
  };

  /**
   * Provide a helper method to display a warning.
   *
   * @param {String} message
   *   The message to display.
   * @param {Object} [args]
   *   Arguments to use as replacements in Drupal.formatString.
   */
  Bootstrap.warn = function (message, args) {
    if (this.settings.dev && console.warn) {
      console.warn(Drupal.formatString(message, args));
    }
  };

  /**
   * Wraps a plugin with common functionality.
   *
   * @param {Function} constructor
   *   A plugin constructor being wrapped.
   * @param {Object|Function} plugin
   *   The plugin being wrapped.
   * @param {Boolean} [extend = false]
   *   Whether to add super extensibility.
   */
  Bootstrap.wrapPluginConstructor = function (constructor, plugin, extend) {
    var proto = constructor.prototype;

    // Add a jQuery UI like option getter/setter method.
    var option = this.option;
    if (proto.option === void(0)) {
      proto.option = function () {
        return option.apply(this, arguments);
      };
    }

    if (extend) {
      // Handle prototype properties separately.
      if (plugin.prototype !== void 0) {
        for (var key in plugin.prototype) {
          if (!plugin.prototype.hasOwnProperty(key)) continue;
          var value = plugin.prototype[key];
          if (typeof value === 'function') {
            proto[key] = this.superWrapper(proto[key] || function () {}, value);
          }
          else {
            proto[key] = $.isPlainObject(value) ? $.extend(true, {}, proto[key], value) : value;
          }
        }
      }
      delete plugin.prototype;

      // Handle static properties.
      for (key in plugin) {
        if (!plugin.hasOwnProperty(key)) continue;
        value = plugin[key];
        if (typeof value === 'function') {
          constructor[key] = this.superWrapper(constructor[key] || function () {}, value);
        }
        else {
          constructor[key] = $.isPlainObject(value) ? $.extend(true, {}, constructor[key], value) : value;
        }
      }
    }
  };

  /**
   * Add Bootstrap to the global Drupal object.
   *
   * @type {Bootstrap}
   */
  Drupal.bootstrap = Drupal.bootstrap || Bootstrap;

})(window._, window.jQuery, window.Drupal, window.drupalSettings);
;
(function ($, _) {

  /**
   * @class Attributes
   *
   * Modifies attributes.
   *
   * @param {Object|Attributes} attributes
   *   An object to initialize attributes with.
   */
  var Attributes = function (attributes) {
    this.data = {};
    this.data['class'] = [];
    this.merge(attributes);
  };

  /**
   * Renders the attributes object as a string to inject into an HTML element.
   *
   * @return {String}
   *   A rendered string suitable for inclusion in HTML markup.
   */
  Attributes.prototype.toString = function () {
    var output = '';
    var name, value;
    var checkPlain = function (str) {
      return str && str.toString().replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;') || '';
    };
    var data = this.getData();
    for (name in data) {
      if (!data.hasOwnProperty(name)) continue;
      value = data[name];
      if (_.isFunction(value)) value = value();
      if (_.isObject(value)) value = _.values(value);
      if (_.isArray(value)) value = value.join(' ');
      output += ' ' + checkPlain(name) + '="' + checkPlain(value) + '"';
    }
    return output;
  };

  /**
   * Renders the Attributes object as a plain object.
   *
   * @return {Object}
   *   A plain object suitable for inclusion in DOM elements.
   */
  Attributes.prototype.toPlainObject = function () {
    var object = {};
    var name, value;
    var data = this.getData();
    for (name in data) {
      if (!data.hasOwnProperty(name)) continue;
      value = data[name];
      if (_.isFunction(value)) value = value();
      if (_.isObject(value)) value = _.values(value);
      if (_.isArray(value)) value = value.join(' ');
      object[name] = value;
    }
    return object;
  };

  /**
   * Add class(es) to the array.
   *
   * @param {string|Array} value
   *   An individual class or an array of classes to add.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.addClass = function (value) {
    var args = Array.prototype.slice.call(arguments);
    this.data['class'] = this.sanitizeClasses(this.data['class'].concat(args));
    return this;
  };

  /**
   * Returns whether the requested attribute exists.
   *
   * @param {string} name
   *   An attribute name to check.
   *
   * @return {boolean}
   *   TRUE or FALSE
   */
  Attributes.prototype.exists = function (name) {
    return this.data[name] !== void(0) && this.data[name] !== null;
  };

  /**
   * Retrieve a specific attribute from the array.
   *
   * @param {string} name
   *   The specific attribute to retrieve.
   * @param {*} defaultValue
   *   (optional) The default value to set if the attribute does not exist.
   *
   * @return {*}
   *   A specific attribute value, passed by reference.
   */
  Attributes.prototype.get = function (name, defaultValue) {
    if (!this.exists(name)) this.data[name] = defaultValue;
    return this.data[name];
  };

  /**
   * Retrieves a cloned copy of the internal attributes data object.
   *
   * @return {Object}
   */
  Attributes.prototype.getData = function () {
    return _.extend({}, this.data);
  };

  /**
   * Retrieves classes from the array.
   *
   * @return {Array}
   *   The classes array.
   */
  Attributes.prototype.getClasses = function () {
    return this.get('class', []);
  };

  /**
   * Indicates whether a class is present in the array.
   *
   * @param {string|Array} className
   *   The class(es) to search for.
   *
   * @return {boolean}
   *   TRUE or FALSE
   */
  Attributes.prototype.hasClass = function (className) {
    className = this.sanitizeClasses(Array.prototype.slice.call(arguments));
    var classes = this.getClasses();
    for (var i = 0, l = className.length; i < l; i++) {
      // If one of the classes fails, immediately return false.
      if (_.indexOf(classes, className[i]) === -1) {
        return false;
      }
    }
    return true;
  };

  /**
   * Merges multiple values into the array.
   *
   * @param {Attributes|Node|jQuery|Object} object
   *   An Attributes object with existing data, a Node DOM element, a jQuery
   *   instance or a plain object where the key is the attribute name and the
   *   value is the attribute value.
   * @param {boolean} [recursive]
   *   Flag determining whether or not to recursively merge key/value pairs.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.merge = function (object, recursive) {
    // Immediately return if there is nothing to merge.
    if (!object) {
      return this;
    }

    // Get attributes from a jQuery element.
    if (object instanceof $) {
      object = object[0];
    }

    // Get attributes from a DOM element.
    if (object instanceof Node) {
      object = Array.prototype.slice.call(object.attributes).reduce(function (attributes, attribute) {
        attributes[attribute.name] = attribute.value;
        return attributes;
      }, {});
    }
    // Get attributes from an Attributes instance.
    else if (object instanceof Attributes) {
      object = object.getData();
    }
    // Otherwise, clone the object.
    else {
      object = _.extend({}, object);
    }

    // By this point, there should be a valid plain object.
    if (!$.isPlainObject(object)) {
      setTimeout(function () {
        throw new Error('Passed object is not supported: ' + object);
      });
      return this;
    }

    // Handle classes separately.
    if (object && object['class'] !== void 0) {
      this.addClass(object['class']);
      delete object['class'];
    }

    if (recursive === void 0 || recursive) {
      this.data = $.extend(true, {}, this.data, object);
    }
    else {
      this.data = $.extend({}, this.data, object);
    }

    return this;
  };

  /**
   * Removes an attribute from the array.
   *
   * @param {string} name
   *   The name of the attribute to remove.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.remove = function (name) {
    if (this.exists(name)) delete this.data[name];
    return this;
  };

  /**
   * Removes a class from the attributes array.
   *
   * @param {...string|Array} className
   *   An individual class or an array of classes to remove.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.removeClass = function (className) {
    var remove = this.sanitizeClasses(Array.prototype.slice.apply(arguments));
    this.data['class'] = _.without(this.getClasses(), remove);
    return this;
  };

  /**
   * Replaces a class in the attributes array.
   *
   * @param {string} oldValue
   *   The old class to remove.
   * @param {string} newValue
   *   The new class. It will not be added if the old class does not exist.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.replaceClass = function (oldValue, newValue) {
    var classes = this.getClasses();
    var i = _.indexOf(this.sanitizeClasses(oldValue), classes);
    if (i >= 0) {
      classes[i] = newValue;
      this.set('class', classes);
    }
    return this;
  };

  /**
   * Ensures classes are flattened into a single is an array and sanitized.
   *
   * @param {...String|Array} classes
   *   The class or classes to sanitize.
   *
   * @return {Array}
   *   A sanitized array of classes.
   */
  Attributes.prototype.sanitizeClasses = function (classes) {
    return _.chain(Array.prototype.slice.call(arguments))
      // Flatten in case there's a mix of strings and arrays.
      .flatten()

      // Split classes that may have been added with a space as a separator.
      .map(function (string) {
        return string.split(' ');
      })

      // Flatten again since it was just split into arrays.
      .flatten()

      // Filter out empty items.
      .filter()

      // Clean the class to ensure it's a valid class name.
      .map(function (value) {
        return Attributes.cleanClass(value);
      })

      // Ensure classes are unique.
      .uniq()

      // Retrieve the final value.
      .value();
  };

  /**
   * Sets an attribute on the array.
   *
   * @param {string} name
   *   The name of the attribute to set.
   * @param {*} value
   *   The value of the attribute to set.
   *
   * @return {Attributes}
   *
   * @chainable
   */
  Attributes.prototype.set = function (name, value) {
    var obj = $.isPlainObject(name) ? name : {};
    if (typeof name === 'string') {
      obj[name] = value;
    }
    return this.merge(obj);
  };

  /**
   * Prepares a string for use as a CSS identifier (element, class, or ID name).
   *
   * Note: this is essentially a direct copy from
   * \Drupal\Component\Utility\Html::cleanCssIdentifier
   *
   * @param {string} identifier
   *   The identifier to clean.
   * @param {Object} [filter]
   *   An object of string replacements to use on the identifier.
   *
   * @return {string}
   *   The cleaned identifier.
   */
  Attributes.cleanClass = function (identifier, filter) {
    filter = filter || {
      ' ': '-',
      '_': '-',
      '/': '-',
      '[': '-',
      ']': ''
    };

    identifier = identifier.toLowerCase();

    if (filter['__'] === void 0) {
      identifier = identifier.replace('__', '#DOUBLE_UNDERSCORE#');
    }

    identifier = identifier.replace(Object.keys(filter), Object.keys(filter).map(function(key) { return filter[key]; }));

    if (filter['__'] === void 0) {
      identifier = identifier.replace('#DOUBLE_UNDERSCORE#', '__');
    }

    identifier = identifier.replace(/[^\u002D\u0030-\u0039\u0041-\u005A\u005F\u0061-\u007A\u00A1-\uFFFF]/g, '');
    identifier = identifier.replace(['/^[0-9]/', '/^(-[0-9])|^(--)/'], ['_', '__']);

    return identifier;
  };

  /**
   * Creates an Attributes instance.
   *
   * @param {object|Attributes} [attributes]
   *   An object to initialize attributes with.
   *
   * @return {Attributes}
   *   An Attributes instance.
   *
   * @constructor
   */
  Attributes.create = function (attributes) {
    return new Attributes(attributes);
  };

  window.Attributes = Attributes;

})(window.jQuery, window._);
;
/**
 * @file
 * Theme hooks for the Drupal Bootstrap base theme.
 */
(function ($, Drupal, Bootstrap, Attributes) {

  /**
   * Fallback for theming an icon if the Icon API module is not installed.
   */
  if (!Drupal.icon) Drupal.icon = { bundles: {} };
  if (!Drupal.theme.icon || Drupal.theme.prototype.icon) {
    $.extend(Drupal.theme, /** @lends Drupal.theme */ {
      /**
       * Renders an icon.
       *
       * @param {string} bundle
       *   The bundle which the icon belongs to.
       * @param {string} icon
       *   The name of the icon to render.
       * @param {object|Attributes} [attributes]
       *   An object of attributes to also apply to the icon.
       *
       * @returns {string}
       */
      icon: function (bundle, icon, attributes) {
        if (!Drupal.icon.bundles[bundle]) return '';
        attributes = Attributes.create(attributes).addClass('icon').set('aria-hidden', 'true');
        icon = Drupal.icon.bundles[bundle](icon, attributes);
        return '<span' + attributes + '></span>';
      }
    });
  }

  /**
   * Callback for modifying an icon in the "bootstrap" icon bundle.
   *
   * @param {string} icon
   *   The icon being rendered.
   * @param {Attributes} attributes
   *   Attributes object for the icon.
   */
  Drupal.icon.bundles.bootstrap = function (icon, attributes) {
    attributes.addClass(['glyphicon', 'glyphicon-' + icon]);
  };

  /**
   * Add necessary theming hooks.
   */
  $.extend(Drupal.theme, /** @lends Drupal.theme */ {

    /**
     * Renders a Bootstrap AJAX glyphicon throbber.
     *
     * @returns {string}
     */
    ajaxThrobber: function () {
      return Drupal.theme('bootstrapIcon', 'refresh', {'class': ['ajax-throbber', 'glyphicon-spin'] });
    },

    /**
     * Renders a button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button. If it contains one of:
     *   - value: The label of the button.
     *   - context: The context type of Bootstrap button, can be one of:
     *     - default
     *     - primary
     *     - success
     *     - info
     *     - warning
     *     - danger
     *     - link
     *
     * @returns {string}
     */
    button: function (attributes) {
      attributes = Attributes.create(attributes).addClass('btn');
      var context = attributes.get('context', 'default');
      var label = attributes.get('value', '');
      attributes.remove('context').remove('value');
      if (!attributes.hasClass(['btn-default', 'btn-primary', 'btn-success', 'btn-info', 'btn-warning', 'btn-danger', 'btn-link'])) {
        attributes.addClass('btn-' + Bootstrap.checkPlain(context));
      }

      // Attempt to, intelligently, provide a default button "type".
      if (!attributes.exists('type')) {
        attributes.set('type', attributes.hasClass('form-submit') ? 'submit' : 'button');
      }

      return '<button' + attributes + '>' + label + '</button>';
    },

    /**
     * Alias for "button" theme hook.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    btn: function (attributes) {
      return Drupal.theme('button', attributes);
    },

    /**
     * Renders a button block element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-block': function (attributes) {
      return Drupal.theme('button', Attributes.create(attributes).addClass('btn-block'));
    },

    /**
     * Renders a large button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-lg': function (attributes) {
      return Drupal.theme('button', Attributes.create(attributes).addClass('btn-lg'));
    },

    /**
     * Renders a small button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-sm': function (attributes) {
      return Drupal.theme('button', Attributes.create(attributes).addClass('btn-sm'));
    },

    /**
     * Renders an extra small button element.
     *
     * @param {object|Attributes} attributes
     *   An object of attributes to apply to the button.
     *
     * @see Drupal.theme.button()
     *
     * @returns {string}
     */
    'btn-xs': function (attributes) {
      return Drupal.theme('button', Attributes.create(attributes).addClass('btn-xs'));
    },

    /**
     * Renders a glyphicon.
     *
     * @param {string} name
     *   The name of the glyphicon.
     * @param {object|Attributes} [attributes]
     *   An object of attributes to apply to the icon.
     *
     * @returns {string}
     */
    bootstrapIcon: function (name, attributes) {
      return Drupal.theme('icon', 'bootstrap', name, attributes);
    }

  });

})(window.jQuery, window.Drupal, window.Drupal.bootstrap, window.Attributes);
;