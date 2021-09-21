import { useEffect, useState, useRef } from 'react'
import { intervalToDuration } from 'date-fns'

// @ts-ignore
import Song from '../../public/song.mp3' // ignore error nextjs is ret- dumb

const Index: React.FC = () => {
  const judgement_day = new Date(2021, 9, 10)
  const ref = useRef(null)
  const [time_left, setTime_left] = useState(
    intervalToDuration({
      start: new Date(),
      end: judgement_day,
    })
  )

  useEffect(() => {
    console.log(ref)
    setInterval(() => {
      // @ts-ignore
      ref.current.play()
    }, 1000)
  }, [ref])

  useEffect(() => {
    setInterval(() => {
      setTime_left(
        intervalToDuration({ start: new Date(), end: judgement_day })
      )
    }, 1000)
  }, [])

  return (
    <div>
      <audio ref={ref} controls src={Song}></audio>
      <h1>
        {time_left.days} days {time_left.hours} hours {time_left.minutes}{' '}
        minutes {time_left.seconds} seconds
      </h1>
    </div>
  )
}

export default Index
