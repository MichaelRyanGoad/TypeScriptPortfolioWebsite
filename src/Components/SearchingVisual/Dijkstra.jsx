const Dijkstra = (setMapNodes, createMapNodes) => {
  console.log("Dijkstra");
  setMapNodes((mn) => {
    mn[0][0] = 3;
    return createMapNodes(mn.length, mn[0].length, mn);
  });
};

export default Dijkstra;
