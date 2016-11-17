var ZhuangFeilong = {
  /**
   * Creates an array of elements split into groups the length of `size`.
   * If `array` can't be split evenly, the final chunk will be the remaining
   * 将一个数组拆开成多个等长的数组，最后多余的部分放在一个数组里。
   *
   * 示例@example
   * _.chunk(['a', 'b', 'c', 'd'], 2);
   * // => [['a', 'b'], ['c', 'd']]
   *
   * _.chunk(['a', 'b', 'c', 'd'], 3);
   * // => [['a', 'b', 'c'], ['d']]
   */
  chunk: function(arr, n) {
    var x = Math.ceil(arr.length / n)
    var result = new Array(x);
    for (var i = 0; i < x; i++) {
      result[i] = []
    }
    for (var j = 0; j < arr.length; j++) {
      result[parseInt(j / n)][j % n] = arr[j]
    }
    return result
  },
  // chunk2: function() {

  //   }
  /**
   * _.compact(array) : 创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
   *
   * 参数
   * array (Array): 待处理的数组。
   *
   * 返回值
   * (Array): 返回过滤掉假值的新数组。
   * 
   * 示例@example
   * _.compact([0, 1, false, 2, '', 3]);
   *  // => [1, 2, 3]
   *
   */
  compact: function(array) {
    var result = []
    for (var i = 0; i <= array.length; i++) {
      if (Boolean(array[i]) !== false) {
        return .push(array[i])
      }
    }
    return result[]
  },

  /**
   * _.concat(array, [values]) : 创建一个新数组，将array与任何数组 或 值连接在一起。
   * 
   * 参数：array (Array): 待处理的数组.
   *      [values] (...*): 连接的值。
   * 返回值：(Array): 返回连接后的新数组。
   * 
   * 示例@example
   * var array = [1];
   * var other = _.concat(array, 2, [3], [[4]]);
   * 
   * console.log(other);
   * // => [1, 2, 3, [4]]
   * 
   * console.log(array);
   * // => [1]
   * 
   */

  concat: function(array) {
    var array = []
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] == 'object') {
        for (var j = 0; j < arguments[i]; j++) {
          array.push(arguments[i][j])
        }
      } else {
        array.push(arguments[i])
      }
    }
    return array
  },



  take: function() {

  }



}