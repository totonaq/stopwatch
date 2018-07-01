import { connect } from 'react-redux'
import RecordData from '../components/RecordData'


const mapStateToProps = state => {
	
	return {
		records: state.records
	}
}

const RecordDataContainer = connect(
  mapStateToProps
)(RecordData)



export default RecordDataContainer