import Button from "./components/ui/Button/Button"
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
      Welcome to Consulting App 🌟
  <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline" size="lg">Outline Large</Button>
    </div>
  )
}