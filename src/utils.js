export const makeShadow = (e) => {
  setTimeout(() => {
    e.target.style.boxShadow = '0 0 0 4px rgba(189, 189, 189, 0.5)';
  }, 0);
  setTimeout(() => {
    e.target.style.boxShadow = 'unset';
  }, 500);
}