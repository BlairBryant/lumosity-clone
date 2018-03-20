import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import './Graph.css'
import axios from 'axios'

export default class Graph extends Component {
    constructor() {
        super()

        this.state = {
            scores: [],
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: 'Your LPI History',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(14, 145, 161, 0.1)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(14, 145, 161,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        }
    }

    componentDidMount() {
        axios.get('/api/getScores').then(res => {
            console.log(res.data)
            this.setState({})
        })
    }

    render() {
        console.log(this.state.data.datasets[0].data)
        console.log(this.state.data.labels)
        return (
            <div className='graph'>
                <Line data={this.state.data} height={350} width={650} />
            </div>
        )
    }
}