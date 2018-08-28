export default class SpaceAge {
  //  - Earth: orbital period 365.25 Earth days, or 31557600 seconds
  //  - Mercury: orbital period 0.2408467 Earth years
  //  - Venus: orbital period 0.61519726 Earth years
  //  - Mars: orbital period 1.8808158 Earth years
  //  - Jupiter: orbital period 11.862615 Earth years
  //  - Saturn: orbital period 29.447498 Earth years
  //  - Uranus: orbital period 84.016846 Earth years
  //  - Neptune: orbital period 164.79132 Earth years

  constructor(sec) {
    this.sec = sec
  }

  get seconds() {
    return this.sec
  }

  yearsOnEarth() {
    return this.sec / 31557600
  }

  round(num) {
    return +(Math.round(num + 'e+2') + 'e-2')
  }

  onEarth() {
    return this.round(this.yearsOnEarth())
  }

  onMercury() {
    return this.round(this.yearsOnEarth() / 0.2408467)
  }

  onVenus() {
    return this.round(this.yearsOnEarth() / 0.61519726)
  }

  onMars() {
    return this.round(this.yearsOnEarth() / 1.8808158)
  }

  onJupiter() {
    return this.round(this.yearsOnEarth() / 11.862615)
  }

  onSaturn() {
    return this.round(this.yearsOnEarth() / 29.447498)
  }

  onUranus() {
    return this.round(this.yearsOnEarth() / 84.016846)
  }

  onNeptune() {
    return this.round(this.yearsOnEarth() / 164.79132)
  }
}
