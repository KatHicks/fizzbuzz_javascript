describe("FizzBuzz", function() {
  var fizzBuzz = new FizzBuzz();

  it("should return 'fizz' if num if divisible by 3", function() {
    expect(fizzBuzz.play(3)).toBe("fizz");
    expect(fizzBuzz.play(9)).toBe("fizz");
  })

  it("should return 'buzz' if num if divisible by 5", function() {
    expect(fizzBuzz.play(5)).toBe("buzz");
    expect(fizzBuzz.play(25)).toBe("buzz");
  })

  it("should return 'fizzbuzz' if num if divisible by 3 and 5", function() {
    expect(fizzBuzz.play(15)).toBe("fizzbuzz");
    expect(fizzBuzz.play(30)).toBe("fizzbuzz");
  })

});
