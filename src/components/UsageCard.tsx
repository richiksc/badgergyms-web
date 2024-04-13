import '../App.css'
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from 'recharts'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import RelativeDateTime from './RelativeDateTime'

interface AreaUsage {
    data: object,
    updateTime: string
}

function UsageCard({ areaTitle, usageData } : { areaTitle: string , usageData: AreaUsage }) {
    const chartData = Object.entries(usageData.data)
        .map(([name, usage]) => ({ name, usage }))
    console.log(chartData);
    return (
        <Card>
            <CardHeader>
                <CardTitle>{areaTitle}</CardTitle>
                <CardDescription>Last updated <RelativeDateTime dateTime={usageData.updateTime} /></CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={Object.entries(usageData.data).map(([name, usage]) => ({ name, usage }))}>
                            <XAxis dataKey="name" tickLine={false}/>
                            <Tooltip cursor={{fill: 'transparent'}}/>
                            <Bar
                            dataKey="usage"
                            style={
                                {
                                fill: "hsl(var(--primary))",
                                borderRadius: "var(--radius)",
                                opacity: 1,
                                } as React.CSSProperties
                            }
                            activeBar={{
                                style: {
                                    fill: "hsl(var(--primary-darker))",
                                } as React.CSSProperties
                            }}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>

    )
}

export default UsageCard
