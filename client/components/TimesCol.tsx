function TimeColumn() {
  const times = [
    600, 630, 700, 730, 800, 830, 900, 930, 1000, 1030, 1100, 1130, 1200, 1230,
    1300, 1330, 1400, 1430, 1500, 1530, 1600, 1630, 1700, 1730, 1800, 1830,
    1900, 1930, 2000, 2030, 2100, 2130,
  ]
  return (
    <>
      <div>
        {times.map((time) => {
          return (
            <div className="time-label" key={time}>
              <p>{time}</p>
            </div>
          )
        })}

        {/* <Timeslot />
        <Timeslot />
        <Timeslot /> */}
      </div>
    </>
  )
}

export default TimeColumn
