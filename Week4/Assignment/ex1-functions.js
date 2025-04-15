//Write a function that will return the array of the total population (M + F over all age groups) for a given Country per year. The result should look something like this, these are the values for Netherlands:

export const getPopulationByCountry = async (client, countryName) => {
  const result = await client
    .db("databaseWeek4")
    .collection("population_pyramid")
    .aggregate([
      {
        $match: { Country: countryName },
      },
      {
        $group: {
          _id: "$Year",
          countPopulation: {
            $sum: { $add: ["$M", "$F"] },
          },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ])
    .toArray();

  console.log(result);
};
//Write a function that will return all the information of each continent for a given Year and Age field but add a new field TotalPopulation that will be the addition of M and F. For example, if I would give 2020 for the Year and 100+ for the Age.
export const getPopulationByContinent = async (client, year, age) => {
  const result = await client
    .db("databaseWeek4")
    .collection("population_pyramid")
    .aggregate([
      {
        $match: {
          Year: year,
          Age: age,
        },
      },
      {
        $group: {
          _id: "$_id",
          Country: { $first: "$Country" },
          Year: { $first: "$Year" },
          Age: { $first: "$Age" },
          M: { $sum: "$M" },
          F: { $sum: "$F" },
        },
      },
      {
        $addFields: {
          TotalPopulation: { $add: ["$M", "$F"] },
        },
      },
      {
        $match: {
          Country: {
            $in: [
              "AFRICA",
              "ASIA",
              "EUROPE",
              "LATIN AMERICA AND THE CARIBBEAN",
              "NORTHERN AMERICA",
            ],
          },
        },
      },
    ])
    .toArray();

  console.log(result);
};
