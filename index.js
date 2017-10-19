class Driver{
  constructor(name,startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }
    yearsExperienceFromBeginningOf(endDate){
      let d = new Date(endDate, 1, 1)
      let length = (d.getFullYear() - this.startDate.getFullYear())
      return parseInt(length)
    }
  }

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
}
