    var bday = "2017-01-10"
    var bdayArray = bday.split("-")
    
    var year = Number(bdayArray[0])
    var month = Number(bdayArray[1])
    var day = Number(bdayArray[2])
    // console.log(day)
    
function formatBday(bday){
    var bdayArray = bday.split("-")
    
    var month = Number(bdayArray[0])
    var day = Number(bdayArray[1])
    var year = Number(bdayArray[2])
    
    var result = [month, day, year]
    console.log(result)
    return result
}
    
    
function getZodiac(month, day, year){
    if (month === 1 && day < 20 ){
        return "Capricorn"
    } else if (month === 1 && day > 19) {
        return "Capricorn"
    } else if (month === 1 && day < 19) {
        return "Aquarius"
    } else if (month === 2 && day > 21) {
        return "Pisces"
    } else if (month === 2 && day < 19) {
        return "Aquarius"
    } else if (month === 3 && day > 20) {
        return "Aries"
    } else if (month === 3 && day < 20) {
        return "Pisces"
    } else if (month === 4 && day > 21) {
        return "Taurus"
    } else if (month === 4 && day < 21) {
        return "Taurus"
    } else if (month === 5 && day > 21) {
        return "Gemini"
    } else if (month === 5 && day < 21) {
        return "Gemini"    
    } else if (month === 6 && day > 23) {
        return "Cancer"
    } else if (month === 6 && day < 23) {
        return "Cancer"
    } else if (month === 7 && day > 23) {
        return "Leo"
    } else if (month === 7 && day < 23) {
        return "Leo"
    } else if (month === 8 && day > 23) {
        return "Virgo"
    } else if (month === 8 && day < 23) {
        return "Virgo"
    } else if (month === 9 && day > 23) {
        return "Libra" 
    } else if (month === 9 && day < 23) {
        return "Libra"     
    } else if (month === 10 && day > 22) {
        return "Scorpio"
    } else if (month === 10 && day < 22) {
        return "Scorpio"
    } else if (month === 11 && day > 22) {
        return "Sagittarius"
    } else if (month === 11 && day < 22) {
        return "Sagittarius"
    } else if (month === 12 && day > 20) {
        return "Capricorn"
    } else if (month === 12 && day < 20) {
        return "Sagittarius"
    } else {
        return 'no bueno'
    }
    
}    

module.exports = {
    formatBday,
    getZodiac
}
    
    
// console.log(getZodiac(month, day, year))    
    // https://gist.github.com/kladov/5080233