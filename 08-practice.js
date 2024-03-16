function university(shortname, year, student){
    this.shortname = shortname,
    this.year = year,
    this.student = student
}


const university1 = new university('cu', 2001, 85000)

console.log(university1.shortname)