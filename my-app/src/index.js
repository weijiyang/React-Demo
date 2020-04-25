

import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// class Square extends React.Component {
//     render () {
//         return (
//             <button 
//                 className="square"
//                 onClick = { this.props.onClick }>
//                 { this.props.value }
//             </button>
//         );
//     }
// }

function Square(props) {
    return (
        <button 
            className="square"
            onClick={ props.onClick }>
                { props.value }
        </button>
    )
}
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

class Board extends React.Component {
    renderSquare (i) {
        return <Square 
                    value={ this.props.squares[i] }
                    onClick= { () => this.props.onClick(i) }
                />
    }
    render () {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}


class Game extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            historyList: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            xIsNext: true,
            stepNumber: 0
        }
    }

    handleClick (i) {
        let historyList = this.state.historyList.slice(0, this.state.stepNumber + 1);
        const current = historyList[historyList.length - 1 ];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) return
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        
        this.setState({
            historyList: historyList.concat([{
                squares
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: historyList.length
        })
        
    }
    jumpTo (index) {
        this.setState({
            stepNumber: index,
            xIsNext: (index % 2) === 0
        })
    }
    render () {
        const historyList = this.state.historyList.slice();
        const current = historyList[this.state.stepNumber];
        const winner = calculateWinner(current);

        const moves = historyList.map((step, index) => {
            const desc = index ? `跳转到 第${index}步` : '重新开始';
            return (
                <li key={index}>
                    <button onClick={() => this.jumpTo(index)}> {desc} </button>
                </li>
            )
        })


        let status;
        if (winner) {
            status = "Winner is " + winner;
        } else {
            status = "Next Player : " + (this.state.xIsNext ? "X" : "O");    
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={ (i) => this.handleClick(i) }/>
                </div>
                <div className="game-info">
                    <div>
                        { status }
                    </div>
                    <ol>
                        {moves}
                    </ol>
                </div>
            </div>
        )
    }
}

ReactDom.render(
    <Game/>,
    document.getElementById('root')
)