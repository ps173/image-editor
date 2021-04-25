import React, { useEffect, useRef } from "react";

const FileInput = ({ value, ...rest }) => {
  const inputRef = useRef();
  
  useEffect(() => {
    if (value === "") {
      inputRef.current.value = "";
    } else {
      inputRef.current.files = value;
    }
  }, [value]);
  
  return <input {...rest} type="file" ref={inputRef} />;
};

export default FileInput;
