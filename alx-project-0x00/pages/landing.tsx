import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <div className="flex gap-4 my-6">
        <Button title="Small Rounded-sm" className="rounded-sm" />
        <Button title="Medium Rounded-md" className="rounded-md" />
        <Button title="Large Rounded-lg" className="rounded-lg" />
        <Button title="Full Rounded-full" className="rounded-full" />
      </div>
      <Card />
    </div>
  )
}
export default Landing