class Question {
  constructor(question, a1, a2, a3, a4) {
    this.question = question;
    this.a1 = a1;
    this.a2=a2;
    this.a3=a3;
    this.a4=a4;
  }
}




const q1=new Question('Question 1', 'ans1', 'ans2', 'ans3', 'ans4');
const q2=new Question('Question 2', 'ans1', 'ans2', 'ans3', 'ans4');
const q3=new Question('Question 3', 'ans1', 'ans2', 'ans3', 'ans4');
const q4=new Question('Question 4', 'ans1', 'ans2', 'ans3', 'ans4');
const q5=new Question('Question 5', 'ans1', 'ans2', 'ans3', 'ans4');

const quiz=[q1,q2,q3,q4,q5];
const numQuest=quiz.length;
console.log(numQuest);
console.log(quiz[0]['a3']);
var createQ='<ol>';
console.log(q5[0]);

//Print the questions
for(var i=0; i<numQuest; i++) {
  createQ+="<div><li>"+quiz[i]['question']+"<ol>";
  for(var c=1;c<quiz[i].length; c++) { 
    createQ+='<input type="radio" name="'+quiz[i][question]+'" value="'+quiz[i][c]+'" id="'+quiz[i][c]+'"/>';
    createQ+='<label for="'+quiz[i][c]+'">'+quiz[i][c]+'</label><br/>';
  }
  createQ+="</ol></li></div>";
}
createQ+="</ol>";




document.getElementsByTagName('section')[0].innerHTML=createQ;

