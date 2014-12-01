# Demo

---

## 颜色

<div id="target" style="width:150px;height:150px;background:gray;"></div>

````javascript
seajs.use('index', function(Corner) {
	new Corner({
	target:'#target',
	color:'green'
	});
});
````

## 距离

<div id="target2" style="width:100px;height:150px;background:gray;"></div>

````javascript
seajs.use('index', function(Corner) {
	new Corner({
	target:'#target2',
	distance:5
	});
});
````

## 直接显示

<div id="target3" style="width:150px;height:100px;background:gray;"></div>

````javascript
seajs.use('index', function(Corner) {
	new Corner({
	target:'#target3',
	distance:5,
	static:true
	});
});
````

## 线条宽度

<div id="target4" style="width:150px;height:100px;background:gray;"></div>

````javascript
seajs.use('index', function(Corner) {
	new Corner({
	target:'#target4',
	distance:5,
	static:true,
	lineWidth:1
	});
});
````

## 线条长

<div id="target5" style="width:150px;height:100px;background:gray;"></div>

````javascript
seajs.use('index', function(Corner) {
	var c = new Corner({
	target:'#target5',
	distance:5,
	static:true,
	lineWidth:1,
	width:30
	});
});
````

