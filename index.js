class Formatter {
  
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^-, 'A-Za-z0-9]+/g, '');
  } //added an extra space here^


  static titleize(string) {
    let words = string.split(' ');
    const skips = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    for (let i = 0; i < words.length; i++) {
      if (words[i] === string[0] || !skips.includes(words[i])){
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
    }
    return words.join(' ');
  }

}

