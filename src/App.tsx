import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import './App.css'
import UsageCard from '@/components/UsageCard'

const nickUsageData = {
  "Nick Level 1 Fitness": {
    data: {
      "4 PM": 30,
      "5 PM": 50,
      "6 PM": 42,
      "7 PM": 38,
      "8 PM": 10,
      "9 PM": 15,
      "10 PM": 12,
    },
    updateTime: "2024-04-12T21:35:25.77"
  },
  "Nick Level 2 Fitness": {
    data: {
      "4 PM": 30,
      "5 PM": 50,
      "6 PM": 42,
      "7 PM": 38,
      "8 PM": 10,
      "9 PM": 15,
      "10 PM": 12,
    },
    updateTime: "2024-04-12T21:35:25.77"
  }
}

const bakkeUsageData = {
  "Bakke Level 1 Fitness": {
    data: {
      "4 PM": 30,
      "5 PM": 12,
      "6 PM": 42,
      "7 PM": 38,
      "8 PM": 84,
      "9 PM": 15,
      "10 PM": 12,
    },
    updateTime: "2024-04-12T21:35:25.77"
  },
  "Bakke Level 2 Fitness": {
    data: {
      "4 PM": 30,
      "5 PM": 25,
      "6 PM": 97,
      "7 PM": 42,
      "8 PM": 38,
      "9 PM": 15,
      "10 PM": 12,
    },
    updateTime: "2024-04-12T21:35:25.77"
  }
}

function App() {

  return (
    <>

      <Tabs defaultValue="nick" className="">
        <header className='flex flex-row justify-between items-center pb-8'>
          <h1 className='text-2xl font-medium'>BadgerGyms</h1>
          <TabsList>
            <TabsTrigger value="nick">Nicholas Recreation Center</TabsTrigger>
            <TabsTrigger value="bakke">Bakke Recreation and Wellbeing Center</TabsTrigger>
          </TabsList>
        </header>

        <TabsContent value="nick">
          <div className='grid gap-4 grid-cols-responsive-cards'>
            {Object.entries(nickUsageData).map(([title, usageData]) => (
              <UsageCard key={title} areaTitle={title} usageData={usageData}/>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="bakke">
        <div className='grid gap-4 grid-cols-responsive-cards'>
            {Object.entries(bakkeUsageData).map(([title, usageData]) => (
              <UsageCard key={title} areaTitle={title} usageData={usageData}/>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}

export default App
