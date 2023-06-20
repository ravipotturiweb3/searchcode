import React, { useState } from 'react';
import SchoolSoulSbt from './sbts/SchoolSoulSbt'
import StudentAffiliationSbt from "./sbts/StudentAffilicationSbt"
import StudentSoulIDSbt from './sbts/StudentSoulIDSbt'
import user from './sbts/Studentsbt'


function Main({ contractType }) {
  const [selectedContract, setSelectedContract] = useState(contractType);
  const [searchId, setSearchId] = useState("");
  const [contractData, setContractData] = useState(null);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedContract(selectedValue);
  };

  const handleInputChange = (event) => {
    const searchValue = event.target.value.trim();
    setSearchId(searchValue);
  };

  const handleSearchClick = async () => {
    let result;

    if (selectedContract === "SchoolSoulSbt") {
      result = await SchoolSoulSbt(searchId);
    } else if (selectedContract === "StudentAffiliationSbt") {
      result = await StudentAffiliationSbt(searchId);
    } else if (selectedContract === "StudentSoulIDSbt") {
      result = await StudentSoulIDSbt(searchId);
    } else if (selectedContract === "user") {
      result = await user(searchId);
    }

    if (result) {
      setContractData(result);
    }
  };

  // console.log(contractData)
  // console.log(selectedContract)


    return (
      
        <div>
   <select onChange={handleSelectChange} value={selectedContract}>
        <option value="">select</option>
        <option value="SchoolSoulSbt">SchoolSoulSbt</option>
        <option value="StudentAffiliationSbt">StudentAffiliationSbt</option>
        <option value="StudentSoulIDSbt">StudentSoulIDSbt</option>
        <option value="user">StudentSbtID</option>
      </select>
      
        <div>
          <input type="text" value={searchId} onChange={handleInputChange} />
          <button onClick={handleSearchClick}>Search</button>
        </div>
        <div>
     

        
        {contractData ? (
    <div>
        <h2>Contract Data:</h2>
        {Object.keys(contractData).map((key) => (
            <div key={key} style={{ display: "flex", flexDirection: "column", margin: "5px 0" }}>
                <strong style={{ marginBottom: "5px" }}>{key}:</strong>
                <span>
                    {typeof contractData[key] === "object"
                        ? Object.values(contractData[key]).join(", ")
                        : contractData[key]}
                </span>
            </div>
        ))}
    </div>
) : (
    <p>No data available.</p>
)}




{/* {contractData && (
  <div>
    {selectedContract === "StudentSoulIDSbt" && (
      <div>
           <p>StudentFirstName: {contractData.StudentFirstName}</p>
              <p>StudentLastName: {contractData.StudentLastName}</p>
              <p>Gender: {contractData.Gender}</p>
              <p>DateOfBirth: {contractData.DateOfBirth}</p>
              <p>BloodGroup: {contractData.BloodGroup}</p>
              <p>SoulID: {contractData.SoulID}</p>
              <p>SBTtype: {contractData.SBTtype}</p>
              <p>SBTId: {contractData.SBTId}</p>
              <p>walletaddress: {contractData.walletaddress}</p>
              <p>IssuedDate: {contractData.IssuedDate}</p>
              <p>IssuedBy: {contractData.IssuedBy}</p>
              <p>City: {contractData.City}</p>
              <p>Country: {contractData.Country}</p>
      </div>
    )}
    {selectedContract === "StudentAffiliationSbt" && (
      <div>
       <p>StudentFirstName: {contractData.StudentFirstName}</p>
              <p>StudentLastName: {contractData.StudentLastName}</p>
              <p>Gender: {contractData.Gender}</p>
              <p>DateOfBirth: {contractData.DateOfBirth}</p>
              <p>BloodGroup: {contractData.BloodGroup}</p>
              <p>SoulID: {contractData.SoulID}</p>
              <p>SBTtype: {contractData.SBTtype}</p>
              <p>SBTId: {contractData.SBTId}</p>
              <p>walletaddress: {contractData.walletaddress}</p>
              <p>IssuedDate: {contractData.IssuedDate}</p>
              <p>IssuedBy: {contractData.IssuedBy}</p>
              <p>IssuedSchoolName: {contractData.IssuedSchoolName}</p>
              <p>SchoolAdmissionID: {contractData.SchoolAdmissionID}</p>
              <p>SchoolSoulID: {contractData.SchoolSoulID}</p>
              <p>ValidityStartDate: {contractData.ValidityStartDate}</p>
              <p>ValidityEndDate: {contractData.ValidityEndDate}</p>
      </div>
    )}
      {selectedContract === "SchoolSoulSbt" && (
      <div>
        <p>SchoolName:{contractData.SchoolName}</p>
                    <p>SoulID:{contractData.SoulID}</p>
                    <p>SBTId:{contractData.SBTId}</p>
                    <p>Syllabus:{contractData.Syllabus}</p>
                    <p>SBTtype:{contractData.SBTtype}</p>
                    <p>DateofIncorportation:{contractData.DateofIncorportation}</p>
                    <p>walletaddress:{contractData.walletaddress}</p>
                    <p>IssuedDate:{contractData.IssuedDate}</p>
                    <p>IssuedBy:{contractData.IssuedBy}</p>
                    <p>Area:{contractData.Area}</p>
                    <p>Country:{contractData.Country}</p>
                    <p>Pincode:{contractData.Pincode}</p>
                    <p>Website:{contractData.Website}</p>
                    <p>RegistrationNumber:{contractData.RegistrationNumber}</p>
                    <p>AffilitedTo:{contractData.AffilitedTo}</p>
                    <p>City:{contractData.City}</p>
      </div>
    )}
      {selectedContract === "user" && (
      <div>
         <p >SBT ID: {contractData.SBTId}</p><br/>
                    <p >First Name: {contractData.StudentFirstName}</p><br/>
                    <p >LastName: {contractData.StudentLastName}</p><br/>
                    <p >Award : {contractData.AwardName}</p><br/>
                    <p >Awards sub category:{contractData.AwardSubCategory}</p><br/>
                    <p >Sbt type : {contractData.SbtType}</p><br/>
                    <p >Soul Id : {contractData.SoulId}</p><br/>
                    <p >Parent soulid : {contractData.ParentSoulId}</p><br/>
                    <p >DOB : {contractData.DOB}</p><br/>
                    <p >EmailAddress: {contractData.emailAddress}</p><br/>
                    <p >Walletaddress: {contractData.walletaddress}</p><br/>
                    <p >IssuedDate: {contractData.IssuedDate}</p><br/>
                    <p >IssuedBy: {contractData.IssuedBy}</p><br/>
                    <p >IssuedSchool: {contractData.IssuedSchool}</p><br/>
                    <p >SchoolAdmissionID: {contractData.SchoolAdmissionID}</p><br/>
                    <p >SchoolSoulID: {contractData.SchoolSoulID}</p>
      </div>
    )}
  </div>
)} */}







    </div>
      </div>
      
      
    );
  }
  
  export default Main;
  