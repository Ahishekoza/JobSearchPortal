import { StyleSheet, Text, View, ActivityIndicator, Image, ScrollView,SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import useFetch from '../../hook/useFetch'
import Company from '../components/Company'
import Tabs from '../components/Tabs'
import JobAbout from '../components/JobDetailsComp/JobAbout'
import JobRequirements from '../components/JobDetailsComp/JobRequirements'
import JobResponsibilites from '../components/JobDetailsComp/JobResponsibilites'
import JobDetailsFooter from '../components/JobDetailsComp/JobDetailsFooter'

const tabs = ["About", "Qualification", "Responsibilities"]



const JobDetails = ({ navigation, route }) => {
  const { item } = route.params
  const { isLoading, error } = useFetch('job-details', {
    job_id: item.job_id
  })
  const [activedTab, setActivedJob] = useState(tabs[0])
  const displayTabContent = () => {
    switch(activedTab){
      case 'About':
        return(
          <JobAbout about={item.job_description ? item.job_description : 'Description Not Avaliable'} />
        )
      case 'Qualification':
        return(
          <JobRequirements qualification={item.job_highlights?.Qualifications ? item.job_highlights.Qualifications:[ 'N/A']  }/>
        )
      case 'Responsibilities':
        return(
          <JobResponsibilites responsibility={item.job_highlights?.Responsibilities ? item.job_highlights.Responsibilities : ['N/A']}/>
        )
    }
  }
  return (
    <SafeAreaView style={{flex:1}}>
      {
        isLoading
          ?
          <ActivityIndicator size={'large'} color={'grey'} />
          :
          error
            ?
            <Text>Some Error has occurred</Text>
            :
            item.length === 0
              ?
              <Text>No Job Details</Text>
              :
              <ScrollView>
                <Company
                  companyLogo={item.employer_logo}
                  jobTitle={item.job_title}
                  companyName={item.employer_name}
                  location={item.job_country}
                />
                <Tabs
                  tabs={tabs}
                  activedTab={activedTab}
                  setActivedJob={setActivedJob}
                />

                { displayTabContent()}
              </ScrollView>
      }
      {
        isLoading ?  <></> : <JobDetailsFooter url={item.job_google_link}/>
      }
    </SafeAreaView>
  )
}

export default JobDetails

const styles = StyleSheet.create({})