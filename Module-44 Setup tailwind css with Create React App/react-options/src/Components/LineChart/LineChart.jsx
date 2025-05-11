import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';


const LineChart = () => {

    const subjectMarksData = [
        { id: 1, name: 'Alice', physics: 85, chemistry: 90, math: 78 },
        { id: 2, name: 'Bob', physics: 78, chemistry: 85, math: 80 },
        { id: 3, name: 'Charlie', physics: 92, chemistry: 85, math: 95 },
        { id: 4, name: 'David', physics: 88, chemistry: 84, math: 90 },
        { id: 5, name: 'Emma', physics: 70, chemistry: 75, math: 68 },
        { id: 6, name: 'Frank', physics: 95, chemistry: 91, math: 97 },
        { id: 7, name: 'Grace', physics: 82, chemistry: 78, math: 85 },
        { id: 8, name: 'Hannah', physics: 79, chemistry: 83, math: 77 }
      ];
      
      

    return (
        <div>
            <LChart width={500} height={400} data={subjectMarksData}>
                <XAxis dataKey={name}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={"math"} stroke='red'></Line>
                <Line dataKey={"physics"} stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;