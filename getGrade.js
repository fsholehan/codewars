function getGrade(s1, s2, s3) {
  const value = (s1 + s2 + s3) / 3;

  if (value >= 90) {
    return "A";
  } else if (value >= 80 && value < 90) {
    return "B";
  } else if (value >= 70 && value < 80) {
    return "C";
  } else if (value >= 60 && value < 70) {
    return "D";
  } else if (value >= 0 && value < 60) {
    return "F";
  }
}

console.log(getGrade(95, 90, 93));
