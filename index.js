//importing the array
import studentData from './data.js'


const student_data = document.querySelector('.table-data')
const female_data=document.querySelector('.table-female-data')
const male_data=document.querySelector('.table-male-data')

let maleStudents = studentData.filter((student) => student.gender == 'Male')

let femaleStudents = studentData.filter((student) => student.gender == 'Female')

// appending the html
function displayStudentDetail(arr,container) {
  let listOfStudent = arr.map((item,index) => {
    const{first_name,email,gender,img_src,marks,passing,last_name}=item;
    return ` <tr align="center">
      <td align="center">${index+1}</td>
      <td>
        <div class="name">

          <img src="${img_src}" alt="">
          <span> ${first_name+" "+last_name} </span>
        </div>
       
      </td>
      <td>${gender}</td>
      <td>${item.class}</td>
      <td>${marks}</td>
      <td>${passing}</td>
      <td>${email}</td>
    </tr> `
  })
  listOfStudent = listOfStudent.join('')

  container.innerHTML = listOfStudent
}

//Mounting the data
window.addEventListener('DOMContentLoaded', () => {
  displayStudentDetail(studentData,student_data)
  displayStudentDetail(femaleStudents,female_data)
  displayStudentDetail(maleStudents,male_data)
})




//search functionality
form.addEventListener('keyup', (e) => {
  e.preventDefault()
  const value = search.value
  
  let result= studentData.filter(
    (item) =>
      item.first_name.toLowerCase().includes(value) ||
      item.last_name.toLowerCase().includes(value) ||
      item.email.toLowerCase().includes(value)
  )
  
 
  
  displayStudentDetail(result,student_data)
  
  
})
form.addEventListener('submit',(e)=>{
e.preventDefault()
const value = search.value
let result= studentData.filter(
  (item) =>
    item.first_name.toLowerCase().includes(value) ||
    item.last_name.toLowerCase().includes(value) ||
    item.email.toLowerCase().includes(value)
)


displayStudentDetail(result,student_data)
search.value="";
})






//sort by marks
sortByMarks.addEventListener('click', () => {
  let result = studentData.sort((a,b)=>a.marks-b.marks)
  
  displayStudentDetail(result,student_data)
})
//sort by class
sortByClass.addEventListener('click', () => {
  let result = studentData.sort((a,b)=>a.class-b.class)
  
  displayStudentDetail(result,student_data)
})

//sort a to z
sortAtoZ.addEventListener('click', () => {
  let result = studentData.sort((a,b)=>{
      if (a.first_name < b.first_name) return -1
      if (a.first_name > b.first_name) return 1
      return 0
  })
  
  displayStudentDetail(result,student_data)
  
})


//sort z to a
sortZtoA.addEventListener('click', () => {
  let result = studentData.sort((a,b)=>{
      if (a.first_name < b.first_name) return 11
      if (a.first_name > b.first_name) return -1
      return 0
  })
  
  displayStudentDetail(result,student_data)
})
//sort by passing
sortByPassing.addEventListener('click', () => {
  let result=studentData.filter((item)=>item.passing==true)

 displayStudentDetail(result,student_data)

})

// sort by gender
sortByGender.addEventListener('click',()=>{
  all_students.classList.toggle('table-none')
  female.classList.toggle('table-none')
  male.classList.toggle('table-none')
})


