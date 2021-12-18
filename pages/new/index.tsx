import React from 'react'

import Card from 'components/Card.client'
import en_content from 'lang/new'

export default function Home() {
  return (
    <div className="home_contet">
      <div className="home_contet__gird">
        <Card className="large">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nesciunt temporibus cupiditate, rerum quam neque
          reiciendis delectus earum, incidunt quaerat quod. Nesciunt sunt magnam beatae corrupti quisquam? Cumque,
          maxime magni.
        </Card>
      </div>
      <div className="home_contet__gird__contet">
        <Card className="large" />
        {en_content.workExp.map((exp, index) => (
          <Card className="small" key={index} exp={exp} />
        ))}
        <Card className="small" />
        <Card className="aside" />
      </div>
      {/*      <div className="div2">
        <Card className="small" />
      </div>
      <div className="div3">
        <Card className="small" />
      </div>
      <div className="div4">
        <Card className="small" />
      </div>
      <div className="div5">
        <Card />
      </div>
      <div className="div6"> </div>
      <div className="div7">
        <Card className="small" />
      </div>
      <div className="div8">
        <Card className="small" />
      </div>
      <div className="div9">
        <Card className="large" />
      </div> */}
    </div>
  )
}
