import Map from "./Map"

export default function Home()
{
  return(
    <div style={{
      display:"flex",
      height:"100vh",
      width:"100vw"
      }}>
      <Map/>
      <div style={{width:"50%"}}>
      </div>
      
    </div>
  )
}