// src/components/ZoomEmbed.js

import React from 'react';
import { useParams } from 'react-router-dom';

const ZoomEmbed = () => {
  const { meetingId } = useParams();
  const zoomUrl = `https://zoom.us/wc/join/${meetingId}`;

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <iframe
        src={zoomUrl}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Zoom Meeting"
        allow="camera; microphone; fullscreen; speaker; display-capture"
      />
    </div>
  );
};

export default ZoomEmbed;
