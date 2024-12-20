import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";


function Link({ subject, Icon, link }) {

  var icon;

  switch (Icon) {
    case 'FaInstagram':
      icon = <FaInstagram />;
      break;
    case 'FaGithub':
      icon = <FaGithub />;
      break;
    case 'FaLinkedin':
      icon = <FaLinkedin />;
      break;
    case 'FaDiscord':
      icon = <FaDiscord />;
      break;
  }




  return (
    <div className='link-element w-[100%] md:w-[50%] lg:w-[50%] h-[10%] mb-10 text-black bg-slate-100 font-bold text-2xl font-mono hover:bg-slate-200 '>
      <a className="h-[100%] flex items-center justify-center  gap-x-5" href={link}>
        {subject}
        {icon}
      </a>
    </div>
  );
}

export default Link;