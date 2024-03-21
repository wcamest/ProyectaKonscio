import PageDocument3DAmbientLightComponent from '@/types/page-document/PageDocument3DAmbientLightComponent'
import React from 'react'

type Props = {
    data: PageDocument3DAmbientLightComponent
}

const Interactive3DAmbientLightComponent = (props: Props) => {

    const {data} = props;

  return (
    <ambientLight color={data.color} intensity={data.intensity}/>
  )
}

export default Interactive3DAmbientLightComponent