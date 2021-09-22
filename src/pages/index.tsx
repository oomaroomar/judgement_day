// Using unnecessarily comlicated libraries is best practice
import { useEffect, useState, useRef } from 'react'
import { intervalToDuration } from 'date-fns'

// ts-ignore is best practice
// @ts-ignore
import EpicSong from '../../public/song.mp3'
// @ts-ignore
import Yay from '../../public/yay.mp3'

// Having everything in one file is best practice

const Index: React.FC = () => {
  const judgement_day = new Date(2021, 9, 10)
  const epicref = useRef(null)
  const yayref = useRef(null)
  const [answer, setAnswer] = useState(Number.MAX_VALUE)
  const [inputField, setinputField] = useState('')
  const [time_left, setTime_left] = useState(
    intervalToDuration({
      start: new Date(),
      end: judgement_day,
    })
  )

  useEffect(() => {
    setInterval(() => {
      setTime_left(
        intervalToDuration({ start: new Date(), end: judgement_day })
      )
    }, 1000)
  }, [])

  if (answer == Number.MAX_VALUE) {
    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          setAnswer(parseInt(inputField))
          // This is best practice
          console.log(answer)
          setInterval(() => {
            if (answer !== 21) {
              if (epicref.current !== null) {
                // @ts-ignore
                epicref.current.play()
              }
              // Idk why this else doesn't work am I not doing literally the same thing
            } else {
              if (yayref.current !== null) {
                console.log('inyrf')
                // @ts-ignore
                yayref.current.play()
              }
            }
          }, 500)
        }}
      >
        {/* Inline styles are best practice */}
        <div style={{ color: 'yellow' }}>{"what's 9 + 10"}</div>
        <input
          value={inputField}
          onChange={e => setinputField(e.target.value)}
          type='number'
        />
        <button type='submit'>submit</button>
      </form>
    )
  }

  // Answering 21 is best practice for users
  if (answer == 21) {
    return (
      <div>
        <audio ref={yayref} controls src={Yay}></audio>
        <h1 style={{ color: 'limegreen' }}>good ending</h1>
      </div>
    )
  }
  return (
    <div>
      <audio ref={epicref} src={EpicSong}></audio>
      <h1>Judgement day awaits you...</h1>
      <h1>
        {time_left.days} days {time_left.hours} hours {time_left.minutes}{' '}
        minutes {time_left.seconds} seconds
      </h1>
    </div>
  )
}

export default Index
