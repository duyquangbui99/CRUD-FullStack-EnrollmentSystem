# **Student Course Management Dashboard**

This is a **full-stack web application** built using **Node.js, Express, MySQL, HTML, CSS, and JavaScript**. The app allows users to manage **students, courses, and enrollments** efficiently.

---

## **🚀 Features**
✅ **Dashboard Layout** with sidebar navigation  
✅ **CRUD Operations** for students and courses  
✅ **Enroll students into courses**  
✅ **Real-time UI updates** after actions  
✅ **Validation and error handling**  
✅ **Success alerts on updates and deletions**  

---

## **🛠 Tech Stack**
- **Frontend**: HTML, CSS, JavaScript (Fetch API)  
- **Backend**: Node.js, Express.js  
- **Database**: MySQL  
- **Tools**: MySQL Workbench, Postman (for API testing)  

---

## **📥 Installation Guide**
### **1️⃣ Clone the Repository**
\`\`\`bash
git clone https://github.com/your-username/student-course-dashboard.git
cd student-course-dashboard
\`\`\`

### **2️⃣ Install Dependencies**
\`\`\`bash
npm install
\`\`\`

### **3️⃣ Set Up MySQL Database**
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

---

## **💻 Usage**
### **1️⃣ Open the Frontend**
Simply open \`index.html\` in your **browser**.

### **2️⃣ Features**
- **Add Students & Courses**
- **Edit & Delete Students/Courses**
- **Enroll Students in Courses**
- **Remove Enrollments**
- **Live Data Updates**

---

## **📡 API Endpoints**
### **📌 Students**
| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| \`GET\`  | \`/students\`         | Get all students      |
| \`POST\` | \`/students\`         | Add a new student     |
| \`PUT\`  | \`/students/:id\`     | Update student info   |
| \`DELETE\` | \`/students/:id\`  | Remove a student      |

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


