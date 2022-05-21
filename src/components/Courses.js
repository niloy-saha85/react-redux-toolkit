import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourses, selectCourses } from "../reducers/course";
import { addEnquiry } from "../reducers/enquiry";

const postEnquiry = async (data) => {
  const resp = await fetch("http://localhost:5000/enquiry", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await resp.json();
};

const Courses = () => {
  const courses = useSelector(selectCourses);
  const dispatch = useDispatch();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [inputs, setInputs] = useState({});
  const [frmError, setFrmError] = useState(false);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  const handleChange = ({ target: { name, value } }) => {
    setFrmError("");
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const enquirySubmit = async (e) => {
    e.preventDefault();
    setFrmError("");
    if (!inputs.name || !inputs.email || !inputs.comment)
      return setFrmError("Please enter all details");
    try {
      await postEnquiry(inputs);
      dispatch(addEnquiry(inputs));
      setTimeout(() => {
        setInputs({});
        setSelectedCourse(null);
        setFrmError("");
      }, 3000);
    } catch (error) {
      console.error(error);
      setFrmError("Error posting new enquiry");
    }
  };

  return (
    <div className='container mt-3'>
      <div className='row'>
        {courses &&
          courses.map((e) => {
            return (
              <div className='col-3 mb-4' key={e.id}>
                <div className='card'>
                  <div className='card-body'>
                    <h5 className='card-title'>{e.title}</h5>
                    <h6 className='card-subtitle mb-2 text-muted'>
                      {e.author}
                    </h6>
                    <p className='card-text'>{e.desc}</p>
                    <button
                      type='button'
                      className='btn btn-outline-primary'
                      onClick={() => setSelectedCourse(e)}
                    >
                      Enquiry
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {selectedCourse && (
        <div className='row'>
          <div className='col-3 mt-4 mx-auto'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-success mx-auto'>
                  Enquiry For: {selectedCourse.title}
                </h5>
                {frmError && <p className='text-danger mx-auto'>{frmError}</p>}
                <form onSubmit={enquirySubmit}>
                  <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>
                      Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      onChange={handleChange}
                      className='form-control'
                      id='name'
                      aria-describedby='nameHelp'
                    />
                    {/* <div id="nameHelp" className="form-text">Please enter your name</div> */}
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>
                      Email
                    </label>
                    <input
                      type='text'
                      name='email'
                      onChange={handleChange}
                      className='form-control'
                      id='email'
                      aria-describedby='emailHelp'
                    />
                    {/* <div id="emailHelp" className="form-text">Please enter your email</div> */}
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='comment' className='form-label'>
                      Comment
                    </label>
                    <input
                      type='textarea'
                      rows='4'
                      onChange={handleChange}
                      name='comment'
                      className='form-control'
                      id='comment'
                      aria-describedby='commentHelp'
                    />
                    {/* <div id="commentHelp" className="form-text">Please enter your query</div> */}
                  </div>
                  <button type='submit' className='btn btn-primary float-right'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
