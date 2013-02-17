
/**
 * dependencies.
 */

var merge = require('merge');

/**
 * east
 */

exports.e = function(_, o){
  return {
    width: this.w + o.x
  };
};

/**
 * west
 */

exports.w = function(_, o){
  return {
    left: this.left + o.x,
    width: this.w - o.x
  };
};

/**
 * north
 */

exports.n = function(_, o){
  return {
    top: this.top + o.y,
    height: this.h - o.y
  };
};

/**
 * south
 */

exports.s = function(_, o){
  return {
    height: this.h + o.y
  };
};

/**
 * south-east
 */

exports.se = function(){
  return merge(
    exports.s.apply(this, arguments),
    exports.e.apply(this, arguments)
  );
};

/**
 * south-west
 */

exports.sw = function(){
  return merge(
    exports.s.apply(this, arguments),
    exports.w.apply(this, arguments)
  );
};

/**
 * north-east
 */

exports.ne = function(){
  return merge(
    exports.n.apply(this, arguments),
    exports.e.apply(this, arguments)
  );
};

/**
 * north-west
 */

exports.nw = function(){
  return merge(
    exports.n.apply(this, arguments),
    exports.w.apply(this, arguments)
  );
};