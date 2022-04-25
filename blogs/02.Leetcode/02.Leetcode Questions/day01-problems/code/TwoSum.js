/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 创建 Map 存储数组中的元素和下标
  map = new Map()
  // 遍历数组
  for (let i = 0; i < nums.length; i++) {
    // x 存储目标元素 - 当前元素
    x = target - nums[i]
    // 如果 Map 中存在 x 则返回 [x, i]
    if (map.has(x)) {
      // map.get 获取到 x 的下标
      return [map.get(x), i]
    }
    // 将元素和下标存入 Map
    map.set(nums[i], i)
  }
};

console.log(twoSum([2, 7, 11, 15], 9));