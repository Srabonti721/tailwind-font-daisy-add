import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resutList = [
    {
        "id": 1,
        "name": "Rafiul Islam",
        "class": "10",
        "Chemistry": 85,
        "Physics": 90,
        "Math": 88,
        "English": 75
    },
    {
        "id": 2,
        "name": "Mim Akter",
        "class": "10",
        "Chemistry": 78,
        "Physics": 80,
        "Math": 75,
        "English": 70
    },
    {
        "id": 3,
        "name": "Sajid Hossain",
        "class": "10",
        "Chemistry": 65,
        "Physics": 60,
        "Math": 70,
        "English": 55
    },
    {
        "id": 4,
        "name": "Mahia Rahman",
        "class": "10",
        "Chemistry": 92,
        "Physics": 88,
        "Math": 95,
        "English": 80
    },
    {
        "id": 5,
        "name": "Tania Akter",
        "class": "10",
        "Chemistry": 55,
        "Physics": 50,
        "Math": 60,
        "English": 58
    }
]
const ResultData = () => {
    return (
        <div>
            <LineChart width={600} height={800} data={resutList}>
                {/* <YAxis dataKey={'name'}></YAxis> */}
                <XAxis dataKey='Physics'></XAxis>
                <Line dataKey={'Chemistry'} stroke='red'></Line>
                <Line dataKey={'Math'} stroke='black'></Line>
                <Line dataKey={'English'}></Line>
            </LineChart>

        </div>
    );
};

export default ResultData;