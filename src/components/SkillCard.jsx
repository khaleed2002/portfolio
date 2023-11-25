const SkillCard = ({ icon, title,text }) => {
  return (
    <div className="flex flex-col gap-3">
      {icon}
      <h3 className="font-bold">{title}</h3>
      <p className=" text-slate-500">{text}</p>
    </div>
  )
}
export default SkillCard