import { Text, View, Image } from '@react-pdf/renderer'

import { WorkExpStyle } from 'components/resume/style'

export default function WorkExp({ workExp, tech_stack }) {
  return (
    <View style={{ marginBottom: 5 }}>
      <View style={{ flexDirection: 'row', marginBottom: 5 }}>
        <Image style={WorkExpStyle.inc_logo} src={`/assets/inc/${workExp.logo}`} />
        <Text style={{ ...WorkExpStyle.work_small_titles, alignSelf: 'center' }}>{workExp.inc}</Text>
      </View>
      <Text style={{ ...WorkExpStyle.work_small_titles, marginBottom: 2 }}>
        {workExp.post}
        <Text style={{ color: 'tomato' }}> | {workExp.period}</Text>
      </Text>
      <Text style={WorkExpStyle.desc}>{workExp.intro}</Text>
      <Text style={{ ...WorkExpStyle.work_small_titles, marginBottom: 5, color: 'tomato' }}>{tech_stack}:</Text>
      <Text style={WorkExpStyle.work_small_titles}>{workExp.stack}</Text>
    </View>
  )
}
