import React from 'react';

function DangerousHTMLComponent({ htmlContent }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default DangerousHTMLComponent;
