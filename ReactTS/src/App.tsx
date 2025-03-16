import { useState } from "react";

type Squares = (string | null)[]
interface SquareProps {
  value: string | null;
  onHandleClick: () => void;
}

interface BoardProps {
  xIsTrue: boolean
  squares: Squares
  onPlay: (nextSquares: Squares) => void
}

function Square({value, onHandleClick}: SquareProps) {
  return (
    <>
      <button className="square" onClick={onHandleClick}>{value}</button>
    </>
  )
}

function calculateWinner(squares: Squares) {
  const lines: number[][] = [
    [0,1,2], [0,3,6], [0,4,8], [1,4,7],
    [2,5,8], [2,4,6], [3,4,5], [6,7,8]
  ]
  
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] !== null && squares[a] === squares[b] && squares[a] == squares[c]) {
      return squares[a]
    }
  }
  return null
}

function Board({xIsTrue, squares, onPlay}: BoardProps) {
  
  function handleClick(i: number) {
    if (calculateWinner(squares) !== null || squares[i] !== null) {
      return 
    }
    const nextSquares: Squares = squares.slice();
    if (xIsTrue) {
      nextSquares[i] = "X";
    }else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares)
  }
  const winner = calculateWinner(squares)
  let status: string = winner ? (`Winner: ${winner}`) : (`Next Player: ${xIsTrue ? "X" : "O"}`)
  return (
    <>
      <div className="status">{status}</div>
      {Array.from({length: 3}, (_, row) => {
        return (
          <div className="board-row" key={row}>
            {Array.from({length: 3}, (_, col) => {
              const idx = row*3+col
              return (
                <Square value={squares[idx]} onHandleClick={() => handleClick(idx)}/>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export function Game() {
  const [history, setHistory] = useState<Squares[]>([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState<number>(0)
  const xIsTrue = currentMove % 2 === 0
  const currentSquares = history[currentMove]; // 마지막 기록

  function handlePlay(nextSquares: Squares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }
  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove)
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move}`
    } else {
      description = 'Go to game start'
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsTrue={xIsTrue} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game;
