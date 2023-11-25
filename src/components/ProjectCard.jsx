import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
const ProjectCard = ({ id, img, url, github, title, technologies }) => {
  return (
    <li className=" overflow-hidden rounded-t-lg bg-white drop-shadow-lg hover:drop-shadow-2xl duration-300">
      <img
        src={img}
        alt="Project preview img"
        className="w-full h-64 object-cover"
      />
      <div className=" p-8 flex flex-col gap-8">
        <h3 className=" font-bold text-2xl capitalize tracking-wide">{title}</h3>
        <div className="flex flex-wrap gap-4">
          {technologies.map((t) => {
            return (
              <p key={id} className=" rounded-xl bg-red-800 text-white p-2">
                {t}
              </p>
            )
          })}
        </div>
        <div className="flex gap-4">
          <a href={url} target="_blank">
            <TbWorldWww className="icon" />
          </a>
          <a href={github} target="_blank">
            <FaGithubSquare className="icon" />
          </a>
        </div>
      </div>
    </li>
  )
}
export default ProjectCard
