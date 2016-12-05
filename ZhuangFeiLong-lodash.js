var ZhuangFeiLong= {
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

	dropRight: function(arrayDropRight, n) {
		if (n == undefined) {
			n = 1
		}
		for (var i = 0; i < n; i++) {
			arrayDropRight.pop()
		}
		return arrayDropRight
	},


	/**
	 * _.fill(array, value, [start=0], [end=array.length]): 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
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
	fill: function(arrayF, value, x, y) {
		if (x == undefined) {
			x = 0
		}
		if (y == undefined) {
			y = arrayF.length
		}
		for (var i = x; i < y; i++) {
			arrayF[i] = value
		}
		return arrayF
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

	/**
	 * _.reduce(collection, [iteratee=_.identity], [accumulator])
	 * 压缩 collection（集合）为一个值，通过 iteratee（迭代函数）遍历 collection（集合）中的每个元素
	 * 每次返回的值会作为下一次迭代使用(愚人码头注：作为iteratee（迭代函数）的第一个参数使用)。
	 * 如果没有提供 accumulator，则 collection（集合）中的第一个元素作为初始值。
	 * 
	 */

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

	/**
	 * _.every(collection, [predicate=_.identity])
	 * 通过 predicate（断言函数） 检查 collection（集合）中的 所有 元素是否都返回真值。
	 * 一旦 predicate（断言函数） 返回假值，迭代就马上停止。predicate（断言函数）调用三个参数：
	 *  (value, index|key, collection)。 
	 */
	every: function(collection, predicate) {
		for (var i = 0; i < collection.length; i++) {
			if (!predicate(collection[i])) {
				return false
			}
		}
		return true
	},
	/**
	 * _.some(collection, [predicate=_.identity])
	 * 通过 predicate（断言函数）检查collection（集合）中的元素是否存在 任意 truthy（真值）的元素，
	 * 一旦 predicate（断言函数）返回 truthy（真值），遍历就停止。 predicate 调用3个参数：(value, index|key, collection)。
	 */
	some: function(collection, predicate) {
		for (var i = 0; i < collection.length; i++) {
			if (predicate(collection[i])) {
				return true
			}
		}
		return false
	},

	/**
	 * _.reject(collection, [predicate=_.identity])
	 * _.filter的反向方法;此方法 返回 predicate（断言函数） 不 返回 truthy（真值）的collection（集合）元素（愚人码头注释：非真）。
	 */
	reject: function(collection, predicate) {
		var newArray = []
		for (var i = 0; i < collection.length; i++) {
			if (!predicate(collection[i], i, collection)) {
				newArray.push(collection[i])
			}
		}
		return newArray
	},


	/**
	 * _.flatten(array)
	 * 减少一级array嵌套深度。
	 */
	flatten: function(arrayFlat) {
		var newFlat = []
		for (var i = 0; i < arrayFlat.length; i++) {
			if (Array.isArray(arrayFlat[i])) {
				newFlat = newFlat.concat(arrayFlat[i])
			} else {
				newFlat.push(arrayFlat[i])
			}
		}
		return newFlat
	},
	/**
	 * _.flattenDeep(array)
	 * 将array递归为一维数组。
	 */


	flattenDeep: function(arrayFD) {
		var newFlat = []
		var w = false
		for (var i = 0; i < arrayFD; i++) {
			if ((arrayFD[i].length === undefined) && (typeof(arrayFD[i]) !== 'object')) {
				newFlat.push(arrayFD[i])
			} else {
				for (var j = 0; j < arrayFD[i].length; j++) {
					newFlat.push(arrayFD[i][j])
					w = true
				}
			}
		}
		if (w) {
			return flattenDeep(arrayFD)
		}
		return newFlat
	},

	/**
	 * _.last(array)
	 * 获取array中的最后一个元素。
	 */
	last: function(array) {
		var last = array[array.length - 1]
		return last
	},


	keys: function(object) {
		var result = []
		for (var key in object) {
			result.push(key)
		}
		return result
	},

	size: function(array) {
		if (Array.isArray(array)) {
			return array.length
		}
		var l = 0
		for (var key in array) {
			l++
		}
		return l
	},


	values: function(object) {
		var result = []
		for (var key in object) {
			result.push(object[key])
		}
		return result
	},



	/**
	 * _.every(collection,[predicate=_.identity])
	 * 通过 predicate（断言函数） 检查 collection（集合）中的 所有 元素是否都返回真值。
	 * 一旦 predicate（断言函数） 返回假值，迭代就马上停止。
	 * predicate（断言函数）调用三个参数： (value, index|key, collection)。 
	 */
	every2: function(collection, predicate) {
		if (!predicate) {
			predicate = identity
		}
		if (Array.isArray(collection)) {
			for (var i = 0; i < collection.length; i++) {
				if (!predicate(collection[i]), i, collection) {
					return false
				}
			}
			return true
		} else {
			for (var key in collection) {
				if (!predicate(collection[key], key, collection)) {
					return false
				}
			}
			return true
		}
	},
	/**
	 * _.fromPairs(pairs)
	 * 与_.toPairs正好相反；这个方法返回一个由键值对pairs构成的对象。
	 *
	 */
	fromPairs: function(pairs) {
		var object = {}
		for (var i = 0; i < pairs.length; i++) {
			object[pairs[i][0]] = pairs[i][1]
		}
		return object
	},

	/**
	 * _.head(array)
	 * 获取数组 array 的第一个元素。
	 * 
	 * 参数：array (Array): 要查询的数组。
	 * 返回值(*): 返回数组 array的第一个元素。
	 */

	head: function(array) {
		return array[0]
	},
	/**
	 * _.indexOf(array, value, [fromIndex=0])
	 * 使用 SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值，
	 * 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
	 * 参数：array (Array): 要查询的数组。value (*): 需要查找的值。
	 * [fromIndex=0] (number): 开始查询的位置。
	 * 返回值(*): 返回 值value在数组中的索引位置, 没有找到为返回-1。
	 */

	indexOf: function(array, value, fromIndex) {
		var newArray = []
		if (fromIndex == undefined) {
			fromIndex = 0
		}
		for (var i = fromIndex; i < array.length; i++) {
			newArray.push(array[i])
		}
		return newArray.indexOf(value) + fromIndex
	},

	/**
	 * _.join(array, [separator=','])
	 * 将 array 中的所有元素转换为由 separator 分隔的字符串。
	 * 
	 * 参数：array (Array): 要转换的数组。[separator=','] (string): 分隔元素。
	 * 返回值(*): (string): 返回连接字符串。
	 */
	join: function(array, separator) {
		if (separator == undefined) {
			separator = ','
		}
		array = array.join(separator)
		return array
	},

	/**
	 * _.initial(array)
	 * 获取数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）。
	 * 
	 * 参数：array (Array): 要查询的数组。
	 * 返回值：(Array) 返回截取后的数组array。
	 */
	initial: function(array) {
		var isArray = []
		for (var i = 0; i < array.length - 1; i++) {
			isArray.push(array[i])
		}
		return isArray
	},


	/**
	 * _.take(array, [n=1])
	 * 创建一个数组切片，从array数组的起始元素开始提取n个元素。
	 * 
	 * 参数: array (Array): 要检索的数组。[n=1] (number): 要提取的元素个数。
	 * (Array): 返回 array 数组的切片（从起始元素开始n个元素）。
	 * 
	 */
	take: function(array, n) {
		var newArray = []
		if (n == undefined) {
			n = 1
		}
		if (n > array.length) {
			n = array.length
		}
		for (var i = 0; i < n; i++) {
			newArray.push(array[i])
		}
		return newArray
	},

	/**
	 * _.nth(array, [n=0])
	 * 获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。
	 * 
	 * 参数：array (Array): 要查询的数组。[n=0] (number): 要返回元素的索引值。
	 * 返回值(*): 获取array数组的第n个元素。
	 */
	// nth: function(array, n) {

	// },


	/**
	 * _.invert(object)
	 * 创建一个object键值倒置后的对象。 如果 object 有重复的值，后面的值会覆盖前面的值。
	 * 
	 * 参数: object (Object): 要键值倒置对象。
	 * 返回: (Object): 返回新的键值倒置后的象对。
	 * 
	 */
	// invert: function(object) {
	// 	var newObject = {}

	// },
	/**
	 * _.keys(object)
	 * 创建一个 object 的自身可枚举属性名为数组。 
	 * Note: 非对象的值会被强制转换为对象，查看 ES spec 了解详情。
	 * 参数: object (Object): 要检索的对象。
	 * (Array): 返回包含属性名的数组。
	 */
	// keys: function(object) {

	// },



	/**
	 * _.slice(array, [start=0], [end=array.length])
	 * 裁剪数组array，从 start 位置开始到end结束，但不包括 end 本身的位置。 
	 * Note: 这个方法用于代替 Array#slice 来确保数组正确返回。
	 * 
	 * 参数：array (Array): 要裁剪数组。
	 * [start=0] (number): 开始位置。
	 * [end=array.length] (number): 结束位置。
	 * 
	 * (Array): 返回 数组array 裁剪部分的新数组。
	 * 
	 */
	slice: function(start, end) {
		var result = []
		if (start === undefined) {
			start = 0
		}
		if (start < 0) {
			start = this.length + start
		}
		if (end === undefined) {
			end = this.length
		}
		for (var i = start; i < end; i++) {
			result.push(this[i])
		}
		return result
	},
	/**
	 * _.get(object, path, [defaultValue])
	 * 根据 object对象的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。
	 * 
	 * 参数：object (Object): 要检索的对象。
	 * path (Array|string): 要获取属性的路径。
	 * [defaultValue] (*): 如果解析值是 undefined ，这值会被返回。
	 * 
	 * (*): 返回解析的值。
	 * 
	 */
	get: function(object, path) {
		path.reduce(function(object, singlePath) {
			return object[singlePath]
		}, object)
	},
	/**
	 * _.isEqual(value, other)
	 * 执行深比较来确定两者的值是否相等。 
	 * **注意: **这个方法支持比较 arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, 
	 * strings, symbols, 以及 typed arrays. Object 对象值比较自身的属性，不包括继承的和可枚举的属性。 不支持函数和DOM节点比较。
	 * 
	 * 参数：value (*): 用来比较的值。
	 * other (*): 另一个用来比较的值。
	 * 
	 * 返回：(boolean): 如果 两个值完全相同，那么返回 true，否则返回 false。
	 * 
	 */
	isEqual: function(a, b) {
		if (typeof a !== typeof b) {
			return false
		}
		if (a === b) {
			return true
		}
		if (a != a && b != b) {
			return true
		}
		if (Number.isNaN(NaN) && Number.isNaN(NaN)) {
			return true
		}
		var key = []
		for (var key in a) {
			keys.push(key)
			for (var key in b) {
				if (keys.indexOf(key) < 0) {
					keys.push(key)
				}
			}
			for (key of keys) {
				if (isEqual(a[key], b[key])) {
					return false
				}
			}
		}
	},



	// after: function(n, func) {
	// 	function after(type) {

	// 	}
	// },

	// matches: function(source) {

	// },

	



},