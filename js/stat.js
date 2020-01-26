'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_GAP = 20;
var TEXT_START_Y = CLOUD_Y + GAP + TEXT_GAP;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var textColor = 'rgba(0, 0, 0, 1)';
var QUANTITY_BAR_STRING = 2;
var victoryText = [];
victoryText.push('Ура вы победили!');
victoryText.push('Список результатов:');
var barMaxHeight = CLOUD_HEIGHT - CLOUD_Y - (GAP + TEXT_GAP) * (victoryText.length + QUANTITY_BAR_STRING);
var maxTime = 0;

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(255, 255, 255, 1)');

  ctx.fillStyle = textColor;
  ctx.font = '16px PT Mono';

  for (var i = 0; i < victoryText.length; i++) {
    ctx.fillText(victoryText[i], CLOUD_X + BAR_GAP, TEXT_START_Y + TEXT_GAP * i);
  }

  maxTime = getMaxValue(times);

  for (i = 0; i < names.length; i++) {
    paintBar(ctx, names[i], times[i], i);
  }
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

function getMaxValue(array) {
  var maxValue = array[0];
  for (var i = 0; i < array.length; i++) {
    maxValue = array[i] > maxValue ? array[i] : maxValue;
  }

  return maxValue;
}

function getRandomPercent() {
  return Math.round(Math.random() * 100);
}

function calculateBarX(barNumber) {
  return CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * barNumber;
}

function calculateBarHeight(time) {
  return barMaxHeight * time / maxTime;
}

function calculateBarY(height) {
  return CLOUD_HEIGHT - GAP - TEXT_GAP - height;
}

function getBarColor(name) {
  return name === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + getRandomPercent() + '%, 50%)';
}

function getBarParametrs(name, time, barNumber) {
  var color = getBarColor(name);
  var height = calculateBarHeight(time);
  var x = calculateBarX(barNumber);
  var y = calculateBarY(height);
  return {
    color: color,
    width: BAR_WIDTH,
    height: height,
    x: x,
    y: y
  };
}

function paintBar(ctx, name, time, barNumber) {
  var bar = getBarParametrs(name, time, barNumber);
  ctx.fillStyle = bar.color;
  ctx.fillRect(bar.x, bar.y, bar.width, bar.height);
  ctx.fillStyle = textColor;
  ctx.fillText(Math.round(time), bar.x, bar.y - GAP);
  ctx.fillText(name, bar.x, CLOUD_HEIGHT - GAP);
}
