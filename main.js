function absentVowel(x){
    const vowels = ['a','e','i','o','u']
    for (let i of vowels) {
      if (!x.includes(i)) {
        return vowels.indexOf(i)
      }
    }
  }


console.log(absentVowel('the cool fox is slurping juice')) // => 0
console.log(absentVowel('everybody has one attempt to be in the show')) // => 4
console.log(absentVowel('take an uber home why don\'t ya')) // => 2

