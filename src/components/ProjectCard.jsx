import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
const ProjectCard = ({ img, url, github, title, text }) => {
  return (
    <li className=" overflow-hidden rounded-t-lg bg-white drop-shadow-lg hover:drop-shadow-2xl duration-300">
      <img src={img} alt="Project preview img" className="w-full" />
      <div className=" p-8 flex flex-col gap-8 ">
        <h3 className=" font-bold text-xl capitalize">{title}</h3>
        <p className=" text-slate-700">{text}</p>
        <div className="flex gap-4">
          <a href={url}>
            <TbWorldWww className="icon" />
          </a>
          <a href={github}>
            <FaGithubSquare className="icon" />
          </a>
        </div>
      </div>
    </li>
  )
}
export default ProjectCard
