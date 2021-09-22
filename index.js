// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(array, string)
{
    return array.filter(target =>
    {
        return target.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(array, string)
{
    return array.filter(target =>
        {
            return target.toLowerCase().indexOf(string.toLowerCase()) === 0
        })
 }



function matchName(array, string)
{
    const stringName = array.filter(driver => driver.name.toLowerCase() === string.toLowerCase())
    return stringName
}