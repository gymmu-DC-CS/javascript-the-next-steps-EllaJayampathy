export function exercise01(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement != "e" && currentElement != "E")
      result.push(currentElement)
  }

  return result.join("")
}

export function exercise02(args) {
  return args.toUpperCase()
}

export function exercise03(args) {
  const input = args
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      count = count + 1
    } else if (currentElement === "E") {
      count = count + 1
    }
  }
  return count
}

export function exercise04(args) {
  const input = args
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const previousElement = input[i - 1]

    if (currentElement === " " && previousElemet != "-") {
      count = count + 1
    }
  }
  return count + 1
}
