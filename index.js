function distanceFromHqInBlocks (distance) {
    return distance > 42 ? distance - 42 : 42 - distance
}
function distanceFromHqInFeet (distance) {
    return distanceFromHqInBlocks (distance) * 264
}
function distanceTravelledInFeet (starting, ending) {
    const result = (ending - starting) * 264
    if(starting > ending)
