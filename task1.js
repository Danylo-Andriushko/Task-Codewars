function pipeFix(numbers) {
    const max = Math.max.apply(this, numbers);
    const min = Math.min.apply(this, numbers);
    const result = []
    for (let i = min; i <= max; i++) {
      result.push(i)
    }
    return result;
  }
  console.log(pipeFix([1,2,3,5,6,8,9]));