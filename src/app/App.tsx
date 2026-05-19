import TechStackSection from "./components/TechStackSection"

export default function App() {
  window.__AppRendered = true

  return (
    <div className="size-full flex items-center justify-center">
      <TechStackSection />
    </div>
  )
}