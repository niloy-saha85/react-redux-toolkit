import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectEnquiry, selectEnquiryStatus } from "../reducers/enquiry";
import { GET_ENQUIRY } from "../saga/types";

let initial = true;

const Enquiry = () => {
  const enquiry = useSelector(selectEnquiry);
  const enquiryStatus = useSelector(selectEnquiryStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initial) {
      initial = false;
      dispatch({type: GET_ENQUIRY});
    }
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
              {enquiryStatus.error && (
                <tr>
                  <th colSpan={4} style={{ textAlign: "center" }}>
                    {enquiryStatus.errorMsg}
                  </th>
                </tr>
              )}
              {enquiryStatus.loading && (
                <tr>
                  <th colSpan={4} style={{ textAlign: "center" }}>
                    Loading...
                  </th>
                </tr>
              )}
              {enquiry && enquiry.length === 0 && !enquiryStatus.error && (
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
