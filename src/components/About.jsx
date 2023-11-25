import aboutImg from '../assets/about.svg'
import Title from './Title'
const About = () => {
  return (
    <section className="bg-white" id="about">
      <div className="grid md:grid-cols-2 py-16  align-element">
        <img src={aboutImg} alt="About img" className="w-full h-60 m-auto hidden md:block" />
        <div>
          <Title text="Tech Journey" />
          <p className=" text-slate-600 py-8">
            I'm Khaled Abdulrahman, a Computer Science and Artificial
            Intelligence graduate from Cairo University. My academic journey
            immersed me in programming fundamentals, emphasizing Object-Oriented
            Programming, Data Structures, Algorithms, Databases, and Networks
            using languages like C++, Java, and Python.
            <br />
            <br />
            Post-graduation, my passion for technology led me to specialize in
            web development as a MERN stack developer. In 2022, I secured an
            MCIT Online Scholarship, deepening my expertise in Node.js and
            Express. I furthered my skills through specialized Udemy courses,
            mastering MongoDB and React technologies like Hooks, Query, Router,
            Redux Toolkit, and Tailwind CSS.
            <br />
            <br />
            My commitment to technological advancements, coupled with hands-on
            learning, positions me as an adaptable professional in web
            development. Excited to contribute to innovative projects, I
            continually expand my expertise in this dynamic industry.
          </p>
        </div>
      </div>
    </section>
  )
}
export default About
