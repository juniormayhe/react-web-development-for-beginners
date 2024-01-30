import Mouse from "./Mouse.js";

function MouseTracker() {
    return (
        <div>
            <h1>Mouse Tracker</h1>
            <Mouse render={(mouse) => <p>Mouse position: X={mouse.x}, Y={mouse.y}</p>} />
        </div>
    );
}

export default MouseTracker;
