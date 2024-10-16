import React from "react";

const PreSaveButton = () => {
  const handlePreSave = () => {
    window.location.href = "/api/auth";
  };

  return (
    <button onClick={handlePreSave} className="btn-pre-save">
      Pre-Save Album
    </button>
  );
};

export default PreSaveButton;
