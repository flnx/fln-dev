import { Project } from "./Project"

export const Projects = () => {
  return (
    <section className="pt-5 pb-5">
        <h2 className="text-3xl mb-5">Personal Projects</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    </section>
  )
}
