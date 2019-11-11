var isDown = true;
var decLiteral = 0.0;
var color;
(function(color) {
    color[(color['red'] = 0)] = 'red';
    color[(color['blue'] = 1)] = 'blue';
    color[(color['white'] = 2)] = 'white';
})(color || (color = {}));
console.log(color);
