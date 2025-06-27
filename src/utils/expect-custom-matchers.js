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

expect.extend({
  async toHaveTextContaining(received, expectedText) {
    const elements = Array.isArray(received) ? received : [received];

    for (const element of elements) {
      const actualText = await element.getText();
      if (!actualText.includes(expectedText)) {
        return {
          pass: false,
          message: () =>
            `Expected element text to contain "${expectedText}", but got "${actualText}"`,
        };
      }
    }

    return {
      pass: true,
      message: () => `All elements contain "${expectedText}"`,
    };
  },
});

expect.extend({
  async toHaveValues(received, expectedValue) {
    const elements = Array.isArray(received) ? received : [received];

    for (const element of elements) {
      const actualValue = await element.getValue();
      if (!actualValue.includes(expectedValue)) {
        return {
          pass: false,
          message: () =>
            `Expected element value to contain "${expectedValue}", but got "${actualValue}"`,
        };
      }
    }

    return {
      pass: true,
      message: () => `All element values contain "${expectedValue}"`,
    };
  },
});