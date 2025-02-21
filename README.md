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

### **4️⃣ Configure Environment Variables**
Create a \`.env\` file in the root directory:
\`\`\`env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_management
PORT=3000
\`\`\`

### **5️⃣ Start the Server**
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
<img width="1306" alt="Student-get" src="https://github.com/user-attachments/assets/eab9c96f-745e-40c9-8029-9a1f5fce28ca" />
**POST/students**
<img width="1296" alt="student-add" src="https://github.com/user-attachments/assets/e371bcce-6060-44b0-9a27-8e2a58f976da" />
**PUT/students/:id**
<img width="1292" alt="student-update" src="https://github.com/user-attachments/assets/7274ed6d-55c2-4293-bf2b-4b271db3cb73" />
**DELETE/students/:id**
<img width="1298" alt="student-delete" src="https://github.com/user-attachments/assets/7ac1ee5e-27ea-4739-a93d-7612f50acef7" />
**MySQL database for students**
<img width="635" alt="Database-student" src="https://github.com/user-attachments/assets/83253831-7c73-4863-b8f2-eba4cfc53475" />



### **📌 Courses**
| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| \`GET\`  | \`/courses\`          | Get all courses       |
| \`POST\` | \`/courses\`          | Add a new course      |
| \`PUT\`  | \`/courses/:id\`      | Update course info    |
| \`DELETE\` | \`/courses/:id\`   | Remove a course       |

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


