var corner;
var tpl = require('./corner.tpl');
var $ = require('jquery');
var position = require('position');
$(tpl).appendTo('body');
require('./corner.css');

var cid = 0;

function setOffset(x) {
	position.pin({
		element: '.corner-top',
		x: 0,
		y: 0
	}, {
		element: '#target',
		x: 'left-' + x + 'px',
		y: 'top-' + x + 'px'
	});

	position.pin({
		element: '.corner-right',
		x: 'right',
		y: 'top'
	}, {
		element: '#target',
		x: 'right+' + x + 'px',
		y: 'top-' + x + 'px'
	});

	position.pin({
		element: '.corner-bottom',
		x: 'right',
		y: 'bottom'
	}, {
		element: '#target',
		x: 'right+' + x + 'px',
		y: 'bottom+' + x + 'px'
	});

	position.pin({
		element: '.corner-left',
		x: 'left',
		y: 'bottom'
	}, {
		element: '#target',
		x: 'left-' + x + 'px',
		y: 'bottom+' + x + 'px'
	});
}

setOffset(0);
$('#target').mouseenter(function() {
	$('.corner').addClass('corner-show');
	function animate(){
		setTimeout(function(){
			setOffset(5);
		},0);
		setTimeout(function(){
			setOffset(8);
		},500);
	}
	setOffset(8);
	setInterval(function(){
		//animate();
	},1000);
}).mouseleave(function() {
	$('.corner').removeClass('corner-show')
	setOffset(0);
});



console.log(tpl);
module.exports = corner;