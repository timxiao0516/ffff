function setup() {
  createCanvas(windowWidth, windowHeight);
  inputElement = createInput("媽逼");
  inputElement.position(50,50);
  inputElement.style("font-size", "40px");
  inputElement.style("color", "#ffff00");
  inputElement.style("background-color", "#B3CBB9");
  inputElement.style("width", "500px");
  inputElement.style("border", "8px solid #ff0000");
//滑桿
  sliderElement = createSlider(10, 50, 20, 1);
  sliderElement.position(600, 50);
//按鈕
  bthElement = createButton("不洗");
  bthElement.position(800, 50);
  bthElement.style("font-size", "40px");
  bthElement.style("border", "10px solid #F56476");
  bthElement.style("border-color", "#BE3E82");
  bthElement.mousePressed(tim);

  colorPickerElement =createColorPicker("#d62828")
  colorPickerElement.position(600,80) 

colorPickerElement.value()
}

var randomValue = 0;
var fuck = true;  

function tim() {
  if (fuck) {
    randomValue = 10;
    fuck = false; 
  } else {
    randomValue = 0; 
    fuck = true;  
  }
}

function draw() {
  background(0);
  txts = inputElement.value();
  textSize(50);
  fill("#F56476");
  txt_width = sliderElement.value();
  textSize(txt_width);
  textLength = textWidth(txts) + 50;
  for (y = 0; y < height; y = y + 60) {
    for (x = 0; x < width; x = x + textLength) {
      text(txts, x + random(-randomValue, randomValue), y + random(-randomValue, randomValue));
    }
  }
}
