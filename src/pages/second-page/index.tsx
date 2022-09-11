import React, { useState, useEffect } from 'react'

const EmployeelistFun = () => {
  const [mobileDetails, setMobileDetails] = useState(null)
  useEffect(() => {
    getMobileDetails()
  }, [])
  const getMobileDetails = () => {
    fetch('https://admin.nixby.in/MobileMaster/MobileFetch.php?fetchmobile=Samsung%20Galaxy%20S22')
      .then(res => res.json())
      .then(
        result => {
          setMobileDetails(result)
        },
        error => {
          setMobileDetails(null)
        }
      )
  }
  if (!mobileDetails) return <div>No Record Found</div>
  return <div>{mobileDetails.modelname}</div>
}
export default EmployeelistFun
