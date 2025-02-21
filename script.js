document.addEventListener("DOMContentLoaded", () => {
    // API Base URL
    const BASE_URL = "http://localhost:3000";

    // UI Elements
    const studentForm = document.getElementById("student-form");
    const studentName = document.getElementById("student-name");
    const studentEmail = document.getElementById("student-email");
    const studentTableBody = document.querySelector("#students-table-body");

    const courseForm = document.getElementById("course-form");
    const courseName = document.getElementById("course-name");
    const courseDescription = document.getElementById("course-description");
    const courseTableBody = document.querySelector("#courses-table-body");

    const enrollForm = document.getElementById("enroll-form");
    const studentSelect = document.getElementById("student-select");
    const courseSelect = document.getElementById("course-select");
    const enrollTableBody = document.querySelector("#enrollments-table-body");

    const sections = document.querySelectorAll(".section");
    const navButtons = document.querySelectorAll(".nav-button");

    // Function to show a section
    function showSection(sectionId) {
        sections.forEach(section => section.classList.remove("active"));
        document.getElementById(sectionId).classList.add("active");
    }

    // Set Students section as default on page load
    showSection("students-section");

    // Navigation Handling
    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            showSection(`${button.dataset.section}-section`);
        });
    });

    // Fetch and display students
    function fetchStudents() {
        fetch(`${BASE_URL}/students`)
            .then(res => res.json())
            .then(data => {
                studentTableBody.innerHTML = data.map(student => `
                    <tr>
                        <td>${student.id}</td>
                        <td><input type="text" id="student-name-${student.id}" value="${student.name}"></td>
                        <td><input type="email" id="student-email-${student.id}" value="${student.email}"></td>
                        <td>
                            <button class="update-button" onclick="updateStudent(${student.id})">🔄 Update</button>
                            <button class="delete-button" onclick="deleteStudent(${student.id})">❌ Delete</button>
                        </td>
                    </tr>
                `).join("");

                studentSelect.innerHTML = data.map(student => `
                    <option value="${student.id}">${student.name}</option>
                `).join("");
            })
            .catch(err => console.error("Error fetching students:", err));
    }

    // Add new student
    studentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(`${BASE_URL}/students`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: studentName.value, email: studentEmail.value })
        }).then(() => {
            fetchStudents();
            studentForm.reset();
        }).catch(err => console.error("Error adding student:", err));
    });

    // Update student with success alert
    window.updateStudent = (id) => {
        const name = document.getElementById(`student-name-${id}`).value;
        const email = document.getElementById(`student-email-${id}`).value;

        fetch(`${BASE_URL}/students/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email })
        }).then(() => {
            fetchStudents();
            alert("Student updated successfully!");
        });
    };

    // Delete student
    window.deleteStudent = (id) => {
        fetch(`${BASE_URL}/students/${id}`, { method: "DELETE" })
            .then(() => fetchStudents())
            .catch(err => console.error("Error deleting student:", err));
    };

    // Add new course
    courseForm.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(`${BASE_URL}/courses`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ course_name: courseName.value, description: courseDescription.value })
        }).then(() => {
            fetchCourses();
            courseForm.reset();
        }).catch(err => console.error("Error adding course:", err));
    });

    // Fetch and display courses
    function fetchCourses() {
        fetch(`${BASE_URL}/courses`)
            .then(res => res.json())
            .then(data => {
                courseTableBody.innerHTML = data.map(course => `
                    <tr>
                        <td>${course.id}</td>
                        <td><input type="text" id="course-name-${course.id}" value="${course.course_name}"></td>
                        <td><input type="text" id="course-description-${course.id}" value="${course.description}"></td>
                        <td>
                            <button class="update-button" onclick="updateCourse(${course.id})">🔄 Update</button>
                            <button class="delete-button" onclick="deleteCourse(${course.id})">❌ Delete</button>
                        </td>
                    </tr>
                `).join("");

                courseSelect.innerHTML = data.map(course => `
                    <option value="${course.id}">${course.course_name}</option>
                `).join("");
            })
            .catch(err => console.error("Error fetching courses:", err));
    }

    // Update course with success alert
    window.updateCourse = (id) => {
        const course_name = document.getElementById(`course-name-${id}`).value;
        const description = document.getElementById(`course-description-${id}`).value;

        fetch(`${BASE_URL}/courses/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ course_name, description })
        }).then(() => {
            fetchCourses();
            alert("Course updated successfully!");
        });
    };

    // Delete course (Fix issue)
    window.deleteCourse = (id) => {
        fetch(`${BASE_URL}/courses/${id}`, { method: "DELETE" })
            .then(() => {
                fetchCourses();
            })
            .catch(err => console.error("Error deleting course:", err));
    };

    // Fetch and display enrollments 
    function fetchEnrollments() {
        fetch(`${BASE_URL}/enrollments`)
            .then(res => res.json())
            .then(data => {
                enrollTableBody.innerHTML = data.map(enroll => `
                    <tr>
                        <td>${enroll.id}</td>
                        <td>${enroll.student_id}</td>
                        <td>${enroll.course_id}</td>
                        <td>
                            <button class="delete-button" onclick="deleteEnrollment(${enroll.id})">❌ Remove</button>
                        </td>
                    </tr>
                `).join("");
            })
            .catch(err => console.error("Error fetching enrollments:", err));
    }

    enrollForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevents form reload

        const student_id = studentSelect.value;
        const course_id = courseSelect.value;

        if (!student_id || !course_id) {
            alert("Please select both a student and a course.");
            return;
        }

        fetch(`${BASE_URL}/enrollments`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ student_id, course_id })
        }).then(response => {
            if (!response.ok) {
                throw new Error("Failed to enroll student.");
            }
            return response.json();
        }).then(() => {
            fetchEnrollments(); // Refresh enrollments list
            enrollForm.reset(); // Clear the form selection
        }).catch(err => {
            console.error("Error enrolling student:", err);
            alert("Failed to enroll student. Please try again.");
        });
    });


    // Delete enrollment
    window.deleteEnrollment = (id) => {
        fetch(`${BASE_URL}/enrollments/${id}`, { method: "DELETE" })
            .then(() => {
                fetchEnrollments();
            })
            .catch(err => console.error("Error removing enrollment:", err));
    };

    // Initial data fetch
    fetchStudents();
    fetchCourses();
    fetchEnrollments();

    // Ensure the Students section is active when the page is reloaded
    showSection("students-section");
});
