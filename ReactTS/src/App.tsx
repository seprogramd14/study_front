function MyButton({title}: {title: string}) {
  return (
    <button>
      {title}
    </button>
  )
}

interface MyButtonProps {
  title: string
  disabled: boolean
}

function MyButton2({title, disabled}: MyButtonProps) {
  return (
    <button disabled={disabled}>{title}</button>
  )
}

export function App() {
  return (
    <div className="app">
      <h1>Hello Bun + TypeScript + React</h1>
      <MyButton title={"I'm a button"}/>
      <div>
        <MyButton2 title={"I'm a disabled button"} disabled={true} />
      </div>
    </div>
  );
}

export default App;
