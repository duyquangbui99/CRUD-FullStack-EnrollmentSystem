# **Student Course Management Dashboard**

This is a **full-stack web application** built using **Node.js, Express, MySQL, HTML, CSS, and JavaScript**. The app allows users to manage **students, courses, and enrollments** efficiently.

---

### **Install Dependencies**
\`\`\`bash
npm install
\`\`\`

### **Set Up MySQL Database**
Run the following SQL script in **MySQL Workbench** or your database tool:
\`\`\`sql
CREATE DATABASE school_management;
USE school_management;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE enrollments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    course_id INT,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);
\`\`\`

### **Configure Environment Variables**
Create a \`.env\` file in the root directory:
\`\`\`env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_management
PORT=3000
\`\`\`

### **Start the Server**
\`\`\`bash
node app.js
\`\`\`
Your **backend** is now running at:  
📍 \`http://localhost:3000\`

## **📡 API Endpoints**
### **📌 Students**
| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| \`GET\`  | \`/students\`         | Get all students      |
| \`POST\` | \`/students\`         | Add a new student     |
| \`PUT\`  | \`/students/:id\`     | Update student info   |
| \`DELETE\` | \`/students/:id\`  | Remove a student      |

**GET/students**
- Get all students
<img width="1306" alt="Student-get" src="https://github.com/user-attachments/assets/eab9c96f-745e-40c9-8029-9a1f5fce28ca" />

**POST/students**
- Add student name: Avanti and email:avanti@gmail.com
<img width="1296" alt="student-add" src="https://github.com/user-attachments/assets/e371bcce-6060-44b0-9a27-8e2a58f976da" />

**PUT/students/:id**
- Update student name
<img width="1292" alt="student-update" src="https://github.com/user-attachments/assets/7274ed6d-55c2-4293-bf2b-4b271db3cb73" />

**DELETE/students/:id**
- Remove students
<img width="1298" alt="student-delete" src="https://github.com/user-attachments/assets/7ac1ee5e-27ea-4739-a93d-7612f50acef7" />

**MySQL database for students**
- Database after removing students
<img width="635" alt="Database-student" src="https://github.com/user-attachments/assets/83253831-7c73-4863-b8f2-eba4cfc53475" />



### **📌 Courses**
| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| \`GET\`  | \`/courses\`          | Get all courses       |
| \`POST\` | \`/courses\`          | Add a new course      |
| \`PUT\`  | \`/courses/:id\`      | Update course info    |
| \`DELETE\` | \`/courses/:id\`   | Remove a course       |


**GET/courses**
- Get all courses
<img width="1296" alt="Course-get" src="https://github.com/user-attachments/assets/3776f35f-b051-4c87-8beb-0caa276320e9" />

**POST/courses**
- Add course: Full stack class
<img width="1296" alt="COURSE-ADD" src="https://github.com/user-attachments/assets/64d66410-430d-47cd-bdd6-7a5a60af0b0d" />

**MySQL database for courses**
- Database after adding course
<img width="564" alt="db-courses-added" src="https://github.com/user-attachments/assets/3c060082-7268-4235-9a22-8c723e84ffde" />

**PUT/courses/:id**
- Update course
<img width="1229" alt="course-update" src="https://github.com/user-attachments/assets/8fd9e492-1536-4d83-9527-c89978697b7a" />

**DELETE/courses/:id**
- Remove courses
<img width="1292" alt="Course-remove" src="https://github.com/user-attachments/assets/8d0185b3-60e5-4e4c-aa11-6a3f3025c772" />

**MySQL database for courses**
- Database after removing courses
<img width="728" alt="db-course-removed" src="https://github.com/user-attachments/assets/c20fb624-3973-4734-bec4-83aab6478579" />




### **📌 Enrollments**
| Method | Endpoint             | Description               |
|--------|----------------------|---------------------------|
| \`GET\`  | \`/enrollments\`       | Get all enrollments       |
| \`POST\` | \`/enrollments\`       | Enroll a student in a course |
| \`DELETE\` | \`/enrollments/:id\` | Remove a student from a course |

---



## **🐞 Troubleshooting**
**Issue:** \`CORS Policy Blocked Request\`  
**Fix:** Install and use CORS in \`app.js\`
\`\`\`bash
npm install cors
\`\`\`
Then add this to \`app.js\`:
\`\`\`javascript
const cors = require('cors');
app.use(cors());
\`\`\`

**Issue:** \`ER_ACCESS_DENIED_ERROR (MySQL connection failed)\`  
**Fix:** Double-check your **MySQL credentials** in \`.env\` and ensure MySQL is running.

---


