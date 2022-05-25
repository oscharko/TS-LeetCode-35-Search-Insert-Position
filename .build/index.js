let testcase = [[[1, 3, 5, 6], 5], [[1, 3, 5, 6], 2], [[1, 3, 5, 6], 7]];
function searchInsert(nums, target) {
  let v = [nums, 0, 0, target];
  while (v[1] < v[0].length) {
    v[2] = v[1] + Math.floor((v[0].length - v[1]) / 2);
    if (nums[v[2]] === v[3]) {
      return v[2];
    } else if (nums[v[2]] > v[3]) {
      v[0].length = v[2];
    } else {
      v[1] = v[2] + 1;
    }
  }
  return v[1];
}
;
for (let i = 0; i < testcase.length; i++) {
  console.log(searchInsert(testcase[i][0], testcase[i][1]));
}
//# sourceMappingURL=index.js.map
