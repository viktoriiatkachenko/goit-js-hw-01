function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);
    
    return contentWidth + paddingWidth * 2 + borderWidth * 2;
}