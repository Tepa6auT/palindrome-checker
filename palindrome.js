function palindrome(str) {
    let str1 = str.slice().toLowerCase()
    let arr = str1.match(/[^\W_]/g)
    let arr2 = []
    
    for (let i = arr.length-1; i >= 0; i--) {
      arr2.push(arr[i])
    }
    
    if (arr.join('') == arr2.join('')) {
      return true
    } else {
      return false
    }
  }
  
  
  
  palindrome("eye");