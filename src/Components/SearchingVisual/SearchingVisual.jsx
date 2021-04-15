import { useEffect, useState } from "react";
import useForm from "../BACommon/useForm";
import Dijkstra from "./Dijkstra";
import MapNode from "./MapNode";
import "./SearchingVisual.css";

const SearchingVisual = () => {
  const [form, setForm] = useForm({ row: 2, col: 2 });
  const [blockType, setBlockType] = useState(0);

  const createMapNodes = (
    rowCount,
    colCount,
    oldNodes = [
      [0, 0],
      [0, 0],
    ]
  ) => {
    let mapNodes = new Array(parseInt(rowCount));
    for (let row = 0; row < mapNodes.length; row++) {
      mapNodes[row] = new Array(parseInt(colCount));
      for (let col = 0; col < mapNodes[0].length; col++) {
        if (row < oldNodes.length && col < oldNodes[0].length) {
          mapNodes[row][col] = oldNodes[row][col];
        } else {
          mapNodes[row][col] = 0;
        }
      }
    }
    return mapNodes;
  };

  const [MapNodes, setMapNodes] = useState(() => {
    return createMapNodes(form.row, form.col);
  });

  useEffect(() => {
    console.log("Searching Visual Page Rendered");
    console.log(MapNodes);
  });

  useEffect(() => {
    setMapNodes((oldNodes) => createMapNodes(form.row, form.col, oldNodes));
  }, [form.row, form.col]);

  return (
    <div className="SearchingVisualPageContainer">
      <div className="ControlsContainer">
        <ul>
          <li>Choose block type</li>
          <li>Click to place single block</li>
          <li>Hold shift and mouseover to draw</li>
        </ul>
        <label>Rows:</label>
        <br />
        <input
          name="row"
          type="number"
          min={2}
          max={100}
          onChange={(e) => {
            const num = parseInt(e.target.value);
            if (num >= 2 && num <= 100) {
              setForm(e);
            }
          }}
          value={form.row}
        ></input>
        <br />
        <label>Columns:</label>
        <br />
        <input
          name="col"
          type="number"
          min={2}
          max={100}
          onChange={(e) => {
            const num = parseInt(e.target.value);
            if (num >= 2 && num <= 100) {
              setForm(e);
            }
          }}
          value={form.col}
        ></input>
        <br />
        <br />
        <button disabled={blockType === 2} onClick={() => setBlockType(2)}>
          START
        </button>
        <button disabled={blockType === 3} onClick={() => setBlockType(3)}>
          GOAL
        </button>
        <button disabled={blockType === 1} onClick={() => setBlockType(1)}>
          BLOCK
        </button>
        <button disabled={blockType === 0} onClick={() => setBlockType(0)}>
          FREE
        </button>
        <button onClick={() => Dijkstra(setMapNodes, createMapNodes)}>
          Dijkstra
        </button>
      </div>
      <div className="TableContainer">
        <table>
          <tbody>
            {MapNodes.map((row, ind) => {
              return (
                <tr key={ind + "row"}>
                  {row.map((col, colInd) => {
                    return (
                      <td key={colInd + "col"}>
                        <MapNode
                          key={ind + ":" + colInd + ":" + MapNodes[ind][colInd]}
                          row={form.row}
                          col={form.col}
                          blockType={blockType}
                          nType={MapNodes[ind][colInd]}
                          id={ind + ":" + colInd}
                          colInd={colInd}
                          ind={ind}
                          setMapNodes={setMapNodes}
                        />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchingVisual;
