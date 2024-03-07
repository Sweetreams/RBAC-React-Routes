import { useState } from 'react'
import { question } from "../../quiz"

const AdminPage = () => {
  const [step, setStep] = useState(0)
  const [count, setCount] = useState(0)

  const {title, quizes, answer} = question[step]

  const handler = (index) => {
    if (index === answer) setCount(() => count + 1)
    setStep(() =>  step + 1)
  console.log(step)
  console.log(question.length)
  }

  return (
    <div>

        {
          step !== question.length - 1 ?
          <>
            <h1>{title}</h1>
            <ul>
              {quizes.map((el, index) => <li key={el.id} onClick={() => handler(index)}>{el}</li>)}
            </ul>
          </>
          : <><h1>Result: {count}</h1></>
        }

        
        
    </div>
  )
}

export default AdminPage