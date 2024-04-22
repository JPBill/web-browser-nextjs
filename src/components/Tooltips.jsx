import { CameraIcon, MicrophoneIcon } from '@heroicons/react/outline';

export default function Tooltips() {
  return (
    <div className="hidden sm:inline-flex">
      <div className="relative flex flex-col items-center group">
        <MicrophoneIcon className="w-5 h-5 text-gray-200 ml-0 sm:ml-3 cursor-pointer" />
        <div className="absolute top-1 pl-2.5 flex-col items-center hidden mt-6 group-hover:flex">
          <div className="w-3 h-3 -mb-2 rotate-45 bg-[#171717]" />
          <span className="relative text-center w-[120px] z-10 p-2 text-[10px] leading-none text-gray-200 font-bold bg-[#171717] rounded-lg shadow-lg">
            Búsqueda por voz
          </span>
        </div>
      </div>

      <div className="relative flex flex-col items-center group">
        <CameraIcon className="w-5 h-5 sm:ml-3 text-gray-200 cursor-pointer" />
        <div className="absolute top-1 pl-2.5 flex-col items-center hidden mt-6 group-hover:flex">
          <div className="w-3 h-3 -mb-2 rotate-45 bg-[#171717]" />
          <span className="relative text-center w-[130px] z-10 p-2 text-[10px] leading-none text-gray-200 font-bold bg-[#171717] rounded-lg shadow-lg">
            Búsqueda por imagen
          </span>
        </div>
      </div>
    </div>
  );
}
