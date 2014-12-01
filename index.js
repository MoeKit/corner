var corner = function(option) {
	return this.init(option);
};
var tpl = require('./corner.tpl');
var $ = require('jquery');
var position = require('position');

require('./corner.css');

var cid = 0;


var cornerConfig = function(x) {
	return [
		[{
			element: '.corner-top',
			x: 0,
			y: 0
		}, {
			element: '#target',
			x: 'left-' + x + 'px',
			y: 'top-' + x + 'px'
		}],
		[{
			element: '.corner-right',
			x: 'right',
			y: 'top'
		}, {
			element: '#target',
			x: 'right+' + x + 'px',
			y: 'top-' + x + 'px'
		}],
		[{
			element: '.corner-bottom',
			x: 'right',
			y: 'bottom'
		}, {
			element: '#target',
			x: 'right+' + x + 'px',
			y: 'bottom+' + x + 'px'
		}],
		[{
			element: '.corner-left',
			x: 'left',
			y: 'bottom'
		}, {
			element: '#target',
			x: 'left-' + x + 'px',
			y: 'bottom+' + x + 'px'
		}]
	];

};

corner.prototype.init = function(option) {
	this.$target = $(option.target);
	this.appendCorners();
	this._setCid(++cid);
	if (option.color) {
		this.setColor(option.color);
	}
	if (option.lineWidth) {
		this.setLineWidth(option.lineWidth);
	}
	if (option.width) {
		this.setWidth(option.width);
	}
	this.o = option;
	this._setPosition();
	this.bind();
	this.$corners.show();
	return this;
};

// append corners 
corner.prototype.appendCorners = function() {
	this.$corners = $(tpl).hide().appendTo('body');
};

// 
corner.prototype._setCid = function(cid) {
	this.cid = cid;
	this.$corners.addClass('mk-corner-' + cid);
};

// set position
corner.prototype._setPosition = function(x) {
	var config = $.extend([], cornerConfig(x));
	for (var i = 0; i < config.length; i++) {
		config[i][0].element = config[i][0].element + '.mk-corner-' + this.cid;
		config[i][1].element = this.$target;
		position.pin(config[i][0], config[i][1]);
	}
};

// set color
corner.prototype.setColor = function(color) {
	this.$corners.css('border-color', color);
	return this;
};

// set line width
corner.prototype.setLineWidth = function(width) {
	this.$corners.css('border-width', width+'px');
	return this;
};

// set line width
corner.prototype.setWidth = function(width) {
	this.$corners.css('width', width+'px');
	this.$corners.css('height', width+'px');
	return this;
};

// bind mouse events
corner.prototype.bind = function() {
	var distance = this.o.distance || 10;
	var _this = this;
	if (this.o.static === true) {
		_this.$corners.addClass('corner-show');
		_this._setPosition(distance);
	} else {
		_this._setPosition(0);
		this.$target.mouseenter(function() {
			_this.$corners.addClass('corner-show');
			_this._setPosition(distance);
		}).mouseleave(function() {
			_this.$corners.removeClass('corner-show')
			_this._setPosition(0);
		});
	}

};

module.exports = corner;