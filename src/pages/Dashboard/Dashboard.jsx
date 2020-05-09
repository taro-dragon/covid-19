import React,{useEffect, useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'

// import actions
import {fetchData} from '../../actions'

// import components
import Select from '../../components/Select/Select'
import Row from '../../components/Layout/Block/Block'
import Card from '../../components/Card/Card'
import Text from '../../components/Text/Text'
import Loader from '../../components/Loader/Loader'

// import constants
import Color from '../../constants/color'
import Countries from '../../constants/countries'


const dashboardSelecter = state => state.dashboard

const Dashboard = () => {

    const [country, setCountry] = useState('Global')
    const [display, setDisplay] = useState(null)
    const [firstRender, setFirstRender] = useState(false)
    const dispatch = useDispatch();
    const dashboard = useSelector(dashboardSelecter)
    const {loading, data } = dashboard
    
    useEffect(()=>{
        dispatch(fetchData()) 
    },[])

    // 初回レンダリング時にstateをセットする
    if(data && !firstRender){
        setCountry('Global')
        setDisplay(data.Global)
        setFirstRender(true)
    }

    const renderOption = () => {
        if(data){
            const options = data.Countries.map((option,i) => {
                const countryJp = Countries.filter(area => area.alpha2 === option.CountryCode)
                if(countryJp[0]){
                    return (
                        <option key={i} value={option.Country}>
                            {countryJp[0].companyjp}
                        </option>
                    )
                } else {
                    return null
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
        <Row py={'50px'} px={'40px'} wrap={'wrap'} justify={'space-between'} direction={'row'}>
            {loading ? (
                <Row justify={'center'} align={'center'} width={'100%'}>
                    <Loader/>
                </Row>
                ) : (
                    <>
                    <Row direction={'column'} maxWidth={'760px'}>
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
                                <Card width={'200px'} py={'16px'} px={'16px'} mx={'20px'} bgcolor={Color.secondary}>
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
                    </Row>
                    <Row maxWidth={'300px'} bgColor={Color.background} radius={'12px'}>
                        
                    </Row>
                    </>
                )
            }
        </Row>
    )
}

export default Dashboard
