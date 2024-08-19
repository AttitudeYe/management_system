import { Fragment } from "react"


const Student = () => {

  return (
    <Fragment>
      <h1>Student Page</h1>
      <p>This is the student page</p>
      <p>Student information</p>
      <p>Student grades</p>
      <p>Student attendance</p>
      <p>Student assignments</p>
      <p>Student exams</p>
      <p>Student projects</p>
      <p>Student extracurricular activities</p>
      <p>Student awards</p>
      <p>Student scholarships</p>
    </Fragment>
  )
}
export async function getServerSideProps(context: any) {
  return { props: { layout: true } }
}
export default Student
