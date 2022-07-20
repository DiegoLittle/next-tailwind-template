import React from 'react'
import Card from '../../components/Card'
import TextInput from '../../components/InputField'

const Dashboard: React.FunctionComponent = () => {
  const [name, setName] = React.useState('')
  return (
    <div className='w-full h-full'>
      <Card
        className="mt-5 w-1/4 h-1/4 text-white"
      >
        <TextInput value={name} setValue={setName}  label="Name"></TextInput>
      </Card>
    </div>
  )
}

export default Dashboard