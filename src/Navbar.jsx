import { Typography } from "@mui/material"

export default function Navbar()
{
  return(
    <div style={{display:"flex",
    justifyContent:"space-between",
    backgroundColor:"#3443eb"
    }}>
      <div style={{padding:"10px"}}>
      <Typography variant="h5" component="h5">
  Solar+
</Typography>
      </div>
      <div style={{padding:"10px"}}>
      <Typography variant="h5" component="h5">
      Anomoloy Detection
</Typography>
      </div>
    </div>
  )
}