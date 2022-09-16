import axios from 'axios'

const addressPoints = () => {

	const url = 'http://localhost:4000/liquidity-rent/api'
	axios.get(url).then(res => {
		let data = res.data
		console.log(data)
		}).catch(err => {
			console.log(err.message)
		})
}

export default addressPoints