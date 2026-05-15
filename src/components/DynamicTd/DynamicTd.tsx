export const DynamicTd = ({ val }: { val: number }) => {
    const style = val === 2 ? "#f45656" : 
    val === 4 ? "#900600" : val === 0.5 ? "#6dd96d" : val === 0.25 ? "#047304" :
    val === 0 ? "#033b03": "#434343";
    return <td style ={{backgroundColor: style}}>{val !== 1 ? val : ""}</td>
}