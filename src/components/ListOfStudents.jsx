import React from "react";

const ListOfStudents = (props) => {

    const deleteStudent = (name) => {
        const filteredStudents = props.students.filter(student => student.name !== name)
        props.setList(filteredStudents)
    }
    return (
        <div>
            <br /><br />
            <div class="vstack gap-3">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">LastName</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.students.map((student, index) =>
                            <tr key={index}>
                                <td>{student.name}</td>
                                <td>{student.lastName}</td>
                                <td><button type="button" class="btn btn-danger" onClick={() => deleteStudent(student.name)}>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListOfStudents