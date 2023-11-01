export const ToggleButton = ({setOpen}) => {
  return (
    <button onclick={()=> setOpen((prev) => !prev)}>ToggleButton</button>
  )
}
