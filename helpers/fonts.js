const FontFaceObserver = require('fontfaceobserver');

const Fonts = () => {
  const link = document.createElement('link');
  link.href = './fonts/workSans.css';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const workSans = new FontFaceObserver('Work Sans');

  workSans.load().then(() => {
    document.documentElement.classList.add('workSans');
  });
};

export default Fonts;
