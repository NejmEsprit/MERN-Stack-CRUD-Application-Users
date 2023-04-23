import React, { useEffect, useState } from 'react'
import InputGroup from '../components/InputGroup'
import RowDetails from '../components/RowDetails'
import axios from 'axios'
import Alert from '../components/Alert';

function Home() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post('/api/users', form)
      .then(res => {
        setMessage(res.data.message)
        /* hide form after save */
        setForm({})
        /* hide errors after save */
        setErrors({})
        setShow(true)

        setTimeout(() => {
          setShow(false)
        }, 4000);
      })
      .catch(err => setErrors(err.response.data))

  }


  const getUsers = async () => {
    const users = await axios.get('/api/users/');
    setUsers(users.data);
  };
  useEffect(() => {
    getUsers();
    // console.log('aaaaaaaaaaaaaaa')
  });

  // useEffect( () => {
  //   const all =async()=>{
  //   const users = await axios.get("/api/users").then((users) => {
  //     setUsers(users.data);
  //   });}
  //   all()
  // },[]);

  // useEffect(async () => {
  //   await axios.get("/api/users").then((res) => {
  //     setUsers(res.data);
  //   });
  // });
  const OnDelete = (myid) => {
    if (window.confirm("are you sure to delete this user")) {
      axios.delete(`/api/users/${myid}`)
        .then(res => {
          setMessage('delet with succes')
          setShow(true)
          setTimeout(() => {
            setShow(false)
          }, 4000);
        })
    }
  }
  return (
    <div className="row p-4">
      <Alert message={message} show={show} />
      {/* <Alert message={message} show={show} /> */}
      <div className="mt-4">
        <h2>Crud Users</h2>
      </div>
      <div className="col-12 col-lg-4">
        <form onSubmit={onSubmitHandler}>
          <InputGroup
            label="Email"
            type="text"
            name="Email"
            onChangeHandler={onChangeHandler}
            errors={errors.Email}
          />
          <InputGroup
            label="LastName"
            type="text"
            name="LastName"
            onChangeHandler={onChangeHandler}
            errors={errors.LastName}
          />
          <InputGroup
            label="FirstName"
            type="text"
            name="FirstName"
            onChangeHandler={onChangeHandler}
            errors={errors.FirstName}
          />
          <InputGroup
            label="Age"
            type="text"
            name="Age"
            onChangeHandler={onChangeHandler}
            errors={errors.Age}
          />
          <button className="btn btn-primary" type="submit">Add user</button>
        </form>
      </div>
      <div className="col-12 col-lg-7">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">LastName</th>
              <th scope="col">FirstName</th>
              <th scope="col">Age</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ Email, LastName, FirstName, Age, _id }) => (
              <RowDetails
                Email={Email}
                LastName={LastName}
                FirstName={FirstName}
                Age={Age}
                Id={_id}
                OnDelete={OnDelete}
              // OnDelete={OnDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home