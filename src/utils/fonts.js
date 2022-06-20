const swapFont = (currentFont='0') => { //swaps out fonts based on a list
  const fontClasses = ['font-sans','font-serif','font-mono']
  const main = document.getElementById('mainDiv')
  let currentIndex = Number(main.getAttribute('font'))
  main.classList.remove(fontClasses[currentIndex])
  const nextIndex = ++currentIndex % (main.classList.length-1)
  console.log(nextIndex)
  main.setAttribute('font',Number(nextIndex))
  main.classList.add(fontClasses[nextIndex])
}

const changeSize = (sign='+') => {
  const tabs = document.getElementsByClassName('tab')
  const fontElm = document.getElementById('font-size')
  const fontSize = Number(fontElm.innerText) + Number(sign+'1')
  if (fontSize <= 6 || fontSize >= 25) {
    return
  }
  for (let tab of tabs) {
    tab.style.fontSize = fontSize+'pt'
  }
  fontElm.innerText = fontSize
}

export { swapFont, changeSize }