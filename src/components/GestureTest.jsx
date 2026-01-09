import React, { useEffect, useRef, useState } from "react";
import { HandLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

const GestureTest = ({onLeft, onRight}) => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const handLandmarkerRef = useRef(null);

    const smoothPos = useRef({ x: 0, y: 0 });
    const prevYRef = useRef(null);
    const prevTimeRef = useRef(null);

    const [loading, setLoading] = useState(true);
    const [gestureEnabled, setGestureEnabled] = useState(false);

    // CLICK function
    const simulateClick = (x, y) => {
        const el = document.elementFromPoint(x, y);
        if (el) el.click();
    };

    // Load model once
    useEffect(() => {
        const loadModel = async () => {
            const vision = await FilesetResolver.forVisionTasks(
                "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
            );

            handLandmarkerRef.current = await HandLandmarker.createFromOptions(vision, {
                baseOptions: {
                    modelAssetPath:
                        "https://storage.googleapis.com/mediapipe-assets/hand_landmarker.task",
                },
                runningMode: "VIDEO",
                numHands: 1,
            });

            setLoading(false);
        };

        loadModel();
    }, []);

    // Start/Stop camera when toggled
    useEffect(() => {
        if (gestureEnabled) startCamera();
        else stopCamera();
    }, [gestureEnabled]);

    // Start camera
    const startCamera = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        videoRef.current.onloadeddata = () => detectHands();
    };

    // Stop camera
    const stopCamera = () => {
        const stream = videoRef.current?.srcObject;
        if (stream) {
            stream.getTracks().forEach((track) => track.stop());
            videoRef.current.srcObject = null;
        }
    };

    // Hand detection loop
    const detectHands = async () => {
        if (!gestureEnabled) return;

        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const detect = () => {
            if (!gestureEnabled) return;

            const result = handLandmarkerRef.current.detectForVideo(
                video,
                performance.now()
            );

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (result.landmarks && result.landmarks.length > 0) {
                const hand = result.landmarks[0];

                // --- Draw Hand Dots ---
                hand.forEach((p) => {
                    ctx.beginPath();
                    ctx.arc(p.x * canvas.width, p.y * canvas.height, 5, 0, 2 * Math.PI);
                    ctx.fillStyle = "red";
                    ctx.fill();
                });

                // =============================
                //      SWIPE SCROLL LOGIC
                // =============================
                const currentY = hand[9].y; // Middle of hand
                const currentTime = performance.now();

                if (prevYRef.current !== null && prevTimeRef.current !== null) {
                    const deltaY = prevYRef.current - currentY;
                    const deltaTime = (currentTime - prevTimeRef.current) / 1000;
                    const speed = Math.abs(deltaY / deltaTime);

                    // MUCH more sensitive
                    const speedThreshold = 2;

                    // Debugging (optional)
                    console.log("Swipe Speed:", speed);

                    if (speed > speedThreshold) {
                        if (deltaY > 0) {
                            console.log("Swipe UP → Scroll DOWN");
                            window.scrollBy(0, 300);
                        } else {
                            console.log("Swipe DOWN → Scroll UP");
                            window.scrollBy(0, -300);
                        }
                    }

                    if (speed > speedThreshold) {
                        if (deltaY > 0) {
                            console.log("Swipe UP → Scroll DOWN");
                            window.scrollBy(0, 300);
                        } else {
                            console.log("Swipe DOWN → Scroll UP");
                            window.scrollBy(0, -300);
                        }
                    }
                }

                prevYRef.current = currentY;
                prevTimeRef.current = currentTime;

                // =============================
                //      VIRTUAL CURSOR
                // =============================
                const indexTip = hand[8];

                const cursorX = indexTip.x * window.innerWidth;
                const cursorY = indexTip.y * window.innerHeight;

                smoothPos.current.x = smoothPos.current.x * 0.7 + cursorX * 0.3;
                smoothPos.current.y = smoothPos.current.y * 0.7 + cursorY * 0.3;

                const cursor = document.getElementById("gesture-cursor");
                cursor.style.left = smoothPos.current.x + "px";
                cursor.style.top = smoothPos.current.y + "px";

                // =============================
                //       PINCH CLICK
                // =============================
                const thumbTip = hand[4];
                const dx = thumbTip.x - indexTip.x;
                const dy = thumbTip.y - indexTip.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const clickThreshold = 0.03;

                if (!window.isPinching) window.isPinching = false;

                if (distance < clickThreshold && !window.isPinching) {
                    window.isPinching = true;
                    simulateClick(smoothPos.current.x, smoothPos.current.y);
                }

                if (distance > clickThreshold) window.isPinching = false;
            }

            requestAnimationFrame(detect);
        };

        detect();
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Swipe-Based Gesture Control</h2>

            {loading && <p>Loading Model...</p>}

            <button
                onClick={() => setGestureEnabled(!gestureEnabled)}
                style={{
                    padding: "10px 20px",
                    backgroundColor: gestureEnabled ? "red" : "green",
                    color: "white",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    marginBottom: "20px",
                    marginTop: "10px",
                }}
            >
                {gestureEnabled ? "Disable Gesture Mode" : "Enable Gesture Mode"}
            </button>

            {/* Video + Canvas */}
            {gestureEnabled && (
                <div style={{ position: "relative", display: "inline-block" }}>
                    <video ref={videoRef} autoPlay style={{ width: 600 }} />
                    <canvas
                        ref={canvasRef}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            pointerEvents: "none",
                        }}
                    />
                </div>
            )}

            {/* Cursor */}
            {gestureEnabled && (
                <div
                    id="gesture-cursor"
                    style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "blue",
                        position: "fixed",
                        borderRadius: "50%",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        pointerEvents: "none",
                        zIndex: 9999,
                    }}
                ></div>
            )}

            <div style={{ height: "20vh" , backgroundColor: "red"}}></div>
        </div>
    );
}

export default GestureTest;
