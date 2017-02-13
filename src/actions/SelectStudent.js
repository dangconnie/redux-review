var selectStudent = function(student){
	console.log(student);
	return{
		type: "PICK_STUDENT",
		payload: student //this is what you actually want to return
	}
}

export default selectStudent;



//SAME WAY TO DO THIS:
// export default function selectStudent(student){
// 	console.log(student);
// }