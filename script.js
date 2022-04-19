const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = document.body.clientWidth;
const height = document.body.clientHeight;

canvas.width = width;
canvas.height = height;

console.log({ width, height });

const position = Array(300).join(0).split('');
console.log(position);

const initMatrix = () => {
  ctx.fillStyle = 'rgba(0,15,2,.15)';
  ctx.fillRect(0, 0, width, height);

  // ctx.fillStyle = '#4caf50';
  ctx.fillStyle = 'rgba(0, 150,0,.6)';
  ctx.font = '1pt';

  position.map((y, i) => {
    const text = String.fromCharCode(1e4 + Math.random() * 30);
    const x = i * 15 + 15;
    canvas.getContext('2d').fillText(text, x, y);

    y > 100 + Math.random() * 1e5 ? (position[i] = 0) : (position[i] = y + 15);
  });
};

// initMatrix();
setInterval(initMatrix, 50);
