function getMessage() {
  // const year = new Date().getFullYear();

  // return 'The year is ' + year;
  // The year is 2026

  // return `The year is ` + year;
  // The year is 2026

  // return `The year is ${year}`;
  // The year is 2026

  return `The year is ${new Date().getFullYear()}`;
  // The year is 2026
}

console.log(getMessage());

/*PHP*/
// $data = '{"device_id":"'.$device_id.'","guid":"'.$guid'","username":"'.$username.'",'"}'

const device_id = 4;
const guid = 20;
const username = "hello";

const data = `{"device_id":"${device_id}","guid":"${guid}","username":"${username}","}`;

console.log(data);

const year = 2016;
const yearMessage = `The year is ${year}`;
console.log(yearMessage);