import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEnquiry } from "../reducers/enquiry";

const Enquiry = () => {
  const enquiry = useSelector((state) => state.enquiry.enquiry);
  console.log(enquiry);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEnquiry());
  }, [dispatch]);

  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-xs-12'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Comment</th>
              </tr>
            </thead>
            <tbody>
              {enquiry && enquiry.length === 0 && (
                <tr>
                  <th colSpan={4} style={{ textAlign: "center" }}>
                    No enquiry found.
                  </th>
                </tr>
              )}
              {enquiry &&
                enquiry.map((e, i) => (
                  <tr key={i}>
                    <th scope='row'>{i + 1}</th>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.comment}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
