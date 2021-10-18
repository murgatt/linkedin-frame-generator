import React, { useState, useRef, useEffect } from "react"
import circle from '../images/circle.png';

const IndexPage = () => {
    const canvasRef = useRef(null);
    const [ctx, setCtx] = useState();
    const [fileUrl, setFileUrl] = useState();

    const handleChange = event => {
        const ctx = canvasRef.current.getContext('2d');
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setFileUrl(url);

            const img = new Image();
            img.src = url;
            img.onload = () => {
                ctx.drawImage(img, 0, 0, 400, 400);
            }
        }
    }

    useEffect(() => {
        setCtx(canvasRef.current.getContext('2d'));

        if (ctx) {
            const frame = new Image();
            frame.src = circle;
            frame.onload = () => {
                ctx.drawImage(frame, 0, 0, 400, 400);
            }
        }
    });

  return (
    <main>
        <title>Home Page</title>
        <input type="file" onChange={handleChange} accept="image/*" />
        <canvas ref={canvasRef} width="400" height="400" />
    </main>
  )
}

export default IndexPage
