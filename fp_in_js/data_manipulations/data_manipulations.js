var nearEarthObjects = require('./nasa_near_earth_object_API.json');

// The object in the nasa_near_earth_object_API.json is a copy of real API response from the NASA Near-Earth Object API. 
// Find the following from the API:

// Total Count ---------------------------------------------
// 1. How many near-earth objects did NASA register for the date of the search? Return the asteroid count.

const count = nearEarthObjects.element_count;

console.log(count);


// Averages ------------------------------------------------
// 2. What was the average absolute magnitude of all the near earth objects in this data set? Return the average absolute_magnitude_h.
const ls_objects = Object.values(nearEarthObjects.near_earth_objects).flat(1);
const abs_magnitude_objs = ls_objects.reduce(((total,currV) =>total + parseFloat(currV.absolute_magnitude_h)),0 )/count;
console.log(abs_magnitude_objs)

// Hint - you can achieve this multiple ways, but the reduce method can be a little-known but cool way to find averages. To do it though, you'll need to use the initial_value argument
// For some extra challenge try using reduce with the initial setting argument. To learn more about it, take a look at this page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


// Hazardous -----------------------------------------------
// 3. A list of all objects (their id, name, max size in miles, and closest approach in miles) that are labeled potentially hazardous

function strip(obj){
    return {
        id: obj.id,
        name: obj.name,
        max_size_mile: obj.estimated_diameter.miles.estimated_diameter_max,
        closest_approach: (obj.close_approach_data)[0].miss_distance.miles}
};
    //closest_approach_miles: obj.close_approach_data.miss_distance.miles
const hazardous = ls_objects.filter(x => x.is_potentially_hazardous_asteroid);
const hazard_objects_info = hazardous.map(obj => strip(obj));
console.log(hazard_objects_info);

// Too Close for Comfort -----------------------------------
// 4. A list of all objects (their id, name, max size in miles, and closest approach in miles) that have a miss_distance of less than 900,000 miles

const hazardous_less_900 = hazard_objects_info.filter(obj => obj.close_approach_data < 900000);
console.log(hazardous_less_900);
// Alert ---------------------------------------------------
// 5. Of all the near-earth objects for this date, find the time that the asteroid with the nearest miss will be closest to earth. 

