expect.extend({
  toBeSortedDescending(received) {
    const isSorted = received.every((val, i, arr) => i === 0 || arr[i - 1] >= val);

    if (isSorted) {
      return {
        pass: true,
        message: () => 'Array is sorted in descending order'
      };
    } else {
      return {
        pass: false,
        message: () => `Expected array to be sorted in descending order, but received: [${received}]`
      };
    }
  }
});