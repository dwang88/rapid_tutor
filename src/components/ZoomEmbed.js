import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ZoomEmbed = () => {
  const { meetingId } = useParams();
  const zoomUrl = `https://zoom.us/wc/join/${meetingId}`;

  useEffect(() => {
    // Request camera and microphone permissions
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        // Permissions granted
        const iframe = document.getElementById('zoom-iframe');
        iframe.allow = 'camera; microphone; fullscreen; speaker; display-capture';
      })
      .catch((error) => {
        // Handle error or permissions denied
        console.error('Permissions denied or error: ', error);
      });
  }, []);

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <iframe
        id="zoom-iframe"
        src={zoomUrl}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Zoom Meeting"
        allow="camera; microphone; fullscreen; speaker; display-capture"
      />
    </div>
  );
};

export default ZoomEmbed;
