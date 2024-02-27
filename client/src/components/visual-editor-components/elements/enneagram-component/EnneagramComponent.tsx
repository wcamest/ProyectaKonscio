import React from "react";

type Props = {};

const EnneagramComponent = (props: Props) => {
  const svgStyle: any = {
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "1.5",
  };

  const pathStyle = {
    fill: "none",
    stroke: "#00a0ff",
    strokeWidth: "8px",
  };

  const circleStyle = {
    fill: "#fff",
    stroke: "#00a0ff",
    strokeWidth: "8px",
  };

  return (
    <div className="px-20 py-40 flex justify-center items-center bg-sky-100">
      <div className="relative max-w-96 scale-125">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 500 800"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlSpace="preserve"
        >
          <g id="Mesa-de-trabajo11">
            <g id="Eneagrama">
              <g>
                <path d="M443.577,135.255l-387.154,0" style={pathStyle} />
                <path d="M375.255,425.62l-250.51,-1.423" style={pathStyle} />
                <path d="M250,49.854l0,691.752" style={pathStyle} />
                <path d="M250,49.854l-193.577,85.401" style={pathStyle} />
                <path d="M250,49.854l193.577,85.401" style={pathStyle} />
                <path d="M443.577,135.255l-193.577,78.285" style={pathStyle} />
                <path d="M56.423,135.255l193.577,78.285" style={pathStyle} />
                <path d="M250,344.489l-125.255,79.708" style={pathStyle} />
                <path d="M250,344.489l125.255,79.708" style={pathStyle} />
                <path d="M375.255,424.197l-125.255,92.518" style={pathStyle} />
                <path d="M124.745,424.197l125.255,92.518" style={pathStyle} />
                <path d="M56.423,135.255l68.322,288.942" style={pathStyle} />
                <path d="M443.577,135.255l-68.322,290.365" style={pathStyle} />
              </g>
            </g>
          </g>
        </svg>
        <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center">
          <div className="-mt-10 flex justify-center">
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="px-2 py-1 text-center text-xs text-sky-600 bg-white border border-solid border-sky-600 rounded-md opacity-50">
                Educación
                <br />
                consciente
              </span>
              <div className="p-5 border-4 border-solid border-sky-600 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="-mt-10 w-full flex justify-between">
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="px-2 py-1 text-center text-xs text-sky-600 bg-white border border-solid border-sky-600 rounded-md opacity-50">
                Educación
                <br />
                consciente
              </span>
              <div className="p-3 border-4 border-solid border-sky-600 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="px-2 py-1 text-center text-xs text-sky-600 bg-white border border-solid border-sky-600 rounded-md opacity-50">
                Educación
                <br />
                consciente
              </span>
              <div className="p-3 border-4 border-solid border-sky-600 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="-mt-11 flex justify-center">
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="px-2 py-1 text-center text-xs text-sky-600 bg-white border border-solid border-sky-600 rounded-md opacity-50">
                Educación
                <br />
                consciente
              </span>
              <div className="p-4 border-4 border-solid border-sky-600 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="-mt-3 flex justify-center">
            <div className="mt-2 flex flex-col justify-center items-center gap-2">
              <span className="px-2 py-1 text-center text-xs text-sky-600 bg-white border border-solid border-sky-600 rounded-md opacity-50">
                Educación
                <br />
                consciente
              </span>
              <div className="p-4 border-4 border-solid border-sky-600 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="-mt-11 px-10 w-full flex justify-between">
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="px-2 py-1 text-center text-xs text-sky-600 bg-white border border-solid border-sky-600 rounded-md opacity-50">
                Educación
                <br />
                consciente
              </span>
              <div className="p-3 border-4 border-solid border-sky-600 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="px-2 py-1 text-center text-xs text-sky-600 bg-white border border-solid border-sky-600 rounded-md opacity-50">
                Educación
                <br />
                consciente
              </span>
              <div className="p-3 border-4 border-solid border-sky-600 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="-mt-10 flex justify-center">
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="px-2 py-1 text-center text-xs text-sky-600 bg-white border border-solid border-sky-600 rounded-md opacity-50">
                Educación
                <br />
                consciente
              </span>
              <div className="p-5 border-4 border-solid border-sky-600 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="mt-4 px-2 py-1 text-center text-xs text-sky-600 bg-white border border-solid border-sky-600 rounded-md opacity-50">
                Educación
                <br />
                consciente
              </span>
              <div className="p-6 border-4 border-solid border-sky-600 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnneagramComponent;
