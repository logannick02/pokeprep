import "./SpeedTiers.css";

export const SpeedTiers = () => {
    return (
        <div className="speed-tiers">
            <div className="speed-table">
                <table className="you">
                    <tr>
                        <th>Your Team</th>
                        <th>Speed</th>
                        <th>0</th>
                        <th>252</th>
                        <th>252+</th>
                        <th>Scarf 252</th>
                        <th>Scarf 252+</th>
                    </tr>
                </table>
            </div>

            <div className="speed-table">
                <table className="opp">
                    <tr>
                        <th>Opponent Team</th>
                        <th>Speed</th>
                        <th>0</th>
                        <th>252</th>
                        <th>252+</th>
                        <th>Scarf 252</th>
                        <th>Scarf 252+</th>
                    </tr>
                </table>
            </div>
        </div>
    );
}