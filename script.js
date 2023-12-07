export function exercise01(args) {
  const input = args
  const result = [] }

  for (let i = 0; i < input.length; i++) {
       const currentElement = input[i]
 if (currentElement !="e" && currentElement !="E")
    result.push(currentElement) }

    return result.join("")
  
export function exercise02 (args) {
return args.toUpperCase()
}

export function countCharacters(char, string) {
    return string.split('').reduce((acc, ch) => ch === char ? acc + 1: acc, 0)
  }

export function exercise04 (args) {

}

  


