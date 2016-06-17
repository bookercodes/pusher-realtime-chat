import moment from 'moment'

const Time = ({value}) => (
  <time dateTime={value}>{moment(value).fromNow()}</time>
)

export default Time
