// CODE here for your Lambda Classes

//Classes

class Person {
    constructor(personProps) {
        this.name = personProps.name;
        this.age = personProps.age;
        this.location = personProps.location;
        this.gender = personProps.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorProps) {
        super(instructorProps);
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} received a perfect score on ${subject}.`;
    }
}

class Student extends Person {
    constructor(studentProps) {
        super(studentProps); 
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.map(item => console.log(item)); 
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class TeamLead extends Instructor {
    constructor(teamleadProps) {
        super(teamleadProps);
        this.gradClassName = teamleadProps.gradClassName;
        this.favInstructor = teamleadProps.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}


// Objects

//Example: 
// const fred = new Instructor({
//     name: 'Fred',
//     location: 'Bedrock',
//     age: 37,
//     favLanguage: 'JavaScript',
//     specialty: 'Front-end',
//     catchPhrase: `Don't forget the homies`
//   });

  const marcusAurelius = new Instructor({
    name: 'Marcus Aurelius',
    location: 'Rome',
    age: 64,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `It is time...`
  });

  const maximusDecimusMeridius = new Instructor({
    name: 'Maximus Decimus Meridius',
    location: 'Elysium',
    age: 28,
    gender: 'male',
    favLanguage: 'JavaScript',
    catchPhrase: `Are you not entertained!?!?`
  });

  const comodus = new Student({
    name: 'Comodus',
    location: 'Around the Corner',
    age: 28,
    gender: 'male',
    favLanguage: 'React',
    specialty: 'Back-end',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    catchPhrase: `I was supposed to be emperor.`
  });

  const seneca = new TeamLead({
    name: 'Seneca',
    location: 'Rome',
    age: 42,
    gradClassName: 'Advanced JavaScript',
    favInstructor: 'Zeno'
  });

  const epictetus = new TeamLead({
    name: 'Epictetus',
    location: 'Rome',
    age: 40,
    gradClassName: 'JavaScript',
    favInstructor: 'Zeno'
  });


console.log(marcusAurelius.speak());
console.log(comodus.listsSubjects());
console.log(comodus.gender);
console.log(marcusAurelius.demo('Closures!'));
console.log(marcusAurelius.grade(comodus, 'HTML & CSS'));
console.log(maximusDecimusMeridius.speak());
console.log(comodus.PRAssignment('Responsive Design'));
console.log(seneca.debugsCode(maximusDecimusMeridius, 'Javascript'));
console.log(epictetus.standUp('WEBPT9'));
console.log(comodus.sprintChallenge('Javascript'));
console.log(maximusDecimusMeridius.catchPhrase);


