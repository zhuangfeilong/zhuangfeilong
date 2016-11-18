var ZhuangFeiLong = {
  /**
   * _.chunk(array, [size=1]) ： Creates an array of elements split into groups the length of `size`.
   * If `array` can't be split evenly, the final chunk will be the remaining
   * 将一个数组拆开成多个等长的数组，最后多余的部分放在一个数组里。
   * @param {Array} array The array to process.
   * @param {number} [size=1] The length of each chunk
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the new array of chunks.
   * @example示例
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



  /**
   * _.compact(array) : 创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
   *
   * @param 参数
   * array (Array): 待处理的数组。
   *
   * @returns 返回值
   * (Array): 返回过滤掉假值的新数组。
   * 
   * @example 示例
   * _.compact([0, 1, false, 2, '', 3]);
   *  // => [1, 2, 3]
   *
   */
  compact: function(array) {
    var newarr = []
    for (var i = 0; i < array.length; i++) {
      if (Boolean(array[i]) !== false) {
        newarr.push(array[i])
      }
    }
    return newarr
  },



  /**
   * _.concat(array, [values]) : 创建一个新数组，将array与任何数组 或 值连接在一起。
   * 
   * @param 参数：array (Array): 待处理的数组.
   *      [values] (...*): 连接的值。
   * @returns 返回值：(Array): 返回连接后的新数组。
   * 
   * @example 示例
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

  concat: function(array, ann) {
    var newArray = []
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] == 'object') {
        for (var j = 0; j < arguments[i].length; j++) {
          newArray.push(arguments[i][j])
        }
      } else {
        newArray.push(arguments[i])
      }
    }
    return newArray
  },



  /**
   * _.difference(array, [values]) : 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
   * 结果值的顺序是由第一个数组中的顺序确定。
   * 注意: 不像 _.pullAll，这个方法会返回一个新数组。 
   
   * Creates an array of `array` values not included in the other given arrays
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons. The order and references of result values are
   * determined by the first array.
   *
   * **Note:** Unlike `_.pullAll`, this method returns a new array.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param 参数：array (Array): 要检查的数组。
   * @param       [values] (...Array): 排除的值。
   * @param       {Array} array The array to inspect.
   * @param       {...Array} [values] The values to exclude.
   * @returns 返回：{Array} Returns the new array of filtered values.
   * @example 示例
   *
   * _.difference([2, 1], [2, 3]);
   * => [1]
   * 
   */

  difference: function(array, annarr) {

    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < annarr.length; j++) {
        if (array[i] == annarr[j]) {
          array.splice(i, 1)
        }
      }
    }
    return array
  },



  /**
   * _.drop(array, [n=1]) : Creates a slice of `array` with `n` elements dropped from the beginning.
   * 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
   * 
   * @category Array
   * @param 参数：array (Array): 要查询的数组。
   *              [n=1] (number): 要去除的元素个数。
   *              {Array} array The array to query.
   * @param       {number} [n=1] The number of elements to drop.
   * @param-      {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns 返回：(Array): 返回array剩余切片。   
   *              {Array} Returns the slice of `array`.
   * @example 示例
   *
   * _.drop([1, 2, 3]);
   * // => [2, 3]
   *
   * _.drop([1, 2, 3], 2);
   * // => [3]
   *
   * _.drop([1, 2, 3], 5);
   * // => []
   *
   * _.drop([1, 2, 3], 0);
   * // => [1, 2, 3]
   */

  drop: function(arrdrop, n) {
    if (n === undefined) {
      n = 1
    }
    for (var i = 0; i < n; i++) {
      arrdrop.shift(arrdrop[i])
    }
    return arrdrop
  },



  /**
   * _.dropRight(array, [n=1]) : 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
   * Creates a slice of `array` with `n` elements dropped from the end.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param 参数 ： array (Array): 要查询的数组。
   * @param [n=1] (number): 要去除的元素个数。
   * @param {Array} array The array to query.
   * @param {number} [n=1] The number of elements to drop.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns 返回值 ：(Array): 返回array剩余切片。
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * _.dropRight([1, 2, 3]);
   * // => [1, 2]
   *
   * _.dropRight([1, 2, 3], 2);
   * // => [1]
   *
   * _.dropRight([1, 2, 3], 5);
   * // => []
   *
   * _.dropRight([1, 2, 3], 0);
   * // => [1, 2, 3]
   */

  dropright: function(arrayRight, n) {
    if (n === undefined) {
      n = 1
    }
    for (var i = arrayRight.length - n; i < arrayRight.length; i++) {
      arrayRight.pop(arrayRight[i])
    }
    return arrayRight
  },


  /**
   * Fills elements of `array` with `value` from `start` up to, but not
   * including, `end`.
   *
   * **Note:** This method mutates `array`.
   *
   * @static
   * @memberOf _
   * @since 3.2.0
   * @category Array
   * @param  参数 array (Array): 要填充改变的数组。
   * @param       value (*): 填充给 array 的值。
   * @param       [start=0] (number): 开始位置（默认0）。
   * @param       [end=array.length] (number):结束位置（默认array.length）。
   * @param       {Array} array The array to fill.
   * @param       {*} value The value to fill `array` with.
   * @param       {number} [start=0] The start position.
   * @param       {number} [end=array.length] The end position.
   * @returns 返回 (Array): 返回 array。
   * @returns     {Array} Returns `array`.
   * @example 示例
   *
   * var array = [1, 2, 3];
   *
   * _.fill(array, 'a');
   * console.log(array);
   * // => ['a', 'a', 'a']
   *
   * _.fill(Array(3), 2);
   * // => [2, 2, 2]
   *
   * _.fill([4, 6, 8, 10], '*', 1, 3);
   * // => [4, '*', '*', 10]
   */
  fill: function(array, value, a, b) {


  },


  /**
   * _.map(collection, [iteratee=_.identity])：创建一个数组， value（值） 是 iteratee（迭代函数）遍历 collection（集合）中的每个元素后返回的结果。 iteratee（迭代函数）调用3个参数： 
   * (value, index|key, collection). 
   * 
   *
   * **Note:**
   *
   * @static
   * @memberOf _
   * @since 3.2.0
   * @category Array
   * @param  参数 collection (Array|Object): 用来迭代的集合。
   * @param       [iteratee=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。
   * @param  Arguments : collection (Array|Object): The collection to iterate over.     
   * @param       [iteratee=_.identity] (Function): The function invoked per iteration.
   * @param       
   * @returns 返回 (Array): 返回新的映射后数组。
   * @returns Returns : (Array): Returns the new mapped array.
   * @example 示例
   *
   * function square(n) {
   * return n * n;
   * }
   * _.map([4, 8], square); 
   * // => [16, 64]
   *
   * _.map({ 'a': 4, 'b': 8 }, square);
   * // => [16, 64] (iteration order is not guaranteed)
   *
   * var users = [
   *  { 'user': 'barney' }, 
   *  { 'user': 'fred' }
   * ];
   *  
   * // The `_.property` iteratee shorthand.
   * _.map(users, 'user'); 
   * // => ['barney', 'fred'] 
   *  
   */
  map: function(arrayMap, fn) {
    var result = []
    for (var i = 0; i < arrayMap.length; i++) {
      result.push(fn(arrayMap[i], i, arrayMap))

    }
    return result
  },

  // dropright: function(arrayRight, n) {
  //   if (n === undefined) {
  //     n = 1
  //   }
  //   for (var i = arrayRight.length - n; i < arrayRight.length; i++) {
  //     arrayRight.pop(arrayRight[i])
  //   }
  //   return arrayRight
  // },
  /**
   * _.some(collection, [predicate=_.identity]) : 遍历 collection（集合）元素，返回 predicate（断言函数）返回真值
   *  的所有元素的数组。 predicate（断言函数）调用三个参数：(value, index|key, collection)。 
   * Iterates over elements of `collection`, returning an array of all elements
   * `predicate` returns truthy for. The predicate is invoked with three
   * arguments: (value, index|key, collection).
   *
   * **Note:** Unlike `_.remove`, this method returns a new array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param 参数：collection (Array|Object): 一个用来迭代的集合。
   * @param       [predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。
   * @param       {Array|Object} collection The collection to iterate over.
   * @param       {Function} [predicate=_.identity] The function invoked per iteration.
   * @returns 返回 ：（Array): 返回一个新的过滤后的数组。
   * @returns         {Array} Returns the new filtered array.
   * @see _.reject
   * @example  示例
   *
   * var users = [
   * { 'user': 'barney', 'age': 36, 'active': true },
   * { 'user': 'fred', 'age': 40, 'active': false }
   * ];
   ** _.filter(users, function(o) { return !o.active; });
   * // => objects for ['fred']
   *
   * // The `_.matches` iteratee shorthand.
   * _.filter(users, { 'age': 36, 'active': true });
   * // => objects for ['barney']
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.filter(users, ['active', false]);
   * // => objects for ['fred']
   *
   * // The `_.property` iteratee shorthand.
   * _.filter(users, 'active');
   * // => objects for ['barney']
   */
  filter: function(collection, predicate) {
    var result = []
    for (var i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        result.push(collection[i])
      }
    }
    return result
  },


  /**
   * _.partition(collection, [predicate=_.identity]) ：创建一个分成两组的元素数组，第一组包含predicate（断言函数）
   * 返回为 truthy（真值）的元素，第二组包含predicate（断言函数）返回为 falsey（假值）的元素。predicate 调用1个参数：(value)。
   * 
   * Creates an array of elements split into two groups, the first of which
   * contains elements `predicate` returns truthy for, the second of which
   * contains elements `predicate` returns falsey for. The predicate is
   * invoked with one argument: (value).
   * 
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Collection
   * @param 参数：collection (Array|Object): 用来迭代的集合。
   * @param       [predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。
   * @param
   * @param       {Array|Object} collection The collection to iterate over.
   * @param       {Function} [predicate=_.identity] The function invoked per iteration.
   * @returns  返回： (Array): 返回元素分组后的数组。
   * @returns         {Array} Returns the array of grouped elements.
   * @example 示例
   *
   * var users = [
   * { 'user': 'barney', 'age': 36, 'active': false },
   * { 'user': 'fred', 'age': 40, 'active': true },
   * { 'user': 'pebbles', 'age': 1, 'active': false }
   * ];
   *
   * _.partition(users, function(o) { return o.active; });
   * // => objects for [['fred'], ['barney', 'pebbles']]
   *
   * // The `_.matches` iteratee shorthand.
   * _.partition(users, { 'age': 1, 'active': false });
   * // => objects for [['pebbles'], ['barney', 'fred']]
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.partition(users, ['active', false]);
   * // => objects for [['barney', 'pebbles'], ['fred']]
   *
   * // The `_.property` iteratee shorthand.
   * _.partition(users, 'active');
   * // => objects for [['fred'], ['barney', 'pebbles']]
   */

  partition: function(collection, fn) {
    var result = [
      [],
      []
    ]
    for (var i = 0; i < collection.length; i++) {
      if (fn(collection[i], i, collection)) {
        result[0].push(collection[i])
      } else {
        result[1].push(collection[i])
      }
    }
    return result
  },



  reduce: function(arrayX, fun, initial) {
    var start = 0
    if (initial == undefined) {
      initial = arrayX[0]
      start = 1
    }
    var result = initial
    for (var i = start; i < arrayX.length; i++) {
      result = fun(result, arrayX[i])
    }
    return result
  },



  every: function(collection, predicate) {
    if (collection = []) {
      return true
    }
    for (var i = 0; i < collection.length; i++) {
      if (!predicate(collection[i])) {
        return false
      }
    }
    return true
  },

  some: function(collection, predicate) {
    for (var i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return true
      }
    }
    return false
  },



}