const typing1 = (element, sentence) => {
	[...sentence].forEach((character, index) => {
  	setTimeout(() => {
    	document.querySelector(element).textContent += character;
    }, 150* ++index);
  });
}

typing('#typing1', '「良い男」は、「良い仕事」をします。');