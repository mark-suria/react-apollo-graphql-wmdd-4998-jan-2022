import { useQuery } from '@apollo/client'
import { List } from 'antd'
import { GET_CARS } from '../../queries'
import Car from '../listItems/Car'

const getStyles = () => ({
  list: {
    display: 'flex',
    justifyContent: 'center'
  }
})

const Cars = () => {
  const styles = getStyles()

  const { loading, error, data } = useQuery(GET_CARS)
  if (loading) return 'Loading...'
  if (error) return `Error1 ${error.message}`

  return (
    <List grid={{ gutter: 20, column: 1 }} style={styles.list}>
      {data.cars.map(({  id, year, make, model, price, personId }) => (
        <List.Item key={id}>
          <Car key={id} id={id} year={year} make={make} model={model} price={price} personId={personId} />
        </List.Item>
      ))}
    </List>
  )
}

export default Cars
