
export default function Stack({ stacks }) {
  return (
    <div className="
    flex
    flex-row
    flex-wrap
    justify-start
    items-baseline
    gap-2
    ">
      {stacks.map(stack  => {
        return <p 
        className="
        font-oswald
        text-sm
        text-green
        " 
        key={ stack }
        >
          { stack }
        </p>;
      })}
    </div>
  )
}