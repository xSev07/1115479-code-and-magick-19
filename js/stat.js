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
var textColor = 'rgba(0, 0, 0, 1';
var quantityBarString = 2;
var victoryText = [];
victoryText.push('Ура вы победили!');
victoryText.push('Список результатов:');
var barMaxHeight = CLOUD_HEIGHT - CLOUD_Y - (GAP + TEXT_GAP) * (victoryText.length + quantityBarString);

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(255, 255, 255, 1');

  ctx.fillStyle = textColor;
  ctx.font = '16px PT Mono';

  for (var i = 0; i < victoryText.length; i++) {
    ctx.fillText(victoryText[i], CLOUD_X + BAR_GAP, TEXT_START_Y + TEXT_GAP * i);
  }

  var maxTime = getMaxValue(times);

  for (i = 0; i < names.length; i++) {
    var bar = getBarParametrs(names[i], times[i], maxTime, i);
    ctx.fillStyle = bar.color;
    ctx.fillRect(bar.x, bar.y, bar.width, bar.height);
    ctx.fillStyle = textColor;
    ctx.fillText(Math.round(times[i]), bar.x, bar.y - GAP);
    ctx.fillText(names[i], bar.x, CLOUD_HEIGHT - GAP);
    // console.log(getBarParametrs(names[i], times[i], maxTime, i));
    // ctx.fillStyle = getBarColor(names[i]);
    // var barHeight = calculateBarHeight(times[i], maxTime);
    // var barY = calculateBarY(barHeight);
    // var barX = calculateBarX(i);
    // ctx.fillRect(barX, barY, BAR_WIDTH, barHeight);
    // ctx.fillStyle = textColor;
    // ctx.fillText(Math.round(times[i]), barX, barY - GAP);
    // ctx.fillText(names[i], barX, CLOUD_HEIGHT - GAP);
  }
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

function getMaxValue(array) {
  var maxTime = array[0];
  for (var i = 0; i < array.length; i++) {
    maxTime = array[i] > maxTime ? array[i] : maxTime;
  }

  return maxTime;
}

function calculateBarX(i) {
  return CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
}

function calculateBarHeight(time, maxTime) {
  return barMaxHeight * time / maxTime;
}

function calculateBarY(height) {
  return CLOUD_HEIGHT - GAP - TEXT_GAP - height;
}

function getBarColor(name) {
  return name === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + Math.round(Math.random() * 100) + '%, 50%)';
}

function getBarParametrs(name, time, maxTime, barNumber) {
  var color = getBarColor(name);
  var height = calculateBarHeight(time, maxTime);
  var x = calculateBarX(barNumber);
  var y = calculateBarY(height);
  return {
    color: color,
    width: BAR_WIDTH,
    height: height,
    x: x,
    y: y
  };
  // return {
  //   color: getBarColor(name),
  //   barHeight: calculateBarMaxHeight(time, maxTime),
  //   barY: calculateBarY(this.barHeight),
  //   barX: calculateBarX(barNumber)
  // };
}
