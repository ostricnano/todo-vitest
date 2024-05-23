import './Title.css'
interface TtitleProps {
  title: string
}
export const Title: React.FC<TtitleProps> = ({
  title
}) => {
  return (
    <>
      <h1 data-testid='header-test'>{title}</h1>
      {/* <h1 title='title'>todo</h1> */}
    </>
  )
}
