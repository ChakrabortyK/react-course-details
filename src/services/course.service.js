// eslint-disable-next-line
import conf from "../config/conf";
//to use the variables if needed

let exampleArray = [
  {
    "id": 1,
    "name": "Introduction to React Native",
    "instructor": "John Doe",
    "description":
      "Learn the basics of React Native development and build your first mobile app.",
    "enrollmentStatus": "Open",
    "thumbnail": "your.image.here",
    "duration": "8 weeks",
    "schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    "location": "Online",
    "prerequisites": ["Basic JavaScript knowledge", "Familiarity with React"],
    "syllabus": [
      {
        "week": 1,
        "topic": "Introduction to React Native",
        "content":
          "Overview of React Native, setting up your development environment.",
      },
      {
        "week": 2,
        "topic": "Building Your First App",
        "content":
          "Creating a simple mobile app using React Native components.",
      },
    ],
    "students": [
      {
        "id": 101,
        "name": "Alice Johnson",
        "email": "alice@example.com",
      },
      {
        "id": 102,
        "name": "Bob Smith",
        "email": "bob@example.com",
      },
    ],
  },
  {
    "id": 2,
    "name": "Advanced JavaScript",
    "instructor": "Jane Smith",
    "description": "Deep dive into advanced JavaScript concepts.",
    "enrollmentStatus": "Open",
    "thumbnail": "your.image.here",
    "duration": "10 weeks",
    "schedule": "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    "location": "Online",
    "prerequisites": ["Intermediate JavaScript knowledge"],
    "syllabus": [
      {
        "week": 1,
        "topic": "ES6 Features",
        "content": "Exploring the new features introduced in ES6.",
      },
      {
        "week": 2,
        "topic": "Functional Programming",
        "content":
          "Understanding functional programming concepts in JavaScript.",
      },
    ],
    "students": [
      {
        "id": 103,
        "name": "Charlie Brown",
        "email": "charlie@example.com",
      },
    ],
  },
  {
    "id": 3,
    "name": "Python Fundamentals",
    "instructor": "Emily White",
    "description": "Learn the fundamentals of Python programming language.",
    "enrollmentStatus": "Closed",
    "thumbnail": "your.image.here",
    "duration": "6 weeks",
    "schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    "location": "Online",
    "prerequisites": ["None"],
    "syllabus": [
      {
        "week": 1,
        "topic": "Introduction to Python",
        "content": "Overview of Python programming language and its syntax.",
      },
    ],
    "students": [],
  },
  {
    "id": 4,
    "name": "Data Science with R",
    "instructor": "Michael Johnson",
    "description":
      "Introduction to data science using the R programming language.",
    "enrollmentStatus": "Open",
    "thumbnail": "your.image.here",
    "duration": "12 weeks",
    "schedule": "Fridays, 6:00 PM - 9:00 PM",
    "location": "Online",
    "prerequisites": ["Basic programming knowledge"],
    "syllabus": [
      {
        "week": 1,
        "topic": "Introduction to Data Science",
        "content": "Overview of data science and its applications.",
      },
    ],
    "students": [],
  },
  {
    "id": 5,
    "name": "Web Development Bootcamp",
    "instructor": "David Williams",
    "description": "Intensive bootcamp covering full-stack web development.",
    "enrollmentStatus": "InProgress",
    "thumbnail": "your.image.here",
    "duration": "16 weeks",
    "schedule": "Mondays, Wednesdays, and Fridays, 6:00 PM - 9:00 PM",
    "location": "Online",
    "prerequisites": ["Basic HTML, CSS, and JavaScript knowledge"],
    "syllabus": [
      {
        "week": 1,
        "topic": "HTML & CSS Basics",
        "content": "Introduction to HTML and CSS fundamentals.",
      },
    ],
    "students": [
      {
        "id": 104,
        "name": "Eva Green",
        "email": "eva@example.com",
      },
    ],
  },
];

class CourseConfigService {
  async getAllCourses() {
    return exampleArray;
  }
}

const appServiceObj = new CourseConfigService();
export default appServiceObj;
