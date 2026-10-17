/**
 * Smoothly scrolls to the element with the specified id
 * @param {string} id - The element ID to scroll to (without #)
 */
export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Conditional CSS class merger
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
