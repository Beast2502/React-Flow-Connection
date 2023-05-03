import { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

function TextUpdaterNode({ data, isConnectable }) {

    const [userName , setUser]  = useState("");
    const [password,setPass] = useState("");


  const handleName = useCallback((e) => {
    setUser(e.target.value)
  }, []);

  const handlePassWord = useCallback((e) => {
    setPass(e.target.value)
  }, []);

  function onSubmit (e){
    e.preventDefault();
    console.log(userName, password ,"CHECKK")
  }
  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div>
        <label htmlFor="text">{data.label}</label>
        <input id="text" name="text" onChange={handleName} className="nodrag" placeholder='USERNAME' />
        <input id="password" type='text' onChange={handlePassWord} className='"nodrag' placeholder='PASSWORD' />
        <button onClick={onSubmit}>Connection Start</button>
      </div>
     
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default TextUpdaterNode;
