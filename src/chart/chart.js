import React, { useEffect, useRef, useState, useMemo } from "react";
import ForceGraph2D from "react-force-graph-2d";
import { data } from "./exampleData";
import * as d3 from "d3";

const App = () => {
    const forceRef = useRef();
    useEffect(() => {
        forceRef.current.d3Force("collide", d3.forceCollide(4));
        forceRef.current.d3Force("charge").strength(-15);
        forceRef.current.d3Force("link").distance(30);
        forceRef.current.d3Force("charge").distanceMax(100);
    }, []);





    const graphData = useMemo(() => {

        return {
            nodes: data.nodes,
            links: data.links
        };
    }, []);

    return (
        <div>

            <ForceGraph2D
                width={1500}
                height={800}
                ref={forceRef}
                graphData={graphData}
                cooldownTicks={50}
                nodeRelSize={1}
                onEngineStop={() => {
                    forceRef.current.zoomToFit();

                }}
                linkDirectionalArrowLength={4}
                linkDirectionalArrowRelPos={1}
                nodeCanvasObjectMode={() => "after"}
                nodeCanvasObject={(node, ctx, globalScale) => {
                    const label = node.name;
                    const fontSize = 15 / globalScale;
                    ctx.font = `${fontSize}px Sans-Serif`;
                    ctx.textAlign = node.isClusterNode ? "center" : "left";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "black"; //node.color;
                    if (node.isClusterNode) {
                        ctx.fillText(label, node.x, node.y);
                    }
                }}
                enableNodeDrag={false}


            />
        </div>
    );
};
export default App
