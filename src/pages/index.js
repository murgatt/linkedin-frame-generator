import React, { useState } from "react"

const IndexPage = () => {
    const [fileUrl, setFileUrl] = useState();

    const handleChange = event => {
        const file = event.target.files[0];
        setFileUrl(URL.createObjectURL(file));
    }

  return (
    <main>
        <title>Home Page</title>
        <input type="file" onChange={handleChange} accept="image/*" />
        <img src={fileUrl} alt="Profile Picture" />
    </main>
  )
}

export default IndexPage
