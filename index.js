let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, start){
    this.name = name
    this.start = new date(start)
  }

  function yearsExperienceFromBeginningOf(year){
    let endDate = new Date(year, 1, 1)
    let totalYears = (endDate - this.start)/(365*24*60*60*1000)
    return parseInt(totalYears)
  }
}
