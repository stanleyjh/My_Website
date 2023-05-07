const Schedule = () => {
  return (
    <section className="schedule">
      <h2>My Schedule</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            {/* <th>Saturday</th> */}
            {/* <th>Sunday</th> */}
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>7 AM</td>
            <td>Wake up</td>
            <td>Wake up</td>
            <td>Wake up</td>
            <td>Wake up</td>
            <td>Wake up</td>
            <td></td>
            <td></td>
          </tr> */}
          <tr>
            <td>8 AM</td>
            {/* <td rowSpan="4" colSpan="5">
              Work
            </td> */}
            <td rowSpan="4">Work</td>
            <td rowSpan="4">Work</td>
            <td rowSpan="4">Work</td>
            <td rowSpan="4">Work</td>
            <td rowSpan="4">Work</td>
            {/* <td>Wake up</td> */}
          </tr>
          <tr>
            <td>9 AM</td>
            {/* <td rowSpan="3">Meal Prep</td> */}
          </tr>
          <tr>
            <td>10 AM</td>
          </tr>
          <tr>
            <td>11 AM</td>
          </tr>
          <tr>
            <td>12 PM</td>
            {/* <td colSpan="5">Lunch</td> */}
            <td>Lunch</td>
            <td>Lunch</td>
            <td>Lunch</td>
            <td>Lunch</td>
            <td>Lunch</td>
          </tr>
          <tr>
            <td>1 PM</td>
            {/* <td rowSpan="3" colSpan="5">
              Work
            </td> */}
            <td rowSpan="3">Work</td>
            <td rowSpan="3">Work</td>
            <td rowSpan="3">Work</td>
            <td rowSpan="3">Work</td>
            <td rowSpan="3">Work</td>
            {/* <td rowSpan="1">Clean</td> */}
          </tr>
          <tr>
            <td>2 PM</td>
          </tr>
          <tr>
            <td>3 PM</td>
          </tr>
          <tr>
            <td>4 PM</td>
            {/* <td colSpan="2">Exercise</td> */}
            <td>Exercise</td>
            <td>Exercise</td>
            {/* <td rowSpan="2">Break</td> */}
            <td rowSpan="2">Break</td>
            {/* <td colSpan="2">Exercise</td> */}
            <td>Exercise</td>
            <td>Exercise</td>
          </tr>
          <tr>
            <td>5 PM</td>
            {/* <td colSpan="2">Break</td> */}
            {/* <td colSpan="2">Break</td> */}
            <td>Break</td>
            <td>Break</td>
            <td>Break</td>
            <td>Break</td>
          </tr>
          <tr>
            <td>6 PM</td>
            <td colSpan="5">Dinner</td>
            {/* <td>Dinner</td>
            <td>Dinner</td>
            <td>Dinner</td>
            <td>Dinner</td>
            <td>Dinner</td>
            <td>Dinner</td> */}
          </tr>
          {/*<tr>
            <td>7 PM</td>
            <td>Dinner</td>
            <td>Dinner</td>
            <td>Dinner</td>
            <td>Dinner</td>
            <td>Dinner</td>
          </tr>
          <tr>
            <td>8 PM</td>
            <td rowSpan="3"></td>
            <td rowSpan="3"></td>
            <td rowSpan="3"></td>
            <td rowSpan="3"></td>
            <td rowSpan="3"></td>
            <td rowSpan="3"></td>
            <td rowSpan="3"></td>
          </tr>
          <tr>
            <td>9 PM</td>
          </tr>
          <tr>
            <td>10 PM</td>
          </tr>
          <tr>
            <td>11 PM</td>
            <td>Sleep</td>
            <td>Sleep</td>
            <td>Sleep</td>
            <td>Sleep</td>
            <td>Sleep</td>
            <td>Sleep</td>
            <td>Sleep</td>
          </tr> */}
        </tbody>
      </table>
    </section>
  );
};

export default Schedule;
