document.querySelectorAll('.resume-container h1, .resume-container h2, .resume-container p, .resume-container li').forEach(element => {
    element.addEventListener('click', () => {
      const originalText = element.textContent;
      const input = document.createElement('input');
      input.value = originalText;
      input.style.width = '100%';
      input.style.fontSize = getComputedStyle(element).fontSize;
  
      element.replaceWith(input);
      input.focus();
  
      input.addEventListener('blur', () => {
        const newText = input.value;
        element.textContent = newText;
        input.replaceWith(element);
      });
    });
  });
  