export function validate(values) {
  const errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Enter the student's full name.";
  }

  if (!values.studentId.trim()) {
    errors.studentId = "Enter the student ID.";
  } else if (!/^\d{4}-\d{4}$/.test(values.studentId)) {
    errors.studentId = "Student ID must be in the format 2024-0123.";
  }

  if (!values.email.trim()) {
    errors.email = "Enter the student's email.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.course) {
    errors.course = "Choose a course.";
  }

  if (!values.yearLevel) {
    errors.yearLevel = "Choose a year level.";
  }

  return errors;
}