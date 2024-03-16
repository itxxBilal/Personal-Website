// CourseContent.js
import React from 'react';

const CourseContent = ({ fileId }) => {
  return (
    <div>
      <h2>Course Content</h2>
      <GoogleDriveViewer fileId={fileId} />
    </div>
  );
};

export default CourseContent;
