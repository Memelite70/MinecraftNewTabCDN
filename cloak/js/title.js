  const iframe = document.getElementById('framed');

  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
        alert(`Iframe src changed to: ${iframe.src}`);
      }
    }
  });

  observer.observe(iframe, {
    attributes: true,
    attributeFilter: ['src']
  });
