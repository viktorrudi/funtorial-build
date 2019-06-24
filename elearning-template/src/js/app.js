// html
import '../../index.html'
import '../../contact.html'
import '../../discounts.html'
import '../../exercise-end.html'
import '../../register.html'
import '../../statistics.html'
import '../../text-pages.html'
import '../../topic-selection-chosen.html'
import '../../topic-selection.html'

// scss
import '../scss/main.scss'

// js
import 'bootstrap'
import 'bootstrap-select'

// Activate popper (for popovers) globally
$('[data-toggle="popover"]').popover()

// load Nette forms validation
Nette.initOnLoad()

import 'nette.ajax.js'
$(function() {
  $.nette.init()
})

$('.selectpicker').selectpicker({
  liveSearch: true,
  size: 6,
})

import 'mediaelement/full'
//import 'mediaelement/build/lang/cs';

$('video, audio').mediaelementplayer()
$(document).ajaxComplete(function() {
  if ($('audio').length) {
    $('video, audio').mediaelementplayer()
  }
})

import './question.js'
import './discounts.js'
import './finishedResults'
