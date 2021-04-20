import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

function Router ({
  state
}) {
  const history = useHistory()

  const currentMachineId = `ReviewsMachine.${state.value}`

  const meta = state.meta[currentMachineId]

  const path = meta && meta.path

  useEffect(() => {
    if (path) history.push(path)
  }, [path])

  return null
}

Router.propTypes = {
  state: PropTypes.shape({
    meta: PropTypes.shape({})
  })
}

export default Router
