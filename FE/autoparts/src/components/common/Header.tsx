import { CONTACT } from "../../constants";
import { headerProps } from "../../interfaces";

const Header: React.FunctionComponent<headerProps> = ({
  title,
  bg_pic,
  subtitle,
  call_us_at,
  description,
}) => {
  return (
    <div
      className="h-[75vh] bg-cover bg-center relative" // Adjust the height and remove padding-top for better centering
      style={{
        backgroundImage: `url(${bg_pic})`,
        opacity: "85%",
      }}
    >
      {/* Content centered within the background */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <p className="text-[#1b3b77] font-bold mb-4">{subtitle}</p>
        <h1 className="text-[#0f1c35] text-5xl font-bold mb-4">{title}</h1>
        <p className="text-[#1b3b77] font-semibold text-center">
          {description}
        </p>
        <button className="bg-[#0f1c35] text-white font-bold py-2 px-6 rounded-md hover:bg-[#1b3b77] transition duration-300 mt-4">
          {call_us_at}: {CONTACT.PHONE_NUMBER}
        </button>
      </div>
    </div>
  );
};

export default Header;
