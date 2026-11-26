import react3dicon from "../../../public/icons/3D/floating/reacticon.png"
import express3dicon from "../../../public/icons/3D/floating/expressicon.png"
import git3dicon from "../../../public/icons/3D/floating/giticon.png"
import js3dicon from "../../../public/icons/3D/floating/javascripticon.png"
import node3dicon from "../../../public/icons/3D/floating/nodejsicon.png"
import tailwind3dicon from "../../../public/icons/3D/floating/tailwindicon.png"
import ts3dicon from "../../../public/icons/3D/floating/typescripticon.png"
import Avatar from "../Avatar/Avatar";

const Illustration = () => {
  return (
    <div className="relative illustration w-full flex justify-center items-center">
      <Avatar className="z-100" />
      <img
        src={react3dicon}
        className="absolute top-0 left-70 w-35 rotate-12"
      />
      <img src={express3dicon} className="absolute top-110 left-85 w-35" />
      <img src={git3dicon} className="absolute top-50 left-170 w-25 z-0" />
      <img src={tailwind3dicon} className="absolute top-30 left-55 w-35" />
      <img src={node3dicon} className="absolute top-0 left-160 w-35" />
      <img src={ts3dicon} className="absolute top-85 left-170 w-35 rotate-12" />
      <img src={js3dicon} className="absolute top-75 left-60 w-35 rotate-12" />
    </div>
  );
};

export default Illustration;
