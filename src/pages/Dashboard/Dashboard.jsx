import React,{useEffect, useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import {fetchData} from '../../actions'

import Select from '../../components/Select/Select'
import Row from '../../components/Layout/Block/Block'
import Card from '../../components/Card/Card'
import Text from '../../components/Text/Text'
import Loader from '../../components/Loader/Loader'

import Color from '../../constants/color'
import Countries from '../../constants/countries'


const dashboardSelecter = state => state.dashboard

const Dashboard = () => {

    const [country, setCountry] = useState('Global')
    const [display, setDisplay] = useState(null)

    const dispatch = useDispatch();
    const dashboard = useSelector(dashboardSelecter)
    const {loading, data, error} = dashboard
    
    useEffect(()=>{
        const fetch = async () => {
            try{
                dispatch(fetchData())
            } catch(error){
                console.warn(error)
            }    
            console.log(data)
        }
        fetch()
    },[])

    const renderOption = () => {
        if(data){
            const options = data.Countries.map((option,i)=>{
                const countryJp = Countries.filter(area => area.alpha2 === option.CountryCode)
                if(countryJp[0]){
                    return (
                        <option key={i} value={option.Country}>
                            {countryJp[0].companyjp}
                        </option>
                    )
                }
            })
            return options
        }
    }

    const handleSelect = (e) => {
        const value = e.target.value
        setCountry(value)
        if(value === 'Global'){
            setDisplay(data.Global)
        }else{
            const filter = data.Countries.filter(area => area.Country === value)
            setDisplay(filter[0])
        }
    }

　   return(
        <Row py={'50px'} px={'40px'} direction={'column'}>
            {loading ? (
                <Loader/>
                ) : (
                    <>
                    <Row　mb={'32px'}>
                        <Text type={'title'} color={Color.primary}>
                            最新情報
                        </Text>
                    </Row>
                    <Row>
                        <Select value={country} onChange={handleSelect}>
                            <option value={'Global'}>全世界</option>
                            {renderOption()}
                        </Select>
                    </Row>
                    <Row mt={'80px'} justify={'space-between'} maxWidth={'740px'}>
                        <Card width={'200px'} py={'16px'} px={'16px'} bgcolor={Color.primary}>
                            <Row mb={'24px'}>
                                <Text type={'text'} color={Color.white}>
                                    総感染者数
                                </Text>
                            </Row>
                            <Row mb={'32px'}>
                                <Text type={'main'} color={Color.white}>
                                    {display ? display.TotalConfirmed : 'データを取得しています'}
                                    <Text type={'span'} color={Color.white}>人</Text>
                                </Text>
                            </Row>
                        </Card>
                        <Card width={'200px'} py={'16px'} px={'16px'} bgcolor={Color.secondary}>
                            <Row mb={'24px'}>
                                <Text type={'text'} color={Color.white}>
                                    総死者数
                                </Text>
                            </Row>
                            <Row mb={'32px'}>
                                <Text type={'main'} color={Color.white}>
                                    {display ? display.TotalDeaths : 'データを取得しています'}
                                    <Text type={'span'} color={Color.white}>人</Text>
                                </Text>
                            </Row>
                        </Card>
                        <Card width={'200px'} py={'16px'} px={'16px'} bgcolor={Color.tarnary}>
                            <Row mb={'24px'}>
                                <Text type={'text'} color={Color.white}>
                                    総完治者数
                                </Text>
                            </Row>
                            <Row mb={'32px'}>
                                <Text type={'main'} color={Color.white}>
                                    {display ? display.TotalRecovered : 'データを取得しています'}
                                    <Text type={'span'} color={Color.white}>人</Text>
                                </Text>
                            </Row>
                        </Card>
                    </Row>
                    <Row mt={'40px'}>
                        <Text type={'desc'} color={Color.primary}>
                                最終更新日：{display ? country === 'Global' ? data.Date : display.Date : 'データを取得しています'}
                        </Text>
                    </Row>
                    </>
                )
            }
        </Row>
    )

}

export default Dashboard
