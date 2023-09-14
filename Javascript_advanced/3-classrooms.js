/**
 * 
 * @param {Int} numbersOfStudents 
 */

function createClassRoom(numbersOfStudents) {
    /**
     * 
     * @param {Int} seat 
     */
    function studentSeat(seat) {
        // return a funtion that return seat
        return function(){
            return seat;
        }; 
    }

    // create an empty array of students
    let students = [];

    // loop through the number of student
    for(let i = 0; i <= numbersOfStudents; i++) {

        // add the number of seat to student array
        students.push(studentSeat(i + 1));
    }
    return students;
}

const classRoom = createClassRoom(10);