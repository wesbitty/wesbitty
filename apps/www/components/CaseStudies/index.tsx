import { useRouter } from 'next/router'
import Benchmark from './benchmark'
import SectionHeader from '../UI/SectionHeader'
import CaseStudiesData from '../../@wesbitty/data/CaseStudies.json'
import { Card, Space, Typography } from '@wesbitty/ui'
import SectionContainer from '../Layouts/SectionContainer'

const CaseStudies = () => {
  const { basePath } = useRouter()

  return (
    <SectionContainer>
      <div>
        <SectionHeader
          title={'Scale up'}
          title_alt={' with no extra effort'}
          subtitle={'Enterprise Solutions'}
          paragraph={
            "Wesbitty is built with proven, enterprise-ready tools. We're supporting everything from fintech providers to social networks. "
          }
        />
      </div>
      <div className="mx-auto mt-5 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
        {CaseStudiesData.map((caseStudy: any, idx: number) => (
          <a href={caseStudy.url} key={idx}>
            <Card
              key={`caseStudy_${idx}`}
              hoverable
              cover={<img src={`${basePath}/${caseStudy.imgUrl}`} className="h-64 object-cover" />}
            >
              <Space className="h-40 justify-between" direction="vertical">
                <div>
                  <Typography.Text small type="secondary">
                    Project example
                  </Typography.Text>
                  <Typography.Title level={3}>{caseStudy.title}</Typography.Title>
                </div>
                <Typography.Text type="default">{caseStudy.description}</Typography.Text>
              </Space>
            </Card>
          </a>
        ))}
      </div>
      {/* <Benchmark /> */}
    </SectionContainer>
  )
}

export default CaseStudies
