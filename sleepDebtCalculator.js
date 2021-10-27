function getSleepHours(day){
  switch(day){
    case 'Monday':
         return 8;
    case 'Tuesday':
         return 9;
    case 'Wednesday':
         return 5;
    case 'Thursday':
         return 7;
    case 'Friday':
         return 10;
    case 'Saturday':
         return 11;
    case 'Sunday':
         return 6;
    default :
         return 0;
  }
}
const getActualSleepHours = () =>(
 getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday'));
function getIdealSleepHours(){
  let idealHours = 8;
  return idealHours*7;
}
function calculateSleepDebt(){
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours()
  if(actualSleepHours == idealSleepHours){
    console.log('You had the perfect amount of sleep')
  }else if(actualSleepHours > idealSleepHours){
    console.log('You Overslept! with ' + (actualSleepHours-idealSleepHours) + ' hour(s) more sleep')
  }else{
    console.log('You should get some rest because you had '+(idealSleepHours-actualSleepHours) +  ' hour(s) less sleep')
  }
}
calculateSleepDebt(); 