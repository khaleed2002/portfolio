import { skills } from '../data'
import Title from './Title'
import SkillCard from './SkillCard'
const Skills = () => {
  return (
    <section className="align-element py-16 bg-slate-50" id="skills">
      <Title text="Skills" />
      <div className="  grid md:grid-cols-2 lg:grid-cols-3 py-16 w-full gap-8">
        {skills.map((skill) => {
          return <SkillCard key={skill.id} {...skill} />
        })}
      </div>
    </section>
  )
}
export default Skills
