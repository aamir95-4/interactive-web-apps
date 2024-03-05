const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [9, 7, 8, 6],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [10, 8, 3, 12],
          },
          {
            date: "2022-11-25T20:00:00.000Z",
            time: [6, 8, 9, 11],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [10, 11, 4, 8],
          },
          {
            date: "2022-12-09T20:00:00.000Z",
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

const nwabisa = data.response.data.NM372;
const schalk = data.response.data.SV782;
//----------------------------------------------------------------------------//
const createHtml = (athlete) => {
  // get (athlete) name
  const athleteName = athlete.firstName + " " + athlete.surname;
  //----------------------------------------------------------------------------//
  // get number of races ran
  const racesRan = athlete.races.length;
  //----------------------------------------------------------------------------//
  // get date of last race
  const lastRace = new Date(athlete.races[athlete.races.length - 1].date);
  const day = lastRace.getDate();
  const month = lastRace.toLocaleString("default", { month: "short" });
  const year = lastRace.getFullYear();
  //----------------------------------------------------------------------------//
  // get total time of last race ran
  const raceTimeArray = athlete.races[athlete.races.length - 1].time;
  const totalMinutes =
    raceTimeArray[0] + raceTimeArray[1] + raceTimeArray[2] + raceTimeArray[3];
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const raceTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
  //----------------------------------------------------------------------------//
  // insert gathered information into html
  // Create H2 headings for Nwabisa and Schalk
  const list = document.createElement("dl");
  const fragment = document.createDocumentFragment();

  const title = document.createElement("h2");
  title.textContent = athlete.id;
  fragment.appendChild(title);

  // insert data list under the headings
  list.innerHTML = /* html */ `
<dt>Athlete:</dt>
<dd>${athleteName}</dd>

<dt>Total Races:</dt>
<dd>${racesRan}</dd>

<dt>Event Date (Latest):</dt>
<dd>${day} ${month} ${year}</dd>

<dt>Total Time (Latest:)</dt>
<dd>${raceTime}</dd>
`;

  fragment.appendChild(list);
  return fragment;
};

document
  .querySelector('[data-athlete="NM372"]')
  .appendChild(createHtml(nwabisa));
document
  .querySelector('[data-athlete="SV782"]')
  .appendChild(createHtml(schalk));
