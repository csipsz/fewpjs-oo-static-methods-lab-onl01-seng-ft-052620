class Formatter {
  
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^-, 'A-Za-z0-9]+/g, '');
  } //added an extra space here^

  static titleize(sentence){
    const skips = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    let result = sentence.split(' ').map(word => {
      if(word !== sentence[0] && skips.includes(word)){
        return word
      } else {
        return word.charAt(0).toUpperCase + word.slice(1)
      }
    }
      )
      return result.join(" ")
  }
}