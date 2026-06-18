import { JSX } from 'react'
import Spinner from '../components/Spinner'
import Wordmark from '../components/Wordmark'
import ReturnHome from '../components/ReturnHome'
import TitleText from '../components/TitleText'

export const metadata = {
  title: 'File Transfer - 404: Not Found',
  description: 'Oops! This page seems to be missing.',
}

export default function NotFound(): JSX.Element {
  return (
    <div className="flex flex-col items-center space-y-5 py-10 max-w-2xl mx-auto">
      <Spinner direction="down" />
      <Wordmark />
      <TitleText>404: Looks like this page is missing!</TitleText>
      <ReturnHome />
    </div>
  )
}

