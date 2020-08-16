var snake, food
var score = 0;

function setup() {
  createCanvas(450, 450);
  frameRate(10);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  var x = floor(random(0, 11.25));
  var y = floor(random(4, 11.25));
  food = createVector(x, y);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW || keyCode === 65) {
    snake.setVelocity(-0.5, 0);
  } else if (keyCode === RIGHT_ARROW || keyCode === 68) {
    snake.setVelocity(0.5, 0);
  } else if (keyCode === DOWN_ARROW || keyCode === 83) {
    snake.setVelocity(0, 0.5);
  } else if (keyCode === UP_ARROW || keyCode === 87) {
    snake.setVelocity(0, -0.5);
  } else if (keyCode === 32) {
    snake.setVelocity(0, 0);
  }

}

function draw() {
  scale(20);
  if (score < 20) {
    // Set background to beige and display text
    background(255, 225, 150);
    textSize(1);
    textAlign(CENTER);
    fill("black")
    text("Score 20 to win!", 11.25, 2);
    text("Score: " + score, 11.25, 3);
    text("Use arrow keys or WASD to play.", 11.25, 19);

    // Display the snake
    if (snake.eat(food)) {
      foodLocation();
      score++;
    }
    snake.display();

    // Display the food
    noStroke();
    fill(255, 0, 0);
    rect(food.x, food.y, 1, 1);

    // Lose the game
    if (snake.endGame()) {
      var c = width/40-1;
      background(255, 75, 25);
      fill("white");
      textSize(2.5);
      text("Oops, you lost!", c, 8.5);
      textSize(1.5);
      text("Refresh to play again", c, 14);
      noLoop();
    }
  } else {
    // Win the game
    var c = width/40-1;
    background(50, 255, 50);
    textAlign(CENTER);
    textSize(3.5);
    fill("white");
    text("YOU WIN!", c, 8);
    textSize(1.5);
    text("Refresh to play again", c, 13);
  }
}
