import { Project } from "./Project"

export const Projects = () => {
  return (
    <section className="pt-5 pb-5">
        <div className="grid gap-8 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
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
