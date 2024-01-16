export function exercise01(args) {
  let result = []
  for (let i = 0; i < args.length; i++) {
    const currentElement = args[i]
    if (currentElement !== "e" && currentElement !== "E")
      result.push(currentElement)
  }

  return result.join("")

  // return args.replaceAll("e", "").replaceAll("E", "")
}

export function exercise02(args) {
  return args.toUpperCase()
}

export function exercise03(input) {
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      count++
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

    if (currentElement === " " && previousElement != " ") {
      count = count + 1
    }
  }
  return count + 1
}

export function exercise05(args) {
  const input = args
  let capitalLetterExist = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i].charCodeAt()
    if (currentElement >= 65 && currentElement <= 90) {
      capitalLetterExist = true
      break
    }
  }
  return capitalLetterExist
}

export function exercise06(input) {
  for (let i = 0; i < input.length; i++) {
    const specialCharacter = input[i].charCodeAt()
    if (
      (specialCharacter >= 33 && specialCharacter <= 47) ||
      (specialCharacter >= 58 && specialCharacter <= 64) ||
      (specialCharacter >= 123 && specialCharacter <= 126)
    ) {
      return true
    }
  }
  return false
}

export function exercise07(input) {
  return input.toLowerCase().indexOf(" and ") !== -1
}

export function exercise08(input) {
  return input.replaceAll("e", "3")
}

export function exercise09(input) {
  return input.trim().length === 6
}

export function exercise10(input) {
  debugger
  const firstElement = input[0]
  return (
    input.trim().length === 7 &&
    firstElement === "#" &&
    isRGB(input.substring(1))
  )
}

export function isRGB(input) {
  let isNotRGB = false
  for (let i = 0; i < input.length; i++) {
    const rgbCharacter = input[i].charCodeAt()
    if (
      !(
        (rgbCharacter >= 48 && rgbCharacter <= 57) ||
        (rgbCharacter >= 65 && rgbCharacter <= 70) ||
        (rgbCharacter >= 97 && rgbCharacter <= 102)
      )
    ) {
      isNotRGB = true
    }
  }
  return !isNotRGB
}

export function exercise11(input) {
  return input.charCodeAt(0)
}

export function exercise12(input) {
  return input.indexOf("e") + 1
}

export function exercise13(input) {
  return input.lastIndexOf("e") + 1
}

export function exercise14(input) {
  let count = 0
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "e") {
      count++
      if (count === 3) {
        return i + 1
      }
    }
  }
  return -1
}

export function exercise15(input) {
  let firstSpace = input.indexOf(" ")
  return input.substring(0, firstSpace)
}

export function exercise16(input) {
  let x = ["a", "b", "c"]

  return x.join()
}

export function exercise17(input) {
  const input = args
  const result = []
  for (let i = 0; 1 < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  return result.join(" + ")
}

export function exercise18(input) {}
