var STATIC_CHANNELS = [
  {
    name: "Moises",
    email: "m@moises.tech",
    skills: ["React", "Machine Learning", "GraphQL", "AdTech"],
  },
  {
    name: "Simon",
    email: "simonaizpuruamgmt@gmail.com",
    skills: ["Data Science", "Python"],
  },
  {
    name: "Sayid",
    email: "thenextj.j.e@gmail.com",
    skills: ["Javascript", "Java", "Blockchain", "React"],
  },
];

module.exports = async function (req, res, next) {
  try {
    res.status(200).json(STATIC_CHANNELS);
  } catch (e) {
    next(e);
  }
};
