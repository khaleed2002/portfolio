import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import heroImg from '../assets/hero.svg'
const Hero = () => {
  return (
    <main className=" bg-emerald-100 ">
      <div className="align-element grid md:grid-cols-2 py-24 items-center">
        <article className="flex flex-col gap-4">
          <h1 className="text-7xl font-bold tracking-wider">I'm Khaled</h1>
          <p className=" capitalize text-slate-700 text-3xl">
            Software Engineer
          </p>
          <p className=" text-slate-700 text-lg">
            Code lover with passion about Algorithms, Datastructure and AI
            Technologies
          </p>
          <ul className="flex gap-2">
            <li>
              <a
                href="https://www.linkedin.com/in/khaleed2002/"
                target="_blank"
              >
                <FaLinkedin className="icon" />
              </a>
            </li>
            <li>
              <a href="https://github.com/khaleed2002" target="_blank">
                <FaGithubSquare className="icon" />
              </a>
            </li>
          </ul>
        </article>
        <article className="hidden md:grid place-content-center">
          <img src={heroImg} alt="" className="h-80 lg:h-96" />
        </article>
      </div>
    </main>
  )
}
export default Hero
