var classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

function classCheck(day) {
    var present = [];
    for (var i = 0; i < classRoom.length; i++) {
        var studentObject = classRoom[i];
        var arrayOfPossibleStudents = Object.keys(studentObject);
        var student = arrayOfPossibleStudents[0];
      for (var z =0; z < studentObject[student].length; z++) {
        var currentDay = studentObject[student][z];
        console.log(currentDay, student);
        if (currentDay[day]) {
            present.push(student);
        }
      }
      

    }
  console.log(present);
  return present;

}

classCheck('Monday')    // => ['Marnie', 'Shoshanna']