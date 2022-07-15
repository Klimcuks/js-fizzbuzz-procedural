const answer = []

// Write your code below this line

for (let i = 0; i < 15; i++) {
  if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
    answer[i] = 'FizzBuzz'
  } else if ((i + 1) % 3 === 0) {
    answer[i] = 'Fizz'
  } else if ((i + 1) % 5 === 0) {
    answer[i] = 'Buzz'
  } else {
    answer[i] = i + 1
  }
  
}
console.log(answer)

// Don't touch the code below this line, we'll cover it later
module.exports = answer
