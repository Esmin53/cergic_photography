import Banner from "@/components/admin/Banner"
import Collections from "@/components/admin/Collections"
import Navbar from "@/components/admin/Navbar"

const page = () => {
  return (
    <div className="flex flex-col flex-1 bg-background text-text text-base font-mono min-h-screen dark">
        <Navbar />
        <Banner />
        <Collections title={"Svadbe"} category="svadbe"/>
        <Collections title={"Portreti"} category="portreti"/>
        <Collections title={"Eventi"} category="eventi"/>
    </div>
  )
}

export default page