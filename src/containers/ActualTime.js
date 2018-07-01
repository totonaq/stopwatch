import { connect } from 'react-redux'
import TimeField from '../components/TimeField'

const mapStateToProps = state => {
	const { h, m, s, ms } = state.timerControls;

	return {
		h, m, s, ms
	}
}

const ActualTime = connect(
  mapStateToProps
)(TimeField)

export default ActualTime