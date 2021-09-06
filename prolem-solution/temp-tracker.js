class TempTracker {
  constructor() {
    this.temperatureValues = {};
    this.min = 150;
    this.max = 0;
    this.mean = 0;
    this.mode = 0;
  }

  insert(temperature) {
    if (typeof temperature != "number")
      throw TypeError("Only numbers accepted");
    if (temperature < 0 || temperature > 150) {
      throw Error("Invalid temperature range");
    }

    if (this.temperatureValues[temperature]) {
      this.temperatureValues[temperature] += 1;
    } else {
      this.temperatureValues[temperature] = 1;
    }

    if (temperature > this.max) {
      this.max = temperature;
    }
    if (temperature < this.min) {
      this.min = temperature;
    }

    let sumOfTemperatures = 0;
    let count = 0;

    for (let temp in this.temperatureValues) {
      if (this.temperatureValues[temp] > this.mode) {
        this.mode = this.temperatureValues[temp];
      }
      sumOfTemperatures += temp * this.temperatureValues[temp];
      count += this.temperatureValues[temp];
    }
    this.mean = sumOfTemperatures / count;
  }

  get_max() {
    return this.max;
  }

  get_min() {
    return this.min;
  }

  get_mean() {
    return this.mean.toFixed(3);
  }

  get_mode() {
    return this.mode;
  }
}
