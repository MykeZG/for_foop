let numerito = 1;
// Valor de la retícula
let vReticula = 100;

function setup() {
  // Esto se ejecuta una sola vez
  createCanvas(windowWidth, windowHeight);

  noStroke();
}

function draw() {
  // Se ejecuta 60 veces por segundo

  background(random(100, 200));

  if (mouseX > 20 && mouseX < 100) {
    vReticula = mouseX;
  }
  for (let x = vReticula; x < width; x += vReticula) {
    for (let y = vReticula; y < height; y += vReticula) {
      fill(random(255));
      circle(x, y, vReticula, vReticula * 0.8);
    }
  }
}
