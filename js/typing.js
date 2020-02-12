const typing = (element, sentence) => {
	[...sentence].forEach((character, index) => {
  	setTimeout(() => {
    	document.querySelector(element).textContent += character;
    }, 150* ++index);
  });
}

typing('#typing', '「良い男」が作るか、「それ以外」が作るか。');